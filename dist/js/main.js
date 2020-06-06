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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"main": 0
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/1_events/events.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/1_events/events.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/1_map/map.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/1_map/map.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  console.log('Карта');
})();

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  (function initFileInputs() {
    var inputs = document.querySelectorAll('.file');

    if (inputs) {
      var _loop = function _loop(i) {
        var input = inputs[i].querySelector('input');
        var field = inputs[i].querySelector('.file__text');
        var fileMessage = inputs[i].querySelector('.file__message');
        var fileLength = 0;
        var arrayText = '';
        input.addEventListener('change', function () {
          // console.log('Что-то добваили');
          fileLength = input.files.length; // field.innerText = 'Что-то добваили';
          // console.log(input.files.FileList.toString())

          field.innerText = 'Количество файлов: ' + fileLength;
        });
      };

      for (var i = 0; i < inputs.length; i++) {
        _loop(i);
      }
    }
  })();

  (function toggleForm() {
    var controls = document.querySelectorAll('.form__control');

    var _loop2 = function _loop2(i) {
      var checkbox = controls[i].querySelector('.checkbox__field');
      var btn = controls[i].querySelector('.btn');

      if (checkbox && btn) {
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            btn.classList.remove('btn--disabled');
          } else {
            btn.classList.add('btn--disabled');
          }
        });
      }
    };

    for (var i = 0; i < controls.length; i++) {
      _loop2(i);
    }
  })();
})();

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  (function toggleMenu() {
    var btn1 = document.querySelector('#header__btn-1');
    var btn2 = document.querySelector('#header__btn-2');
    var menu1 = document.querySelector('.drop-nav--support');
    var menu2 = document.querySelector('.drop-nav--help');

    if (btn1 && menu1) {
      btn1.addEventListener('click', function (e) {
        e.preventDefault();

        if (menu2) {
          menu2.classList.remove('drop-nav--open');
        }

        menu1.classList.toggle('drop-nav--open');
      });
    }

    if (btn2 && menu2) {
      btn2.addEventListener('click', function (e) {
        e.preventDefault();

        if (menu1) {
          menu1.classList.remove('drop-nav--open');
        }

        menu2.classList.toggle('drop-nav--open');
      });
    }
  })();
})();

/***/ }),

/***/ "./src/blocks/modules/m-menu/m-menu.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/m-menu/m-menu.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");


(function initMobileMenu() {
  var menuArray = mobileLinks || null;
  new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#mmenu", {
    "extensions": ["pagedim-black"],
    "navbar": {
      "title": "Мой Бизнес"
    },
    "navbars": [{
      "position": "bottom",
      "content": mobileContacts
    }, {
      "position": "bottom",
      "content": mobileLinks
    }]
  });
})();

/***/ }),

