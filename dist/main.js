(()=>{"use strict";var e={772:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(645),o=t.n(a)()((function(e){return e[1]}));o.push([e.id,"body {\n    background-color: #e8eddf;\n    margin: 0px;\n}\n\n.navbar {\n    width: 100%;\n    height: 110px;\n    background-color: #333533;\n    font-family: 'Special Elite', cursive;\n    color: #e8eddf;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    font-size: 24px;\n    padding-bottom: 10px;\n}\n\n.titleText {\n    font-weight: lighter;\n    position: relative;\n    top: -15px;\n}\n\n#button-div {\n    width: 100%;\n    display: flex;\n    background-color: #242423;\n    position: relative;\n    bottom: 35px;\n    margin-top: -15px;\n}\n\n.tabForm {\n    display: flex;\n    justify-content: space-between;\n    flex-grow: 1;\n    margin-right: 5vw;\n    margin-left: 5vw;\n}\n\n.button {\n    font-size: 25px;\n    color: #f5cb5c;\n    background-color: #242423;\n    width: 100%;\n    padding-top: 10px;\n    z-index: 100;\n}\n\n\n.button:hover {\n    color: #f1faee;\n    background-color:#f5cb5c;\n}\n\n.activeTab {\n    background-color: #f5cb5cdd;\n    color: #333533;\n}\n\ninput {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    position: relative;\n    z-index: -10;\n\n}\n\nlabel {\n    position: relative;\n    z-index: -10;\n}\n\n.beerDiv {\n    width: 300px;\n}\n\n.beerImage {\n}\n\n@media screen and (min-width: 600px) {\n    .button {\n      font-size: 40px;\n    }\n\n    .titleText {\n        font-size: 60px;\n    }\n\n    .tabForm {\n        margin-right: 30vw;\n        margin-left: 30vw;    \n    }\n\n    #button-div {\n        bottom: 30px;\n    }\n}  \n\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var a,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function r(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=r(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:m(p,n),references:1}),a.push(s)}return a}function d(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=t.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,a){var o=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(i,r[n]):e.appendChild(i)}}function p(e,n,t){var a=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,v=0;function m(e,n){var t,a,o;if(n.singleton){var i=v++;t=f||(f=d(n)),a=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),a=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var o=r(t[a]);i[o].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=r(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}},264:(e,n,t)=>{e.exports=t.p+"c46dcedc0f4bc3e44f16.svg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/",(()=>{var e=t(379),n=t.n(e),a=t(772);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var o,i=t(264);function r(e){var n=document.createElement("div"),t=document.createElement("form");n.id="button-div";var a=new c("radio","tab-buttons","Home",!0,void console.log("test function ran from addButton.js")),o=new c("radio","tab-buttons","Menu",!1,null),r=new c("radio","tab-buttons","Contact",!1,null);t.appendChild(a.createButton),t.appendChild(o.createButton),t.appendChild(r.createButton),t.classList.add("tabForm"),n.appendChild(t),e.appendChild(n),function(e){e.appendChild(function(){var e=document.createElement("div");e.classList.add("beerDiv");var n=new Image;return n.src=i,n.classList.add("beerIcon"),e.appendChild(n),e}())}(e)}class c{constructor(e,n,t,a,o){this.Btype=e,this.Bname=n,this.Bvalue=t,this.Bdefault=a,this.pageLoadFunction=o}createTab(){this.pageLoadFunction()}destroyTab(){document.getElementById("tab").remove()}get createButton(){var e=document.createElement("div"),n=document.createElement("input"),t=document.createElement("label");return n.type=this.Btype,n.value=this.Bvalue,n.checked=this.Bdefault,n.name=this.Bname,n.id=this.Bvalue,t.htmlFor=this.Bvalue,t.innerHTML=this.Bvalue,e.classList.add("button"),e.appendChild(n),e.appendChild(t),this.Bdefault&&e.classList.add("activeTab"),e.addEventListener("click",(e=>{!function(e){document.getElementsByClassName("activeTab")[0].classList.remove("activeTab"),e.toElement.classList.add("activeTab")}(e),this.pageLoadFunction,this.destroyTab()})),e}}(function(e){var n=document.createElement("div");n.classList.add("navbar");var t=document.createElement("h1");t.innerText="Craft Beer Factory",t.classList.add("titleText"),n.appendChild(t),r(n),e.appendChild(n)})(document.getElementById("content")),(o=document.createElement("style")).innerHTML="@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');",document.head.appendChild(o)})()})();