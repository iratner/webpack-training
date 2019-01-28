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

/***/ "./src/components/categorized/modals/blue-quill-blanket-with-centered-content/BlueQuillModalWithCenteredContent.js":
/*!*************************************************************************************************************************!*\
  !*** ./src/components/categorized/modals/blue-quill-blanket-with-centered-content/BlueQuillModalWithCenteredContent.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlueQuillModalWithCenteredContent; });\n/* harmony import */ var _utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/common-utils */ \"./src/utilities/common-utils.js\");\n/* harmony import */ var _blue_quill_blanket_with_centered_content_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_blue-quill-blanket-with-centered-content.scss */ \"./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_blue-quill-blanket-with-centered-content.scss\");\n/* harmony import */ var _blue_quill_blanket_with_centered_content_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blue_quill_blanket_with_centered_content_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar template = __webpack_require__(/*! ./_BlueQuillBlanketWithCenteredContent.hbs */ \"./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_BlueQuillBlanketWithCenteredContent.hbs\");\n\nvar BlueQuillModalWithCenteredContent =\n/*#__PURE__*/\nfunction () {\n  function BlueQuillModalWithCenteredContent(content, width, height, parentSelector, isDarkened, fadeIn) {\n    _classCallCheck(this, BlueQuillModalWithCenteredContent);\n\n    this.blanketClasses = isDarkened ? 'darken-background' : '';\n    this.contentClasses = fadeIn ? 'blanket-fade-in' : '';\n    this.uuid = Object(_utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateUUID\"])();\n    this.html = template({\n      width: width,\n      height: height,\n      content: content,\n      uuid: this.uuid,\n      blanketClasses: this.blanketClasses,\n      contentClasses: this.contentClasses\n    });\n  }\n\n  _createClass(BlueQuillModalWithCenteredContent, [{\n    key: \"destroy\",\n    value: function destroy() {\n      document.querySelector('.blue-quill-blanket-with-centered-content-close[data-uuid=\"' + this.uuid + '\"]').remove();\n    }\n  }]);\n\n  return BlueQuillModalWithCenteredContent;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/categorized/modals/blue-quill-blanket-with-centered-content/BlueQuillModalWithCenteredContent.js?");

/***/ }),

/***/ "./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_BlueQuillBlanketWithCenteredContent.hbs":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_BlueQuillBlanketWithCenteredContent.hbs ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"<span class=\\\"blue-quill-blanket-with-centered-content \"\n    + alias4(((helper = (helper = helpers.blanketClasses || (depth0 != null ? depth0.blanketClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"blanketClasses\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" data-uuid=\\\"\"\n    + alias4(((helper = (helper = helpers.uuid || (depth0 != null ? depth0.uuid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"uuid\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\">\\r\\n    <span class=\\\"centered-content \"\n    + alias4(((helper = (helper = helpers.contentClasses || (depth0 != null ? depth0.contentClasses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"contentClasses\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\"  style=\\\"width:\"\n    + ((stack1 = ((helper = (helper = helpers.width || (depth0 != null ? depth0.width : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"width\",\"hash\":{},\"data\":data}) : helper))) != null ? stack1 : \"\")\n    + \"; height:\"\n    + ((stack1 = ((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"height\",\"hash\":{},\"data\":data}) : helper))) != null ? stack1 : \"\")\n    + \"\\\">\\r\\n        <span class=\\\"blue-quill-blanket-with-centered-content-close\\\"></span>\\r\\n        \"\n    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"content\",\"hash\":{},\"data\":data}) : helper))) != null ? stack1 : \"\")\n    + \"\\r\\n    </span>\\r\\n</span>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_BlueQuillBlanketWithCenteredContent.hbs?");

/***/ }),

/***/ "./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_blue-quill-blanket-with-centered-content.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_blue-quill-blanket-with-centered-content.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/categorized/modals/blue-quill-blanket-with-centered-content/_blue-quill-blanket-with-centered-content.scss?");

/***/ }),

