// One Rspeedy production build, the same way `rspeedy build` runs it.
import { createRspeedy } from '@lynx-js/rspeedy'
import { pluginReactLynx } from '@lynx-js/react-rsbuild-plugin'

const [root] = process.argv.slice(2)

const rspeedy = await createRspeedy({
  cwd: import.meta.dirname,
  rspeedyConfig: {
    mode: 'production',
    environments: { lynx: {} },
    source: { entry: { main: './src/index.tsx' } },
    output: { distPath: { root } },
    plugins: [pluginReactLynx()],
  },
})

await rspeedy.build()
