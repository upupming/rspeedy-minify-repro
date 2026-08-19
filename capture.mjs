// Captures what the minifier is given, instead of what it produces.
//
// A plugin writes every JavaScript asset just before the minimize stage, so two
// builds can be compared on the minifier's input rather than its output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
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
          const probe = { compilationHash: compilation.hash, chunks: [] };
          for (const chunk of compilation.chunks) {
            const modules = [];
            const moduleHashes = [];
            const codegen = [];
            const details = [];
            for (const m of compilation.chunkGraph.getChunkModules(chunk)) {
              modules.push(m.identifier());
              try {
                moduleHashes.push(
                  m.identifier() + ' :: '
                    + compilation.chunkGraph.getModuleHash(m, chunk.runtime),
                );
              } catch (e) {
                moduleHashes.push(m.identifier() + ' :: <err>');
              }
              try {
                const mg = compilation.moduleGraph;
                const info = {
                  moduleId: compilation.chunkGraph.getModuleId(m),
                  size: m.size(),
                  buildMeta: m.buildMeta,
                  factoryMeta: m.factoryMeta,
                  layer: m.layer,
                  useSourceMap: m.useSourceMap,
                  usedExports: String(mg.getUsedExports?.(m, chunk.runtime)),
                  providedExports: mg.getProvidedExports?.(m),
                  preOrderIndex: mg.getPreOrderIndex?.(m),
                  postOrderIndex: mg.getPostOrderIndex?.(m),
                  depth: mg.getDepth?.(m),
                };
                details.push(m.identifier() + ' :: ' + JSON.stringify(info));
              } catch (e) {
                details.push(m.identifier() + ' :: <err> ' + e.message);
              }
              try {
                const cg = compilation.codeGenerationResults.get(m, chunk.runtime);
                const src = cg.sources.get('javascript');
                let mapHash = '<none>';
                try {
                  const map = src && src.map ? src.map() : null;
                  mapHash = map ? createHash('sha1').update(JSON.stringify(map)).digest('hex') : '<none>';
                } catch (e) { mapHash = '<maperr>'; }
                codegen.push(
                  m.identifier() + ' :: '
                    + createHash('sha1').update(src ? src.source() : '').digest('hex')
                    + ' :: map=' + mapHash
                    + ' :: runtimeRequirements='
                    + JSON.stringify([...(cg.runtimeRequirements ?? [])].sort()),
                );
              } catch (e) {
                codegen.push(m.identifier() + ' :: <err> ' + e.message);
              }
            }
            modules.sort();
            probe.chunks.push({
              name: chunk.name,
              id: chunk.id,
              hash: chunk.hash,
              renderedHash: chunk.renderedHash,
              contentHash: chunk.contentHash,
              moduleCount: modules.length,
              runtime: String(chunk.runtime),
              moduleHashes: moduleHashes.sort(),
              codegen: codegen.sort(),
              details: details.sort(),
              modules,
            });
          }
          probe.chunks.sort((a, b) => String(a.name).localeCompare(String(b.name)));
          writeFileSync(path.join(into, 'probe.json'), JSON.stringify(probe, null, 2));
          for (const [name, source] of Object.entries(assets)) {
            if (!name.endsWith('.js') && !name.endsWith('.css')) continue;
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
    tools: {
      rspack: (config) => {
        config.plugins = config.plugins ?? [];
        config.plugins.push(new CaptureBeforeMinify());
        if (process.env.NO_CONCAT) {
          config.optimization = config.optimization ?? {};
          config.optimization.concatenateModules = false;
        }
        const drop = (process.env.DROP_PLUGINS ?? '').split(',').filter(Boolean);
        if (drop.length) {
          const before = config.plugins.length;
          config.plugins = config.plugins.filter(
            (p) => !p || !drop.includes(p.constructor?.name),
          );
          console.error(
            `[bisect] dropped ${before - config.plugins.length}: ${drop.join(',')}`,
          );
        }
        if (process.env.LIST_PLUGINS) {
          console.error(
            '[plugins] '
              + config.plugins.map((p) => p?.constructor?.name).join(' '),
          );
        }
        return config;
      },
    },
    plugins: [pluginReactLynx()],
  },
});

await rspeedy.build();
