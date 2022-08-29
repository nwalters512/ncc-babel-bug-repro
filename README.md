# ncc-babel-bug-repro

This PR reproduces a bug with `@vercel/ncc` where it's unable to correctly trace external files when source files have been processed with Babel.

## Reproduction instructions

Run `yarn` to install `@vercel/ncc`.

Run `yarn build:working` and observe how `worker.js` is correctly copied to `dist-working/worker.js`:

```
ncc: Version 0.34.0
ncc: Compiling file index.js into CJS
Emitting /Users/nwalters/git/ncc-babel-bug-repro/node_modules/@nwalters512/working/worker.js for static use in module /Users/nwalters/git/ncc-babel-bug-repro/node_modules/@nwalters512/working/index.js
0kB  dist-working/worker.js
2kB  dist-working/index.js
2kB  [200ms] - ncc 0.34.0
```

Run `yarn build:failing` and observe how `worker.js` is **NOT** copied to `dist-failing/worker.js`:

```
ncc: Version 0.34.0
ncc: Compiling file index.js into CJS
3kB  dist-failing/index.js
3kB  [199ms] - ncc 0.34.0
```