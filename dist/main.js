(()=>{var e,t,r={666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(e,t,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=s(e,t,r);if("normal"===l.type){if(n=r.done?d:f,l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=d,r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",m={};function v(){}function b(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,j=w&&w(w(S([])));j&&j!==r&&n.call(j,i)&&(g=j);var O=y.prototype=v.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function Z(e,t){function r(o,i,a,c){var l=s(e[o],e,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(h).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(l.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function P(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:_}}function _(){return{value:t,done:!0}}return b.prototype=O.constructor=y,y.constructor=b,b.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},x(Z.prototype),Z.prototype[a]=function(){return this},e.AsyncIterator=Z,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new Z(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(O),l(O,c,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},931:(e,t)=>{function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.BX=t.tZ=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.ref,o=t.children,a=i(t,["ref","children"]);if("string"==typeof e){var c=document.createElement(e);return Object.keys(a).forEach((function(e){a[e]&&("function"==typeof a[e]?c[e]=a[e]:c.setAttribute(e,a[e]))})),o&&(o instanceof Array?o.forEach((function(e){e&&c.append(e)})):c.append(o)),r&&("function"==typeof r?r(c):c.setAttribute("ref",r)),c}if("function"==typeof e)return e(n({ref:r,children:o},a));console.error("未知 tag 类型",e)},t.HY=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children,r=document.createDocumentFragment();return t&&(t instanceof Array?t.forEach((function(e){r.append(e)})):r.append(t)),r}}},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e](t,t.exports,o),t.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>e+".js",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@vanilla-jsx/website:",o.l=(r,n,i)=>{if(e[r])e[r].push(n);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[n];var h=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=i);var a=o.p+o.u(t),c=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}}),"chunk-"+t)}};var t=self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[],r=t.push.bind(t);t.push=t=>{for(var n,i,[a,c,l]=t,u=0,s=[];u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&s.push(e[i][0]),e[i]=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);for(l&&l(o),r(t);s.length;)s.shift()()}})(),(()=>{"use strict";var e=o(931);function t(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}o(666);const a=[{path:"/",component:function(){return Promise.all([o.e(660),o.e(736)]).then(o.bind(o,736))}},{path:"/Lowercase",component:function(){return Promise.all([o.e(660),o.e(935)]).then(o.bind(o,935))}},{path:"/Kebabcase",component:function(){return Promise.all([o.e(660),o.e(696)]).then(o.bind(o,696))}},{path:"/PascalCase",component:function(){return Promise.all([o.e(660),o.e(119)]).then(o.bind(o,119))}},{path:"/mdx",component:function(){return o.e(229).then(o.bind(o,229))}},{path:"/observer",component:function(){return Promise.all([o.e(660),o.e(917)]).then(o.bind(o,917))}},{path:"/jquery",component:function(){return Promise.all([o.e(660),o.e(57)]).then(o.bind(o,57))}},{path:"/canvas",component:function(){return Promise.all([o.e(660),o.e(607)]).then(o.bind(o,607))}},{path:"/ssr",component:function(){return Promise.all([o.e(660),o.e(558)]).then(o.bind(o,558))}},{path:"/koa",component:function(){return Promise.all([o.e(660),o.e(289)]).then(o.bind(o,289))}},{path:"/component",component:function(){return o.e(633).then(o.bind(o,633))}}].map((function(r){var o,i,a="";return n(n({},r),{},{path:"".concat(a).concat(r.path),component:(o=regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.component();case 2:return n=t.sent,o=n.default,t.abrupt("return",{default:function(){return(0,e.BX)(e.HY,{children:[(0,e.BX)("aside",{class:"sidebar",children:[(0,e.tZ)("h1",{class:"app-name",children:(0,e.tZ)("a",{class:"app-name-link",href:"#".concat(a,"/"),children:"Vanilla-jsx"})}),(0,e.tZ)("div",{class:"sidebar-nav",children:(0,e.BX)("ul",{children:[(0,e.BX)("li",{children:[(0,e.tZ)("p",{children:"Getting started"}),(0,e.BX)("ul",{children:[(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/"),children:"Quick start"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/Lowercase"),children:"Lowercase is HTML Tag"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/Kebabcase"),children:"Kebabcase is WebComponents"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/PascalCase"),children:"PascalCase is FunctionExec"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/observer"),children:"with Reactive - @vanilla-jsx/observer"})})]})]}),(0,e.BX)("li",{children:[(0,e.tZ)("p",{children:"Advanced"}),(0,e.BX)("ul",{children:[(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/canvas"),children:"create Offscreen Canvas"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/jquery"),children:"with jQuery, but not selector"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/ssr"),children:"render HTML str - @vanilla-jsx/ssr"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/koa"),children:"visual Koa Middleware - @vanilla-jsx/koa"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(a,"/mdx"),children:"with Markdown - @vanilla-jsx/mdx-loader"})})]})]}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"https://github.com/vanilla-jsx/vanilla-jsx",target:"_blank",children:"Github Repo"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/website",target:"_blank",children:"Website Source"})})]})})]}),(0,e.tZ)("div",{class:"content",children:(0,e.tZ)("div",{class:"markdown-section",children:(0,e.tZ)(o,{})})})]})}});case 5:case"end":return t.stop()}}),t)})),i=function(){var e=this,r=arguments;return new Promise((function(n,i){var a=o.apply(e,r);function c(e){t(a,n,i,c,l,"next",e)}function l(e){t(a,n,i,c,l,"throw",e)}c(void 0)}))},function(){return i.apply(this,arguments)})})}));function c(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h=[{path:"/",component:function(){return Promise.all([o.e(660),o.e(616)]).then(o.bind(o,616))}},{path:"/Lowercase",component:function(){return Promise.all([o.e(660),o.e(79)]).then(o.bind(o,79))}},{path:"/Kebabcase",component:function(){return Promise.all([o.e(660),o.e(554)]).then(o.bind(o,554))}},{path:"/PascalCase",component:function(){return Promise.all([o.e(660),o.e(966)]).then(o.bind(o,966))}},{path:"/mdx",component:function(){return o.e(248).then(o.bind(o,248))}},{path:"/observer",component:function(){return Promise.all([o.e(660),o.e(380)]).then(o.bind(o,380))}},{path:"/jquery",component:function(){return Promise.all([o.e(660),o.e(187)]).then(o.bind(o,187))}},{path:"/canvas",component:function(){return Promise.all([o.e(660),o.e(35)]).then(o.bind(o,35))}},{path:"/ssr",component:function(){return Promise.all([o.e(660),o.e(472)]).then(o.bind(o,472))}},{path:"/koa",component:function(){return Promise.all([o.e(660),o.e(155)]).then(o.bind(o,155))}},{path:"/component",component:function(){return o.e(709).then(o.bind(o,709))}}].map((function(t){var r,n,o="/zh-cn";return u(u({},t),{},{path:"".concat(o).concat(t.path),component:(r=regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.component();case 2:return n=r.sent,i=n.default,r.abrupt("return",{default:function(){return(0,e.BX)(e.HY,{children:[(0,e.BX)("aside",{class:"sidebar",children:[(0,e.tZ)("h1",{class:"app-name",children:(0,e.tZ)("a",{class:"app-name-link",href:"#".concat(o,"/"),children:"Vanilla-jsx"})}),(0,e.tZ)("div",{class:"sidebar-nav",children:(0,e.BX)("ul",{children:[(0,e.BX)("li",{children:[(0,e.tZ)("p",{children:"准备开始"}),(0,e.BX)("ul",{children:[(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/"),children:"快速入门"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/Lowercase"),children:"小写标签表示 HTML Tag"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/Kebabcase"),children:"中横线连接表示 WebComponents"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/PascalCase"),children:"大驼峰表示 FunctionExec"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/observer"),children:"响应式 - @vanilla-jsx/observer"})})]})]}),(0,e.BX)("li",{children:[(0,e.tZ)("p",{children:"进阶"}),(0,e.BX)("ul",{children:[(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/canvas"),children:"创建离屏 Canvas"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/jquery"),children:"使用 jquery, 但不使用选择器"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/ssr"),children:"渲染 HTML 字符串 - @vanilla-jsx/ssr"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/koa"),children:"可视化 Koa 中间件 - @vanilla-jsx/koa"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"#".concat(o,"/mdx"),children:"在 Markdown 中使用 - @vanilla-jsx/mdx-loader"})})]})]}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"https://github.com/vanilla-jsx/vanilla-jsx",target:"_blank",children:"Github 仓库"})}),(0,e.tZ)("li",{children:(0,e.tZ)("a",{href:"https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/website",target:"_blank",children:"本站点源码"})})]})})]}),(0,e.tZ)("div",{class:"content",children:(0,e.tZ)("div",{class:"markdown-section",children:(0,e.tZ)(i,{})})})]})}});case 5:case"end":return r.stop()}}),r)})),n=function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){c(i,n,o,a,l,"next",e)}function l(e){c(i,n,o,a,l,"throw",e)}a(void 0)}))},function(){return n.apply(this,arguments)})})}));function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){return function(t){var r=t.children,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["children"]),o=Object.keys(n).map((function(e){return void 0!==n[e]&&"function"!=typeof n[e]?" ".concat(e,'="').concat(n[e],'"'):""})),i=void 0===r?[]:r instanceof Array?r.reduce((function(e,t){return t?t instanceof Array?e.concat(t):(e.push(t),e):e}),[]):[r];return["<",e].concat(f(o),f(i.length?[">"].concat(f(i),["</",e,">"]):["/>"]))}},m=d("div"),v=d("img"),b=(0,e.BX)(m,{attr:"something",children:["children",(0,e.tZ)(v,{src:"xx"})]});console.log(b.join(""));const y=function(){return(0,e.tZ)("div",{})};function g(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const j=[{path:"/playground",component:function(){return{default:y}}}].concat(g(a),g(h));function O(e,t,r,n,o,i,a){try{var c=e[i](a),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}var x=function(t){var r=t.children;return(0,e.BX)(e.HY,{children:[(0,e.tZ)("nav",{class:"app-nav no-badge",children:(0,e.tZ)("ul",{children:(0,e.BX)("li",{children:["Translations",(0,e.BX)("ul",{children:[(0,e.tZ)("li",{children:(0,e.BX)("a",{href:location.hash.replace("#/zh-cn/","#/"),title:" English",children:[(0,e.tZ)("img",{class:"emoji",src:"https://github.githubassets.com/images/icons/emoji/uk.png",alt:"uk"}),"English"]})}),(0,e.tZ)("li",{children:(0,e.BX)("a",{href:location.hash.replace("#/","#/zh-cn/"),title:" 中文",children:[(0,e.tZ)("img",{class:"emoji",src:"https://github.githubassets.com/images/icons/emoji/cn.png",alt:"cn"}),"中文"]})})]})]})})}),r]})};document.body.append((0,e.tZ)((function(){var t={},r=function(){var r,n=(r=regeneratorRuntime.mark((function r(){var n,o,i,a,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=0;case 1:if(!(n<j.length)){r.next=16;break}if((o=j[n]).path!==location.hash.slice(1)){r.next=13;break}for((i=t.root).innerHTML="";i.hasChildNodes();)i.removeChild(i.firstChild);return r.next=9,o.component();case 9:return a=r.sent,c=a.default,i.append((0,e.tZ)(x,{children:(0,e.tZ)(c,{})})),r.abrupt("return",!1);case 13:n++,r.next=1;break;case 16:location.replace("#/");case 17:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function a(e){O(i,n,o,a,c,"next",e)}function c(e){O(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(){return n.apply(this,arguments)}}();return window.addEventListener("hashchange",(function(){return r()})),(0,e.tZ)("div",{ref:function(e){t.root=e,r()}})}),{}))})()})();