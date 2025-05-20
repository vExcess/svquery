import { S$ } from "./svquery";

const nativeTagNames = "a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,search,section,select,small,source,span,strong,style,sub,summary,sup,svg,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr".split(',');

export class SvTemplateElement {
    tag: string;
    attributes: object;
    dependencies: object = {};
    children: (string|SvTemplateElement)[];

    constructor(tag: string, attributes: string|object, innerHTML: string, dependencies?: object) {
        this.tag = tag;
        this.attributes = typeof attributes === "string" ? S$.parseAttributes(attributes) : attributes;
        this.children = S$.parseHTML(innerHTML);
        if (dependencies) {
            this.dependencies = dependencies;
        } else {
            this.calculateDependencies();
        }
    }

    getInnerHTML(): string {
        let innerHTML = "";
        for (let i = 0; i < this.children.length; i++) {
            const childNode = this.children[i];
            if (childNode instanceof SvTemplateElement) {
                innerHTML += childNode.getInnerHTML();
            } else {
                innerHTML += childNode;
            }
        }
        return innerHTML;
    }

    calculateDependencies() {
        let deps = {} as Map<String, number[]>;
        for (let i = 0; i < this.children.length; i++) {
            const childNode = this.children[i];
            if (typeof childNode === "string") {
                // templated text node
                let textContent = childNode;
                let startIdx: number = 0;
                while ((startIdx = textContent.indexOf("{", startIdx)) !== -1) {
                    let endIdx = textContent.indexOf("}", startIdx + 1);
                    const prop = textContent.slice(startIdx + 1, endIdx).trim();
                    if (!deps[prop]) {
                        deps[prop] = [];
                    }
                    deps[prop].push(i);
                    startIdx += 2;
                }
            }
        }
        this.dependencies = deps;
    }

    templatedText(textTemplate: string, initObj: object): string {
        // templated text node
        let startIdx: number = 0;
        while ((startIdx = textTemplate.indexOf("{", startIdx)) !== -1) {
            let endIdx = textTemplate.indexOf("}", startIdx + 1);
            const prop = textTemplate.slice(startIdx + 1, endIdx);
            const segA = textTemplate.slice(0, startIdx);
            const segB = "" + initObj[prop.trim()];
            const segC = textTemplate.slice(endIdx + 1);
            textTemplate = segA + segB + segC;
            startIdx += segB.length;
        }
        return textTemplate;
    }

    createInstance(initObj: object, depNodeMap?: object): HTMLElement {        
        const native = document.createElement(nativeTagNames.includes(this.tag) ? this.tag : "div");
        native["$template"] = this;

        // create children nodes
        for (let i = 0; i < this.children.length; i++) {
            const childNode = this.children[i];
            let nativeChild: Node;
            if (childNode instanceof SvTemplateElement) {
                nativeChild = childNode.createInstance(initObj, depNodeMap);
            } else {
                nativeChild = new Text(this.templatedText(childNode, initObj));
            }
            native.append(nativeChild);
        }

        // build dependency node map
        if (depNodeMap) {
            for (const depName in this.dependencies) {
                if (!depNodeMap[depName]) {
                    depNodeMap[depName] = [];
                }

                const depChildIdxs = this.dependencies[depName];
                for (let j = 0; j < depChildIdxs.length; j++) {
                    const idx = depChildIdxs[j];
                    if (idx === -1) {
                        // -1 is the node itself rather than its children
                        depNodeMap[depName].push(native);
                    } else {
                        depNodeMap[depName].push(native.childNodes[idx]);
                    }
                }
            }
        }

        native["$directives"] = {};

        // set attributes
        for (const key in this.attributes) {
            const value = this.attributes[key];
            if (key === "class") {
                native.className = value;
            } else if (key.startsWith("data-")) {
                native.dataset[key] = value;
            } else if (key.startsWith("on:")) {
                // directives
                native["$directives"][key] = 1;
            } else {
                native[key] = value;
            }
        }

        return native;
    }

    serialize(isChild?: boolean): string|(string|object)[] {
        let serializedChildren: any[] = [];
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            serializedChildren.push(child instanceof SvTemplateElement ? child.serialize(true) : child);
        }
        const arrayed = [this.tag, this.attributes, this.dependencies, serializedChildren];
        return isChild ? arrayed : JSON.stringify(arrayed);
    }

    static deserialize(serialized: (string|object)[]): SvTemplateElement {
        let el = new SvTemplateElement(serialized[0] as string, serialized[1] as object, "", serialized[2] as string[][]);
        const children = serialized[3] as any;
        for (let i = 0; i < children.length; i++) {
            const child: string|any[] = children[i];
            el.children.push(typeof child === "string" ? child : SvTemplateElement.deserialize(child));
        }
        return el;
    }
}
