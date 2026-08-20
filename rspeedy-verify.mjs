// Builds this project with Rspeedy N times, each in its own process, and
// reports how many distinct bundles came out.
//
// This is the shipped artifact of a real Rspeedy production build — not a
// hand-written Rspack config — so a distinct count above one is the problem as
// a user of Rspeedy would meet it.
//
// Run it while the machine is busy:
//   for i in $(seq 1 10); do yes > /dev/null & done
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync, rmSync } from 'node:fs'
import path from 'node:path'

const runs = Number(process.argv[2] ?? 40)
const cwd = import.meta.dirname
const seen = new Map()

for (let i = 0; i < runs; i++) {
  const root = `rspeedy-verify-${i}`
  execFileSync(process.execPath, [path.join(cwd, 'rspeedy-build.mjs'), root], {
    cwd,
    stdio: 'ignore',
  })
  const bundle = readFileSync(path.join(cwd, root, 'main.lynx.bundle'))
  const hash = createHash('sha1').update(bundle).digest('hex').slice(0, 12)
  seen.set(hash, (seen.get(hash) ?? 0) + 1)
  console.log(`run${i + 1} ${hash}`)
  rmSync(path.join(cwd, root), { recursive: true, force: true })
}

console.log(`distinct bundles: ${seen.size} of ${runs}`)
for (const [hash, count] of [...seen].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${hash} x${count}`)
}