/***/ "./src/blocks/modules/panel/panel.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/panel/panel.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Скрывание изображений
(function toggleImage() {
  var btn = document.querySelector('#toggle-image');
  var imageArray = document.querySelectorAll('.image');
  var imageBgArray = document.querySelectorAll('.hide-bg');
  var hideImageArray = document.querySelectorAll('.hide-image');
  var noneImageArray = document.querySelectorAll('.none-image');
  var localVarImage = localStorage.getItem("images");

  if (localVarImage === null) {
    enableImages();
    localVarImage = localStorage.getItem("images");
  }

  if (localStorage.images === 'false') {
    disableImages();
    localVarImage = localStorage.getItem("images");
  } else {
    enableImages();
    localVarImage = localStorage.getItem("images");
  }

  if (btn && imageArray) {
    btn.addEventListener('click', function () {
      if (localStorage.images === 'true') {
        disableImages();
        console.log(localStorage.images);
        localStorage.setItem("images", false);
      } else {
        enableImages();
        console.log(localStorage.images);
        localStorage.setItem("images", true);
      }
    });
  } // (function initTheme(){
  // 	if (localVarImage == false||0) {
  // 		localStorage.setItem("theme","light");
  // 	} else {
  // 	}
  // })();


  function enableImages() {
    var i;

    for (i = 0; i < imageArray.length; i++) {
      imageArray[i].classList.remove('image--hide');
    }

    var n;

    for (n = 0; n < imageBgArray.length; n++) {
      imageBgArray[n].classList.remove('hide-bg--active');
    }

    var z;

    for (z = 0; z < hideImageArray.length; z++) {
      hideImageArray[z].classList.remove('hide-image--active');
    }

    var m;

    for (m = 0; m < noneImageArray.length; m++) {
      noneImageArray[m].classList.remove('none-image--active');
    }

    localStorage.setItem("images", 'true');
    localVarImage = localStorage.getItem("images");
    btn.innerHTML = '<span>Выключить изображения</span>';
  }

  function disableImages() {
    var i;

    for (i = 0; i < imageArray.length; i++) {
      imageArray[i].classList.add('image--hide');
    }

    var n;

    for (n = 0; n < imageBgArray.length; n++) {
      imageBgArray[n].classList.add('hide-bg--active');
    }

    var z;

    for (z = 0; z < hideImageArray.length; z++) {
      hideImageArray[z].classList.add('hide-image--active');
    }

    var m;

    for (m = 0; m < noneImageArray.length; m++) {
      noneImageArray[m].classList.add('none-image--active');
    }

    localStorage.setItem("images", 'false');
    localVarImage = localStorage.getItem("images");
    btn.innerHTML = '<span>Включить изображения</span>';
  }
})(); // Перключаем тему


(function toggleTheme() {
  var body = document.querySelector('.body');
  var btn = document.querySelector('#toggle-theme');
  var localVarContrast = localStorage.getItem("theme");

  if (body && btn) {
    btn.addEventListener('click', toggle);
  } // if (localVarImage === null) {
  // 	enableImages();
  // 	localVarImage = localStorage.getItem("images");
  // }
  // if (localStorage.images === 'false') {
  // 	disableImages();
  // 	localVarImage = localStorage.getItem("images");
  // } else {
  // 	enableImages();
  // 	localVarImage = localStorage.getItem("images");
  // }


  if (localVarContrast === null) {
    localStorage.setItem("theme", "light");
    localVarContrast = localStorage.getItem("theme");
  }

  if (localVarContrast === 'light') {
    body.classList.remove('body--dark');
    body.classList.add('body--light');
  } else {
    body.classList.remove('body--light');
    body.classList.add('body--dark');
  } // (function initTheme() {
  // 	if (localVarContrast === 'light'||false||null||undefined) {
  // 		localStorage.setItem("theme","light");
  // 		body.classList.add('body--light');
  // 	} else {
  // 		body.classList.add('body--dark');
  // 	}
  // })();


  function toggle() {
    if (localVarContrast === 'light') {
      localStorage.setItem("theme", "dark");
      localVarContrast = localStorage.getItem("theme");
      body.classList.remove('body--light');
      body.classList.add('body--dark');
    } else {
      localStorage.setItem("theme", "light");
      localVarContrast = localStorage.getItem("theme");
      body.classList.remove('body--dark');
      body.classList.add('body--light');
    }
  }
})();

(function showPanel() {
  var btn = document.querySelector('.open-panel');
  var panel = document.querySelector('.panel');

  if (btn && panel) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      if (panel.classList.contains('panel--open')) {
        panel.classList.remove('panel--open');
      } else {
        panel.classList.add('panel--open');
      }
    });
  }
})();

function disableHidden(parent, el, status) {
  // const elements = parent.querySelectorAll(el);
  console.log(parent); // if (status == true) {
  // 	for (let i = 0; i < elements.length; i++) {
  // 		elements[i].setAttribute("disabled", "disabled");
  // 	}
  // } else {
  // 	for (let i = 0; i < elements.length; i++) {
  // 		elements[i].removeAttribute("disabled");
  // 	}
  // }
} // localStorage.setItem("myNumber","111");

/***/ }),

