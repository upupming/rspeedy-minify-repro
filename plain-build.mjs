// Builds with `rspack()` directly, using the config Rspeedy would have used.
//
// Rsbuild only generates the config here; nothing of its build pipeline runs.
// That makes the config an ordinary Rspack config that pieces can be deleted
// from, one at a time, to find the smallest one that still reproduces.
import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

import { rspack } from '@rspack/core'

import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { createRspeedy } from '@lynx-js/rspeedy'

const [root] = process.argv.slice(2)
const cwd = import.meta.dirname

class Probe {
  constructor(into) {
    this.into = into
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('Probe', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'Probe', stage: rspack.Compilation.PROCESS_ASSETS_STAGE_REPORT },
        () => {
          const out = []
          for (const chunk of compilation.chunks) {
            const runtime = typeof chunk.runtime === 'string'
              ? chunk.runtime
              : [...chunk.runtime][0]
            const modules = []
            for (const m of compilation.chunkGraph.getChunkModules(chunk)) {
              let codegen = '<err>'
              let moduleHash = '<err>'
              try {
                const src = compilation.codeGenerationResults
                  .get(m, runtime).sources.get('javascript')
                codegen = createHash('sha1').update(src ? src.source() : '')
                  .digest('hex')
              } catch {}
              try {
                moduleHash = compilation.chunkGraph.getModuleHash(m, runtime)
              } catch {}
              let buildInfo = '<none>'
              try {
                buildInfo = JSON.stringify(m.buildInfo, (k, v) =>
                  (v instanceof Set ? [...v] : v instanceof Map ? [...v] : v))
              } catch (e) { buildInfo = '<err> ' + e.message }
              modules.push({
                id: m.identifier(),
                moduleHash,
                codegen,
                buildInfo,
                buildMeta: JSON.stringify(m.buildMeta ?? null),
              })
            }
            modules.sort((a, b) => a.id.localeCompare(b.id))
            out.push({ name: chunk.name, hash: chunk.hash, modules })
          }
          out.sort((a, b) => String(a.name).localeCompare(String(b.name)))
          mkdirSync(this.into, { recursive: true })
          writeFileSync(
            path.join(this.into, 'probe.json'),
            JSON.stringify(out, null, 2),
          )
        },
      )
    })
  }
}

const rspeedy = await createRspeedy({
  cwd,
  rspeedyConfig: {
    mode: 'production',
    environments: { lynx: {} },
    source: { entry: { main: './src/index.tsx' } },
    output: { distPath: { root } },
    plugins: [pluginReactLynx()],
  },
})

const [config] = await rspeedy.initConfigs()

config.optimization = { ...config.optimization, concatenateModules: false }

