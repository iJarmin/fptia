!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("fptia",[],n):"object"==typeof exports?exports.fptia=n():e.fptia=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/dist/",n(n.s=2)}([function(e,n){function t(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var o=t(n,e);return n[2]?"@media "+n[2]+"{"+o+"}":o}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){"use strict";window.onerror=function(e,n,t,o,r){var i=document.createElement("li");i.innerText="error::::"+e+n+t+o+r,document.getElementById("infoMain").appendChild(i),document.getElementsByClassName("buttonPanel")[0].style.backgroundColor="red"},n.a={name:"fptia",data:function(){return{infoPanelDisplay:!1}},mounted:function(){},methods:{showInfoPanel:function(){this.infoPanelDisplay=!0},hideInfoPanel:function(){this.infoPanelDisplay=!1,document.getElementsByClassName("buttonPanel")[0].style.backgroundColor="#cccccc"},log:function(e){var n=document.createElement("li");n.classList.add("log"),n.innerText=e,document.getElementById("infoMain").appendChild(n),document.getElementsByClassName("buttonPanel")[0].style.backgroundColor="#e4d31f"},clearLog:function(){document.getElementById("infoMain").innerHTML=""}}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(3),r={install:function(e,n){e.component(o.a.name,o.a),e.prototype.$log=o.a.methods.log}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),n.default=r},function(e,n,t){"use strict";function o(e){t(4)}var r=t(1),i=t(10),a=t(9),s=o,u=a(r.a,i.a,!1,s,null,null);n.a=u.exports},function(e,n,t){var o=t(5);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(7)("61e4ff39",o,!0,{})},function(e,n,t){n=e.exports=t(0)(!1),n.i(t(6),""),n.push([e.i,"",""])},function(e,n,t){n=e.exports=t(0)(!1),n.push([e.i,"a,body,div,input,li,span,textarea,ul{margin:0;padding:0}li{list-style:none}#fptia .buttonPanel{width:8vw;height:8vw;border-radius:100vw;background-color:#ccc;border:1vw solid #fff;position:fixed;right:5%;top:5%;z-index:9999}#fptia .clearButton{color:#fff;font-size:4vw}#fptia .infoPanel{width:100vw;height:100vh;background-color:rgba(0,0,0,.6588235294);padding:4vw;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;z-index:99999;overflow:auto}#fptia .infoPanel ul li{padding-top:2vw;padding-bottom:2vw;font-size:4vw;color:red;border-bottom:1px solid #ccc}#fptia .infoPanel ul li.log{color:#fff}",""])},function(e,n,t){function o(e){for(var n=0;n<e.length;n++){var t=e[n],o=l[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(i(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{for(var a=[],r=0;r<t.parts.length;r++)a.push(i(t.parts[r]));l[t.id]={id:t.id,refs:1,parts:a}}}}function r(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var n,t,o=document.querySelector("style["+g+'~="'+e.id+'"]');if(o){if(v)return h;o.parentNode.removeChild(o)}if(b){var i=p++;o=d||(d=r()),n=a.bind(null,o,i,!1),t=a.bind(null,o,i,!0)}else o=r(),n=s.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}function a(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function s(e,n){var t=n.css,o=n.media,r=n.sourceMap;if(o&&e.setAttribute("media",o),m.ssrId&&e.setAttribute(g,n.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(8),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t,r){v=t,m=r||{};var i=c(e,n);return o(i),function(n){for(var t=[],r=0;r<i.length;r++){var a=i[r],s=l[a.id];s.refs--,t.push(s)}n?(i=c(e,n),o(i)):i=[];for(var r=0;r<t.length;r++){var s=t[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){e.exports=function(e,n){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=i[0],s=i[1],u=i[2],c=i[3],l={id:e+":"+r,css:s,media:u,sourceMap:c};o[a]?o[a].parts.push(l):t.push(o[a]={id:a,parts:[l]})}return t}},function(e,n){e.exports=function(e,n,t,o,r,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var c="function"==typeof s?s.options:s;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),t&&(c.functional=!0),r&&(c._scopeId=r);var l;if(i?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=o),l){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=l,c.render=function(e,n){return l.call(n),d(e,n)}):c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:a,exports:s,options:c}}},function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"fptia"}},[t("div",{staticClass:"buttonPanel",on:{click:e.showInfoPanel}}),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.infoPanelDisplay,expression:"infoPanelDisplay"}],staticClass:"infoPanel",on:{click:e.hideInfoPanel}},[t("div",{staticClass:"clearButton",on:{click:e.clearLog}},[e._v("清除(clear)")]),e._v(" "),t("ul",{attrs:{id:"infoMain"}})])])},r=[],i={render:o,staticRenderFns:r};n.a=i}])});
//# sourceMappingURL=fptia.js.map