/***/ "./src/blocks/modules/sliders/sliders.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/sliders/sliders.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");


(function () {
  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-front__container', {
    // effect: 'fade',
    pagination: {
      el: '.slider-front__fraction',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass, totalClass) {
        return '<div class="slider-front__now ' + currentClass + '"></div>' + '<div class="slider-front__sep"></div>' + '<div class="slider-front__all ' + totalClass + '"></div>';
      }
    },
    navigation: {
      nextEl: '.slider-front__btn--next',
      prevEl: '.slider-front__btn--prev',
      disabledClass: 'slider-front__btn--disabled'
    }
  });
})();

(function () {
  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-page__container', {
    // effect: 'fade',
    pagination: {
      el: '.slider-page__fraction',
      type: 'fraction',
      renderFraction: function renderFraction(currentClass, totalClass) {
        return '<div class="slider-page__now ' + currentClass + '"></div>' + '<div class="slider-page__sep"></div>' + '<div class="slider-page__all ' + totalClass + '"></div>';
      }
    },
    navigation: {
      nextEl: '.slider-page__btn--next',
      prevEl: '.slider-page__btn--prev',
      disabledClass: 'slider-page__btn--disabled'
    }
  });
})();

/***/ }),

/***/ "./src/blocks/modules/ui-library/ui-library.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/ui-library/ui-library.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/list */ "./node_modules/@fullcalendar/list/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_core_locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/core/locales/ru */ "./node_modules/@fullcalendar/core/locales/ru.js");
/* harmony import */ var _fullcalendar_core_locales_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_core_locales_ru__WEBPACK_IMPORTED_MODULE_3__);




document.addEventListener("DOMContentLoaded", ready);

