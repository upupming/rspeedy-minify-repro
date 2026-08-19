import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { transformReactLynxSync } = require('@lynx-js/react/transform')

const { options, content } = JSON.parse(
  readFileSync('transform-input.json', 'utf8'),
)
const hash = (s) => createHash('sha1').update(s ?? '').digest('hex').slice(0, 12)

const maps = new Set()
let previous = null
for (let i = 0; i < 400; i++) {
  const current = hash(transformReactLynxSync(content, options).map)
  if (current !== previous) {
    console.log(`  call ${i}: ${current}`)
    previous = current
  }
  maps.add(current)
}
console.log(`distinct maps (idle, no workers): ${maps.size}`)
