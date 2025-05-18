import { S$ } from "./svquery";

const nativeTagNames = "a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,search,section,select,small,source,span,strong,style,sub,summary,sup,svg,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr".split(',');

export class SvTemplateElement {
    tag: string;
    attributes: object;
    innerHTML: string;
    children: (string|SvTemplateElement)[];

    constructor(tag: string, attributes: string|object, innerHTML: string) {
        this.tag = tag;
        this.attributes = typeof attributes === "string" ? S$.parseAttributes(attributes) : attributes;
        this.innerHTML = innerHTML;
        this.children = S$.parseHTML(innerHTML);
    }

    createInstance(initObj: object): HTMLElement {
        const native = document.createElement(nativeTagNames.includes(this.tag) ? this.tag : "div");
        
        // create children nodes
        for (let i = 0; i < this.children.length; i++) {
            const childNode = this.children[i];
            let nativeChild: Node;
            if (childNode instanceof SvTemplateElement) {
                nativeChild = childNode.createInstance(initObj);
            } else {
                // templated text node
                let textContent = childNode;
                let startIdx: number = 0;
                while ((startIdx = textContent.indexOf("{", startIdx)) !== -1) {
                    let endIdx = textContent.indexOf("}", startIdx + 1);
                    const prop = textContent.slice(startIdx + 1, endIdx);
                    // console.log(initObj, startIdx, endIdx, prop)
                    const segA = textContent.slice(0, startIdx);
                    const segB = "" + initObj[prop.trim()];
                    const segC = textContent.slice(endIdx + 1);
                    textContent = segA + segB + segC;
                    startIdx += segB.length;
                }
                nativeChild = new Text(textContent);
            }
            native.append(nativeChild);
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
        const arrayed = [this.tag, this.attributes, serializedChildren];
        return isChild ? arrayed : JSON.stringify(arrayed);
    }

    static deserialize(serialized: (string|object)[]): SvTemplateElement {
        let el = new SvTemplateElement(serialized[0] as string, serialized[1] as object, "");
        const children = serialized[2] as any;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            el.children.push(typeof child === "string" ? child : SvTemplateElement.deserialize(child));
        }
        return el;
    }
}