function ready() {
  // function reInitCalendar(calendar) {
  // 	calendar.destroy();
  // 	calendar.render();
  // }
  (function initCalendar() {
    var calendarItem = document.querySelector('.calendar'); // if (calendarArrow) {
    // 	for(let i = 0; i < calendarArrow.length; i++) {
    // 	}
    // }

    if (calendarItem) {
      var checkType = function checkType() {
        if (document.documentElement.clientWidth > 1200) {
          return 'dayGridMonth';
        } else {
          return 'listWeek';
        }
      };

      var calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__["Calendar"](calendarItem, {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"], _fullcalendar_list__WEBPACK_IMPORTED_MODULE_1__["default"]],
        defaultView: checkType(),
        locale: _fullcalendar_core_locales_ru__WEBPACK_IMPORTED_MODULE_3___default.a,
        weekNumberCalculation: 'ISO',
        contentHeight: 'auto',
        header: {
          left: 'prev, title, next',
          center: '',
          right: 'today'
        },
        events: [{
          title: '12.00 Очень важное мероприятие',
          start: '2020-05-15',
          end: '2020-05-20'
        }, {
          title: '12.00 Тренинг корпорации МСП «Генерация бизнес-идеи» Светлогорск',
          start: '2020-05-19',
          end: '2020-06-02'
        }],
        windowResize: function windowResize(view) {
          if (document.documentElement.clientWidth > 1200) {
            this.changeView('dayGridMonth');
          } else {
            this.changeView('listWeek');
          }
        }
      });
      calendar.render();

      (function toggleType() {
        var btnMounth = document.querySelector('.tabs__btn--mounth');
        var btnWeek = document.querySelector('.tabs__btn--week');

        if (btnMounth && btnWeek) {
          btnMounth.addEventListener('click', function (e) {
            e.preventDefault();
            btnWeek.classList.remove('tabs__btn--active');
            this.classList.add('tabs__btn--active');
            calendar.changeView('dayGridMonth');
          });
          btnWeek.addEventListener('click', function (e) {
            e.preventDefault();
            btnMounth.classList.remove('tabs__btn--active');
            this.classList.add('tabs__btn--active');
            calendar.changeView('listWeek');
          });
        }
      })();
    }
  })(); // Выпадение дроп-карточки


  (function () {
    var dropArrow = document.querySelectorAll('.drop-card__header');

    if (dropArrow) {
      for (var i = 0; i < dropArrow.length; i++) {
        dropArrow[i].addEventListener('click', function () {
          this.parentNode.classList.toggle('drop-card--open');
        });
        dropArrow[i].addEventListener('keydown', function () {
          if (event.code == 'Enter') {
            event.preventDefault();
            this.parentNode.classList.toggle('drop-card--open');
          }
        });
      }
    }
  })(); // Переключения radio с клавиатуры


  (function () {
    var radio = document.querySelectorAll('.radio');

    if (radio) {
      for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('keydown', setCustomEvent);
      }
    }

    function setCustomEvent() {
      if (event.code == 'Space') {
        event.preventDefault();
        this.querySelector('input').checked = true;
      }
    }
  })(); // Переключения checkbox с клавиатуры


  (function () {
    var radio = document.querySelectorAll('.checkbox');

    if (radio) {
      for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('keydown', setCustomEvent);
      }
    }

    function setCustomEvent() {
      if (event.code == 'Space') {
        event.preventDefault();

        if (this.querySelector('input').checked == true) {
          this.querySelector('input').checked = false;
        } else {
          this.querySelector('input').checked = true;
        }
      }
    }
  })(); // Переключение табов контента


  (function toggleContentTabs() {
    var units = document.querySelectorAll('.units');

    if (units) {
      var _loop = function _loop(n) {
        var tabs = units[n].querySelectorAll('.tabs__link');
        var blocks = units[n].querySelectorAll('.units__block');

        var _loop2 = function _loop2(z) {
          tabs[z].addEventListener('click', function (e) {
            e.preventDefault();
            console.log(z);
            select(tabs, blocks, z);
          });
        };

        for (var z = 0; z < tabs.length; z++) {
          _loop2(z);
        }
      };

      for (var n = 0; n < units.length; n++) {
        _loop(n);
      }
    }

    function select(tabs, blocks, n) {
      for (var m = 0; m < tabs.length; m++) {
        tabs[m].classList.remove('tabs__link--active');
        blocks[m].classList.remove('units__block--active');
      }

      tabs[n].classList.add('tabs__link--active');
      blocks[n].classList.add('units__block--active');
    }
  })(); // Переключение вида списка книг


  (function toogleBookList() {
    var btnList = document.querySelector('.tab-btns__btn--list');
    var btnCards = document.querySelector('.tab-btns__btn--cards');
    var list = document.querySelector('.books');

    if (btnList && btnCards && list) {
      btnList.addEventListener('click', function (e) {
        btnCards.classList.remove('tab-btns__btn--active');
        this.classList.add('tab-btns__btn--active');
        e.preventDefault();
        list.classList.remove('books--cards');
      });
      btnCards.addEventListener('click', function (e) {
        btnList.classList.remove('tab-btns__btn--active');
        this.classList.add('tab-btns__btn--active');
        e.preventDefault();
        list.classList.add('books--cards');
      });
    }
  })();
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ui_library_ui_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/ui-library/ui-library */ "./src/blocks/modules/ui-library/ui-library.js");
/* harmony import */ var _modules_panel_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/panel/panel */ "./src/blocks/modules/panel/panel.js");
/* harmony import */ var _modules_panel_panel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_panel_panel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_m_menu_m_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/m-menu/m-menu */ "./src/blocks/modules/m-menu/m-menu.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_sliders_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/sliders/sliders */ "./src/blocks/modules/sliders/sliders.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_1_map_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/1_map/map */ "./src/blocks/modules/1_map/map.js");
/* harmony import */ var _modules_1_map_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_1_map_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_1_events_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/1_events/events */ "./src/blocks/modules/1_events/events.js");
/* harmony import */ var _modules_1_events_events__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_1_events_events__WEBPACK_IMPORTED_MODULE_8__);
// Плагины
// import $ from 'jquery';
// Блоки










/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map