/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: #f1faee;\\n    margin: 0px;\\n}\\n\\n.navbar {\\n    width: 100%;\\n    height: 110px;\\n    background-color: #1d3557;\\n    font-family: 'Special Elite', cursive;\\n    color: #f1faee;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    text-align: center;\\n    font-size: 24px;\\n    padding-bottom: 10px;\\n}\\n\\n.titleText {\\n    font-weight: lighter;\\n    position: relative;\\n    top: -15px;\\n}\\n\\n#button-div {\\n    width: 100%;\\n    display: flex;\\n    background-color: #457b9d;\\n    position: relative;\\n    bottom: 35px;\\n    margin-top: -15px;\\n}\\n\\n.tabForm {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-grow: 1;\\n    margin-right: 5vw;\\n    margin-left: 5vw;\\n}\\n\\n.button {\\n    font-size: 25px;\\n    background-color: #457b9d;\\n    width: 100%;\\n    padding-top: 10px;\\n    z-index: 100;\\n}\\n\\n.button:hover {\\n    color: #f1faee;\\n    background-color: #a8dadc;\\n}\\n\\n.activeTab {\\n    background-color: #a8dadccc;\\n}\\n\\ninput {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    appearance: none;\\n    position: relative;\\n    z-index: -10;\\n\\n}\\n\\nlabel {\\n    position: relative;\\n    z-index: -10;\\n}\\n\\n@media screen and (min-width: 600px) {\\n    .button {\\n      font-size: 40px;\\n    }\\n\\n    .titleText {\\n        font-size: 60px;\\n    }\\n\\n    .tabForm {\\n        margin-right: 30vw;\\n        margin-left: 30vw;    \\n    }\\n\\n    #button-div {\\n        bottom: 30px;\\n    }\\n}  \\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://craft-beer-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://craft-beer-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _page_creation_createPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-creation/createPage.js */ \"./src/page-creation/createPage.js\");\n\n\n\nvar content = document.getElementById(\"content\");\n(0,_page_creation_createPage_js__WEBPACK_IMPORTED_MODULE_1__.default)(content);\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/page-creation/addButtons.js":
/*!*****************************************!*\
  !*** ./src/page-creation/addButtons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addButtons)\n/* harmony export */ });\n/* harmony import */ var _createHomeTab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createHomeTab.js */ \"./src/page-creation/createHomeTab.js\");\n/* harmony import */ var _createHomeTab_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_createHomeTab_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createMenuTab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuTab.js */ \"./src/page-creation/createMenuTab.js\");\n/* harmony import */ var _createMenuTab_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createMenuTab_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _createContactTab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createContactTab.js */ \"./src/page-creation/createContactTab.js\");\n/* harmony import */ var _createContactTab_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_createContactTab_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction addButtons(parentElement) {\n    var buttons = document.createElement(\"div\")\n    var form = document.createElement(\"form\");\n\n    buttons.id = \"button-div\"\n\n    var homeButton = new Button(\"radio\", \"tab-buttons\", \"Home\", true, test());\n    var menuButton = new Button(\"radio\", \"tab-buttons\", \"Menu\", false, null);\n    var contactButton = new Button(\"radio\", \"tab-buttons\", \"Contact\", false, null);\n\n    form.appendChild(homeButton.createButton);\n    form.appendChild(menuButton.createButton);\n    form.appendChild(contactButton.createButton);\n\n    form.classList.add(\"tabForm\");\n    buttons.appendChild(form);\n\n    parentElement.appendChild(buttons);\n    \n}\n\nclass Button {\n    constructor(Btype, Bname, Bvalue, Bdefault, pageLoadFunction) {\n        this.Btype = Btype;\n        this.Bname = Bname;\n        this.Bvalue = Bvalue;\n        this.Bdefault = Bdefault;\n        this.pageLoadFunction = pageLoadFunction;\n    }\n\n    createTab() {\n        this.pageLoadFunction()\n    }\n\n    destroyTab() {\n        document.getElementById(\"tab\").remove()\n    }\n\n    get createButton() {\n        var buttonDiv = document.createElement(\"div\");\n        var buttonInput = document.createElement(\"input\");\n        var buttonLabel = document.createElement(\"label\");\n\n        buttonInput.type = this.Btype\n        buttonInput.value = this.Bvalue\n        buttonInput.checked = this.Bdefault\n        buttonInput.name = this.Bname\n        buttonInput.id = this.Bvalue\n        buttonLabel.htmlFor = this.Bvalue\n        buttonLabel.innerHTML = this.Bvalue\n\n        buttonDiv.classList.add(\"button\")\n\n        buttonDiv.appendChild(buttonInput);\n        buttonDiv.appendChild(buttonLabel);\n\n        if (this.Bdefault) {\n            buttonDiv.classList.add(\"activeTab\")\n        }\n\n        buttonDiv.addEventListener(\"click\", (e) => {\n            makeActive(e);\n            this.pageLoadFunction\n            this.destroyPage();\n        });\n\n        return buttonDiv;\n    }\n}\n\nfunction makeActive(e) {\n    var currentActive = document.getElementsByClassName(\"activeTab\");\n    currentActive[0].classList.remove(\"activeTab\");\n\n    e.toElement.classList.add(\"activeTab\")\n}\n\nfunction test() {\n    console.log(\"e\");\n}\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/addButtons.js?");

/***/ }),

/***/ "./src/page-creation/addFonts.js":
/*!***************************************!*\
  !*** ./src/page-creation/addFonts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addFonts)\n/* harmony export */ });\n// load fonts into header\n\nfunction addFonts() {\n    var titleFont = document.createElement(\"style\")\n    titleFont.innerHTML = \"@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');\"\n\n    document.head.appendChild(titleFont)  \n}\n\n\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/addFonts.js?");

/***/ }),

/***/ "./src/page-creation/createContactTab.js":
/*!***********************************************!*\
  !*** ./src/page-creation/createContactTab.js ***!
  \***********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/createContactTab.js?");

/***/ }),

/***/ "./src/page-creation/createHomeTab.js":
/*!********************************************!*\
  !*** ./src/page-creation/createHomeTab.js ***!
  \********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/createHomeTab.js?");

/***/ }),

/***/ "./src/page-creation/createMenuTab.js":
/*!********************************************!*\
  !*** ./src/page-creation/createMenuTab.js ***!
  \********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/createMenuTab.js?");

/***/ }),

/***/ "./src/page-creation/createNavbar.js":
/*!*******************************************!*\
  !*** ./src/page-creation/createNavbar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNavbar)\n/* harmony export */ });\n/* harmony import */ var _addButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addButtons.js */ \"./src/page-creation/addButtons.js\");\n\n\nfunction createNavbar(element) {\n    var navbar = document.createElement(\"div\");\n    navbar.classList.add(\"navbar\");\n\n    var titleText = document.createElement(\"h1\");\n    titleText.innerText = \"Craft Beer Restaurant\"\n    titleText.classList.add(\"titleText\")\n\n    navbar.appendChild(titleText);\n\n    (0,_addButtons_js__WEBPACK_IMPORTED_MODULE_0__.default)(navbar)\n\n    element.appendChild(navbar);\n};\n\n \n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/createNavbar.js?");

/***/ }),

/***/ "./src/page-creation/createPage.js":
/*!*****************************************!*\
  !*** ./src/page-creation/createPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\n/* harmony import */ var _createNavbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createNavbar.js */ \"./src/page-creation/createNavbar.js\");\n/* harmony import */ var _addFonts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addFonts.js */ \"./src/page-creation/addFonts.js\");\n\n\n\nfunction createPage(element) {\n    (0,_createNavbar_js__WEBPACK_IMPORTED_MODULE_0__.default)(element);\n    (0,_addFonts_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n    // createImages\n    // createTabs\n    // etc\n}\n\n\n\n//# sourceURL=webpack://craft-beer-restaurant/./src/page-creation/createPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;