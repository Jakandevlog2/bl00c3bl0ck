"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{7612:function(r,e,o){o.d(e,{cn:function(){return T}});var t=o(4839),n=/^\[(.+)\]$/;function i(r,e){var o=r;return e.split("-").forEach(function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}var l=/\s+/;function a(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){if("string"==typeof e)return e;for(var o,t="",n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);return t}(r))&&(t&&(t+=" "),t+=e);return t}function s(r){var e=function(e){return e[r]||[]};return e.isThemeGetter=!0,e}var c=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),p=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(r){return w(r)||u.has(r)||d.test(r)||g(r)}function g(r){return M(r,"length",P)}function h(r){return M(r,"size",N)}function v(r){return M(r,"position",N)}function x(r){return M(r,"url",S)}function y(r){return M(r,"number",w)}function w(r){return!Number.isNaN(Number(r))}function k(r){return r.endsWith("%")&&w(r.slice(0,-1))}function z(r){return E(r)||M(r,"number",E)}function C(r){return c.test(r)}function j(){return!0}function G(r){return p.test(r)}function I(r){return M(r,"",W)}function M(r,e,o){var t=c.exec(r);return!!t&&(t[1]?t[1]===e:o(t[2]))}function P(r){return f.test(r)}function N(){return!1}function S(r){return r.startsWith("url(")}function E(r){return Number.isInteger(Number(r))}function W(r){return b.test(r)}var O=function(){for(var r,e,o,t=arguments.length,s=Array(t),c=0;c<t;c++)s[c]=arguments[c];var d=function(t){var l=s[0];return e=(r=function(r){var e,o,t,l,a,s,c,d,u,p,f;return{cache:function(r){if(r<1)return{get:function(){},set:function(){}};var e=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++e>r&&(e=0,t=o,o=new Map)}return{get:function(r){var e=o.get(r);return void 0!==e?e:void 0!==(e=t.get(r))?(n(r,e),e):void 0},set:function(r,e){o.has(r)?o.set(r,e):n(r,e)}}}(r.cacheSize),splitModifiers:(o=1===(e=r.separator||":").length,t=e[0],l=e.length,function(r){for(var n,i=[],a=0,s=0,c=0;c<r.length;c++){var d=r[c];if(0===a){if(d===t&&(o||r.slice(c,c+l)===e)){i.push(r.slice(s,c)),s=c+l;continue}if("/"===d){n=c;continue}}"["===d?a++:"]"===d&&a--}var u=0===i.length?r:r.substring(s),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:i,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:n&&n>s?n-s:void 0}}),...(d=r.theme,u=r.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(r.classGroups),u?f.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?u+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){return[u+r[0],r[1]]})):r})]}):f).forEach(function(r){var e=r[0];(function r(e,o,t,n){e.forEach(function(e){if("string"==typeof e){(""===e?o:i(o,e)).classGroupId=t;return}if("function"==typeof e){if(e.isThemeGetter){r(e(n),o,t,n);return}o.validators.push({validator:e,classGroupId:t});return}Object.entries(e).forEach(function(e){var l=e[0];r(e[1],i(o,l),t,n)})})})(r[1],p,e,d)}),a=r.conflictingClassGroups,c=void 0===(s=r.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(r){var e=r.split("-");return""===e[0]&&1!==e.length&&e.shift(),function r(e,o){if(0===e.length)return o.classGroupId;var t=e[0],n=o.nextPart.get(t),i=n?r(e.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var l=e.join("-");return o.validators.find(function(r){return(0,r.validator)(l)})?.classGroupId}}(e,p)||function(r){if(n.test(r)){var e=n.exec(r)[1],o=e?.substring(0,e.indexOf(":"));if(o)return"arbitrary.."+o}}(r)},getConflictingClassGroupIds:function(r,e){var o=a[r]||[];return e&&c[r]?[].concat(o,c[r]):o}})}}(s.slice(1).reduce(function(r,e){return e(r)},l()))).cache.get,o=r.cache.set,d=u,u(t)};function u(t){var n,i,a,s,c,d=e(t);if(d)return d;var u=(i=(n=r).splitModifiers,a=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,t.trim().split(l).map(function(r){var e=i(r),o=e.modifiers,t=e.hasImportantModifier,n=e.baseClassName,l=e.maybePostfixModifierPosition,s=a(l?n.substring(0,l):n),c=!!l;if(!s){if(!l||!(s=a(n)))return{isTailwindClass:!1,originalClassName:r};c=!1}var d=(function(r){if(r.length<=1)return r;var e=[],o=[];return r.forEach(function(r){"["===r[0]?(e.push.apply(e,o.sort().concat([r])),o=[]):o.push(r)}),e.push.apply(e,o.sort()),e})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:s,originalClassName:r,hasPostfixModifier:c}}).reverse().filter(function(r){if(!r.isTailwindClass)return!0;var e=r.modifierId,o=r.classGroupId,t=r.hasPostfixModifier,n=e+o;return!c.has(n)&&(c.add(n),s(o,t).forEach(function(r){return c.add(e+r)}),!0)}).reverse().map(function(r){return r.originalClassName}).join(" "));return o(t,u),u}return function(){return d(a.apply(null,arguments))}}(function(){var r=s("colors"),e=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),l=s("borderSpacing"),a=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),b=s("gradientColorStops"),M=s("gradientColorStopPositions"),P=s("inset"),N=s("margin"),S=s("opacity"),E=s("padding"),W=s("saturate"),O=s("scale"),T=s("sepia"),$=s("skew"),_=s("space"),R=s("translate"),A=function(){return["auto","contain","none"]},q=function(){return["auto","hidden","clip","visible","scroll"]},B=function(){return["auto",C,e]},D=function(){return[C,e]},F=function(){return["",m]},H=function(){return["auto",w,C]},J=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},K=function(){return["solid","dashed","dotted","double","none"]},L=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Q=function(){return["start","end","center","between","around","evenly","stretch"]},U=function(){return["","0",C]},V=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},X=function(){return[w,y]},Y=function(){return[w,C]};return{cacheSize:500,theme:{colors:[j],spacing:[m],blur:["none","",G,C],brightness:X(),borderColor:[r],borderRadius:["none","","full",G,C],borderSpacing:D(),borderWidth:F(),contrast:X(),grayscale:U(),hueRotate:Y(),invert:U(),gap:D(),gradientColorStops:[r],gradientColorStopPositions:[k,g],inset:B(),margin:B(),opacity:X(),padding:D(),saturate:X(),scale:X(),sepia:U(),skew:Y(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":V()}],"break-before":[{"break-before":V()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(J(),[C])}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",z]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",z]},C]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[z]},C]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(Q())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Q(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Q(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[_]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[_]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",C,e]}],"min-w":[{"min-w":["min","max","fit",C,m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[G]},G,C]}],h:[{h:[C,e,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C,m]}],"max-h":[{"max-h":[C,e,"min","max","fit"]}],"font-size":[{text:["base",G,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",y]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",w,y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,m]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(K(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",C,m]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(J(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},x]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[M]}],"gradient-via-pos":[{via:[M]}],"gradient-to-pos":[{to:[M]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[].concat(K(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:K()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(K())}],"outline-offset":[{"outline-offset":[C,m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",G,I]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":L()}],"bg-blend":[{"bg-blend":L()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",G,C]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[W]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[W]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[z,C]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[m,y]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}});function T(...r){return O((0,t.W)(r))}},4839:function(r,e,o){o.d(e,{W:function(){return t}});function t(){for(var r,e,o=0,t="";o<arguments.length;)(r=arguments[o++])&&(e=function r(e){var o,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=r(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o)}return n}(r))&&(t&&(t+=" "),t+=e);return t}}}]);