import path from 'node:path'
import { createHash } from 'node:crypto'
import { mkdirSync, writeFileSync } from 'node:fs'
import { rspack } from '@rspack/core'

class Probe {
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
                codegen = createHash('sha1').update(src ? src.source() : '').digest('hex')
              } catch {}
              try {
                moduleHash = compilation.chunkGraph.getModuleHash(m, runtime)
              } catch {}
              modules.push({ id: m.identifier(), layer: m.layer, moduleHash, codegen })
            }
            modules.sort((a, b) => a.id.localeCompare(b.id))
            out.push({ name: chunk.name, hash: chunk.hash, contentHash: chunk.contentHash, modules })
          }
          out.sort((a, b) => String(a.name).localeCompare(String(b.name)))
          const target = path.resolve(import.meta.dirname, process.env.OUT ?? 'dist')
          mkdirSync(target, { recursive: true })
          writeFileSync(path.join(target, 'probe.json'), JSON.stringify(out, null, 2))
        },
      )
    })
  }
}

export default {
  mode: 'production',
  entry: {
    'main__main-thread': { layer: 'react:main-thread', import: ['./src/index.js'], filename: 'main-thread.js' },
    main: { layer: 'react:background', import: ['./src/index.js'], filename: 'background.[contenthash:8].js' },
  },
  output: { path: path.resolve(import.meta.dirname, process.env.OUT ?? 'dist') },
  experiments: { layers: true },
  module: {
    rules: [
      { test: /\.js$/, issuerLayer: 'react:main-thread', layer: 'react:main-thread' },
      { test: /\.js$/, issuerLayer: 'react:background', layer: 'react:background' },
    ],
  },
  optimization: { minimize: false, concatenateModules: false },
  plugins: [new Probe()],
}
