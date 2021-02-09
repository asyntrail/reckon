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
eval("\n\n/* eslint-env jquery */\n\nfunction check() {\n  var cwt = +document.getElementById('cw-tariff').value;\n  var cwc = +document.getElementById('cw-cur').value;\n  var cwp = +document.getElementById('cw-pre').value;\n  var cwu = cwc - cwp;\n  document.getElementById(\"cw-usage\").innerHTML = cwu;\n  var cws = cwu * cwt;\n  var cwss = Math.ceil(cws * 100) / 100;\n  document.getElementById(\"cw-sum\").innerHTML = cwss;\n\n  var hwt = +document.getElementById('hw-tariff').value;\n  var hwc = +document.getElementById('hw-cur').value;\n  var hwp = +document.getElementById('hw-pre').value;\n  var hwu = hwc - hwp;\n  document.getElementById(\"hw-usage\").innerHTML = hwu;\n  var hws = hwu * hwt;\n  var hwss = Math.ceil(hws * 100) / 100;\n  document.getElementById(\"hw-sum\").innerHTML = hwss;\n\n  var owt = +document.getElementById('ow-tariff').value;\n  var owc = +document.getElementById('ow-cur').value;\n  var owp = +document.getElementById('ow-pre').value;\n  var owu = owc - owp;\n  document.getElementById(\"ow-usage\").innerHTML = owu;\n  var ows = owu * owt;\n  var owss = Math.ceil(ows * 100) / 100;\n  document.getElementById(\"ow-sum\").innerHTML = owss;\n\n  var h = +document.getElementById('heat').value;\n\n  document.getElementById(\"heats\").innerHTML = h;\n\n  var ct1 = +document.getElementById('cont1').value;\n  var ct2 = +document.getElementById('cont2').value;\n  var cts = Math.ceil((ct1 + ct2) * 100) / 100;\n  document.getElementById(\"conts\").innerHTML = cts;\n\n  var e = +document.getElementById('elec').value;\n  document.getElementById(\"elecs\").innerHTML = e;\n\n  var k = +document.getElementById('kom').value;\n  document.getElementById(\"koms\").innerHTML = k;\n\n  var ex = +document.getElementById('export').value;\n  document.getElementById(\"exports\").innerHTML = ex;\n\n  var ph = +document.getElementById('phone').value;\n  document.getElementById(\"phones\").innerHTML = ph;\n\n  var ed = +document.getElementById('edi').value;\n  document.getElementById(\"edis\").innerHTML = ed;\n\n  var tot = (cwss * 100 + hwss * 100 + owss * 100 + e * 100 - ed * 100 + h * 100 + cts * 100 + k * 100 + ex * 100 + ph * 100) / 100;\n\n  document.getElementById(\"total\").innerHTML = tot;\n\n  var ps = (cwss * 100 + hwss * 100 + owss * 100 + e * 100 - ed * 100) / 100;\n  document.getElementById(\"pers_sum\").innerHTML = ps;\n  var psm = +document.getElementById('pers_m').value;\n  var psd = Math.ceil(ps / psm * 100) / 100;\n  document.getElementById(\"pers_dev\").innerHTML = psd;\n\n  var gs = (h * 100 + cts * 100 + k * 100 + ex * 100 + ph * 100) / 100;\n  document.getElementById(\"gen_sum\").innerHTML = gs;\n  var gsm = +document.getElementById('gen_m').value;\n  var gsd = Math.ceil(gs / gsm * 100) / 100;\n  document.getElementById(\"gen_dev\").innerHTML = gsd;\n\n  var per1 = +document.getElementById('pers1').value;\n  var pys1 = Math.ceil((gsd + psd * per1) * 100) / 100;\n  var per2 = +document.getElementById('pers2').value;\n  var pys2 = Math.ceil((gsd + psd * per2) * 100) / 100;\n  document.getElementById(\"pay_sum1\").innerHTML = pys1;\n  document.getElementById(\"pay_sum2\").innerHTML = pys2;\n}\n\nvar x = document.getElementById('next');\nx.onclick = check;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYganF1ZXJ5ICovXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrKCkge1xyXG5jb25zdCBjd3QgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N3LXRhcmlmZicpLnZhbHVlO1xyXG5jb25zdCBjd2MgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N3LWN1cicpLnZhbHVlO1xyXG5jb25zdCBjd3AgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N3LXByZScpLnZhbHVlO1xyXG5jb25zdCBjd3UgPSBjd2MgLSBjd3A7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3ctdXNhZ2VcIikuaW5uZXJIVE1MID0gY3d1O1xyXG5jb25zdCBjd3MgPSBjd3UgKiBjd3Q7XHJcbmNvbnN0IGN3c3MgPSAoIE1hdGguY2VpbChjd3MgKiAxMDApIC8gMTAwICk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3ctc3VtXCIpLmlubmVySFRNTCA9IGN3c3M7XHJcblxyXG5jb25zdCBod3QgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h3LXRhcmlmZicpLnZhbHVlO1xyXG5jb25zdCBod2MgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h3LWN1cicpLnZhbHVlO1xyXG5jb25zdCBod3AgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h3LXByZScpLnZhbHVlO1xyXG5jb25zdCBod3UgPSBod2MgLSBod3A7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHctdXNhZ2VcIikuaW5uZXJIVE1MID0gaHd1O1xyXG5jb25zdCBod3MgPSBod3UgKiBod3Q7XHJcbmNvbnN0IGh3c3MgPSAoIE1hdGguY2VpbChod3MgKiAxMDApIC8gMTAwICk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHctc3VtXCIpLmlubmVySFRNTCA9IGh3c3M7XHJcblxyXG5jb25zdCBvd3QgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293LXRhcmlmZicpLnZhbHVlO1xyXG5jb25zdCBvd2MgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293LWN1cicpLnZhbHVlO1xyXG5jb25zdCBvd3AgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ293LXByZScpLnZhbHVlO1xyXG5jb25zdCBvd3UgPSBvd2MgLSBvd3A7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ctdXNhZ2VcIikuaW5uZXJIVE1MID0gb3d1O1xyXG5jb25zdCBvd3MgPSBvd3UgKiBvd3Q7XHJcbmNvbnN0IG93c3MgPSAoIE1hdGguY2VpbChvd3MgKiAxMDApIC8gMTAwICk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ctc3VtXCIpLmlubmVySFRNTCA9IG93c3M7XHJcblxyXG5jb25zdCBoID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWF0JykudmFsdWU7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYXRzXCIpLmlubmVySFRNTCA9IGg7XHJcblxyXG5jb25zdCBjdDEgPSArZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQxJykudmFsdWU7XHJcbmNvbnN0IGN0MiA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udDInKS52YWx1ZTtcclxuY29uc3QgY3RzID0gKCBNYXRoLmNlaWwoKGN0MSArIGN0MikgKiAxMDApIC8gMTAwICk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHNcIikuaW5uZXJIVE1MID0gY3RzO1xyXG5cclxuY29uc3QgZSA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxlYycpLnZhbHVlO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVsZWNzXCIpLmlubmVySFRNTCA9IGUgO1xyXG5cclxuY29uc3QgayA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna29tJykudmFsdWU7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia29tc1wiKS5pbm5lckhUTUwgPSBrIDtcclxuXHJcbmNvbnN0IGV4ID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleHBvcnQnKS52YWx1ZTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnRzXCIpLmlubmVySFRNTCA9IGV4IDtcclxuXHJcbmNvbnN0IHBoID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLnZhbHVlO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBob25lc1wiKS5pbm5lckhUTUwgPSBwaCA7XHJcblxyXG5jb25zdCBlZCA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpJykudmFsdWU7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpc1wiKS5pbm5lckhUTUwgPSBlZCA7XHJcblxyXG5cclxuY29uc3QgdG90ID0gKCgoY3dzcyoxMDAraHdzcyoxMDArb3dzcyoxMDArZSoxMDApLWVkKjEwMCkraCoxMDArY3RzKjEwMCtrKjEwMCtleCoxMDArcGgqMTAwKS8xMDA7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvdGFsXCIpLmlubmVySFRNTCA9IHRvdDtcclxuXHJcbmNvbnN0IHBzID0oKGN3c3MqMTAwK2h3c3MqMTAwK293c3MqMTAwK2UqMTAwKS1lZCoxMDApLzEwMDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzX3N1bVwiKS5pbm5lckhUTUwgPSBwcyA7XHJcbmNvbnN0IHBzbSA9ICtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyc19tJykudmFsdWU7XHJcbmNvbnN0IHBzZCA9ICggTWF0aC5jZWlsKChwcy9wc20pICogMTAwKSAvIDEwMCApO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNfZGV2XCIpLmlubmVySFRNTCA9IHBzZCA7XHJcblxyXG5jb25zdCBncyA9IChoKjEwMCtjdHMqMTAwK2sqMTAwK2V4KjEwMCtwaCoxMDApLzEwMDtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5fc3VtXCIpLmlubmVySFRNTCA9IGdzIDtcclxuY29uc3QgZ3NtID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5fbScpLnZhbHVlO1xyXG5jb25zdCBnc2QgPSAoIE1hdGguY2VpbCgoZ3MvZ3NtKSAqIDEwMCkgLyAxMDAgKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5fZGV2XCIpLmlubmVySFRNTCA9IGdzZCA7XHJcblxyXG5jb25zdCBwZXIxID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzMScpLnZhbHVlO1xyXG5jb25zdCBweXMxID0gKCBNYXRoLmNlaWwoKGdzZCArIChwc2QqcGVyMSkpICogMTAwKSAvIDEwMCApO1xyXG5jb25zdCBwZXIyID0gK2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzMicpLnZhbHVlO1xyXG5jb25zdCBweXMyID0gKCBNYXRoLmNlaWwoKGdzZCArIChwc2QqcGVyMikpICogMTAwKSAvIDEwMCApO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBheV9zdW0xXCIpLmlubmVySFRNTCA9IHB5czEgO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBheV9zdW0yXCIpLmlubmVySFRNTCA9IHB5czIgO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG54Lm9uY2xpY2sgPSBjaGVjazsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });