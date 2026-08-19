// Captures both source-map variants the transform produces for one input.
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { Worker } from 'node:worker_threads'

const require = createRequire(import.meta.url)
const { transformReactLynxSync } = require('@lynx-js/react/transform')

const { options, content } = JSON.parse(
  readFileSync('transform-input.json', 'utf8'),
)

const workers = Array.from({ length: 8 }, () =>
  new Worker('let x = 0; while (true) { x = (x + 1) % 1e9 }', { eval: true }))

const seen = new Map()
for (let i = 0; i < 600 && seen.size < 2; i++) {
  const result = transformReactLynxSync(content, options)
  if (!seen.has(result.map)) {
    seen.set(result.map, result.code)
  }
}
for (const worker of workers) await worker.terminate()

const variants = [...seen.entries()]
console.log('variants captured:', variants.length)
variants.forEach(([map, code], i) => {
  writeFileSync(`variant-${i}.map.json`, map)
  writeFileSync(`variant-${i}.js`, code)
})
console.log('code identical:', variants.length === 2
  ? variants[0][1] === variants[1][1]
  : 'n/a')
