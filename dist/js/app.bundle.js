/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stSlider = __webpack_require__(2);

var _stSlider2 = _interopRequireDefault(_stSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {

	var container = document.getElementById('slider');

	var options = _defineProperty({
		slideDuration: 5000,
		items: 3,
		navEnabled: true,
		paginationEnabled: true,
		step: 1
	}, 'slideDuration', 1500);

	var slider = new _stSlider2.default(container, options);

	slider.start();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var stSlider = function () {
	function stSlider(sliderContainer, options) {
		_classCallCheck(this, stSlider);

		this.slider = sliderContainer;
		this.sliderWidth = this.slider.clientWidth;
		this.slides = this.slider.children;
		this.slidesCount = this.slides.length;
		this.slideWidth = 0;
		this.sliderInnerWidth = 0;
		this.options = options;

		this.registerEvents(this.options);
	}

	_createClass(stSlider, [{
		key: 'registerEvents',
		value: function registerEvents(options) {}
	}, {
		key: 'start',
		value: function start() {

			this.countSizes();
			this.renderSliderBody();
		}
	}, {
		key: 'renderSliderBody',
		value: function renderSliderBody() {
			var _this = this;

			var content = '';

			[].concat(_toConsumableArray(this.slides)).map(function (slide, index) {
				if (index == 0) {
					content += '<div class="stSlider-item active" style="width: ' + Math.round(_this.slideWidth) + 'px;">' + slide.outerHTML + '</div>';
				} else {
					content += '<div class="stSlider-item" style="width: ' + Math.round(_this.slideWidth) + 'px;">' + slide.outerHTML + '</div>';
				}
			});

			this.slider.innerHTML = '<div class="slider-outer" style="width: ' + Math.round(this.sliderInnerWidth) + 'px; transition: all ' + this.milisecondsToSeconds(this.options.slideDuration) + 's ease;">' + content + '</div>';

			if (this.options.navEnabled) this.renderNavigation();
			if (this.options.paginationEnabled) this.renderPagination();
		}
	}, {
		key: 'renderNavigation',
		value: function renderNavigation() {

			var navContainer = document.createElement('div');
			var navPrev = document.createElement('span');
			var navNext = document.createElement('span');

			navContainer.classList.add('slider-navigation');
			navPrev.classList.add('prev');
			navNext.classList.add('next');

			navContainer.appendChild(navPrev);
			navContainer.appendChild(navNext);
			this.slider.appendChild(navContainer);
		}
	}, {
		key: 'renderPagination',
		value: function renderPagination() {

			var paginationContainer = document.createElement('div');
			var dotsNeeded = Math.ceil(this.slidesCount / this.options.items);

			if (dotsNeeded > 1) {
				for (var i = 0; i < dotsNeeded; i++) {
					var paginationDot = document.createElement('span');
					paginationDot.classList.add('pagination-dot');
					paginationContainer.appendChild(paginationDot);
				}
			}

			paginationContainer.classList.add('slider-pagination');

			this.slider.appendChild(paginationContainer);
		}
	}, {
		key: 'countSlideWidth',
		value: function countSlideWidth() {
			this.slideWidth = this.sliderWidth / this.options.items;
		}
	}, {
		key: 'countSliderInnerWidth',
		value: function countSliderInnerWidth() {
			this.sliderInnerWidth = this.slideWidth * this.slidesCount;
		}
	}, {
		key: 'countSizes',
		value: function countSizes() {
			this.countSlideWidth();
			this.countSliderInnerWidth();
		}
	}, {
		key: 'milisecondsToSeconds',
		value: function milisecondsToSeconds(miliseconds) {
			var seconds = miliseconds / 1000;
			return seconds.toFixed(2);
		}
	}]);

	return stSlider;
}();

exports.default = stSlider;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);