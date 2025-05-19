/**

    SvQuery - Svelte + jQuery hybrid framework/library
    All code written by VExcess available under the MIT license (https://opensource.org/license/mit/)

**/

import { SvElement } from './SvElement';
import { SvTemplateElement } from './SvTemplateElement';

function createElement(tag: string, initObj?: object): HTMLElement {
    const component = S$.components[tag];
    if (component) {
        return new (component as any)(initObj);
    } else {
        return document.createElement(tag);
    }
}

const selfClosingTags = "area,base,br,col,command,embed,hr,img,input,keygen,link,meta,param,source,track,wbr".split(",");

export function S$(a: HTMLElement|SvElement|string|null, initObj?: object, queryParent?: HTMLElement): SvElement|SvElement[] {
    const element = a;
    
    if (element == null) throw "SvQuery Recieved `null`";

    // convert Element to SvElement
    if (element instanceof Element) return new SvElement(element);

    // if already a SvElement simply return it
    if (element instanceof SvElement) return element;

    const query = (a as string).trimStart();

    let result: any = null;

    const fancySelector = query.includes(">") || query.includes("&") || query.includes("|");
    if (!fancySelector) {
        // simple selectors
        const paramString = query.slice(1);
        const firstChar = query.charAt(0);
        if (firstChar === "#") {
            result = document.getElementById(paramString);
        } else if (firstChar === ".") {
            result = (queryParent ?? document).getElementsByClassName(paramString);
        } else if (firstChar === "*") {
            result = (queryParent ?? document).getElementsByTagName(paramString);
        } else {
            // create element rather than querying for one
            result = createElement(query, initObj);
        }
    } else {
        if (query.includes("&")) {
            // TODO: implement nested queries
            const splitQuery = query.split(">");
            let merged: HTMLElement[] = [];
            for (let q = 0; q < splitQuery.length; q++) {
                const selectors = splitQuery[q].split("&&");
                const queryA = selectors[0];
                const queryB = selectors[1];
                let arrA = S$(queryA.trim());
                if (arrA instanceof SvElement) {
                    arrA = [arrA];
                }
                let arrB = S$(queryB.trim());
                if (arrB instanceof SvElement) {
                    arrB = [arrB];
                }
                for (let i = 0; i < arrA.length; i++) {
                    for (let j = 0; j < arrB.length; j++) {
                        if (arrB[j].native === arrA[i].native) {
                            merged.push(arrA[i].native);
                        }
                    }
                }
            }
            result = merged;
        } else {
            result = (queryParent ?? document).querySelectorAll(query.replaceAll("*", "").replaceAll("||", ","));
        }
    }

    // wrap output
    if (result instanceof HTMLElement) {
        // single result
        result = new SvElement(result);
    } else if (result === null || result === undefined) {
        // not result
        result = null;
    } else {
        // many results
        let arr = new Array(result.length);
        for (let i = result.length - 1; i >= 0; i--) {
            arr[i] = new SvElement(result[i]);
        }
        result = arr;
    }
    
    return result;
}

S$.Element = SvElement;
S$.TemplateElement = SvTemplateElement;

S$.html = String.raw;

S$.escapedIndexOf = (str: string, targetStr: string, start=0): number => {
    // indexOf but ignores strings and svelte templating
    let i = start;
    let inEscape = false;
    let escapeType = "";
    let stringTypes = ['"', "'", "`"];
    while (i < str.length) {
        let c = str.charAt(i);
        let justUnescaped = false;
        if (stringTypes.includes(c)) {
            if (inEscape) {
                if (c === escapeType) {
                    inEscape = false;
                }
            } else {
                inEscape = true;
                escapeType = c;
            }
        } else if (!inEscape && c === "{") {
            inEscape = true;
            escapeType = c;
        } else if (inEscape && escapeType === "{" && c === "}") {
            inEscape = false;
            justUnescaped = true;
        } 
        if (!justUnescaped && str.slice(i, i + targetStr.length) === targetStr && !inEscape) {
            return i;
        }
        i++;
    }
    return -1;
};

S$.parseAttributes = (source: string): object => {
    let attributes = {};

    let idx = 0;
    while (idx < source.length) {
        // has found start of attribute
        if (source[idx] !== " ") {
            // find end of key
            let keyStart = idx;
            idx++;
            while (source[idx] !== " " && source[idx] !== "=" && idx < source.length) {
                idx++;
            }
            const key = source.slice(keyStart, idx);

            // find next token
            while (source[idx] === " " && idx < source.length) {
                idx++;
            }

            // check if the next token is equal sign
            let hasValue = source[idx] === "=";
            if (hasValue) {
                idx++;
            }

            // find start of value
            if (hasValue) {
                while (source[idx] === " " && idx < source.length) {
                    idx++;
                }
            }

            // parse value
            let value = "";
            if (source[idx] === '{') {
                // JS template
                idx++;
                const templateStart = idx;
                idx = S$.escapedIndexOf(source, "}", idx + 1);
                value = source.slice(templateStart, idx);
            } else if (source[idx] === '"') {
                // double quoted value
                idx++;
                const stringStart = idx;
                while (source[idx] !== '"' && idx < source.length) {
                    idx++;
                }
                value = source.slice(stringStart, idx);
            } else if (source[idx] === "'") {
                // single quoted value
                idx++;
                const stringStart = idx;
                while (source[idx] !== "'" && idx < source.length) {
                    idx++;
                }
                value = source.slice(stringStart, idx);
            } else if (hasValue) {
                // non-quoted value
                const stringStart = idx;
                while (source[idx] !== " " && idx < source.length) {
                    idx++;
                }
                value = source.slice(stringStart, idx);
            } else {
                // empty attribute
                idx--;
            }

            attributes[key] = value;
        }
        idx++;
    }

    return attributes;
};

