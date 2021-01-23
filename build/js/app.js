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
eval("\n\n/* eslint-env jquery */\n\nfunction check() {\n  var cwt = +document.getElementById('cw-tariff').value;\n  var cwc = +document.getElementById('cw-cur').value;\n  var cwp = +document.getElementById('cw-pre').value;\n  var cwu = cwc - cwp;\n  document.getElementById(\"cw-usage\").innerHTML = cwu;\n  var cws = cwu * cwt;\n  var cwss = Math.ceil(cws * 100) / 100;\n  document.getElementById(\"cw-sum\").innerHTML = cwss;\n\n  var hwt = +document.getElementById('hw-tariff').value;\n  var hwc = +document.getElementById('hw-cur').value;\n  var hwp = +document.getElementById('hw-pre').value;\n  var hwu = hwc - hwp;\n  document.getElementById(\"hw-usage\").innerHTML = hwu;\n  var hws = hwu * hwt;\n  var hwss = Math.ceil(hws * 100) / 100;\n  document.getElementById(\"hw-sum\").innerHTML = hwss;\n\n  var owt = +document.getElementById('ow-tariff').value;\n  var owc = +document.getElementById('ow-cur').value;\n  var owp = +document.getElementById('ow-pre').value;\n  var owu = owc - owp;\n  document.getElementById(\"ow-usage\").innerHTML = owu;\n  var ows = owu * owt;\n  var owss = Math.ceil(ows * 100) / 100;\n  document.getElementById(\"ow-sum\").innerHTML = owss;\n\n  var h = +document.getElementById('heat').value;\n  document.getElementById(\"heats\").innerHTML = h;\n\n  var ct1 = +document.getElementById('cont1').value;\n  var ct2 = +document.getElementById('cont2').value;\n  var cts = ct1 + ct2;\n  document.getElementById(\"conts\").innerHTML = cts;\n\n  var e = +document.getElementById('elec').value;\n  document.getElementById(\"elecs\").innerHTML = e;\n\n  var k = +document.getElementById('kom').value;\n  document.getElementById(\"koms\").innerHTML = k;\n\n  var ex = +document.getElementById('export').value;\n  document.getElementById(\"exports\").innerHTML = ex;\n\n  var ph = +document.getElementById('phone').value;\n  document.getElementById(\"phones\").innerHTML = ph;\n\n  var tot = cwss + hwss + owss + h + cts + e + k + ex + ph;\n\n  document.getElementById(\"total\").innerHTML = tot;\n}\n\n// function check() {\n// const a = 21.756;\n// const b = 97.89;\n// const c = 10.272;\n// const a1 = ( Math.ceil(a * 100) / 100 );\n// const b1 = ( Math.ceil(b * 100) / 100 );\n// const c1 = ( Math.ceil(c * 100) / 100 );\n\n// const tot = a1+b1+c1;\n// document.getElementById(\"total\").innerHTML = tot;\n// }\n\n\nvar x = document.getElementById('next');\nx.onclick = check;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYganF1ZXJ5ICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY2hlY2soKSB7XHJcbmNvbnN0IGN3dCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ctdGFyaWZmJykudmFsdWU7XHJcbmNvbnN0IGN3YyA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ctY3VyJykudmFsdWU7XHJcbmNvbnN0IGN3cCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3ctcHJlJykudmFsdWU7XHJcbmNvbnN0IGN3dSA9IGN3YyAtIGN3cDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdy11c2FnZVwiKS5pbm5lckhUTUwgPSBjd3U7XHJcbmNvbnN0IGN3cyA9IGN3dSAqIGN3dDtcclxuY29uc3QgY3dzcyA9ICggTWF0aC5jZWlsKGN3cyAqIDEwMCkgLyAxMDAgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdy1zdW1cIikuaW5uZXJIVE1MID0gY3dzcztcclxuXHJcbmNvbnN0IGh3dCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHctdGFyaWZmJykudmFsdWU7XHJcbmNvbnN0IGh3YyA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHctY3VyJykudmFsdWU7XHJcbmNvbnN0IGh3cCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHctcHJlJykudmFsdWU7XHJcbmNvbnN0IGh3dSA9IGh3YyAtIGh3cDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJody11c2FnZVwiKS5pbm5lckhUTUwgPSBod3U7XHJcbmNvbnN0IGh3cyA9IGh3dSAqIGh3dDtcclxuY29uc3QgaHdzcyA9ICggTWF0aC5jZWlsKGh3cyAqIDEwMCkgLyAxMDAgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJody1zdW1cIikuaW5uZXJIVE1MID0gaHdzcztcclxuXHJcbmNvbnN0IG93dCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ctdGFyaWZmJykudmFsdWU7XHJcbmNvbnN0IG93YyA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ctY3VyJykudmFsdWU7XHJcbmNvbnN0IG93cCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ctcHJlJykudmFsdWU7XHJcbmNvbnN0IG93dSA9IG93YyAtIG93cDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdy11c2FnZVwiKS5pbm5lckhUTUwgPSBvd3U7XHJcbmNvbnN0IG93cyA9IG93dSAqIG93dDtcclxuY29uc3Qgb3dzcyA9ICggTWF0aC5jZWlsKG93cyAqIDEwMCkgLyAxMDAgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdy1zdW1cIikuaW5uZXJIVE1MID0gb3dzcztcclxuXHJcbmNvbnN0IGggPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYXQnKS52YWx1ZTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWF0c1wiKS5pbm5lckhUTUwgPSBoO1xyXG5cclxuY29uc3QgY3QxID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250MScpLnZhbHVlO1xyXG5jb25zdCBjdDIgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQyJykudmFsdWU7XHJcbmNvbnN0IGN0cyA9IGN0MSArIGN0MjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250c1wiKS5pbm5lckhUTUwgPSBjdHM7XHJcblxyXG5jb25zdCBlID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVjJykudmFsdWU7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxlY3NcIikuaW5uZXJIVE1MID0gZSA7XHJcblxyXG5jb25zdCBrID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrb20nKS52YWx1ZTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrb21zXCIpLmlubmVySFRNTCA9IGsgO1xyXG5cclxuY29uc3QgZXggPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cG9ydCcpLnZhbHVlO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydHNcIikuaW5uZXJIVE1MID0gZXggO1xyXG5cclxuY29uc3QgcGggPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lJykudmFsdWU7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGhvbmVzXCIpLmlubmVySFRNTCA9IHBoIDtcclxuXHJcbmNvbnN0IHRvdCA9IGN3c3MraHdzcytvd3NzK2grY3RzK2UraytleCtwaDtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG90YWxcIikuaW5uZXJIVE1MID0gdG90O1xyXG5cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY2hlY2soKSB7XHJcbi8vIGNvbnN0IGEgPSAyMS43NTY7XHJcbi8vIGNvbnN0IGIgPSA5Ny44OTtcclxuLy8gY29uc3QgYyA9IDEwLjI3MjtcclxuLy8gY29uc3QgYTEgPSAoIE1hdGguY2VpbChhICogMTAwKSAvIDEwMCApO1xyXG4vLyBjb25zdCBiMSA9ICggTWF0aC5jZWlsKGIgKiAxMDApIC8gMTAwICk7XHJcbi8vIGNvbnN0IGMxID0gKCBNYXRoLmNlaWwoYyAqIDEwMCkgLyAxMDAgKTtcclxuXHJcbi8vIGNvbnN0IHRvdCA9IGExK2IxK2MxO1xyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsXCIpLmlubmVySFRNTCA9IHRvdDtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG54Lm9uY2xpY2sgPSBjaGVjazsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });