import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'

const N = Number(process.env.N ?? 1500)
const dir = path.join(import.meta.dirname, 'src')
rmSync(dir, { recursive: true, force: true })
mkdirSync(dir, { recursive: true })

// Each cluster mirrors the shape of the modules that diverge in the real build:
// a re-export chain plus a cycle between two of its members.
for (let i = 0; i < N; i++) {
  writeFileSync(
    path.join(dir, `leaf${i}.js`),
    `export const leafValue${i} = ${i}\nexport function leafFn${i}(x) { return x + ${i} }\n`,
  )
  writeFileSync(
    path.join(dir, `mid${i}.js`),
    `export { leafValue${i}, leafFn${i} } from './leaf${i}.js'\n`
      + `import { peer${i} } from './peer${i}.js'\n`
      + `export const midValue${i} = () => peer${i}()\n`,
  )
  writeFileSync(
    path.join(dir, `peer${i}.js`),
    `import { leafValue${i} } from './mid${i}.js'\n`
      + `export function peer${i}() { return leafValue${i} }\n`,
  )
}

writeFileSync(
  path.join(dir, 'index.js'),
  Array.from({ length: N }, (_, i) =>
    `import { leafValue${i}, leafFn${i}, midValue${i} } from './mid${i}.js'`).join('\n')
    + '\n'
    + Array.from({ length: N }, (_, i) =>
      `console.log(leafValue${i}, leafFn${i}(${i}), midValue${i}())`).join('\n') + '\n',
)
