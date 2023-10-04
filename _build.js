import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ["main.ts"],
    bundle: true,
    outfile: "main.js",
    format: "esm"
})
