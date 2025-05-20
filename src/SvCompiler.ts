/*
    meriyah is supposedly nearly 2x faster than 
    acorn at the cost of 29 KB of extra code
*/
import { parse } from 'meriyah';
import { generate } from 'astring';

let nativeTagClassNames = {};
"Anchor:a;_:abbr,address,article,aside,b,bdi,bdo,cite,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rp,rt,ruby,s,samp,search,section,small,strong,sub,summary,sup,u,var,wbr;Area:area;Audio:audio;Base:base;Quote:blockquote,q;Body:body;BR:br;Button:button;Canvas:canvas;TableCaption:caption;TableCol:col,colgroup;Data:data;DataList:datalist;Mod:del,ins;Details:details;Dialog:dialog;Div:div;DList:dl;Embed:embed;FieldSet:fieldset;Form:form;Heading:h1,h2,h3,h4,h5,h6;Head:head;HR:hr;Html:html;IFrame:iframe;Image:img;Input:input;Label:label;Legend:legend;LI:li;Link:link;Map:map;Menu:menu;Meta:meta;Meter:meter;Object:object;OList:ol;OptGroup:optgroup;Option:option;Output:output;Paragraph:p;Param:param;Picture:picture;Pre:pre;Progress:progress;Script:script;Select:select;Source:source;Span:span;Style:style;Unknown:svg;Table:table;TableSection:tbody,tfoot,thead;TableCell:td,th;Template:template;TextArea:textarea;Time:time;Title:title;TableRow:tr;Track:track;UList:ul;Video:video".split(";").forEach(s => {
    const [ name, tags ] = s.split(":");
    const fullName = `HTML${name === "_" ? "" : name}Element`;
    tags.split(",").forEach(tag => nativeTagClassNames[tag] = fullName);
});

type svqueryFnDef = (a: HTMLElement|SvElement|string|null, initObj?: object, queryParent?: HTMLElement) => SvElement|SvElement[];

declare class SvElement {
    native: HTMLElement;
    constructor(el: HTMLElement);
    prependTo(a: SvElement | Element): SvElement;
    appendTo(a: SvElement | Element): SvElement;
    addClass(...args: string[]): SvElement;
    removeClass(...args: string[]): SvElement;
    setId(a: string): SvElement;
    html(a?: string): SvElement | string;
    text(a?: string): SvElement | string | null;
    replaceChild(a: SvElement | Element, b: SvElement | Element): SvElement;
    removeChild(a: SvElement | Element): SvElement;
    on(a: string, b: EventListenerOrEventListenerObject, c?: boolean | AddEventListenerOptions): SvElement;
    css(c: string | object): SvElement;
    attr(a: string | object, b?: any): SvElement;
    prepend(...args: (SvElement | Element)[]): SvElement;
    append(...args: (SvElement | Element)[]): SvElement;
    $(query: string, initObj?: object): SvElement | SvElement[];
    get parentEl(): SvElement;
    insertBefore(newEl: SvElement | Element, refEl: SvElement | Element): SvElement;
}

declare class SvTemplateElement {
    tag: string;
    attributes: object;
    children: (string|SvTemplateElement)[];
    dependencies: string[];
    constructor(tag: string, attributes: string, innerHTML: string);
    createInstance(initObj: object, depNodeMap?: object): HTMLElement;
    serialize(isChild?: boolean): string|(string|object)[];
    getInnerHTML(): string;
}

function pascalToHyphen(tag: string): string {
    let chunkStart = 0;
    let output = "";
    for (let i = 0; i <= tag.length; i++) {
        if (i === tag.length || tag.charCodeAt(i) <= 90) {
            if (chunkStart != i) {
                let chunk = tag.slice(chunkStart, i);
                output += (chunkStart !== 0 ? "-" : "") + chunk.toLowerCase();
                chunkStart = i;
            }
        }
    }
    return output;
}

export class SvCompiler {
    S$: svqueryFnDef;
    TemplateElement: typeof SvTemplateElement;
    constructor(S$: svqueryFnDef, tmpElClass: (typeof SvTemplateElement)) {
        this.S$ = S$;
        this.TemplateElement = tmpElClass;
    }

