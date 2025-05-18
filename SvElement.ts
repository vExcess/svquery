import { S$ } from "./svquery";

export class SvElement {
    native: HTMLElement;

    constructor(el: HTMLElement) {
        this.native = el;

        for (const key in (el as any).$methods) {
            this[key] = (el as any).$methods[key];
        }
    }

    prependTo(a: SvElement|Element): SvElement {
        (a instanceof SvElement ? a.native : a).prepend(this.native);
        return this;
    }
    
    appendTo(a: SvElement|Element): SvElement {
        (a instanceof SvElement ? a.native : a).append(this.native);
        return this;
    }
    
    addClass(...args: string[]): SvElement {
        this.native.classList.add(...args);
        return this;
    }
    
    removeClass(...args: string[]): SvElement {
        this.native.classList.remove(...args);
        return this;
    }
    
    setId(a: string): SvElement {
        this.native.id = a;
        return this;
    }
    
    html(a?: string): SvElement|string {
        if (a === undefined) return this.native.innerHTML;
        this.native.innerHTML = a;
        return this;
    }
    
    text(a?: string): SvElement|string|null {
        let native = this.native as any;
        if (native.value) {
            if (a === undefined) return native.value;
            native.value = a;
        } else {
            if (a === undefined) return this.native.textContent;
            this.native.textContent = a;
        }
        return this;
    }

    replaceChild(a: SvElement|Element, b: SvElement|Element): SvElement {
        this.native.replaceChild(
            a instanceof SvElement ? a.native : a,
            b instanceof SvElement ? b.native : b
        );
        return this;
    }

    removeChild(a: SvElement|Element): SvElement {
        this.native.removeChild(a instanceof SvElement ? a.native : a);
        return this;
    }
    
    on(a: string, b: EventListenerOrEventListenerObject, c?: boolean|AddEventListenerOptions): SvElement {
        this.native.addEventListener(a, b, c);
        return this;
    }
    
