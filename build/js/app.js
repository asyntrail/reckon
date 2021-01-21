/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-env jquery */\n\nfunction check() {\n  var cwt = document.getElementById('cw-tariff').value;\n  var cwc = document.getElementById('cw-cur').value;\n  var cwp = document.getElementById('cw-pre').value;\n  var cwu = cwc - cwp;\n  document.getElementById(\"cw-usage\").innerHTML = cwu;\n  var cws = cwu * cwt;\n  document.getElementById(\"cw-sum\").innerHTML = cws.toFixed(2);\n\n  var hwt = document.getElementById('hw-tariff').value;\n  var hwc = document.getElementById('hw-cur').value;\n  var hwp = document.getElementById('hw-pre').value;\n  var hwu = hwc - hwp;\n  document.getElementById(\"hw-usage\").innerHTML = hwu;\n  var hws = hwu * hwt;\n  document.getElementById(\"hw-sum\").innerHTML = hws.toFixed(2);\n\n  var owt = document.getElementById('ow-tariff').value;\n  var owc = document.getElementById('ow-cur').value;\n  var owp = document.getElementById('ow-pre').value;\n  var owu = owc - owp;\n  document.getElementById(\"ow-usage\").innerHTML = owu;\n  var ows = owu * owt;\n  document.getElementById(\"ow-sum\").innerHTML = ows.toFixed(2);\n}\nvar x = document.getElementById('next');\nx.onclick = check;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYganF1ZXJ5ICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2soKSB7XHJcbmNvbnN0IGN3dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdy10YXJpZmYnKS52YWx1ZTtcclxuY29uc3QgY3djID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N3LWN1cicpLnZhbHVlO1xyXG5jb25zdCBjd3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ctcHJlJykudmFsdWU7XHJcbmNvbnN0IGN3dSA9IGN3YyAtIGN3cDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdy11c2FnZVwiKS5pbm5lckhUTUwgPSBjd3U7XHJcbmNvbnN0IGN3cyA9IGN3dSAqIGN3dDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdy1zdW1cIikuaW5uZXJIVE1MID0gY3dzLnRvRml4ZWQoMik7XHJcblxyXG5jb25zdCBod3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHctdGFyaWZmJykudmFsdWU7XHJcbmNvbnN0IGh3YyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdody1jdXInKS52YWx1ZTtcclxuY29uc3QgaHdwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h3LXByZScpLnZhbHVlO1xyXG5jb25zdCBod3UgPSBod2MgLSBod3A7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHctdXNhZ2VcIikuaW5uZXJIVE1MID0gaHd1O1xyXG5jb25zdCBod3MgPSBod3UgKiBod3Q7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHctc3VtXCIpLmlubmVySFRNTCA9IGh3cy50b0ZpeGVkKDIpO1xyXG5cclxuY29uc3Qgb3d0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293LXRhcmlmZicpLnZhbHVlO1xyXG5jb25zdCBvd2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ctY3VyJykudmFsdWU7XHJcbmNvbnN0IG93cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdy1wcmUnKS52YWx1ZTtcclxuY29uc3Qgb3d1ID0gb3djIC0gb3dwO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm93LXVzYWdlXCIpLmlubmVySFRNTCA9IG93dTtcclxuY29uc3Qgb3dzID0gb3d1ICogb3d0O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm93LXN1bVwiKS5pbm5lckhUTUwgPSBvd3MudG9GaXhlZCgyKTtcclxuXHJcbn1cclxuY29uc3QgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XHJcbngub25jbGljayA9IGNoZWNrOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });