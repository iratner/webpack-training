/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/spinners/js/BlueQuillSpinner.js":
/*!********************************************************!*\
  !*** ./src/components/spinners/js/BlueQuillSpinner.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/common-utils */ \"./src/utilities/common-utils.js\");\n/* harmony import */ var _sass_spinners_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/_spinners.scss */ \"./src/components/spinners/sass/_spinners.scss\");\n/* harmony import */ var _sass_spinners_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_spinners_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Templates for creating components\n\nvar blueQuillSpinnerTP = __webpack_require__(/*! ../templates/_BlueQuillSpinner.hbs */ \"./src/components/spinners/templates/_BlueQuillSpinner.hbs\");\n\n\n\nvar BlueQuillSpinner =\n/*#__PURE__*/\nfunction () {\n  function BlueQuillSpinner() {\n    var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'spinner-fixed';\n    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BlueQuillSpinner.sizes.MEDIUM;\n\n    _classCallCheck(this, BlueQuillSpinner);\n\n    this.fixed = fixed;\n    this.size = size;\n    this.uuid = Object(_utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateUUID\"])();\n    this.html = blueQuillSpinnerTP({\n      uuid: this.uuid,\n      fixed: this.fixed,\n      size: this.size\n    });\n    console.log(\"BlueQuillSpinner\");\n  }\n\n  _createClass(BlueQuillSpinner, [{\n    key: \"destroy\",\n    value: function destroy() {\n      document.querySelector('[data-uuid=\"' + this.uuid + '\"]').remove();\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      document.querySelector('.blue-quill-spinner[data-uuid=\"' + this.uuid + '\"]').classList.remove('hidden');\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      document.querySelector('.blue-quill-spinner[data-uuid=\"' + this.uuid + '\"]').classList.add('hidden');\n    }\n  }]);\n\n  return BlueQuillSpinner;\n}();\n\n_defineProperty(BlueQuillSpinner, \"sizes\", {\n  SMALL: 'small-spinner',\n  MEDIUM: 'medium-spinner',\n  LARGE: 'large-spinner'\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlueQuillSpinner);\n\n//# sourceURL=webpack:///./src/components/spinners/js/BlueQuillSpinner.js?");

/***/ }),

/***/ "./src/components/spinners/sass/_spinners.scss":
/*!*****************************************************!*\
  !*** ./src/components/spinners/sass/_spinners.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/spinners/sass/_spinners.scss?");

/***/ }),

/***/ "./src/components/spinners/templates/_BlueQuillSpinner.hbs":
/*!*****************************************************************!*\
  !*** ./src/components/spinners/templates/_BlueQuillSpinner.hbs ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"<div class=\\\"blue-quill-spinner \"\n    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"size\",\"hash\":{},\"data\":data}) : helper)))\n    + \" \"\n    + alias4(((helper = (helper = helpers.fixed || (depth0 != null ? depth0.fixed : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"fixed\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" data-uuid=\\\"\"\n    + alias4(((helper = (helper = helpers.uuid || (depth0 != null ? depth0.uuid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"uuid\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\">\\r\\n    <span class=\\\"blue-quill-spinner-shadow\\\">\\r\\n        <span class=\\\"blue-quill-spinner-inner\\\"></span>\\r\\n    </span>\\r\\n</div>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./src/components/spinners/templates/_BlueQuillSpinner.hbs?");

/***/ }),

/***/ "./src/entry/index.js":
/*!****************************!*\
  !*** ./src/entry/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"./src/entry/print.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sass/style.scss */ \"./src/entry/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_spinners_js_BlueQuillSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/spinners/js/BlueQuillSpinner */ \"./src/components/spinners/js/BlueQuillSpinner.js\");\n\n\n\n // let hbsButton = require('./handlebars/_button.hbs');\n\nfunction component() {\n  // let element = document.createElement('div');\n  // let btn = document.createElement('button');\n  //\n  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n  //\n  // btn.innerHTML = 'Click me and check the console!';\n  // btn.onclick = printMe;\n  // btn.classList.add('blue-text', 'hello');\n  //\n  // element.appendChild(btn);\n  //\n  // let anotherBtn = document.createElement('span');\n  // anotherBtn.innerHTML = hbsButton({text : \"Hey there!\"});\n  //\n  // element.appendChild(anotherBtn);\n  // console.log(hbsButton());\n  return element;\n  console.log(\"This is coming from index.js\");\n} // document.body.appendChild(component());\n\n\nfunction initializePage() {\n  var pageWrapper = document.createElement('div');\n  pageWrapper.id = 'blue-quill-components';\n  var spinner = new _components_spinners_js_BlueQuillSpinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  pageWrapper.innerHTML = spinner.html;\n  document.body.appendChild(pageWrapper);\n  var toggle = false;\n  console.log(\"Here's the log dude\"); // setInterval(() => {\n  //    if (toggle) spinner.hide();\n  //    else spinner.show();\n  //\n  //    toggle = !toggle;\n  // }, 1000)\n}\n\ninitializePage();\n\n//# sourceURL=webpack:///./src/entry/index.js?");

/***/ }),

/***/ "./src/entry/print.js":
/*!****************************!*\
  !*** ./src/entry/print.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printMe; });\nfunction printMe() {\n  console.log('I get called from print.js!');\n}\n\n//# sourceURL=webpack:///./src/entry/print.js?");

/***/ }),

/***/ "./src/entry/sass/style.scss":
/*!***********************************!*\
  !*** ./src/entry/sass/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/entry/sass/style.scss?");

/***/ }),

/***/ "./src/utilities/common-utils.js":
/*!***************************************!*\
  !*** ./src/utilities/common-utils.js ***!
  \***************************************/
/*! exports provided: generateUUID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateUUID\", function() { return generateUUID; });\nfunction generateUUID() {\n  var d = Date.now();\n  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {\n    var r = (d + Math.random() * 16) % 16 | 0;\n    d = Math.floor(d / 16);\n    return (c == 'x' ? r : r & 0x7 | 0x8).toString(16);\n  });\n  return uuid;\n}\n\n//# sourceURL=webpack:///./src/utilities/common-utils.js?");

/***/ })

/******/ });