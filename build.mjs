import { createRspeedy } from '@lynx-js/rspeedy';
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin';

const [root, minify] = process.argv.slice(2);

const rspeedy = await createRspeedy({
  cwd: import.meta.dirname,
  rspeedyConfig: {
    mode: 'production',
    environments: { lynx: {} },
    source: { entry: { main: './src/index.tsx' } },
    output: {
      distPath: { root },
      ...(minify === 'false' ? { minify: false } : {}),
    },
    plugins: [pluginReactLynx()],
  },
});

await rspeedy.build();