    compile(name: string, code: string) {
        // parsed component tree
        const virtComp = new this.TemplateElement(name, "", code);

        // find script and style tags if available
        let virtCompScript: SvTemplateElement|null = null;
        for (let i = 0; i < virtComp.children.length; i++) {
            const node = virtComp.children[i];
            if (node instanceof this.TemplateElement && node.tag === "script") {
                virtCompScript = node;
                virtComp.children.splice(i, 1);
                break;
            }
        }
        let virtCompStyle: SvTemplateElement|null = null;
        for (let i = virtComp.children.length - 1; i >= 0; i--) {
            const node = virtComp.children[i];
            if (node instanceof this.TemplateElement && node.tag === "style") {
                virtCompStyle = node;
                virtComp.children.splice(i, 1);
                break;
            }
        }

        let firstChild: SvTemplateElement|null = null;
        let lastChild: SvTemplateElement|null = null;
        for (let i = 0; i < virtComp.children.length; i++) {
            const node = virtComp.children[i];
            if (node instanceof this.TemplateElement) {
                if (firstChild === null) {
                    firstChild = node;
                }
                lastChild = node;
            }
        }
        let hasMultipleChildren = firstChild !== lastChild;

        // preprocess script
        let state = {};
        let ast: any = null;
        if (virtCompScript) {
            ast = parse(virtCompScript.getInnerHTML());
            console.log(ast);

            // handle global states and $props
            for (let i = 0; i < ast.body.length; i++) {
                const statement = ast.body[i];

                if (statement.type === "VariableDeclaration") {
                    // replace variable declarations with assignment expressions
                    let expressions: any = [];

                    for (let j = 0; j < statement.declarations.length; j++) {
                        let declaration = statement.declarations[j];
                        if (declaration.id.type === "Identifier") {
                            const declName = declaration.id.name;
                            state[declName] = null;
                            declaration.id.name = `$_state.${declName}`;
                            expressions.push({
                                "type": "AssignmentExpression",
                                "left": declaration.id,
                                "operator": "=",
                                "right": declaration.init
                            });
                        } else if (declaration.id.type === "ObjectPattern") {
                            declaration.id.properties.forEach(prop => {
                                const declName = prop.key.name;
                                state[declName] = null;
                                prop.key.name = `$_state.${declName}`;
                                if (declaration.init.callee?.name === "$props") {
                                    declaration.init = {
                                        "type": "MemberExpression",
                                        "object": declaration.init,
                                        "computed": false,
                                        "property": {
                                            "type": "Identifier",
                                            "name": declName
                                        }
                                    }
                                }
                                expressions.push({
                                    "type": "AssignmentExpression",
                                    "left": prop.key,
                                    "operator": "=",
                                    "right": declaration.init
                                });
                            });
                        }
                    }

                    ast.body[i] = {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": expressions
                        }
                    };
                } else if (statement.type === "LabeledStatement" && statement.label.name === "$") {
                    const declName = statement.body.expression.left.name;
                    state[declName] = null;
                    statement.body.expression.left.name = `$_state.${declName}`;
                    ast.body[i] = {
                        "type": "ExpressionStatement",
                        "expression": statement.body.expression
                    };
                }

                // if (statement.type === "ExpressionStatement") {
                //     // handle props imports
                //     let importExpression = statement.expression.expressions[0];
                //     if (importExpression.right.callee.name === "$props") {
                //         importExpression.left.properties.forEach(prop => {
                //             state[prop.key] = null;
                //         });
                //     }
                // }
            }

            function recurse(treeNode: any): string[] {
                let children: any[] = [];
                if (treeNode.type === "Program") {
                    children = treeNode.body;
                } else if (treeNode.type === "ExpressionStatement") {
                    if (treeNode.expression.type !== "SequenceExpression") {
                        treeNode.expression = {
                            "type": "SequenceExpression",
                            "expressions": [treeNode.expression]
                        };
                    }
                    children = treeNode.expression.expressions;
                } else if (treeNode.type === "CallExpression") {
                    children = treeNode.arguments;
                } else if (treeNode.type === "ArrowFunctionExpression") {
                    if (treeNode.body.type !== "BlockStatement") {
                        treeNode.body = {
                            "type": "BlockStatement",
                            "body": [
                                treeNode.body
                            ]
                        };
                    }
                    children = treeNode.body.body;
                } else if (treeNode.type === "UpdateExpression") {
                    children = [treeNode.argument];
                }

                let needsUpdate: string[] = [];
                for (let i = 0; i < children.length; i++) {
                    const child = children[i];
                    if (child.type === "Identifier") {
                        if (state[child.name] !== undefined) {
                            console.log("EDIT", treeNode)
                            child.name = "$_state." + child.name;
                            if (["Program", "ExpressionStatement", "CallExpression", "ArrowFunctionExpression"].includes(treeNode.type)) {
                                children.push({
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                                "type": "Identifier",
                                                "name": "that"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "render"
                                            },
                                            "computed": false,
                                            "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false
                                    }
                                });
                            } else {
                                needsUpdate.push(child.name);
                            }
                        }
                    } else {
                        recurse(child).forEach(item => needsUpdate.push(item));
                        if (needsUpdate.length !== 0 && ["Program", "ExpressionStatement", "CallExpression", "ArrowFunctionExpression"].includes(treeNode.type)) {
                            children.push({
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                        "type": "Identifier",
                                        "name": "that"
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "render"
                                    },
                                    "computed": false,
                                    "optional": false
                                },
                                "arguments": [{
                                    "type": "ArrayExpression",
                                    "elements": needsUpdate.map(item => {
                                        item = item.slice("$_state.".length);
                                        return {
                                            "type": "Literal",
                                            "value": item,
                                            "raw": JSON.stringify(item)
                                        };
                                    })
                                }],
                                "optional": false
                            });
                            needsUpdate = [];
                        }
                    }
                }
                return needsUpdate;
            }

            // update identifiers to refer to states
            recurse(ast);
        }

        // TODO: set id + class
        const firstChildTag = (firstChild as SvTemplateElement).tag;
        const componentClassSource = `
function initDirectives(template, rootEL) {
    for (let i = 0; i < template.children.length; i++) {
        const node = template.children[i];
        if (node instanceof S$.TemplateElement) {
            for (const key in node.attributes) {
                if (key.startsWith("on:")) {
                    const directiveGenSrc = "return " + node.attributes[key].replace("count", "$_state.count").replace("()", "$_state");
                    console.log(directiveGenSrc)
                    const directiveFn = Function(directiveGenSrc)();
                    rootEL.directives[key] = () => {
                        directiveFn(rootEL.state);
                        rootEL.render(Object.keys(node.dependencies));
                    };
                }
            }
            initDirectives(node, rootEL);
        }
    }
}
function initElementTreeListeners(tree, rootEl) {
    for (let i = 0; i < tree.children.length; i++) {
        const node = tree.children[i];
        if (node instanceof HTMLElement) {
            for (const key in node.$directives) {
                // console.log("DIR", node, node.$directives, key.slice(3), rootEl.directives[key])
                node.addEventListener(key.slice(3), rootEl.directives[key]);
            }
            initElementTreeListeners(node, rootEl);
        }
    }
}
class ${name} extends ${hasMultipleChildren ? "HTMLDivElement" : nativeTagClassNames[firstChildTag]} {
    static template = S$.TemplateElement.deserialize(${virtComp.serialize()});
    state = ${JSON.stringify(state)};
    directives = {};
    depNodeMap = {};
    constructor(props) {
        super();
        let that = this;
        let $_state = this.state;
        const $props = () => props;
${ast === null ? "" : generate(ast)}
        const template = ${name}.template;
        initDirectives(template, this);
        this.render();
        // console.log("TEMP", template)
        // console.log("THIS")
        // console.log(this)
        // console.log(this.directives);
    }
    render(changedStates) {
        if (changedStates === undefined) {
            let $_state = this.state;
            const templateInstance = ${name}.template.createInstance($_state, this.depNodeMap);
            console.log("TEMP INST", templateInstance)        
            initElementTreeListeners(templateInstance, this);
            this.innerHTML = "";
            for (let i = 0; i < templateInstance.children.length; i++) {
                this.append(templateInstance.children[i]);
            }
        } else {
            // console.log("CHANGE", changedStates)
            for (let i = 0; i < changedStates.length; i++) {
                const stateName = changedStates[i];
                let dependentNodes = this.depNodeMap[stateName];
                // console.log("DEPD", dependentNodes)
                for (let j = 0; j < dependentNodes.length; j++) {
                    let node = dependentNodes[j];
                    const isTextNode = node instanceof Text;
                    const template = isTextNode ? node.parentElement.$template : node.$template;
                    // console.log("TMP", template)
                    if (isTextNode) {
                        const parent = node.parentElement;
                        let childNodes = Array.from(parent.childNodes);
                        let childIdx = childNodes.indexOf(node);
                        let runtimeComponent = node;
                        while (!runtimeComponent.state) {
                            runtimeComponent = runtimeComponent.parentElement;
                        }
                        node.textContent = template.templatedText(template.children[childIdx], runtimeComponent.state);
                    } else {
                        let newNode = template.createInstance(this.state);
                        dependentNodes[j] = newNode;
                        for (const key in newNode.$directives) {
                            newNode.addEventListener(key.slice(3), this.directives[key]);
                        }
                        initElementTreeListeners(newNode, this);
                        node.replaceWith(newNode);
                    }
                }
            }
        }
    }
}
window.customElements.define("${pascalToHyphen(name)}", ${name}, { extends: "${hasMultipleChildren ? "div" : firstChildTag}" });
S$.components["${name}"] = ${name};`;
        
        return componentClassSource;
    }
}

if (globalThis.window !== undefined) {
    window["SvCompiler"] = SvCompiler;
}