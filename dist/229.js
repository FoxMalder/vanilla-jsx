(self.webpackChunk_vanilla_jsx_website=self.webpackChunk_vanilla_jsx_website||[]).push([[229],{229:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>i});var t=r(931);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c={};function i(e){var n=e.components,r=function(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["components"]);return(0,t.BX)("wrapper",l(l(l({},c),r),{},{components:n,mdxType:"MDXLayout",children:[(0,t.tZ)("h1",{children:"with Markdown - @vanilla-jsx/mdx-loader"}),(0,t.tZ)("blockquote",{children:(0,t.BX)("p",{parentName:"blockquote",children:["just like this website. ",(0,t.tZ)("a",l(l({parentName:"p"},{href:"https://github.com/vanilla-jsx/vanilla-jsx/tree/main/examples/website"}),{},{children:"see source"}))]})}),(0,t.tZ)("h2",{children:"install and config"}),(0,t.tZ)("pre",{children:(0,t.tZ)("code",l(l({parentName:"pre"},{className:"language-bash"}),{},{children:"npm i @vanilla-jsx/mdx-loader\n"}))}),(0,t.tZ)("p",{children:"and edit webpack config:"}),(0,t.tZ)("pre",{children:(0,t.tZ)("code",l(l({parentName:"pre"},{className:"language-js"}),{},{children:"...\n    module: {\n        rules: [\n            ...\n            {\n                test: /.mdx?$/,\n                use: [\n                    'babel-loader',\n                    '@vanilla-jsx/mdx-loader'\n                ]\n            }\n        ]\n    },\n...\n"}))}),(0,t.tZ)("p",{children:"then, coding jsx at Markdown."})]}))}i.isMDXComponent=!0}}]);