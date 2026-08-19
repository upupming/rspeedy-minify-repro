// Calls the minifier directly, without a build, on one fixed input.
//
// `@rspack/core` exposes the same minifier the build uses through
// `experiments.swc.minify`, so this takes rspack's compilation out of the
// picture: one input, minified N times, in one process.
//
//   node swc-repro.mjs [input]
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import rspack from '@rspack/core';

const RUNS = Number(process.env.RUNS ?? 10);
const cwd = import.meta.dirname;
const input = process.argv[2]
  ?? path.join(cwd, 'artifacts/not-minified/run-0/background.0db63cf4.js');

const source = readFileSync(input, 'utf8');
console.info(`input: ${path.relative(cwd, input)} (${source.length} bytes)`);

// The options the Lynx build uses, from `pluginMinify`.
const options = {
  compress: {
    negate_iife: false,
    join_vars: false,
    ecma: 2015,
    inline: 2,
    comparisons: false,
    toplevel: true,
    side_effects: false,
  },
  mangle: { toplevel: true },
  format: { keep_quoted_props: true, comments: false },
};

const sha = (text) =>
  createHash('sha256').update(text).digest('hex').slice(0, 12);

const outputs = [];
for (let i = 0; i < RUNS; i++) {
  const { code } = await rspack.experiments.swc.minify(source, options);
  outputs.push(code);
}

const results = outputs.map((code, run) => ({
  run,
  bytes: code.length,
  sha: sha(code),
}));
console.table(results);

const unique = new Set(results.map((r) => r.sha));
console.info(`distinct outputs: ${unique.size} of ${RUNS}`);

if (unique.size === 1) {
  console.info('the minifier is deterministic for this input');
} else {
  console.info('the minifier is NOT deterministic for this input');

  const first = outputs[0];
  const other = outputs.find((code) => code !== first);
  let at = 0;
  while (at < first.length && first[at] === other[at]) at++;
  console.info(`\nfirst difference at byte ${at}:`);
  console.info(`  a: ${JSON.stringify(first.slice(at - 40, at + 40))}`);
  console.info(`  b: ${JSON.stringify(other.slice(at - 40, at + 40))}`);
}