    css(c: string|object): SvElement {
        if (typeof c === "string") {
            let pairs = c.split(";");
            let colonIdx: number;
            let key: string;
            let val: string;
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
    
    attr(a: string|object, b?: any): SvElement {
        if (typeof a === "object") {
            for (const p in a) {
                this.native[p] = a[p];
            }
        } else {
            this.native[a] = b;
        }
        return this;
    }

    prepend(...args: SvElement[]|Element[]): SvElement {
        for (let i = 0; i < args.length; i++) {
            const el = args[i];
            args[i] = el instanceof SvElement ? el.native : el;
        }
        this.native.prepend(...(args as Element[]));
        return this;
    }
    
    append(...args: SvElement[]|Element[]): SvElement {
        for (let i = 0; i < args.length; i++) {
            const el = args[i];
            args[i] = el instanceof SvElement ? el.native : el;
        }
        this.native.append(...(args as Element[]));
        return this;
    }

    $(query: string, initObj?: object): SvElement|SvElement[] {
        return S$(query, initObj, this.native);
    }

    get parentEl(): SvElement {
        return S$(this.native.parentElement) as SvElement;
    }

    insertBefore(newEl: SvElement|Element, refEl: SvElement|Element): SvElement {
        this.native.insertBefore(
            newEl instanceof SvElement ? newEl.native : newEl,
            refEl instanceof SvElement ? refEl.native : refEl
        );
        return this;
    }
}

const EL_PROPS = {
    props: "value,textContent,nodeValue,autoPictureInPicture,disablePictureInPicture,kind,srclang,label,default,dateTime,wrap,placeholder,readOnly,required,rows,autofocus,cols,defaultValue,maxLength,minLength,caption,tHead,tFoot,span,rowSpan,scope,col,colgroup,row,rowgroup,colSpan,abbr,media,sizes,srcset,size,selectedIndex,length,multiple,name,type,async,defer,noModule,cite,selected,defaultSelected,userMap,data,reversed,start,height,low,max,min,optimum,charset,content,httpEquiv,href,hreflang,rel,as,htmlFor,patterns,selectionEnd,selectionStart,selectionDirection,alt,accept,files,webkitdirectory,webkitEntries,checked,defaultChecked,indeterminate,disabled,formAction,formEnctype,formMethod,formNoValidate,formTarget,step,valueAsDate,valueAsNumber,dirName,inputmode,useMap,decoding,isMap,loading,crossOrigin,referrerPolicy,sandbox,srcdoc,allow,method,action,encoding,enctype,acceptCharset,autocomplete,noValidate,validationMessage,validity,willValidate,returnValue,open,width,tabIndex,volume,src,srcObject,preload,preservesPitch,playbackRate,loop,muted,currentTime,defaultMuted,defaultPlaybackRate,disableRemotePlayback,controls,audioTracts,autoplay,coords,host,hostname,target,username,search,protocol,port,pathname,password,hash,download,accessKey,contentEditable,dir,draggable,enterKeyHint,hidden,inert,innerText,inputMode,popover,lang,nonce,outerText,spellcheck,style,title,translate,className,id,innerHTML,outerHTML,part,scrollLeft,scrollTop,slot".split(","),
    read_props: "previousSibling,parentElement,parentNode,ownerDocument,nodeType,nodeName,nextSibling,lastChild,isConnected,firstChild,childNodes,baseURI,videoHeight,videoWidth,readyState,track,textLength,cells,rowIndex,sectionRowIndex,tBodies,headers,cellIndex,sheet,selectedOptions,options,position,index,areas,relList,control,form,labels,list,x,y,naturalHeight,naturalWidth,currentSrc,complete,contentDocument,contentWindow,elements,validateMessage,textTracks,videoTracks,seekable,seeking,played,networkState,paused,duration,ended,error,mediaKeys,controlsList,buffered,reList,origin,accessKeyLabel,attributeStyleMap,isContentEditable,dataset,offsetHeight,offsetLeft,offsetParent,offsetTop,offsetWidth,assignedSlot,attributes,childElementCount,children,classList,clientHeight,clientLeft,clientTop,clientWidth,firstElementChild,lastElementChild,localName,namespaceURI,nextElementSibling,prefix,previousElementSibling,scrollHeight,scrollWidth,shadowRoot,tagName".split(","),
    methods: "normalize,lookupNamespaceURI,lookupPrefix,isSameNode,isEqualNode,isDefaultNamespace,hasChildNodes,getRootNode,contains,compareDocumentPosition,cloneNode,appendChild,getVideoPlaybackQuality,requestPictureInPicture,setRangeText,setSelectionRange,checkValidity,setCustomValidity,deleteRow,insertRow,deleteCell,insertCell,createTHead,deleteTHead,createTFoot,deleteTFoot,createTBody,createCaption,deleteCaption,assign,assignedNodes,assignedElements,item,namedItem,remove,blur,click,focus,select,showPicker,reportValidity,stepDown,stepUp,decode,requestSubmit,reset,submit,close,show,showModal,captureStream,getContext,toDateURL,toBlob,transferControlToOffscreen,addTextTrack,canPlayType,faskSeek,load,pause,play,setMediaKeys,setSinkId,toString,attachInternals,hidePopover,showPopover,togglePopover,after,attachShadow,animate,before,closest,computedStyleMap,dispatchEvent,getAnimations,getAttribute,getAttributeNames,getAttributeNode,getAttributeNodeNS,getAttributeNS,getBoundingClientRect,getClientRects,getElementsByClassName,getElementsByTagName,getElementsByTagNameNS,hasAttribute,hasAttributeNS,hasAttributes,hasPointerCapture,insertAdjacentElement,insertAdjacentHTML,insertAdjacentText,matches,querySelector,querySelectorAll,releasePointerCapture,removeAttribute,removeAttributeNode,removeAttributeNS,removeEventListener,replaceChildren,replaceWith,requestFullscreen,requestPointerLock,scroll,scrollBy,scrollIntoView,scrollTo,setAttribute,setAttributeNode,setAttributeNodeNS,setAttributeNS,setPointerCapture,toggleAttribute".split(",")
};

// extend SvElement from all native elements
let obj = {};
for (let name of EL_PROPS.props) {
    obj[name] = {
        get(): any {
            return this.native[name];
        },
        set(val: any): void {
            this.native[name] = val;
        }
    };
}
for (let name of EL_PROPS.read_props) {
    obj[name] = {
        get(): any {
            return this.native[name];
        }
    };
}
for (let name of EL_PROPS.methods) {
    obj[name] = {
        get(): Function {
            return this.native[name].bind(this.native);
        }
    };
}
Object.defineProperties(SvElement.prototype, obj);
