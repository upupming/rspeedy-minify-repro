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
