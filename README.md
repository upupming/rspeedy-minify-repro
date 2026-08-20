# Rspeedy production builds are not reproducible

Building the same source twice with `@lynx-js/rspeedy` in production mode can
produce different JavaScript. The minifier mangles names differently between
builds, which then changes the chunk content hash.

Not reproducible means long-term caching, CDN revalidation and any
build-artifact integrity check see a new artifact for an unchanged source.

## Versions

- `@lynx-js/rspeedy` 0.16.4
- `@lynx-js/react-rsbuild-plugin` 0.19.0
- `@lynx-js/react` 0.124.0

## Reproduce

```sh
npm install
node repro.mjs             # production build, minified
node repro.mjs --no-minify # the same build with minification turned off
```

`RUNS` sets the number of builds, default 5. Each build runs in its own
process, into its own output directory, with `DEBUG=rspeedy` so that the
intermediate JavaScript is written next to the bundle instead of being encoded
into it and deleted.

Two values are minted per build and are not derived from the source: the chunk
file names itself, so its own content hash appears in its content, and the
debug metadata release. Both are normalized before comparing, so a reported
difference means the generated code differs.

## What it shows

Ten runs, minified:

```
distinct background.js: 2 of 10
NOT reproducible

first difference at byte 17541:
  run 0: ":null:\"__ref\"in e?e:null:null}function e5(){e3.hasPending()&&e3.flush(e=>new e2("
  run 2: ":null:\"__ref\"in e?e:null:null}function e8(){e3.hasPending()&&e3.flush(e=>new e2("
```

The same function comes out as `e5` in one build and `e8` in another.

Ten runs with `--no-minify`:

```
distinct background.js: 1 of 10
reproducible
```

Minifying is not the cause, though — it is what makes the difference visible.
The sections below trace it back to a chunk hash that moves before the minifier
runs, and to which the minifier's name mangling is exquisitely sensitive: the
mangler orders its short names by character frequency over the whole source, so
one changed string permutes every name.

## Committed output

`artifacts/` holds the intermediate JavaScript of every run of both modes, so
the runs can be diffed without building:

```sh
diff artifacts/minified/run-0/background.*.js artifacts/minified/run-2/background.*.js
```

The build directories themselves are not committed. Most of their size is
`stats.json` and `debug-metadata.json`, neither of which is involved here.

## Where it comes from

Two more scripts narrow it down.

`swc-repro.mjs` calls the minifier directly, without a build. `@rspack/core`
exposes the one the build uses through `experiments.swc.minify`.

```sh
node swc-repro.mjs                                       # background.js
node swc-repro.mjs artifacts/not-minified/run-0/main-thread.js
```

```
distinct outputs: 1 of 10
the minifier is deterministic for this input
```

The same holds across processes and when two files are minified concurrently.

So the minifier is not where this starts.

`capture.mjs` runs a full build with a plugin that records, for every chunk,
`chunk.hash`, its content hashes, and for every module its identifier, its
module hash, the sha1 of its generated code, its source map, its module id and
its used and provided exports.

```sh
node capture.mjs out-capture-a
node capture.mjs out-capture-b
```

Comparing a pair of runs whose output differs:

```
chunk main: hash c1fdcc95d02c4215 -> b6aabad919890145, modules 108
   modules with different hash: 1 of 108
   module set identical: True
   - @lynx-js/react/runtime/lib/snapshot/snapshot/definition.js|react:background
       hash: 47f15befae412641 != 1a320ffd61815515
       codegen same: True | details same: True
```

One module out of 108 hashes differently. Its generated code, its module id,
its used and provided exports and its runtime requirements are all identical
between the two builds. (The `codegen` figure covers the generated code and the
code generation source map, which are both stable; the module's *own* source
map, which the next section gets to, is not covered by it and is where the
difference lives.) That hash feeds `chunk.hash`, which feeds the content hash in the
filename and the debug metadata release, which is embedded in the chunk. With
minification on, that one changed string then permutes every mangled name,
because the mangler orders its short names by character frequency over the
whole source.

The modules that move are always in the same cluster — `snapshot/snapshot.js`,
`snapshot/backgroundSnapshot.js` and `snapshot/definition.js` — which are linked
by multi-hop re-exports.

On an idle machine 25 consecutive builds often agree; under CPU load
(`for i in $(seq 1 10); do yes > /dev/null & done`) roughly one build in seven
disagrees. Load only changes how often a build trips over it.

Ruled out, each by measurement rather than by argument:

- the minifier (deterministic on this exact input, across processes)
- the debug metadata plugin (disabled, still diverges)
- a persistent cache (there is none in this project)
- scope hoisting (with `concatenateModules: false` it diverges *more* often,
  because 108 separate modules give more chances than one concatenated one)
- any single Lynx Rspack plugin (see the ablations below)

## Where it actually comes from

Instrumenting Rspack's `NormalModule::get_runtime_hash` splits the module hash
into its parts. Across a pair of builds whose chunk hash differs:

