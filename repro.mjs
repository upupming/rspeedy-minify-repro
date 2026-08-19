// Runs the same production build N times and reports whether the output is
// reproducible.
//
// Each build runs in its own process, with `DEBUG=rspeedy` so that the
// intermediate JavaScript is kept next to the bundle instead of being encoded
// into it and deleted.
//
//   node repro.mjs             # minified (default)
//   node repro.mjs --no-minify
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { cpSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import path from 'node:path';

const RUNS = Number(process.env.RUNS ?? 5);
const minify = !process.argv.includes('--no-minify');
const cwd = import.meta.dirname;
const outDir = minify ? 'out-minified' : 'out-not-minified';
// The intermediate JavaScript of every run is kept here and committed, so the
// runs can be diffed without building. The build directories themselves are
// not: most of their size is `stats.json` and `debug-metadata.json`.
const keepDir = minify ? 'artifacts/minified' : 'artifacts/not-minified';

const sha = (buffer) =>
  createHash('sha256').update(buffer).digest('hex').slice(0, 12);

// Two values are minted per build and are not derived from the source: the
// file names itself, so its own content hash shows up in its content, and the
// debug metadata release. Both are removed before comparing, so that a
// difference means the generated code differs.
const strip = (source) =>
  source
    .replaceAll(/background\.[0-9a-f]+\.js/g, 'background.js')
    .replaceAll(/debugmetadata:[0-9a-f]+/g, 'debugmetadata:<release>');

// `background.<contenthash>.js` in a minified build, `background.js` otherwise.
function backgroundOf(root) {
  const dir = path.join(cwd, root, '.rspeedy', 'main');
  const name = readdirSync(dir).find((file) => file.startsWith('background'));
  return { name, source: strip(readFileSync(path.join(dir, name), 'utf8')) };
}

rmSync(path.join(cwd, outDir), { recursive: true, force: true });
rmSync(path.join(cwd, keepDir), { recursive: true, force: true });

const results = [];
for (let i = 0; i < RUNS; i++) {
  const root = path.join(outDir, `run-${i}`);
  execFileSync(
    process.execPath,
    [path.join(cwd, 'build.mjs'), root, String(minify)],
    { cwd, stdio: 'ignore', env: { ...process.env, DEBUG: 'rspeedy' } },
  );
  cpSync(
    path.join(cwd, root, '.rspeedy', 'main'),
    path.join(cwd, keepDir, `run-${i}`),
    { recursive: true, filter: (from) => !from.endsWith('.json') },
  );

  const { name, source } = backgroundOf(root);
  results.push({ run: i, file: name, bytes: source.length, sha: sha(source) });
}

console.table(results);

const unique = new Set(results.map((r) => r.sha));
console.info(`minify: ${minify}`);
console.info(`distinct background.js: ${unique.size} of ${RUNS}`);

if (unique.size === 1) {
  console.info('reproducible');
} else {
  console.info('NOT reproducible');

  const first = results[0];
  const other = results.find((r) => r.sha !== first.sha);
  const a = backgroundOf(path.join(outDir, `run-${first.run}`)).source;
  const b = backgroundOf(path.join(outDir, `run-${other.run}`)).source;

  let at = 0;
  while (at < a.length && a[at] === b[at]) at++;
  console.info(`\nfirst difference at byte ${at}:`);
  console.info(`  run ${first.run}: ${JSON.stringify(a.slice(at - 40, at + 40))}`);
  console.info(`  run ${other.run}: ${JSON.stringify(b.slice(at - 40, at + 40))}`);
}
