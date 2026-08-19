import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, rmSync } from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'

const runs = Number(process.argv[2] ?? 10)
const seen = new Map()
for (let i = 0; i < runs; i++) {
  const out = `dist-${i}`
  execFileSync(process.execPath, [
    path.join(import.meta.dirname, 'node_modules/@rspack/cli/bin/rspack.js'),
    'build', '-c', 'rspack.config.mjs',
  ], { cwd: import.meta.dirname, env: { ...process.env, OUT: out }, stdio: 'ignore' })
  const dir = path.join(import.meta.dirname, out)
  const probe = JSON.parse(readFileSync(path.join(dir, 'probe.json'), 'utf8'))
  const js = readdirSync(dir).filter(f => f.endsWith('.js')).sort()
  const codegen = createHash('sha1')
    .update(JSON.stringify(probe.map(c => c.modules.map(m => [m.id, m.codegen])))).digest('hex').slice(0, 10)
  const chunkHash = createHash('sha1')
    .update(JSON.stringify(probe.map(c => [c.name, c.hash]))).digest('hex').slice(0, 10)
  console.log(`run${i + 1} file=${js.sort().join(',')} chunkHash=${chunkHash} codegen=${codegen}`)
  seen.set(chunkHash, (seen.get(chunkHash) ?? 0) + 1)
  rmSync(dir, { recursive: true, force: true })
}
console.log('distinct chunk hashes:', seen.size, 'of', runs)
