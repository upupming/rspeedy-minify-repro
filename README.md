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

One module out of 108 hashes differently. Its generated code, its source map,
its module id, its used and provided exports and its runtime requirements are
all identical between the two builds — only the hash rspack computes for it
moves. That hash feeds `chunk.hash`, which feeds the content hash in the
filename and the debug metadata release, which is embedded in the chunk. With
minification on, that one changed string then permutes every mangled name,
because the mangler orders its short names by character frequency over the
whole source.

The modules that move are always in the same cluster — `snapshot/snapshot.js`,
`snapshot/backgroundSnapshot.js` and `snapshot/definition.js` — which are linked
by multi-hop re-exports.

It is a race, not a per-process seed. On an idle machine 25 consecutive builds
agree; under CPU load (`for i in $(seq 1 10); do yes > /dev/null & done`) about
one build in seven disagrees.

Ruled out, each by measurement rather than by argument:

- the minifier (deterministic on this exact input, across processes)
- the debug metadata plugin (disabled, still diverges)
- a persistent cache (there is none in this project)
- scope hoisting (with `concatenateModules: false` it diverges *more* often,
  because 108 separate modules give more chances than one concatenated one)
- any single Lynx Rspack plugin (see the ablations below)

## Which input to the hash moves

`ChunkGraph::get_module_graph_hash` hashes three things: the module's own
`get_module_graph_hash_without_connections`, the `active_state` of each of its
outgoing connections, and, for each module it connects to, that module's
`get_exports_type` and `get_module_graph_hash_without_connections`.

An importer's hash therefore contains its dependency's *without_connections*
part. So if `without_connections` moved for any module, every module importing
it would move too. `definition.js` is imported by eight other modules and none
of them moved — exactly one module out of 108 did.

That leaves the per-connection values: `active_state`, or `get_exports_type` of
a connected module. Both are resolved through `ModuleGraphCacheArtifact`, a
memoization cache, and `active_state` is three-valued (`true`, `false`,
`TransitiveOnly`) — a flip between `true` and `TransitiveOnly` changes the hash
while still emitting the same code, which is what is observed.

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
