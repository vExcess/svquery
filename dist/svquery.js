(()=>{var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/svquery.ts
var svquery_exports = {};
__export(svquery_exports, {
  S$: () => S$
});
if(typeof module!=='undefined')module.exports = __toCommonJS(svquery_exports);

// src/SvElement.ts
var SvElement = class _SvElement {
  native;
  constructor(el) {
    this.native = el;
    for (const key in el.$methods) {
      this[key] = el.$methods[key];
    }
  }
  prependTo(a) {
    (a instanceof _SvElement ? a.native : a).prepend(this.native);
    return this;
  }
  appendTo(a) {
    (a instanceof _SvElement ? a.native : a).append(this.native);
    return this;
  }
  addClass(...args) {
    this.native.classList.add(...args);
    return this;
  }
  removeClass(...args) {
    this.native.classList.remove(...args);
    return this;
  }
  setId(a) {
    this.native.id = a;
    return this;
  }
  html(a) {
    if (a === void 0) return this.native.innerHTML;
    this.native.innerHTML = a;
    return this;
  }
  text(a) {
    let native = this.native;
    if (native.value) {
      if (a === void 0) return native.value;
      native.value = a;
    } else {
      if (a === void 0) return this.native.textContent;
      this.native.textContent = a;
    }
    return this;
  }
  replaceChild(a, b) {
    this.native.replaceChild(
      a instanceof _SvElement ? a.native : a,
      b instanceof _SvElement ? b.native : b
    );
    return this;
  }
  removeChild(a) {
    this.native.removeChild(a instanceof _SvElement ? a.native : a);
    return this;
  }
  on(a, b, c) {
    this.native.addEventListener(a, b, c);
    return this;
  }
  css(c) {
    if (typeof c === "string") {
      let pairs = c.split(";");
      let colonIdx;
      let key;
      let val;
      for (let i = 0; i < pairs.length; i++) {
        colonIdx = pairs[i].indexOf(":");
        key = pairs[i].slice(0, colonIdx).trim();
        if (key.length > 0) {
          val = pairs[i].slice(colonIdx + 1).trim();
          this.native.style[key] = val;
        }
      }
    } else {
      for (const p in c) {
        this.native.style[p] = c[p];
      }
    }
    return this;
  }
  attr(a, b) {
    if (typeof a === "object") {
      for (const p in a) {
        this.native[p] = a[p];
      }
    } else {
      this.native[a] = b;
    }
    return this;
  }
  prepend(...args) {
    for (let i = 0; i < args.length; i++) {
      const el = args[i];
      args[i] = el instanceof _SvElement ? el.native : el;
    }
    this.native.prepend(...args);
    return this;
  }
  append(...args) {
    for (let i = 0; i < args.length; i++) {
      const el = args[i];
      args[i] = el instanceof _SvElement ? el.native : el;
    }
    this.native.append(...args);
    return this;
  }
  $(query, initObj) {
    return S$(query, initObj, this.native);
  }
  get parentEl() {
    return S$(this.native.parentElement);
  }
  insertBefore(newEl, refEl) {
    this.native.insertBefore(
      newEl instanceof _SvElement ? newEl.native : newEl,
      refEl instanceof _SvElement ? refEl.native : refEl
    );
    return this;
  }
};
var EL_PROPS = {
  props: "value,textContent,nodeValue,autoPictureInPicture,disablePictureInPicture,kind,srclang,label,default,dateTime,wrap,placeholder,readOnly,required,rows,autofocus,cols,defaultValue,maxLength,minLength,caption,tHead,tFoot,span,rowSpan,scope,col,colgroup,row,rowgroup,colSpan,abbr,media,sizes,srcset,size,selectedIndex,length,multiple,name,type,async,defer,noModule,cite,selected,defaultSelected,userMap,data,reversed,start,height,low,max,min,optimum,charset,content,httpEquiv,href,hreflang,rel,as,htmlFor,patterns,selectionEnd,selectionStart,selectionDirection,alt,accept,files,webkitdirectory,webkitEntries,checked,defaultChecked,indeterminate,disabled,formAction,formEnctype,formMethod,formNoValidate,formTarget,step,valueAsDate,valueAsNumber,dirName,inputmode,useMap,decoding,isMap,loading,crossOrigin,referrerPolicy,sandbox,srcdoc,allow,method,action,encoding,enctype,acceptCharset,autocomplete,noValidate,validationMessage,validity,willValidate,returnValue,open,width,tabIndex,volume,src,srcObject,preload,preservesPitch,playbackRate,loop,muted,currentTime,defaultMuted,defaultPlaybackRate,disableRemotePlayback,controls,audioTracts,autoplay,coords,host,hostname,target,username,search,protocol,port,pathname,password,hash,download,accessKey,contentEditable,dir,draggable,enterKeyHint,hidden,inert,innerText,inputMode,popover,lang,nonce,outerText,spellcheck,style,title,translate,className,id,innerHTML,outerHTML,part,scrollLeft,scrollTop,slot".split(","),
  read_props: "previousSibling,parentElement,parentNode,ownerDocument,nodeType,nodeName,nextSibling,lastChild,isConnected,firstChild,childNodes,baseURI,videoHeight,videoWidth,readyState,track,textLength,cells,rowIndex,sectionRowIndex,tBodies,headers,cellIndex,sheet,selectedOptions,options,position,index,areas,relList,control,form,labels,list,x,y,naturalHeight,naturalWidth,currentSrc,complete,contentDocument,contentWindow,elements,validateMessage,textTracks,videoTracks,seekable,seeking,played,networkState,paused,duration,ended,error,mediaKeys,controlsList,buffered,reList,origin,accessKeyLabel,attributeStyleMap,isContentEditable,dataset,offsetHeight,offsetLeft,offsetParent,offsetTop,offsetWidth,assignedSlot,attributes,childElementCount,children,classList,clientHeight,clientLeft,clientTop,clientWidth,firstElementChild,lastElementChild,localName,namespaceURI,nextElementSibling,prefix,previousElementSibling,scrollHeight,scrollWidth,shadowRoot,tagName".split(","),
  methods: "normalize,lookupNamespaceURI,lookupPrefix,isSameNode,isEqualNode,isDefaultNamespace,hasChildNodes,getRootNode,contains,compareDocumentPosition,cloneNode,appendChild,getVideoPlaybackQuality,requestPictureInPicture,setRangeText,setSelectionRange,checkValidity,setCustomValidity,deleteRow,insertRow,deleteCell,insertCell,createTHead,deleteTHead,createTFoot,deleteTFoot,createTBody,createCaption,deleteCaption,assign,assignedNodes,assignedElements,item,namedItem,remove,blur,click,focus,select,showPicker,reportValidity,stepDown,stepUp,decode,requestSubmit,reset,submit,close,show,showModal,captureStream,getContext,toDateURL,toBlob,transferControlToOffscreen,addTextTrack,canPlayType,faskSeek,load,pause,play,setMediaKeys,setSinkId,toString,attachInternals,hidePopover,showPopover,togglePopover,after,attachShadow,animate,before,closest,computedStyleMap,dispatchEvent,getAnimations,getAttribute,getAttributeNames,getAttributeNode,getAttributeNodeNS,getAttributeNS,getBoundingClientRect,getClientRects,getElementsByClassName,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,hasAttributes,hasPointerCapture,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,matches,querySelector,querySelectorAll,releasePointerCapture,removeAttribute,removeAttributeNode,removeAttributeNS,removeEventListener,replaceChildren,replaceWith,requestFullscreen,requestPointerLock,scroll,scrollBy,scrollIntoView,scrollTo,setAttribute,setAttributeNode,setAttributeNodeNS,setAttributeNS,setPointerCapture,toggleAttribute".split(",")
};
var obj = {};
for (let name of EL_PROPS.props) {
  obj[name] = {
    get() {
      return this.native[name];
    },
    set(val) {
      this.native[name] = val;
    }
  };
}
for (let name of EL_PROPS.read_props) {
  obj[name] = {
    get() {
      return this.native[name];
    }
  };
}
for (let name of EL_PROPS.methods) {
  obj[name] = {
    get() {
      return this.native[name].bind(this.native);
    }
  };
}
Object.defineProperties(SvElement.prototype, obj);

// src/SvTemplateElement.ts
var nativeTagNames = "a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,search,section,select,small,source,span,strong,style,sub,summary,sup,svg,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr".split(",");
var SvTemplateElement = class _SvTemplateElement {
  tag;
  attributes;
  dependencies = {};
  children;
  constructor(tag, attributes, innerHTML, dependencies) {
    this.tag = tag;
    this.attributes = typeof attributes === "string" ? S$.parseAttributes(attributes) : attributes;
    this.children = S$.parseHTML(innerHTML);
    if (dependencies) {
      this.dependencies = dependencies;
    } else {
      this.calculateDependencies();
    }
  }
  getInnerHTML() {
    let innerHTML = "";
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (childNode instanceof _SvTemplateElement) {
        innerHTML += childNode.getInnerHTML();
      } else {
        innerHTML += childNode;
      }
    }
    return innerHTML;
  }
  calculateDependencies() {
    let deps = {};
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      if (typeof childNode === "string") {
        let textContent = childNode;
        let startIdx = 0;
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
  templatedText(textTemplate, initObj) {
    let startIdx = 0;
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
  createInstance(initObj, depNodeMap) {
    const native = document.createElement(nativeTagNames.includes(this.tag) ? this.tag : "div");
    native["$template"] = this;
    for (let i = 0; i < this.children.length; i++) {
      const childNode = this.children[i];
      let nativeChild;
      if (childNode instanceof _SvTemplateElement) {
        nativeChild = childNode.createInstance(initObj, depNodeMap);
      } else {
        nativeChild = new Text(this.templatedText(childNode, initObj));
      }
      native.append(nativeChild);
    }
    if (depNodeMap) {
      for (const depName in this.dependencies) {
        if (!depNodeMap[depName]) {
          depNodeMap[depName] = [];
        }
        const depChildIdxs = this.dependencies[depName];
        for (let j = 0; j < depChildIdxs.length; j++) {
          const idx = depChildIdxs[j];
          if (idx === -1) {
            depNodeMap[depName].push(native);
          } else {
            depNodeMap[depName].push(native.childNodes[idx]);
          }
        }
      }
    }
    native["$directives"] = {};
    for (const key in this.attributes) {
      const value = this.attributes[key];
      if (key === "class") {
        native.className = value;
      } else if (key.startsWith("data-")) {
        native.dataset[key] = value;
      } else if (key.startsWith("on:")) {
        native["$directives"][key] = 1;
      } else {
        native[key] = value;
      }
    }
    return native;
  }
  serialize(isChild) {
    let serializedChildren = [];
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      serializedChildren.push(child instanceof _SvTemplateElement ? child.serialize(true) : child);
    }
    const arrayed = [this.tag, this.attributes, this.dependencies, serializedChildren];
    return isChild ? arrayed : JSON.stringify(arrayed);
  }
  static deserialize(serialized) {
    let el = new _SvTemplateElement(serialized[0], serialized[1], "", serialized[2]);
    const children = serialized[3];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      el.children.push(typeof child === "string" ? child : _SvTemplateElement.deserialize(child));
    }
    return el;
  }
};

// src/svquery.ts
function createElement(tag, initObj) {
  const component = S$.components[tag];
  if (component) {
    return new component(initObj);
  } else {
    return document.createElement(tag);
  }
}
var selfClosingTags = "area,base,br,col,command,embed,hr,img,input,keygen,link,meta,param,source,track,wbr".split(",");
function S$(a, initObj, queryParent) {
  const element = a;
  if (element == null) throw "SvQuery Recieved `null`";
  if (element instanceof Element) return new SvElement(element);
  if (element instanceof SvElement) return element;
  const query = a.trimStart();
  let result = null;
  const fancySelector = query.includes(">") || query.includes("&") || query.includes("|");
  if (!fancySelector) {
    const paramString = query.slice(1);
    const firstChar = query.charAt(0);
    if (firstChar === "#") {
      result = document.getElementById(paramString);
    } else if (firstChar === ".") {
      result = (queryParent ?? document).getElementsByClassName(paramString);
    } else if (firstChar === "*") {
      result = (queryParent ?? document).getElementsByTagName(paramString);
    } else {
      result = createElement(query, initObj);
    }
  } else {
    if (query.includes("&")) {
      const splitQuery = query.split(">");
      let merged = [];
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
  if (result instanceof HTMLElement) {
    result = new SvElement(result);
  } else if (result === null || result === void 0) {
    result = null;
  } else {
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
S$.escapedIndexOf = (str, targetStr, start = 0) => {
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
S$.parseAttributes = (source) => {
  let attributes = {};
  let idx = 0;
  while (idx < source.length) {
    if (source[idx] !== " ") {
      let keyStart = idx;
      idx++;
      while (source[idx] !== " " && source[idx] !== "=" && idx < source.length) {
        idx++;
      }
      const key = source.slice(keyStart, idx);
      while (source[idx] === " " && idx < source.length) {
        idx++;
      }
      let hasValue = source[idx] === "=";
      if (hasValue) {
        idx++;
      }
      if (hasValue) {
        while (source[idx] === " " && idx < source.length) {
          idx++;
        }
      }
      let value = "";
      if (source[idx] === "{") {
        idx++;
        const templateStart = idx;
        idx = S$.escapedIndexOf(source, "}", idx + 1);
        value = source.slice(templateStart, idx);
      } else if (source[idx] === '"') {
        idx++;
        const stringStart = idx;
        while (source[idx] !== '"' && idx < source.length) {
          idx++;
        }
        value = source.slice(stringStart, idx);
      } else if (source[idx] === "'") {
        idx++;
        const stringStart = idx;
        while (source[idx] !== "'" && idx < source.length) {
          idx++;
        }
        value = source.slice(stringStart, idx);
      } else if (hasValue) {
        const stringStart = idx;
        while (source[idx] !== " " && idx < source.length) {
          idx++;
        }
        value = source.slice(stringStart, idx);
      } else {
        idx--;
      }
      attributes[key] = value;
    }
    idx++;
  }
  return attributes;
};
S$.parseHTML = (source) => {
  let virtualElements = [];
  let idx = 0;
  let endOfLastComponent = 0;
  while (idx < source.length) {
    if (source[idx] === "<") {
      if (source[idx + 1] === "!") {
        idx += source.slice(idx).indexOf("-->") + 3;
        endOfLastComponent = idx;
      } else {
        if (idx !== endOfLastComponent) {
          virtualElements.push(source.slice(endOfLastComponent, idx));
        }
        idx++;
        const temp = source.slice(idx);
        const headerEndIdx = S$.escapedIndexOf(temp, ">");
        const componentHeader = temp.slice(0, headerEndIdx);
        const isSelfClosing = componentHeader[componentHeader.length - 1] === "/";
        let tagEndIdx = componentHeader.indexOf(" ");
        if (tagEndIdx === -1) {
          tagEndIdx = isSelfClosing ? componentHeader.length - 1 : componentHeader.length;
        }
        const tagName = componentHeader.slice(0, tagEndIdx);
        idx += headerEndIdx + 1;
        let content = "";
        if (!isSelfClosing && !selfClosingTags.includes(tagName)) {
          content = source.slice(idx);
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
  if (idx !== endOfLastComponent) {
    virtualElements.push(source.slice(endOfLastComponent, idx));
  }
  return virtualElements;
};
function nestedPropertyOfObjectAsString(obj2, propsArr) {
  let val = obj2;
  for (let n = 0; n < propsArr.length; n++) {
    val = val?.[propsArr[n]];
  }
  if (typeof val === "string") {
    val = val.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  }
  return "" + val;
}
S$.template = (str, obj2, specialChar) => {
  const escapeChar = specialChar ?? "$";
  let newStr = "";
  let i = 0;
  let currChar;
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
        newStr += nestedPropertyOfObjectAsString(obj2, props.split("."));
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
        newStr += nestedPropertyOfObjectAsString(obj2, props.split("."));
      } else {
        newStr += currChar;
      }
      i++;
    }
  }
  return newStr;
};
S$.getJSON = async (url, callback) => {
  const res = await fetch(url);
  let json;
  try {
    json = await res.json();
  } catch (err) {
    json = void 0;
  }
  if (callback !== void 0) {
    callback(json);
  }
  return json;
};
S$.getText = async (url, callback) => {
  const res = await fetch(url);
  let txt;
  try {
    txt = await res.text();
  } catch (err) {
    txt = void 0;
  }
  if (callback !== void 0) {
    callback(txt);
  }
  return txt;
};
S$.getJSONP = (url, callback) => {
  const callbackId = Math.random().toString().replace(".", "");
  let script = document.createElement("script");
  S$.getJSON["c" + callbackId] = function(json) {
    script.remove();
    callback(json);
  };
  script.src = url + (url.match(/\?/) ? "&" : "?") + "callback=$.getJSON.c" + callbackId;
  document.body.append(script);
};
S$.loadScript = (url) => {
  S$("script").attr("src", url).appendTo(document.body);
};
S$.components = {};
S$.deleteComponent = (...args) => {
  for (let i = 0; i < args.length; i++) {
    delete S$.components[args[i]];
  }
};
if (globalThis.window !== void 0) {
  window["S$"] = S$;
}
})()