import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ["main.ts"],
    bundle: true,
    outfile: "main.js",
    format: "esm"
})

// *** Test Modules ***
await esbuild.build({
    entryPoints: ['*.test.ts'],
    platform: 'node',
    bundle: true,
    splitting: true,
    outdir: '.',
    format: 'esm'
})
