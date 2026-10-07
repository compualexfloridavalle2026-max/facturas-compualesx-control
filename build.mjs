import {build} from 'esbuild';import {mkdirSync,copyFileSync} from 'fs';
mkdirSync('www',{recursive:true});
await build({entryPoints:['src/app.js'],bundle:true,format:'iife',target:['chrome60'],outfile:'www/app.js',minify:true});
copyFileSync('src/index.html','www/index.html');console.log('ok');
