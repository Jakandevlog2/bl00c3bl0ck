(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{6940:function(e,t,r){"use strict";r.d(t,{default:function(){return R}});var n=r(7437);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t,r){if(r||2==arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var s=r(3666),l=new Map,u=function(e){return e.cloneNode(!0)},c=function(){return"file:"===window.location.protocol},f=function(e,t,r){var n=new XMLHttpRequest;n.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&2===n.readyState){var t=n.getResponseHeader("Content-Type");if(!t)throw Error("Content type not found");var i=(0,s.Q)(t).type;if(!("image/svg+xml"===i||"text/plain"===i))throw Error("Invalid content type: ".concat(i))}if(4===n.readyState){if(404===n.status||null===n.responseXML)throw Error(c()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(200===n.status||c()&&0===n.status)r(null,n);else throw Error("There was a problem injecting the SVG: "+n.status+" "+n.statusText)}}catch(e){if(n.abort(),e instanceof Error)r(e,n);else throw e}},n.open("GET",e),n.withCredentials=t,n.overrideMimeType&&n.overrideMimeType("text/xml"),n.send()},d={},p=function(e,t){d[e]=d[e]||[],d[e].push(t)},h=function(e){for(var t=function(t,r){setTimeout(function(){if(Array.isArray(d[e])){var r=l.get(e),n=d[e][t];r instanceof SVGSVGElement&&n(null,u(r)),r instanceof Error&&n(r),t===d[e].length-1&&delete d[e]}},0)},r=0,n=d[e].length;r<n;r++)t(r)},m=function(e,t,r){if(l.has(e)){var n=l.get(e);if(void 0===n){p(e,r);return}if(n instanceof SVGSVGElement){r(null,u(n));return}}l.set(e,void 0),p(e,r),f(e,t,function(t,r){var n;t?l.set(e,t):(null===(n=r.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&l.set(e,r.responseXML.documentElement),h(e)})},g=function(e,t,r){f(e,t,function(e,t){var n;e?r(e):(null===(n=t.responseXML)||void 0===n?void 0:n.documentElement)instanceof SVGSVGElement&&r(null,t.responseXML.documentElement)})},v=0,y=[],b={},w="http://www.w3.org/1999/xlink",S=function(e,t,r,n,i,o,s){var l=e.getAttribute("data-src")||e.getAttribute("src");if(!l){s(Error("Invalid data-src or src attribute"));return}if(-1!==y.indexOf(e)){y.splice(y.indexOf(e),1),e=null;return}y.push(e),e.setAttribute("src",""),(n?m:g)(l,i,function(n,i){if(!i){y.splice(y.indexOf(e),1),e=null,s(n);return}var u,c,f=e.getAttribute("id");f&&i.setAttribute("id",f);var d=e.getAttribute("title");d&&i.setAttribute("title",d);var p=e.getAttribute("width");p&&i.setAttribute("width",p);var h=e.getAttribute("height");h&&i.setAttribute("height",h);var m=Array.from(new Set(a(a(a([],(i.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();i.setAttribute("class",m);var g=e.getAttribute("style");g&&i.setAttribute("style",g),i.setAttribute("data-src",l);var S=[].filter.call(e.attributes,function(e){return/^data-\w[\w-]*$/.test(e.name)});if(Array.prototype.forEach.call(S,function(e){e.name&&e.value&&i.setAttribute(e.name,e.value)}),r){var E,_,x,j,C,A={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(A).forEach(function(e){E=e,x=A[e],_=i.querySelectorAll(E+"[id]");for(var t=0,r=_.length;t<r;t++)!function(e,t){C=(j=_[e].id)+"-"+ ++v,Array.prototype.forEach.call(x,function(e){r=i.querySelectorAll("["+e+'*="'+j+'"]');for(var t=0,n=r.length;t<n;t++){var o=r[t].getAttribute(e);(!o||o.match(RegExp('url\\("?#'+j+'"?\\)')))&&r[t].setAttribute(e,"url(#"+C+")")}});for(var r,n=i.querySelectorAll("[*|href]"),o=[],a=0,s=n.length;a<s;a++){var l=n[a].getAttributeNS(w,"href");l&&l.toString()==="#"+_[e].id&&o.push(n[a])}for(var u=0,c=o.length;u<c;u++)o[u].setAttributeNS(w,"href","#"+C);_[e].id=C}(t)})}i.removeAttribute("xmlns:a");for(var O=i.querySelectorAll("script"),I=[],R=0,P=O.length;R<P;R++)(c=O[R].getAttribute("type"))&&"application/ecmascript"!==c&&"application/javascript"!==c&&"text/javascript"!==c||((u=O[R].innerText||O[R].textContent)&&I.push(u),i.removeChild(O[R]));if(I.length>0&&("always"===t||"once"===t&&!b[l])){for(var k=0,M=I.length;k<M;k++)Function(I[k])(window);b[l]=!0}var T=i.querySelectorAll("style");if(Array.prototype.forEach.call(T,function(e){e.textContent+=""}),i.setAttribute("xmlns","http://www.w3.org/2000/svg"),i.setAttribute("xmlns:xlink",w),o(i),!e.parentNode){y.splice(y.indexOf(e),1),e=null,s(Error("Parent node is null"));return}e.parentNode.replaceChild(i,e),y.splice(y.indexOf(e),1),e=null,s(null,i)})},E=function(e,t){var r=void 0===t?{}:t,n=r.afterAll,i=void 0===n?function(){}:n,o=r.afterEach,a=void 0===o?function(){}:o,s=r.beforeEach,l=void 0===s?function(){}:s,u=r.cacheRequests,c=void 0===u||u,f=r.evalScripts,d=void 0===f?"never":f,p=r.httpRequestWithCredentials,h=void 0!==p&&p,m=r.renumerateIRIElements,g=void 0===m||m;if(e&&"length"in e)for(var v=0,y=0,b=e.length;y<b;y++)S(e[y],d,g,c,h,l,function(t,r){a(t,r),e&&"length"in e&&e.length===++v&&i(v)});else e?S(e,d,g,c,h,l,function(t,r){a(t,r),i(1),e=null}):i(0)},_=r(1448),x=r(2265),j=function(e,t){for(var r in e)if(!(r in t))return!0;for(var n in t)if(e[n]!==t[n])return!0;return!1},C=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],A="http://www.w3.org/2000/svg",O="http://www.w3.org/1999/xlink",I=function(e){function t(){for(var t,r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).initialState={hasError:!1,isLoading:!0},t.state=t.initialState,t._isMounted=!1,t.reactWrapper=void 0,t.nonReactWrapper=void 0,t.refCallback=function(e){t.reactWrapper=e},t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e);var r=t.prototype;return r.renderSVG=function(){var e=this;if(this.reactWrapper instanceof(((null==(t=this.reactWrapper)?void 0:t.ownerDocument)||document).defaultView||window).Node){var t,r,n,i=this.props,o=i.desc,a=i.evalScripts,s=i.httpRequestWithCredentials,l=i.renumerateIRIElements,u=i.src,c=i.title,f=i.useRequestCache,d=this.props.onError,p=this.props.beforeInjection,h=this.props.afterInjection,m=this.props.wrapper;"svg"===m?((r=document.createElementNS(A,m)).setAttribute("xmlns",A),r.setAttribute("xmlns:xlink",O),n=document.createElementNS(A,m)):(r=document.createElement(m),n=document.createElement(m)),r.appendChild(n),n.dataset.src=u,this.nonReactWrapper=this.reactWrapper.appendChild(r);var g=function(t){if(e.removeSVG(),!e._isMounted){d(t);return}e.setState(function(){return{hasError:!0,isLoading:!1}},function(){d(t)})};E(n,{afterEach:function(t,r){if(t){g(t);return}e._isMounted&&e.setState(function(){return{isLoading:!1}},function(){try{h(r)}catch(e){g(e)}})},beforeEach:function(e){if(e.setAttribute("role","img"),o){var t=e.querySelector(":scope > desc");t&&e.removeChild(t);var r=document.createElement("desc");r.innerHTML=o,e.prepend(r)}if(c){var n=e.querySelector(":scope > title");n&&e.removeChild(n);var i=document.createElement("title");i.innerHTML=c,e.prepend(i)}try{p(e)}catch(e){g(e)}},cacheRequests:f,evalScripts:a,httpRequestWithCredentials:s,renumerateIRIElements:l})}},r.removeSVG=function(){var e;null!=(e=this.nonReactWrapper)&&e.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},r.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},r.componentDidUpdate=function(e){var t=this;j(i({},e),this.props)&&this.setState(function(){return t.initialState},function(){t.removeSVG(),t.renderSVG()})},r.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},r.render=function(){var e=this.props;e.afterInjection,e.beforeInjection,e.desc,e.evalScripts;var t=e.fallback;e.httpRequestWithCredentials;var r=e.loading;e.renumerateIRIElements,e.src,e.title,e.useRequestCache;var n=e.wrapper,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,C);return x.createElement(n,i({},o,{ref:this.refCallback},"svg"===n?{xmlns:A,xmlnsXlink:O}:{}),this.state.isLoading&&r&&x.createElement(r,null),this.state.hasError&&t&&x.createElement(t,null))},t}(x.Component);function R(e){let{src:t,...r}=e;return(0,n.jsx)(I,{src:t,...r})}I.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"},I.propTypes={afterInjection:_.func,beforeInjection:_.func,desc:_.string,evalScripts:_.oneOf(["always","once","never"]),fallback:_.oneOfType([_.func,_.object,_.string]),httpRequestWithCredentials:_.bool,loading:_.oneOfType([_.func,_.object,_.string]),onError:_.func,renumerateIRIElements:_.bool,src:_.string.isRequired,title:_.string,useRequestCache:_.bool,wrapper:_.oneOf(["div","span","svg"])}},3666:function(e,t){"use strict";/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var r=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,n=/\\([\u000b\u0020-\u00ff])/g,i=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function o(e){this.parameters=Object.create(null),this.type=e}t.Q=function(e){if(!e)throw TypeError("argument string is required");var t,a,s,l="object"==typeof e?function(e){var t;if("function"==typeof e.getHeader?t=e.getHeader("content-type"):"object"==typeof e.headers&&(t=e.headers&&e.headers["content-type"]),"string"!=typeof t)throw TypeError("content-type header is missing from object");return t}(e):e;if("string"!=typeof l)throw TypeError("argument string is required to be a string");var u=l.indexOf(";"),c=-1!==u?l.slice(0,u).trim():l.trim();if(!i.test(c))throw TypeError("invalid media type");var f=new o(c.toLowerCase());if(-1!==u){for(r.lastIndex=u;a=r.exec(l);){if(a.index!==u)throw TypeError("invalid parameter format");u+=a[0].length,t=a[1].toLowerCase(),34===(s=a[2]).charCodeAt(0)&&-1!==(s=s.slice(1,-1)).indexOf("\\")&&(s=s.replace(n,"$1")),f.parameters[t]=s}if(u!==l.length)throw TypeError("invalid parameter format")}return f}},8173:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),s=n._(r(4887)),l=n._(r(8321)),u=r(497),c=r(7103),f=r(3938);r(2301);let d=r(291),p=n._(r(1241)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:s,width:l,decoding:u,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:v,fill:y,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:E,sizesInput:_,onLoad:x,onError:j,...C}=e;return(0,o.jsx)("img",{...C,...g(d),loading:h,width:l,height:s,decoding:u,"data-nimg":y?"fill":"1",className:c,style:f,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,p,b,w,S,v,_))},[r,p,b,w,S,j,v,_,t]),onLoad:e=>{m(e.currentTarget,p,b,w,S,v,_)},onError:e=>{E(!0),"empty"!==p&&S(!0),j&&j(e)}})});function y(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,n),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(d.RouterContext),n=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=h||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[b,w]=(0,a.useState)(!1),[S,E]=(0,a.useState)(!1),{props:_,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{..._,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:E,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(y,{isAppRouter:!r,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext({})},687:function(e,t){"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(2301);let n=r(1564),i=r(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r;let s,l,u,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:h,className:m,quality:g,width:v,height:y,fill:b=!1,style:w,overrideSrc:S,onLoad:E,onLoadingComplete:_,placeholder:x="empty",blurDataURL:j,fetchPriority:C,layout:A,objectFit:O,objectPosition:I,lazyBoundary:R,lazyRoot:P,...k}=e,{imgConf:M,showAltText:T,blurComplete:z,defaultLoader:q}=t,G=M||i.imageConfigDefault;if("allSizes"in G)s=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);s={...G,allSizes:e,deviceSizes:t}}if(void 0===q)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let W=k.loader||q;delete k.loader,delete k.srcSet;let L="__next_img_default"in W;if(L){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:r,...n}=t;return e(n)}}if(A){"fill"===A&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!f&&(f=t)}let V="",N=a(v),D=a(y);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,V=e.src,!b){if(N||D){if(N&&!D){let t=N/e.width;D=Math.round(e.height*t)}else if(!N&&D){let t=D/e.height;N=Math.round(e.width*t)}}else N=e.width,D=e.height}}let U=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:V)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,U=!1),s.unoptimized&&(d=!0),L&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(d=!0),p&&(C="high");let F=a(g),H=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:I}:{},T?{}:{color:"transparent"},w),$=z||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:N,heightInt:D,blurWidth:l,blurHeight:u,blurDataURL:j||"",objectFit:H.objectFit})+'")':'url("'+x+'")',B=$?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:a,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,n)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:l[c]})}}({config:s,src:c,unoptimized:d,width:N,quality:F,sizes:f,loader:W});return{props:{...k,loading:U?"lazy":h,fetchPriority:C,width:N,height:D,decoding:"async",className:m,style:{...H,...B},sizes:X.sizes,srcSet:X.srcSet,src:S||X.src},meta:{unoptimized:d,priority:p,placeholder:x,fill:b}}}},8321:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return f}});let n=r(9920),i=r(1452),o=r(7437),a=i._(r(2265)),s=n._(r(5960)),l=r(2901),u=r(6590),c=r(687);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(d,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=n?40*n:t,l=i?40*i:r,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(9920)._(r(2265)),i=r(7103),o=n.default.createContext(i.imageConfigDefault)},7103:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1241:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5960:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(2265),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,a=i?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),s()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},9949:function(e,t,r){"use strict";var n=r(8877);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,o,a){if(a!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return r.PropTypes=r,r}},1448:function(e,t,r){e.exports=r(9949)()},8877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);