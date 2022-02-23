/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/one */ \"./modules/one.js\");\n\n\n\n(0,_modules_one__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/one.js":
/*!************************!*\
  !*** ./modules/one.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firstFile = () => {\n    const timerHours = document.getElementById('timer-hours');\n    const timerMinutes = document.getElementById('timer-minutes');\n    const timerSeconds = document.getElementById('timer-seconds');\n    const timerDays = document.getElementById('day__today');\n    const timerNewYear = document.getElementById('timer__newyear');\n    const getTimeRemaining = () => {\n        let dateNow = new Date();\n        let getMiliseconds = new Date().getTime();\n        let getNewYearDay = new Date('01 january 2023').getTime();\n        let dateToMiliseconds = Math.floor(getMiliseconds);\n        let newYearDay = Math.floor(getNewYearDay);\n\n        let day = dateNow.getDay();\n        let hour = dateNow.getHours();\n        let minute = dateNow.getMinutes();\n        let second = dateNow.getSeconds();\n        return {\n            hour,\n            minute,\n            second,\n            day,\n            dateToMiliseconds,\n            newYearDay,\n        };\n    };\n    const updateTime = () => {\n        let getTime = getTimeRemaining();\n        timerHours.textContent = getTime.hour;\n        timerMinutes.textContent = getTime.minute;\n        timerSeconds.textContent = getTime.second;\n\n\n        if (getTime.second < 10) {\n            timerSeconds.textContent = '0' + getTime.second;\n        }\n        if (getTime.minute < 10) {\n            timerMinutes.textContent = '0' + getTime.minute;\n        }\n        if (getTime.hour < 10) {\n            timerHours.textContent = '0' + getTime.hour;\n        }\n\n        setTimeout(updateTime, 1000);\n\n    };\n\n    //получаем день недели\n    const inputDay = () => {\n        let getTime = getTimeRemaining();\n        let weekDays = [\n            'воскресенье',\n            'Понедельник',\n            'Вторник',\n            'Среда',\n            'Четверг',\n            'Пятница',\n            'Суббота'\n        ];\n        timerDays.textContent = weekDays[getTime.day];\n        setTimeout(updateTime, 1000);\n    };\n    //нахождение дней до нового года\n    const dayTonewYear = () => {\n        let getTime = getTimeRemaining();\n        let milisecondInDay = 24 * 60 * 60 * 1000;\n        let dayName = '';\n        let dayToNewYear = Math.floor((getTime.newYearDay - getTime.dateToMiliseconds) / milisecondInDay);\n        //находим последнюю цифру\n        let lastNumber = dayToNewYear.toString().substr(-1);\n\n        if (lastNumber == 2 || lastNumber == 2 || lastNumber == 4) {\n            timerNewYear.textContent = dayToNewYear + ' дня';\n        } else if (lastNumber == 1) {\n            timerNewYear.textContent = dayToNewYear + ' день';\n        } else {\n            timerNewYear.textContent = dayToNewYear + ' дней';\n        }\n        setTimeout(updateTime, 1000);\n    };\n    dayTonewYear();\n    updateTime();\n    inputDay();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstFile);\n\n//# sourceURL=webpack:///./modules/one.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;