import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

await esbuild.build({
  entryPoints: ['index.ts'],
  bundle: true,
  outfile: 'index.js',
  format: 'esm',
})

await esbuild.build({
  entryPoints: ['index-stamp.ts'],
  bundle: true,
  outfile: 'index-stamp.js',
  format: 'esm',
})

await esbuild.build({
  entryPoints: ['index.scss'],
  bundle: true,
  outfile: 'index.css',
  plugins: [sassPlugin()],
})

// *** Test Modules ***
await esbuild.build({
  entryPoints: ['*.test.ts', '_stamp.ts'],
  platform: 'node',
  bundle: true,
  splitting: true,
  outdir: '.',
  format: 'esm',
  external: ['jsdom'],
})

await import('./_stamp.js')
