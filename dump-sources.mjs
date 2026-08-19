// Writes every module's post-loader source to disk, one tree per layer.
//
// The trees are plain JavaScript with plain relative imports, so they can be
// built by Rspack on their own, with no loaders and no plugins.
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

import { rspack } from '@rspack/core'

import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'
import { createRspeedy } from '@lynx-js/rspeedy'

const cwd = import.meta.dirname
const into = path.join(cwd, 'dumped')

const LAYER_DIR = {
  'react:background': 'background',
  'react:main-thread': 'main-thread',
}

class DumpSources {
  apply(compiler) {
    compiler.hooks.compilation.tap('DumpSources', (compilation) => {
      compilation.hooks.succeedModule.tap('DumpSources', (module) => {
        const resource = module.resource
        if (!resource || !/\.[cm]?[jt]sx?$/.test(resource)) return
        const dir = LAYER_DIR[module.layer]
        if (!dir) return
        const source = module.originalSource?.()
        if (!source) return
        const target = path.join(
          into,
          dir,
          path.relative(cwd, resource).replaceAll('..', '__up__'),
        )
        mkdirSync(path.dirname(target), { recursive: true })
        writeFileSync(target, source.source())
      })
    })
  }
}

const rspeedy = await createRspeedy({
  cwd,
  rspeedyConfig: {
    mode: 'production',
    environments: { lynx: {} },
    source: { entry: { main: './src/plain.js' } },
    output: { distPath: { root: 'dump-out' } },
    tools: { rspack: { plugins: [new DumpSources()] } },
    plugins: [pluginReactLynx()],
  },
})

const [config] = await rspeedy.initConfigs()

await new Promise((resolve, reject) => {
  rspack(config).run((err, stats) => {
    if (err) return reject(err)
    if (stats?.hasErrors()) {
      return reject(new Error(stats.toString({ preset: 'errors-only' })))
    }
    resolve()
  })
})