```
build=71aa95a658f90eeb update=ca267b6627b63d00 graph=d95db6f6a4b79445 backgroundSnapshot.js
build=ff1d1cc216fb4b9d update=ca267b6627b63d00 graph=d95db6f6a4b79445 backgroundSnapshot.js
```

Only `build_info.hash` moves. Splitting that in turn into its own inputs:

```
code=285316d765d4ff6d map=af24d8fef2225b75 meta=8422b04e996169f0 definition.js
code=285316d765d4ff6d map=8c7a34e91cbfb1d3 meta=8422b04e996169f0 definition.js
```

Same code, same build meta, **different source map**. The map is part of the
module's build hash, which is why the chunk hash moves while the emitted
JavaScript does not — and why the whole thing only shows up with
`SourceMapDevToolPlugin`, which is what puts a map on the module in the first
place.

The map comes out of the loader chain, and the loader that produces it is the
ReactLynx transform. It returns a different map for byte-identical input:

```
run7 inCode=b49c2d3f4e7d outMap=50c3fff636cf outCode=1993ff0e8fce
run8 inCode=b49c2d3f4e7d outMap=f3fdb20914f0 outCode=1993ff0e8fce
```

`transform-count.mjs` reduces that to 400 calls on one fixed input, with no
bundler involved at all:

```sh
node transform-count.mjs
```

```
  call 0: 50c3fff636cf
  call 24: 2efc565455ea
  call 25: 50c3fff636cf
  ...
distinct maps: 2
```

It is not load-dependent — an idle machine flips at call 24. Earlier runs of
this repository reported the transform as deterministic; those runs stopped at
20 calls, before the first flip.

`capture-two-maps.mjs` writes both variants out. Decoding them, one mapping
differs: the `true` that `__JS__` is defined as maps either to the real position
of `__JS__` or to `0:0`.

## Root cause

`inline_globals` replaces an identifier with a value from its `globals` map and
keeps the value's own span:

```rust
if let Some(value) = self.globals.get(sym) {
    let mut value = value.clone();
    value.visit_mut_with(self);
    *expr = value;
}
```

Those values are parsed by `GlobalPassOption::build`, which parses each into an
anonymous file of the `SourceMap` it is handed and memoizes the result in a
process-wide `static CACHE: Lazy<DashMap<..>>`, keyed only on the define pairs.
`swc::Compiler` builds a fresh `SourceMap` per file, so a cache hit hands back
expressions whose spans belong to a `SourceMap` from an earlier call. Whether a
call hits the cache is not stable, so the emitted map is not either.

Fix: give the substituted value the span of the expression it replaces, which is
what the neighbouring `typeof` branch already does — swc-project/swc#12129.

With that patch built into `@lynx-js/react-transform`, and the unpatched build
of the same commit as the control, all three levels agree:

| | transform, 400 calls | Rspack config, 40 builds | Rspeedy, 40 builds |
| --- | --- | --- | --- |
| before | 2 distinct maps | 14 distinct chunk hashes | 10 distinct bundles |
| after | 1 | 1 | 1 |

The Rspeedy column is the one that matters to a user: `createRspeedy(...)` plus
`rspeedy.build()`, comparing the bytes of the emitted `main.lynx.bundle`.

```sh
for i in $(seq 1 10); do yes > /dev/null & done
USE_NAPI=1 node rspeedy-verify.mjs 40
```

Both columns were measured with the same napi build path, under the same load,
so the difference is the patch and not the build flavour.

## Reproducing with Rspack alone

`rspack.config.mjs` is a plain Rspack config — the only import in it is
`@rspack/core`. Neither Rsbuild nor Rspeedy runs at build time; `emit-config.mjs`
generated the file once and is not needed to reproduce.

```sh
for i in $(seq 1 10); do yes > /dev/null & done   # the race needs a busy machine
node run-standalone.mjs 40
kill %1 %2 %3 %4 %5 %6 %7 %8 %9 %10
```

```
distinct chunk hashes: 15 of 40
```

Each build runs in its own process and is compared on `chunk.hash`, so the
result does not depend on filenames or on the minifier.

## What the reproduction needs

Each of these was established by removing it and running 35 builds under the
same load. Removing either one makes all 35 agree:

- the two loaders from `@lynx-js/react-webpack-plugin`
- `SourceMapDevToolPlugin`, which is Rspack's own

Neither is sufficient alone: 4501 generated modules across two layers, with
`builtin:swc-loader` and `SourceMapDevToolPlugin`, stay stable over 40 builds.

The loaders are not implicated by the CPU time they spend. Replacing them with a
loader that busy-waits — a longer build, 0.57s against 0.49s — is stable over 35
builds. Nor is it what they write into `buildInfo`: with those writes patched
out the build still diverges, 11 of 40.

Not required, each measured the same way: every Lynx Rspack plugin, the resolve
configuration, the per-layer `resolve.alias` rules, `parser.overrideStrict`,
`experiments.sourceImport`, minification, `devtool`, `splitChunks`,
`DefinePlugin`, `ProgressPlugin`, `CssExtractRspackPlugin`, and scope hoisting —
with `concatenateModules: false` it diverges *more* often, because 108 separate
modules give the race more chances than one concatenated module.