const ablations = (process.env.ABLATE ?? '').split(',').filter(Boolean)
for (const ablation of ablations) {
  switch (ablation) {
    case 'sourceImport':
      config.experiments = { ...config.experiments, sourceImport: false }
      break
    case 'plugins':
      config.plugins = []
      break
    case 'lynxplugins':
      config.plugins = (config.plugins ?? []).filter(
        (p) => !/^(Lynx|React|ChunkLoading|RuntimeWrapper)/.test(
          p?.constructor?.name ?? '',
        ),
      )
      config.output = {
        ...config.output,
        chunkLoading: false,
        workerChunkLoading: false,
      }
      config.entry = Object.fromEntries(
        Object.entries(config.entry).map(([name, value]) => [
          name,
          { ...value, chunkLoading: false, filename: `${name}.js` },
        ]),
      )
      break
    case 'entryjs':
      config.entry = {
        'main__main-thread': {
          ...config.entry['main__main-thread'],
          import: ['./src/plain.js'],
        },
        main: { ...config.entry.main, import: ['./src/plain.js'] },
      }
      break
    case 'rules':
      config.module = { ...config.module, rules: [] }
      break
    case 'jsloader':
      config.module = {
        ...config.module,
        rules: [{
          test: /\.jsx?$/,
          use: [{ loader: path.join(cwd, 'passthrough-loader.cjs') }],
        }],
      }
      break
    case 'nostrict':
      config.module = {
        ...config.module,
        rules: config.module.rules.filter(
          (r) => r?.parser?.overrideStrict === undefined,
        ),
      }
      break
    case 'noaliasrules':
      config.module = {
        ...config.module,
        rules: config.module.rules.filter(
          (r) => !(r?.issuerLayer && r?.resolve?.alias),
        ),
      }
      break
    case 'noswccache': {
      const strip = (rules) => {
        for (const rule of rules ?? []) {
          if (!rule || typeof rule !== 'object') continue
          for (const entry of Array.isArray(rule.use) ? rule.use : []) {
            if (entry?.loader === 'builtin:swc-loader') {
              delete entry.options?.jsc?.experimental?.cacheRoot
            }
          }
          strip(rule.oneOf)
          strip(rule.rules)
        }
      }
      strip(config.module.rules)
      break
    }
    case 'noreactloader': {
      const strip = (rules) => {
        for (const rule of rules ?? []) {
          if (!rule || typeof rule !== 'object') continue
          if (Array.isArray(rule.use)) {
            rule.use = rule.use.filter(
              (entry) =>
                !String(entry?.loader ?? '').includes('react-webpack-plugin'),
            )
          }
          strip(rule.oneOf)
          strip(rule.rules)
        }
      }
      strip(config.module.rules)
      break
    }
    case 'burnloader': {
      const swap = (rules) => {
        for (const rule of rules ?? []) {
          if (!rule || typeof rule !== 'object') continue
          if (Array.isArray(rule.use)) {
            rule.use = rule.use.map((entry) =>
              String(entry?.loader ?? '').includes('react-webpack-plugin')
                ? { loader: path.join(cwd, 'burn-loader.cjs') }
                : entry
            )
          }
          swap(rule.oneOf)
          swap(rule.rules)
        }
      }
      swap(config.module.rules)
      break
    }
    case 'plainswc':
      config.module = {
        ...config.module,
        rules: [{
          test: /\.jsx?$/,
          use: [{
            loader: 'builtin:swc-loader',
            options: { jsc: { parser: { syntax: 'ecmascript' } } },
          }],
        }],
      }
      break
    case 'resolve':
      config.resolve = { extensions: config.resolve.extensions }
      break
    case 'splitChunks':
      config.optimization = { ...config.optimization, splitChunks: false }
      break
    case 'avoidEntryIife':
      config.optimization = { ...config.optimization, avoidEntryIife: false }
      break
    case 'nominimize':
      config.optimization = {
        ...config.optimization,
        minimize: false,
        minimizer: [],
      }
      break
    case 'dropA':
      config.plugins = (config.plugins ?? []).filter(
        (p) => !/^(CssExtract|SourceMap)/.test(p?.constructor?.name ?? ''),
      )
      break
    case 'dropB':
      config.plugins = (config.plugins ?? []).filter(
        (p) => !/^(Define|Progress)/.test(p?.constructor?.name ?? ''),
      )
      break
    case 'dropCss':
      config.plugins = (config.plugins ?? []).filter(
        (p) => !/^CssExtract/.test(p?.constructor?.name ?? ''),
      )
      break
    case 'dropSourceMap':
      config.plugins = (config.plugins ?? []).filter(
        (p) => !/^SourceMap/.test(p?.constructor?.name ?? ''),
      )
      break
    case 'devtool':
      config.devtool = false
      break
    case 'onelayer':
      config.entry = { main: config.entry.main }
      break
    default:
      throw new Error(`unknown ablation: ${ablation}`)
  }
}

config.plugins = [...(config.plugins ?? []), new Probe(path.join(cwd, root))]

if (process.env.DUMP_CONFIG) {
  writeFileSync(
    path.join(cwd, 'config-dump.json'),
    JSON.stringify(
      config,
      (_, v) => (typeof v === 'function' ? '[fn]' : v),
      2,
    ),
  )
}

await new Promise((resolve, reject) => {
  rspack(config).run((err, stats) => {
    if (err) return reject(err)
    if (stats?.hasErrors()) {
      return reject(new Error(stats.toString({ preset: 'errors-only' })))
    }
    resolve()
  })
})
