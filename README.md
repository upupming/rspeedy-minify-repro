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

So the input to the minifier is stable and its output is not. The chunk content
hash follows the content, so it changes with the mangled names rather than
causing the difference.

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

`capture.mjs` runs a full build with a plugin that writes every JavaScript asset
just before the minimize stage, so two builds can be compared on what the
minifier is given rather than on what it produces.

```sh
node capture.mjs out-capture-a
node capture.mjs out-capture-b
```

Comparing a pair of runs whose output differs, with the two per-build
identifiers normalized:

```
run1  before minify=5a1ac632c8  after minify=4ad8e0d494
run2  before minify=5a1ac632c8  after minify=f11f03ccdf
```

The input is the same and the output is not. Called on its own the minifier is
deterministic for that same input, so the difference comes from how the build
invokes it, not from the minifier itself.
