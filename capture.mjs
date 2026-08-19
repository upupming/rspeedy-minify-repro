// Captures what the minifier is given, instead of what it produces.
//
// A plugin writes every JavaScript asset just before the minimize stage, so two
// builds can be compared on the minifier's input rather than its output.
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import rspack from '@rspack/core';
import { createRspeedy } from '@lynx-js/rspeedy';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';

const [root] = process.argv.slice(2);
const cwd = import.meta.dirname;
const into = path.join(cwd, root, 'pre-minify');

class CaptureBeforeMinify {
  apply(compiler) {
    compiler.hooks.compilation.tap('CaptureBeforeMinify', (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: 'CaptureBeforeMinify',
          stage: rspack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE - 1,
        },
        (assets) => {
          mkdirSync(into, { recursive: true });
          for (const [name, source] of Object.entries(assets)) {
            if (!name.endsWith('.js')) continue;
            writeFileSync(
              path.join(into, name.replaceAll('/', '__')),
              source.source(),
            );
          }
        },
      );
    });
  }
}

const rspeedy = await createRspeedy({
  cwd,
  rspeedyConfig: {
    mode: 'production',
    environments: { lynx: {} },
    source: { entry: { main: './src/index.tsx' } },
    output: { distPath: { root } },
    tools: { rspack: { plugins: [new CaptureBeforeMinify()] } },
    plugins: [pluginReactLynx()],
  },
});

await rspeedy.build();
