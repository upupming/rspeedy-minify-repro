# Rspeedy production builds are not reproducible

Building the same source twice with `@lynx-js/rspeedy` in production mode can
produce different bundles. The difference is in the names the minifier mangles
to, which then changes the chunk content hash.

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
node repro.mjs --no-minify # same build with minification turned off
```

`RUNS` sets the number of builds, default 5. Each build runs in its own
process, into its own output directory.

## What it shows

Eight runs, minified:

```
distinct bundles: 3 of 8
NOT reproducible

first difference outside the chunk name, at byte 17389:
  run 0: ":null:\"__ref\"in e?e:null:null}function e8(){e2.hasPending()&&e2.flush(e=>new e1("
  run 1: ":null:\"__ref\"in e?e:null:null}function e6(){e2.hasPending()&&e2.flush(e=>new e1("
```

The same function comes out as `e8` in one build and `e6` in another. Nothing
else differs.

Eight runs with `--no-minify`:

```
distinct bundles: 1 of 8
reproducible
```

So the input to the minifier is stable and its output is not. The chunk content
hash follows the content, so it changes with the mangled names rather than
causing the difference.