/***/ "./src/components/categorized/spinners/blue-quill-spinner/BlueQuillSpinner.js":
/*!************************************************************************************!*\
  !*** ./src/components/categorized/spinners/blue-quill-spinner/BlueQuillSpinner.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utilities/common-utils */ \"./src/utilities/common-utils.js\");\n/* harmony import */ var _blue_quill_spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_blue-quill-spinner.scss */ \"./src/components/categorized/spinners/blue-quill-spinner/_blue-quill-spinner.scss\");\n/* harmony import */ var _blue_quill_spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blue_quill_spinner_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // Templates for creating components\n\nvar blueQuillSpinnerHB = __webpack_require__(/*! ./_BlueQuillSpinner.hbs */ \"./src/components/categorized/spinners/blue-quill-spinner/_BlueQuillSpinner.hbs\");\n\nvar BlueQuillSpinner =\n/*#__PURE__*/\nfunction () {\n  function BlueQuillSpinner() {\n    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BlueQuillSpinner.sizes.SMALL;\n\n    _classCallCheck(this, BlueQuillSpinner);\n\n    this.size = size;\n    this.uuid = Object(_utilities_common_utils__WEBPACK_IMPORTED_MODULE_0__[\"generateUUID\"])();\n    this.html = blueQuillSpinnerHB({\n      uuid: this.uuid,\n      size: this.size\n    });\n  }\n  /**\r\n   * Remove the spinner from the DOM completely\r\n   */\n\n\n  _createClass(BlueQuillSpinner, [{\n    key: \"destroy\",\n    value: function destroy() {\n      document.querySelector('[data-uuid=\"' + this.uuid + '\"]').remove();\n    }\n    /**\r\n     * Make the spinner visible\r\n     */\n\n  }, {\n    key: \"show\",\n    value: function show() {\n      document.querySelector('.blue-quill-spinner[data-uuid=\"' + this.uuid + '\"]').classList.remove('hidden');\n    }\n  }, {\n    key: \"hide\",\n\n    /**\r\n     * Hide the spinner\r\n     */\n    value: function hide() {\n      document.querySelector('.blue-quill-spinner[data-uuid=\"' + this.uuid + '\"]').classList.add('hidden');\n    }\n  }]);\n\n  return BlueQuillSpinner;\n}();\n\n_defineProperty(BlueQuillSpinner, \"sizes\", {\n  SMALL: 'small-spinner',\n  MEDIUM: 'medium-spinner',\n  LARGE: 'large-spinner'\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlueQuillSpinner);\n\n//# sourceURL=webpack:///./src/components/categorized/spinners/blue-quill-spinner/BlueQuillSpinner.js?");

/***/ }),

/***/ "./src/components/categorized/spinners/blue-quill-spinner/_BlueQuillSpinner.hbs":
/*!**************************************************************************************!*\
  !*** ./src/components/categorized/spinners/blue-quill-spinner/_BlueQuillSpinner.hbs ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=\"function\", alias4=container.escapeExpression;\n\n  return \"<div class=\\\"blue-quill-spinner \"\n    + alias4(((helper = (helper = helpers.size || (depth0 != null ? depth0.size : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"size\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\" data-uuid=\\\"\"\n    + alias4(((helper = (helper = helpers.uuid || (depth0 != null ? depth0.uuid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"uuid\",\"hash\":{},\"data\":data}) : helper)))\n    + \"\\\">\\r\\n    <span class=\\\"blue-quill-spinner-shadow\\\">\\r\\n        <span class=\\\"blue-quill-spinner-inner\\\"></span>\\r\\n    </span>\\r\\n</div>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./src/components/categorized/spinners/blue-quill-spinner/_BlueQuillSpinner.hbs?");

/***/ }),

/***/ "./src/components/categorized/spinners/blue-quill-spinner/_blue-quill-spinner.scss":
/*!*****************************************************************************************!*\
  !*** ./src/components/categorized/spinners/blue-quill-spinner/_blue-quill-spinner.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/categorized/spinners/blue-quill-spinner/_blue-quill-spinner.scss?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: BlueQuillSpinner, BlueQuillModalWithCenteredContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _categorized_spinners_blue_quill_spinner_BlueQuillSpinner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorized/spinners/blue-quill-spinner/BlueQuillSpinner.js */ \"./src/components/categorized/spinners/blue-quill-spinner/BlueQuillSpinner.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlueQuillSpinner\", function() { return _categorized_spinners_blue_quill_spinner_BlueQuillSpinner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _categorized_modals_blue_quill_blanket_with_centered_content_BlueQuillModalWithCenteredContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorized/modals/blue-quill-blanket-with-centered-content/BlueQuillModalWithCenteredContent.js */ \"./src/components/categorized/modals/blue-quill-blanket-with-centered-content/BlueQuillModalWithCenteredContent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlueQuillModalWithCenteredContent\", function() { return _categorized_modals_blue_quill_blanket_with_centered_content_BlueQuillModalWithCenteredContent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/index.js?");

/***/ }),

