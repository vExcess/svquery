const { S$ } = require("../dist/svquery");
const { SvCompiler } = require("../dist/SvCompiler");
const fs = require("fs");

if (!fs.existsSync("test/build")) {
    fs.mkdirSync("test/build");
}

const compiler = new SvCompiler(S$, S$.TemplateElement);

function doComponent(name) {
    const src = fs.readFileSync(`test/${name}.svelte`).toString();
    const compiledHello = compiler.compile(name, src);
    fs.writeFileSync(`test/build/${name}.js`, compiledHello);
}

doComponent("MyHello");
