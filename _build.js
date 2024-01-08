import * as esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

await esbuild.build({
  entryPoints: ['main.tsx'],
  bundle: true,
  outfile: 'main.js',
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
  entryPoints: ['*.test.ts'],
  platform: 'node',
  bundle: true,
  splitting: true,
  outdir: '.',
  format: 'esm',
})