/***/ "./src/components/sass/_component-style.scss":
/*!***************************************************!*\
  !*** ./src/components/sass/_component-style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/sass/_component-style.scss?");

/***/ }),

/***/ "./src/entry/index.js":
/*!****************************!*\
  !*** ./src/entry/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_app_sass_normalize_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main-app/sass/_normalize.scss */ \"./src/main-app/sass/_normalize.scss\");\n/* harmony import */ var _main_app_sass_normalize_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_app_sass_normalize_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sass_component_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sass/_component-style.scss */ \"./src/components/sass/_component-style.scss\");\n/* harmony import */ var _components_sass_component_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_sass_component_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_app_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-app/index */ \"./src/main-app/index.js\");\n\n\n\n\nfunction initializePage() {\n  var composer = new _main_app_index__WEBPACK_IMPORTED_MODULE_2__[\"Composer\"]();\n  composer.makePage();\n}\n\ninitializePage();\n\n//# sourceURL=webpack:///./src/entry/index.js?");

/***/ }),

/***/ "./src/main-app/index.js":
/*!*******************************!*\
  !*** ./src/main-app/index.js ***!
  \*******************************/
/*! exports provided: Composer, ComponentMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Composer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Composer */ \"./src/main-app/js/Composer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Composer\", function() { return _js_Composer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _js_ComponentMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ComponentMaker */ \"./src/main-app/js/ComponentMaker.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentMaker\", function() { return _js_ComponentMaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/main-app/index.js?");

/***/ }),

/***/ "./src/main-app/js/ComponentMaker.js":
/*!*******************************************!*\
  !*** ./src/main-app/js/ComponentMaker.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentMaker; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ \"./src/components/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ComponentMaker =\n/*#__PURE__*/\nfunction () {\n  function ComponentMaker() {\n    _classCallCheck(this, ComponentMaker);\n  }\n  /**\r\n   *\r\n   * @param components [...components]\r\n   */\n\n\n  _createClass(ComponentMaker, [{\n    key: \"makeComponents\",\n    value: function makeComponents(components) {}\n    /**\r\n     * A new function to create every compoent\r\n     */\n\n  }]);\n\n  return ComponentMaker;\n}();\n\n\n\n//# sourceURL=webpack:///./src/main-app/js/ComponentMaker.js?");

/***/ }),

/***/ "./src/main-app/js/Composer.js":
/*!*************************************!*\
  !*** ./src/main-app/js/Composer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Composer; });\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ \"./src/components/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ */ \"./src/main-app/index.js\");\n/* harmony import */ var _sass_main_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/main-app.scss */ \"./src/main-app/sass/main-app.scss\");\n/* harmony import */ var _sass_main_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sass_main_app_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar _header = __webpack_require__(/*! ../templates/header.hbs */ \"./src/main-app/templates/header.hbs\");\n\nvar _component = __webpack_require__(/*! ../templates/component.hbs */ \"./src/main-app/templates/component.hbs\");\n\nvar Composer =\n/*#__PURE__*/\nfunction () {\n  _createClass(Composer, [{\n    key: \"makePage\",\n    value: function makePage() {\n      document.body.appendChild(this.page);\n      this.page.appendChild(this.header);\n      this.page.appendChild(this.content);\n      this.page.appendChild(this.sidebar);\n      this.page.appendChild(this.footer);\n      this.header.innerHTML = _header();\n      this.makeComponents();\n    }\n  }]);\n\n  function Composer() {\n    _classCallCheck(this, Composer);\n\n    this.componentMaker = new ___WEBPACK_IMPORTED_MODULE_1__[\"ComponentMaker\"]();\n    this.page = document.createElement('div');\n    this.content = document.createElement('div');\n    this.sidebar = document.createElement('div');\n    this.header = document.createElement('div');\n    this.footer = document.createElement('div');\n    this.page.id = 'main';\n    this.content.id = 'main-content';\n    this.sidebar.id = 'main-sidebar';\n    this.header.id = 'main-header';\n    this.footer.id = 'main-footer';\n  }\n\n  _createClass(Composer, [{\n    key: \"makeComponents\",\n    value: function makeComponents() {\n      var spinnerPack = this.makeBlueQuillSpinner();\n      var modalPack = this.makeBlueQuillModalWithCenteredContent();\n      this.addComponentToSidebar(spinnerPack);\n      this.addComponentToSidebar(modalPack); // this.addComponentToSidebar(modalPack);\n    }\n  }, {\n    key: \"addComponentToSidebar\",\n    value: function addComponentToSidebar(component) {\n      var selector = document.createElement('span');\n      selector.classList.add('component-selector');\n      selector.setAttribute('data-selector-name', component.dataSelector);\n      selector.innerHTML = component.name;\n      this.sidebar.appendChild(selector);\n      this.addComponentToPage(component); // selector.addEventListener('click', )\n    }\n  }, {\n    key: \"addComponentToPage\",\n    value: function addComponentToPage(component) {\n      var componentHtml = _component({\n        name: component.name,\n        types: component.types\n      });\n\n      var componentWrapper = document.createElement('div');\n      componentWrapper.setAttribute('data-component-selector', component.dataSelector);\n      componentWrapper.innerHTML = componentHtml;\n      this.content.appendChild(componentWrapper);\n    }\n  }, {\n    key: \"makeBlueQuillSpinner\",\n    value: function makeBlueQuillSpinner() {\n      var small = new _components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"](_components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"].sizes.SMALL);\n      var medium = new _components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"](_components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"].sizes.MEDIUM);\n      var large = new _components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"](_components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillSpinner\"].sizes.LARGE);\n      return {\n        types: [{\n          type: 'small',\n          component: small\n        }, {\n          type: 'medium',\n          component: medium\n        }, {\n          type: 'large',\n          component: large\n        }],\n        name: 'Blue Quill Spinner',\n        className: 'BlueQuillSpinner',\n        dataSelector: 'blue-quill-spinner'\n      };\n    }\n  }, {\n    key: \"makeBlueQuillModalWithCenteredContent\",\n    value: function makeBlueQuillModalWithCenteredContent() {\n      var modal = new _components__WEBPACK_IMPORTED_MODULE_0__[\"BlueQuillModalWithCenteredContent\"](\"Some content\", '150px', '150px', null, true, false);\n      return {\n        types: [{\n          type: '',\n          component: modal\n        }],\n        name: 'Blue Quill Modal With Centered Content',\n        className: 'BlueQuillModalWithCenteredContent',\n        dataSelector: 'blue-quill-modal-wth-centered-content'\n      };\n    }\n  }]);\n\n  return Composer;\n}();\n\n\n\n//# sourceURL=webpack:///./src/main-app/js/Composer.js?");