S$.parseHTML = (source: string): (string|SvTemplateElement)[] => {
    let virtualElements: (string|SvTemplateElement)[] = [];
    let idx = 0;
    let endOfLastComponent = 0;

    while (idx < source.length) {
        // hit start of component
        if (source[idx] === "<") {
            if (source[idx+1] === "!") {
                idx += source.slice(idx).indexOf("-->") + 3;
                endOfLastComponent = idx;
            } else {
                // capture text node
                if (idx !== endOfLastComponent) {
                    virtualElements.push(source.slice(endOfLastComponent, idx));
                }
    
                // parse opening tag
                idx++;
                const temp = source.slice(idx);
                const headerEndIdx = S$.escapedIndexOf(temp, ">");
                const componentHeader = temp.slice(0, headerEndIdx);
                const isSelfClosing = componentHeader[componentHeader.length - 1] === "/";
                
                // parse out tag name
                let tagEndIdx = componentHeader.indexOf(" ");
                if (tagEndIdx === -1) {
                    tagEndIdx = isSelfClosing ? componentHeader.length - 1 : componentHeader.length;
                }
                const tagName = componentHeader.slice(0, tagEndIdx);

                // increment idx to element's body
                idx += headerEndIdx + 1;
                
                // parse body
                let content = "";
                if (!isSelfClosing && !selfClosingTags.includes(tagName)) {
                    content = source.slice(idx);
                    
                    // find index of closing tag
                    let closingIdx = 0;
                    let depth = 1;
                    while (depth !== 0 && closingIdx < content.length) {
                        const slc = content.slice(closingIdx);

                        if (slc.startsWith(`<${tagName}`)) {
                            depth++;
                        } else if (slc.startsWith(`</${tagName}`)) {
                            depth--;
                        }

                        if (depth !== 0) {
                            const nextOpening = S$.escapedIndexOf(slc, "<", 1);
                            if (nextOpening === -1) {
                                break;
                            } else {
                                closingIdx += nextOpening;
                            }
                        }
                    }

                    content = content.slice(0, closingIdx);

                    // increment idx to very end of element
                    idx += content.length + (tagName.length + 2 + 1);
                }

                virtualElements.push(new SvTemplateElement(
                    tagName,
                    componentHeader.slice(tagEndIdx, isSelfClosing ? componentHeader.length - 1 : componentHeader.length),
                    content
                ));

                endOfLastComponent = idx;
            }
        } else {
            idx++;
        }
    }

    // capture remaining text node
    if (idx !== endOfLastComponent) {
        virtualElements.push(source.slice(endOfLastComponent, idx));
    }

    return virtualElements;
}

function nestedPropertyOfObjectAsString(obj: object, propsArr: string[]): string {
    let val: object|any = obj;
    for (let n = 0; n < propsArr.length; n++) {
        val = val?.[propsArr[n]];
    }

    if (typeof val === "string") {
        val = (val as string)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;");
    }

    return "" + val;
}

S$.template = (str: string, obj: object, specialChar?: string): string => {
    const escapeChar = specialChar ?? "$";

    let newStr = "";
    let i = 0;
    let currChar: string;

    const noEscapeChar = escapeChar === "";
    if (noEscapeChar) {
        while (i < str.length) {
            currChar = str.charAt(i);
            if (str.charAt(i + 1) === "{") {
                i += 1;
                let props = "";
                while (str.charAt(i) !== "}" && i < str.length) {
                    props += str.charAt(i++);
                }
                newStr += nestedPropertyOfObjectAsString(obj, props.split("."));
            } else {
                newStr += currChar;
            }
            i++;
        }
    } else {
        while (i < str.length) {
            currChar = str.charAt(i);
            if (currChar === escapeChar && str.charAt(i + 1) === "{") {
                i += 2;
                let props = "";
                while (str.charAt(i) !== "}" && i < str.length) {
                    props += str.charAt(i++);
                }
                newStr += nestedPropertyOfObjectAsString(obj, props.split("."));
            } else {
                newStr += currChar;
            }
            i++;
        }
    }
    
    return newStr;
};

S$.getJSON = async (url: string, callback?: Function): Promise<any> => {
    const res = await fetch(url);
    let json: any;
    try {
        json = await res.json();
    } catch (err) {
        json = undefined;
    }

    if (callback !== undefined) {
        callback(json);
    }
    return json;
};

S$.getText = async (url: string, callback?: Function): Promise<any> => {
    const res = await fetch(url);
    let txt: string|undefined;
    try {
        txt = await res.text();
    } catch (err) {
        txt = undefined;
    }

    if (callback !== undefined) {
        callback(txt);
    }
    return txt;
};

S$.getJSONP = (url: string, callback: Function) => {
    const callbackId = Math.random().toString().replace(".", "");
    let script = document.createElement("script");
    S$.getJSON["c" + callbackId] = function (json) {
        script.remove();
        callback(json);
    };
    script.src = url + (url.match(/\?/) ? "&" : "?") + "callback=$.getJSON.c" + callbackId;
    document.body.append(script);
};

S$.loadScript = (url: string) => {
    (S$("script") as SvElement)
        .attr("src", url)
        .appendTo(document.body)
};

S$.components = {};

S$.deleteComponent = (...args: string[]) => {
    for (let i = 0; i < args.length; i++) {
        delete S$.components[args[i]];
    }
};

if (globalThis.window !== undefined) {
    window["S$"] = S$ as any;
}