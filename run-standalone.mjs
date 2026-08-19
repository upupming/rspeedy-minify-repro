// Builds `rspack.config.mjs` N times, each in its own process, and reports how
// many distinct chunk hashes came out. Run it while the machine is busy:
//   for i in $(seq 1 10); do yes > /dev/null & done
import { execFileSync } from 'node:child_process'
import { readFileSync, rmSync } from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'

const runs = Number(process.argv[2] ?? 40)
const cli = path.join(
  import.meta.dirname,
  'rspack-only/node_modules/@rspack/cli/bin/rspack.js',
)
const seen = new Map()

for (let i = 0; i < runs; i++) {
  const out = path.join(import.meta.dirname, `standalone-${i}`)
  execFileSync(process.execPath, [cli, 'build', '-c', 'rspack.config.mjs'], {
    cwd: import.meta.dirname,
    env: { ...process.env, OUT: out },
    stdio: 'ignore',
  })
  const probe = JSON.parse(readFileSync(path.join(out, 'probe.json'), 'utf8'))
  const hash = createHash('sha1')
    .update(JSON.stringify(probe.map((c) => [c.name, c.hash])))
    .digest('hex').slice(0, 10)
  seen.set(hash, (seen.get(hash) ?? 0) + 1)
  console.log(`run${i + 1} ${hash}`)
  rmSync(out, { recursive: true, force: true })
}

console.log(`distinct chunk hashes: ${seen.size} of ${runs}`)
