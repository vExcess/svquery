const esbuild = require('esbuild');
const fs = require('fs');

const options = {
    bundle: true,
    format: 'cjs',
    minify: false
};

function browserify(name) {
    let src = fs.readFileSync(name).toString();
    src = "(()=>{"+src.replace("module.exports", "if(typeof module!=='undefined')module.exports")+"})()";
    fs.writeFileSync(name, src);
}

async function buildSvQuery() {
    try {
        await esbuild.build({
            entryPoints: ['src/svquery.ts'],
            outfile: 'dist/svquery.js',
            ...options
        });
        await esbuild.build({
            entryPoints: ['src/SvCompiler.ts'],
            outfile: 'dist/SvCompiler.js',
            ...options
        });
        browserify("dist/svquery.js");
        browserify("dist/SvCompiler.js");
        console.log('Build successful!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1); // Exit with a non-zero code to indicate an error
    }
}

buildSvQuery();
