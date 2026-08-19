import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const N = Number(process.env.N ?? 200)
const dir = path.join(import.meta.dirname, 'src')
mkdirSync(dir, { recursive: true })

for (let i = 0; i < N; i++) {
  writeFileSync(
    path.join(dir, `m${i}.js`),
    `const state = ${i}\n`
      + `function helper(input) { return input + state }\n`
      + `export const value${i} = helper(${i})\n`
      + `export function render${i}() { return helper(state) }\n`
      + `export default { value${i}, render${i} }\n`,
  )
}

writeFileSync(
  path.join(dir, 'barrel.js'),
  Array.from({ length: N }, (_, i) => `export * from './m${i}.js'`).join('\n') + '\n',
)

writeFileSync(
  path.join(dir, 'index.js'),
  `import * as all from './barrel.js'\nconsole.log(Object.keys(all).length)\n`
    + Array.from({ length: N }, (_, i) => `console.log(all.value${i}, all.render${i}())`).join('\n') + '\n',
)