/***/ }),

/***/ "./src/main-app/sass/_normalize.scss":
/*!*******************************************!*\
  !*** ./src/main-app/sass/_normalize.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main-app/sass/_normalize.scss?");

/***/ }),

/***/ "./src/main-app/sass/main-app.scss":
/*!*****************************************!*\
  !*** ./src/main-app/sass/main-app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main-app/sass/main-app.scss?");

/***/ }),

/***/ "./src/main-app/templates/component.hbs":
/*!**********************************************!*\
  !*** ./src/main-app/templates/component.hbs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data,blockParams) {\n    var stack1, alias1=container.lambda;\n\n  return \"            <span class=\\\"type-wrapper\\\">\\r\\n                <span class=\\\"type-name\\\">\"\n    + container.escapeExpression(alias1(((stack1 = blockParams[0][0]) != null ? stack1.type : stack1), depth0))\n    + \"</span>\\r\\n                <span class=\\\"type-component\\\">\\r\\n                    \"\n    + ((stack1 = alias1(((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.component : stack1)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : \"\")\n    + \"\\r\\n                </span>\\r\\n            </span>\\r\\n\";\n},\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data,blockParams) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});\n\n  return \"<div class=\\\"component-wrapper\\\">\\r\\n    <h1>\"\n    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === \"function\" ? helper.call(alias1,{\"name\":\"name\",\"hash\":{},\"data\":data,\"blockParams\":blockParams}) : helper)))\n    + \"</h1>\\r\\n    <div class=\\\"component-types\\\">\\r\\n\"\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.types : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 1, blockParams),\"inverse\":container.noop,\"data\":data,\"blockParams\":blockParams})) != null ? stack1 : \"\")\n    + \"    </div>\\r\\n</div>\";\n},\"useData\":true,\"useBlockParams\":true});\n\n//# sourceURL=webpack:///./src/main-app/templates/component.hbs?");

/***/ }),

/***/ "./src/main-app/templates/header.hbs":
/*!*******************************************!*\
  !*** ./src/main-app/templates/header.hbs ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Handlebars = __webpack_require__(/*! ../../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[7,\">= 4.0.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    return \"<span class=\\\"header-icon\\\">Blue Quill Components</span>\";\n},\"useData\":true});\n\n//# sourceURL=webpack:///./src/main-app/templates/header.hbs?");

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