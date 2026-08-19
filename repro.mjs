// Runs the same production build N times and reports whether the output is
// reproducible. Each build runs in its own process.
//
//   node repro.mjs            # minified (default)
//   node repro.mjs --no-minify
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, rmSync } from 'node:fs';
import path from 'node:path';

const RUNS = Number(process.env.RUNS ?? 5);
const minify = !process.argv.includes('--no-minify');
const cwd = import.meta.dirname;

const sha = (buffer) => createHash('sha256').update(buffer).digest('hex').slice(0, 12);

const results = [];
for (let i = 0; i < RUNS; i++) {
  const root = `dist-run-${i}`;
  rmSync(path.join(cwd, root), { recursive: true, force: true });
  execFileSync(process.execPath, [path.join(cwd, 'build.mjs'), root, String(minify)], {
    cwd,
    stdio: 'ignore',
  });
  const bundle = readFileSync(path.join(cwd, root, 'main.lynx.bundle'));
  const name = bundle.toString('latin1').match(/background\.([0-9a-f]+)\.js/)?.[1] ?? '-';
  results.push({ run: i, bytes: bundle.length, bundle: sha(bundle), chunkHash: name });
}

console.table(results);

const unique = new Set(results.map((r) => r.bundle));
console.info(`minify: ${minify}`);
console.info(`distinct bundles: ${unique.size} of ${RUNS}`);

if (unique.size === 1) {
  console.info('reproducible');
} else {
  console.info('NOT reproducible');

  const first = results[0];
  const other = results.find((r) => r.bundle !== first.bundle);
  const a = readFileSync(path.join(cwd, `dist-run-${first.run}`, 'main.lynx.bundle'));
  const b = readFileSync(path.join(cwd, `dist-run-${other.run}`, 'main.lynx.bundle'));

  // Ignore the chunk name: it carries the content hash, which follows the
  // content rather than explaining it.
  const strip = (buffer) =>
    buffer.toString('latin1').replaceAll(/background\.[0-9a-f]+\.js/g, 'background.js');
  const [x, y] = [strip(a), strip(b)];

  let at = 0;
  while (at < x.length && x[at] === y[at]) at++;
  console.info(`\nfirst difference outside the chunk name, at byte ${at}:`);
  console.info(`  run ${first.run}: ${JSON.stringify(x.slice(at - 40, at + 40))}`);
  console.info(`  run ${other.run}: ${JSON.stringify(y.slice(at - 40, at + 40))}`);
}
