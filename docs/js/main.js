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

/***/ "./src/blocks/modules/event/event.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/event/event.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! air-datepicker */ "./node_modules/air-datepicker/src/js/air-datepicker.js");
/* harmony import */ var air_datepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(air_datepicker__WEBPACK_IMPORTED_MODULE_0__);
window.addEventListener('load', setCalendar);


function setCalendar() {
  $('#calendar-select').datepicker({
    range: true,
    onSelect: function onSelect() {
      changeCalendar();
    }
  });
  var toolbar = document.querySelector('.calendar__header');

  if (toolbar) {
    var type = toolbar.elements['event-type'];
    var date = toolbar.elements['calendar-type'];
    type.addEventListener('change', changeCalendar); // date.addEventListener('input', changeCalendar);
  }

  function changeCalendar(type, date) {
    $('.calendar__toolbar').show();
    var articles = document.querySelector('.calendar__content');
    var dateNowOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC'
    };
    var dateNow = new Date().toLocaleString("ru", dateNowOptions);
    var dateIncilOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC'
    };
    var dateIncil = new Date();
    dateIncil.setDate(dateIncil.getDate() + 364);
    var dateFinal = dateIncil.toLocaleString("ru", dateNowOptions);
    var dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || dateNow;
    var dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || dateFinal;
    $.ajax({
      url: '/ajax/eventslist.php',
      data: {
        count: '',
        type: toolbar.elements['event-type'].value,
        datafrom: dateStart,
        dataincil: dateEnd
      },
      type: 'GET',
      success: function success(data) {
        console.log('От ' + dateStart + ' до ' + dateEnd);
        articles.innerHTML = data + '<div class="calendar-cart calendar-cart--clear"></div><div class="calendar-cart calendar-cart--clear"></div><div class="calendar-cart calendar-cart--clear"></div>';
      }
    });
  }

  var counter = 0;
  $('.calendar #load-more').click(function (e) {
    e.preventDefault(); // let dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || '01.01.2019';
    // let dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || '01.01.2025';

    var dateStart = toolbar.elements['calendar-type'].value.split(',')[0] || false;
    var dateEnd = toolbar.elements['calendar-type'].value.split(',')[1] || false;
    var btn = this;
    var position = window.pageYOffset;
    $(btn).find('span').text('Загрузка...');
    $.ajax({
      url: '/ajax/eventslist.php',
      data: {
        count: 20 + counter * 8,
        type: toolbar.elements['event-type'].value,
        datafrom: dateStart,
        dataincil: dateEnd
      },
      type: 'GET',
      success: function success(data) {
        if (data.length > 150) {
          counter++;
          $('.calendar__content').find('.calendar-cart--clear').first().before(data);
          $(btn).find('span').text('Загрузить еще');
        } else {
          $(btn).find('span').text('Загрузить еще');
          $('.calendar__toolbar').hide();
        }

        window.scrollTo(0, position);
      }
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


"undefined" != typeof jQuery && function (c) {
  function u(e, t, i) {
    return new Array(i + 1 - e.length).join(t) + e;
  }

  function l(e, t, i) {
    if (1 !== arguments.length) return 3 === arguments.length ? new Date(0, 0, 0, e, t, i) : 2 === arguments.length ? new Date(0, 0, 0, e, t, 0) : new Date(0, 0, 0);
    var n = e;
    return "string" == typeof n && (n = c.fn.timepicker.parseTime(n)), new Date(0, 0, 0, n.getHours(), n.getMinutes(), n.getSeconds());
  }

  var m, d;
  c.TimePicker = function () {
    var t = this;
    t.container = c(".ui-timepicker-container"), t.ui = t.container.find(".ui-timepicker"), 0 === t.container.length && (t.container = c("<div></div>").addClass("ui-timepicker-container").addClass("ui-timepicker-hidden ui-helper-hidden").appendTo("body").hide(), t.ui = c("<div></div>").addClass("ui-timepicker").addClass("ui-widget ui-widget-content ui-menu").addClass("ui-corner-all").appendTo(t.container), t.viewport = c("<ul></ul>").addClass("ui-timepicker-viewport").appendTo(t.ui), "1.4.2" <= c.fn.jquery && t.ui.delegate("a", "mouseenter.timepicker", function () {
      t.activate(!1, c(this).parent());
    }).delegate("a", "mouseleave.timepicker", function () {
      t.deactivate(!1);
    }).delegate("a", "click.timepicker", function (e) {
      e.preventDefault(), t.select(!1, c(this).parent());
    }));
  }, c.TimePicker.count = 0, c.TimePicker.instance = function () {
    return c.TimePicker._instance || (c.TimePicker._instance = new c.TimePicker()), c.TimePicker._instance;
  }, c.TimePicker.prototype = {
    keyCode: {
      ALT: 18,
      BLOQ_MAYUS: 20,
      CTRL: 17,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ENTER: 108,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RIGHT: 39,
      SHIFT: 16,
      TAB: 9,
      UP: 38
    },
    _items: function _items(e, t) {
      var i,
          n,
          r = c("<ul></ul>"),
          a = null;

      for (-1 === e.options.timeFormat.indexOf("m") && e.options.interval % 60 != 0 && (e.options.interval = 60 * Math.max(Math.round(e.options.interval / 60), 1)), i = t ? l(t) : e.options.startTime ? l(e.options.startTime) : l(e.options.startHour, e.options.startMinutes), n = new Date(i.getTime() + 864e5); i < n;) {
        this._isValidTime(e, i) && (a = c("<li>").addClass("ui-menu-item").appendTo(r), c("<a>").addClass("ui-corner-all").text(c.fn.timepicker.formatTime(e.options.timeFormat, i)).appendTo(a), a.data("time-value", i)), i = new Date(i.getTime() + 60 * e.options.interval * 1e3);
      }

      return r.children();
    },
    _isValidTime: function _isValidTime(e, t) {
      var i = null,
          n = null;
      return t = l(t), null !== e.options.minTime ? i = l(e.options.minTime) : null === e.options.minHour && null === e.options.minMinutes || (i = l(e.options.minHour, e.options.minMinutes)), null !== e.options.maxTime ? n = l(e.options.maxTime) : null === e.options.maxHour && null === e.options.maxMinutes || (n = l(e.options.maxHour, e.options.maxMinutes)), null !== i && null !== n ? i <= t && t <= n : null !== i ? i <= t : null === n || t <= n;
    },
    _hasScroll: function _hasScroll() {
      var e = void 0 !== this.ui.prop ? "prop" : "attr";
      return this.ui.height() < this.ui[e]("scrollHeight");
    },
    _move: function _move(e, t, i) {
      var n,
          r = this;
      r.closed() && r.open(e), r.active && (n = r.active[t + "All"](".ui-menu-item").eq(0)).length ? r.activate(e, n) : r.activate(e, r.viewport.children(i));
    },
    register: function register(e, t) {
      var i = this,
          n = {};
      n.element = c(e), n.element.data("TimePicker") || (n.options = c.metadata ? c.extend({}, t, n.element.metadata()) : c.extend({}, t), n.widget = i, c.extend(n, {
        next: function next() {
          return i.next(n);
        },
        previous: function previous() {
          return i.previous(n);
        },
        first: function first() {
          return i.first(n);
        },
        last: function last() {
          return i.last(n);
        },
        selected: function selected() {
          return i.selected(n);
        },
        open: function open() {
          return i.open(n);
        },
        close: function close() {
          return i.close(n);
        },
        closed: function closed() {
          return i.closed(n);
        },
        destroy: function destroy() {
          return i.destroy(n);
        },
        parse: function parse(e) {
          return i.parse(n, e);
        },
        format: function format(e, t) {
          return i.format(n, e, t);
        },
        getTime: function getTime() {
          return i.getTime(n);
        },
        setTime: function setTime(e, t) {
          return i.setTime(n, e, t);
        },
        option: function option(e, t) {
          return i.option(n, e, t);
        }
      }), i._setDefaultTime(n), i._addInputEventsHandlers(n), n.element.data("TimePicker", n));
    },
    _setDefaultTime: function _setDefaultTime(e) {
      "now" === e.options.defaultTime ? e.setTime(l(new Date())) : e.options.defaultTime && e.options.defaultTime.getFullYear ? e.setTime(l(e.options.defaultTime)) : e.options.defaultTime && e.setTime(c.fn.timepicker.parseTime(e.options.defaultTime));
    },
    _addInputEventsHandlers: function _addInputEventsHandlers(t) {
      var i = this;
      t.element.bind("keydown.timepicker", function (e) {
        switch (e.which || e.keyCode) {
          case i.keyCode.ENTER:
          case i.keyCode.NUMPAD_ENTER:
            e.preventDefault(), i.closed() ? t.element.trigger("change.timepicker") : i.select(t, i.active);
            break;

          case i.keyCode.UP:
            t.previous();
            break;

          case i.keyCode.DOWN:
            t.next();
            break;

          default:
            i.closed() || t.close(!0);
        }
      }).bind("focus.timepicker", function () {
        t.open();
      }).bind("blur.timepicker", function () {
        setTimeout(function () {
          t.element.data("timepicker-user-clicked-outside") && t.close();
        });
      }).bind("change.timepicker", function () {
        t.closed() && t.setTime(c.fn.timepicker.parseTime(t.element.val()));
      });
    },
    select: function select(e, t) {
      var i = this,
          n = !1 === e ? i.instance : e;
      i.setTime(n, c.fn.timepicker.parseTime(t.children("a").text())), i.close(n, !0);
    },
    activate: function activate(e, t) {
      var i,
          n,
          r,
          a = this;
      (!1 === e ? a.instance : e) === a.instance && (a.deactivate(), a._hasScroll() && (i = t.offset().top - a.ui.offset().top, n = a.ui.scrollTop(), r = a.ui.height(), i < 0 ? a.ui.scrollTop(n + i) : r <= i && a.ui.scrollTop(n + i - r + t.height())), a.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-item").end());
    },
    deactivate: function deactivate() {
      var e = this;
      e.active && (e.active.children("a").removeClass("ui-state-hover").removeAttr("id"), e.active = null);
    },
    next: function next(e) {
      return !this.closed() && this.instance !== e || this._move(e, "next", ".ui-menu-item:first"), e.element;
    },
    previous: function previous(e) {
      return !this.closed() && this.instance !== e || this._move(e, "prev", ".ui-menu-item:last"), e.element;
    },
    first: function first(e) {
      return this.instance === e && this.active && 0 === this.active.prevAll(".ui-menu-item").length;
    },
    last: function last(e) {
      return this.instance === e && this.active && 0 === this.active.nextAll(".ui-menu-item").length;
    },
    selected: function selected(e) {
      return this.instance === e && this.active ? this.active : null;
    },
    open: function open(i) {
      var n = this,
          r = i.getTime(),
          e = i.options.dynamic && r;
      if (!i.options.dropdown) return i.element;

      switch (i.element.data("timepicker-event-namespace", Math.random()), c(document).bind("click.timepicker-" + i.element.data("timepicker-event-namespace"), function (e) {
        i.element.get(0) === e.target ? i.element.data("timepicker-user-clicked-outside", !1) : i.element.data("timepicker-user-clicked-outside", !0).blur();
      }), !i.rebuild && i.items && !e || (i.items = n._items(i, e ? r : null)), (i.rebuild || n.instance !== i || e) && (c.fn.jquery < "1.4.2" ? (n.viewport.children().remove(), n.viewport.append(i.items), n.viewport.find("a").bind("mouseover.timepicker", function () {
        n.activate(i, c(this).parent());
      }).bind("mouseout.timepicker", function () {
        n.deactivate(i);
      }).bind("click.timepicker", function (e) {
        e.preventDefault(), n.select(i, c(this).parent());
      })) : (n.viewport.children().detach(), n.viewport.append(i.items))), i.rebuild = !1, n.container.removeClass("ui-helper-hidden ui-timepicker-hidden ui-timepicker-standard ui-timepicker-corners").show(), i.options.theme) {
        case "standard":
          n.container.addClass("ui-timepicker-standard");
          break;

        case "standard-rounded-corners":
          n.container.addClass("ui-timepicker-standard ui-timepicker-corners");
      }

      n.container.hasClass("ui-timepicker-no-scrollbar") || i.options.scrollbar || (n.container.addClass("ui-timepicker-no-scrollbar"), n.viewport.css({
        paddingRight: 40
      }));
      var t = n.container.outerHeight() - n.container.height(),
          a = i.options.zindex ? i.options.zindex : i.element.offsetParent().css("z-index"),
          s = i.element.offset();
      n.container.css({
        top: s.top + i.element.outerHeight(),
        left: s.left
      }), n.container.show(), n.container.css({
        left: i.element.offset().left,
        height: n.ui.outerHeight() + t,
        width: i.element.outerWidth(),
        zIndex: a,
        cursor: "default"
      });
      var o = n.container.width() - (n.ui.outerWidth() - n.ui.width());
      return n.ui.css({
        width: o
      }), n.viewport.css({
        width: o
      }), i.items.css({
        width: o
      }), n.instance = i, r ? i.items.each(function () {
        var e = c(this),
            t = c.fn.jquery < "1.4.2" ? c.fn.timepicker.parseTime(e.find("a").text()) : e.data("time-value");
        return t.getTime() !== r.getTime() || (n.activate(i, e), !1);
      }) : n.deactivate(i), i.element;
    },
    close: function close(e) {
      return this.instance === e && (this.container.addClass("ui-helper-hidden ui-timepicker-hidden").hide(), this.ui.scrollTop(0), this.ui.children().removeClass("ui-state-hover")), c(document).unbind("click.timepicker-" + e.element.data("timepicker-event-namespace")), e.element;
    },
    closed: function closed() {
      return this.ui.is(":hidden");
    },
    destroy: function destroy(e) {
      return this.close(e, !0), e.element.unbind(".timepicker").data("TimePicker", null);
    },
    parse: function parse(e, t) {
      return c.fn.timepicker.parseTime(t);
    },
    format: function format(e, t, i) {
      return i = i || e.options.timeFormat, c.fn.timepicker.formatTime(i, t);
    },
    getTime: function getTime(e) {
      var t = c.fn.timepicker.parseTime(e.element.val());
      return t instanceof Date && !this._isValidTime(e, t) ? null : t instanceof Date && e.selectedTime ? e.format(t) === e.format(e.selectedTime) ? e.selectedTime : t : t instanceof Date ? t : null;
    },
    setTime: function setTime(e, t, i) {
      var n = e.selectedTime;

      if ("string" == typeof t && (t = e.parse(t)), t && t.getMinutes && this._isValidTime(e, t)) {
        if (t = l(t), e.selectedTime = t, e.element.val(e.format(t, e.options.timeFormat)), i) return e;
      } else e.selectedTime = null;

      return null === n && null === e.selectedTime || (e.element.trigger("time-change", [t]), c.isFunction(e.options.change) && e.options.change.apply(e.element, [t])), e.element;
    },
    option: function option(t, e, i) {
      if (void 0 === i) return t.options[e];
      var n,
          r,
          a = t.getTime();
      "string" == typeof e ? (n = {})[e] = i : n = e, r = ["minHour", "minMinutes", "minTime", "maxHour", "maxMinutes", "maxTime", "startHour", "startMinutes", "startTime", "timeFormat", "interval", "dropdown"], c.each(n, function (e) {
        t.options[e] = n[e], t.rebuild = t.rebuild || -1 < c.inArray(e, r);
      }), t.rebuild && t.setTime(a);
    }
  }, c.TimePicker.defaults = {
    timeFormat: "hh:mm p",
    minHour: null,
    minMinutes: null,
    minTime: null,
    maxHour: null,
    maxMinutes: null,
    maxTime: null,
    startHour: null,
    startMinutes: null,
    startTime: null,
    interval: 30,
    dynamic: !0,
    theme: "standard",
    zindex: null,
    dropdown: !0,
    scrollbar: !1,
    change: function change() {}
  }, c.TimePicker.methods = {
    chainable: ["next", "previous", "open", "close", "destroy", "setTime"]
  }, c.fn.timepicker = function (t) {
    if ("string" == typeof t) {
      var i = Array.prototype.slice.call(arguments, 1),
          e = "option" === t && 2 < arguments.length || -1 !== c.inArray(t, c.TimePicker.methods.chainable) ? "each" : "map",
          n = this[e](function () {
        var e = c(this).data("TimePicker");
        if ("object" == _typeof(e)) return e[t].apply(e, i);
      });
      return "map" === e && 1 === this.length ? c.makeArray(n).shift() : "map" === e ? c.makeArray(n) : n;
    }

    if (1 === this.length && this.data("TimePicker")) return this.data("TimePicker");
    var r = c.extend({}, c.TimePicker.defaults, t);
    return this.each(function () {
      c.TimePicker.instance().register(this, r);
    });
  }, c.fn.timepicker.formatTime = function (e, t) {
    var i = t.getHours(),
        n = i % 12,
        r = t.getMinutes(),
        a = t.getSeconds(),
        s = {
      hh: u((0 == n ? 12 : n).toString(), "0", 2),
      HH: u(i.toString(), "0", 2),
      mm: u(r.toString(), "0", 2),
      ss: u(a.toString(), "0", 2),
      h: 0 == n ? 12 : n,
      H: i,
      m: r,
      s: a,
      p: 11 < i ? "PM" : "AM"
    },
        o = e,
        c = "";

    for (c in s) {
      s.hasOwnProperty(c) && (o = o.replace(new RegExp(c, "g"), s[c]));
    }

    return o = o.replace(new RegExp("a", "g"), 11 < i ? "pm" : "am");
  }, c.fn.timepicker.parseTime = (d = (m = [[/^(\d+)$/, "$1"], [/^:(\d)$/, "$10"], [/^:(\d+)/, "$1"], [/^(\d):([7-9])$/, "0$10$2"], [/^(\d):(\d\d)$/, "$1$2"], [/^(\d):(\d{1,})$/, "0$1$20"], [/^(\d\d):([7-9])$/, "$10$2"], [/^(\d\d):(\d)$/, "$1$20"], [/^(\d\d):(\d*)$/, "$1$2"], [/^(\d{3,}):(\d)$/, "$10$2"], [/^(\d{3,}):(\d{2,})/, "$1$2"], [/^(\d):(\d):(\d)$/, "0$10$20$3"], [/^(\d{1,2}):(\d):(\d\d)/, "$10$2$3"]]).length, function (e) {
    var t,
        i,
        n = l(new Date()),
        r = !1,
        a = !1,
        s = !1;
    if (void 0 === e || !e.toLowerCase) return null;
    e = e.toLowerCase(), i = !(t = /a/.test(e)) && /p/.test(e), e = e.replace(/[^0-9:]/g, "").replace(/:+/g, ":");

    for (var o = 0; o < d; o += 1) {
      if (m[o][0].test(e)) {
        e = e.replace(m[o][0], m[o][1]);
        break;
      }
    }

    return 1 === (e = e.replace(/:/g, "")).length || 2 === e.length ? r = e : 3 === e.length || 5 === e.length ? (r = e.substr(0, 1), a = e.substr(1, 2), s = e.substr(3, 2)) : (4 === e.length || 5 < e.length) && (r = e.substr(0, 2), a = e.substr(2, 2), s = e.substr(4, 2)), 0 < e.length && e.length < 5 && (e.length < 3 && (a = 0), s = 0), !1 !== r && !1 !== a && !1 !== s && (r = parseInt(r, 10), a = parseInt(a, 10), s = parseInt(s, 10), t && 12 === r ? r = 0 : i && r < 12 && (r += 12), 24 < r ? 6 <= e.length ? c.fn.timepicker.parseTime(e.substr(0, 5)) : c.fn.timepicker.parseTime(e + "0" + (t ? "a" : "") + (i ? "p" : "")) : (n.setHours(r, a, s), n));
  });
}(jQuery);

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
          fileLength = input.files.length;
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
  })(); // https://timepicker.co/


  $('input[name="date"]').timepicker({
    timeFormat: 'h:mm',
    interval: 10,
    // minTime: '9',
    // maxTime: '6:00pm',
    // defaultTime: '11',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
  window.initChoices = {
    init: function initChoices() {
      var inputs = document.querySelectorAll('.inputselect');

      for (var i = 0; i < inputs.length; i++) {
        new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(inputs[i], {
          loadingText: 'Загрузка...',
          // noResultsText: 'No results found',
          // noChoicesText: 'No choices to choose from',
          itemSelectText: 'Кликните, чтобы выбрать',
          classNames: {
            containerOuter: 'choices',
            containerInner: 'input__field input__field--select',
            input: 'choices__input',
            inputCloned: 'choices__input--cloned',
            list: 'choices__list',
            listItems: 'choices__list--multiple',
            listSingle: 'choices__list--single',
            listDropdown: 'choices__list--dropdown',
            item: 'choices__item',
            itemSelectable: 'choices__item--selectable',
            itemDisabled: 'choices__item--disabled',
            itemChoice: 'choices__item--choice',
            placeholder: 'choices__placeholder',
            group: 'choices__group',
            groupHeading: 'choices__heading',
            button: 'choices__button',
            activeState: 'is-active',
            focusState: 'is-focused',
            openState: 'is-open',
            disabledState: 'is-disabled',
            highlightedState: 'is-highlighted',
            selectedState: 'is-selected',
            flippedState: 'is-flipped',
            loadingState: 'is-loading',
            noResults: 'has-no-results',
            noChoices: 'has-no-choices'
          }
        });
      }
    }
  };
  initChoices.init(); // ()();
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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
  var mainMenu = document.querySelector('#mmenu');

  if (mainMenu) {
    new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"](mainMenu, {
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
  }
})();

(function initMobileMMenu() {
  var menuArray = mobileLinks || null;
  var menu2 = document.querySelector('#mmenu-m');

  if (menu2) {
    new mmenu_js__WEBPACK_IMPORTED_MODULE_0__["default"](menu2, {
      "extensions": ["pagedim-black"],
      "navbar": {
        "title": "Микрокредитование"
      }
    });
  }
})();

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! magnific-popup */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.js");
/* harmony import */ var magnific_popup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(magnific_popup__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  $.ajax({
    url: '/piece.json',
    type: "../events.json",
    dataType: "json",
    success: function success(data) {
      alert(data);
    }
  });
})();

$(document).ready(function () {
  $('.slider-front__more').click(function (e) {
    e.preventDefault();
    console.log(this);
    $.magnificPopup.open({
      items: {
        src: '#slider-front__modal',
        type: 'inline'
      }
    });
  });
  $('.modal-link').magnificPopup({
    type: 'inline'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

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

    if (btn) {
      btn.innerHTML = '<span>Выключить изображения</span>';
    }
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

/***/ "./src/blocks/modules/slider-news/slider-news.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/slider-news/slider-news.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

document.addEventListener('DOMContentLoaded', function () {
  initSlider();
});

var initSlider = function initSlider() {
  var sliderNews = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-news', {
    init: false,
    pagination: {
      el: '.slider-news__pagination',
      bulletActiveClass: 'slider-news__bullet--active',
      bulletClass: 'slider-news__bullet'
    },
    navigation: {
      nextEl: '.slider-news__slide-btn--next',
      prevEl: '.slider-news__slide-btn--prev',
      disabledClass: 'slider-news__slide-btn--disabled'
    }
  });

  if (window.innerWidth > 1200) {
    sliderNews.init();
  }
};

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
    autoHeight: true,
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
    autoHeight: true,
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

(function () {
  var mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-cluster', {
    autoHeight: true,
    pagination: {
      el: '.slider-cluster__pagination',
      bulletClass: 'slider-cluster__bullet',
      bulletActiveClass: 'slider-cluster__bullet--active'
    },
    navigation: {
      nextEl: '.slider-cluster__btn--next',
      prevEl: '.slider-cluster__btn--prev',
      disabledClass: 'slider-cluster__btn--disabled'
    }
  });
})();

/***/ }),

/***/ "./src/blocks/modules/tab/tab.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/tab/tab.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  initTabs("data-link", "data-block", 'link-aside--active', 'data-select');
  initTabs("data-tab-link", "data-tab-block", 'link-aside--active', 'data-select');
  initTabs("data-link-main", "data-block-main", 'btn--active-tab', '');
});

var initTabs = function initTabs(link, block, activeClass, select) {
  var button = document.querySelectorAll('[' + link + ']');
  var tab = document.querySelectorAll('[' + block + ']');

  var _loop = function _loop(i) {
    button[i].addEventListener('click', function (e) {
      e.preventDefault();
      initLink(button[i].getAttribute(link));
    });
  };

  for (var i = 0; i < button.length; i++) {
    _loop(i);
  }

  if (select) {
    var selectEl = document.querySelectorAll('[' + select + ']');

    for (var _i = 0; _i < selectEl.length; _i++) {
      selectEl[_i].addEventListener('change', function (e) {
        initLink(+e.target.value);
      });
    }
  }

  var initLink = function initLink(index) {
    for (var _i2 = 0; _i2 < tab.length; _i2++) {
      if (index == tab[_i2].getAttribute(block)) {
        tab[_i2].removeAttribute('hidden');
      } else {
        tab[_i2].setAttribute('hidden', '');
      }
    }

    for (var _i3 = 0; _i3 < button.length; _i3++) {
      if (index == button[_i3].getAttribute(link)) {
        button[_i3].classList.add(activeClass);
      } else {
        button[_i3].classList.remove(activeClass);
      }
    }
  };

  initLink(1);
}; // Для больших табов в ФРП

/***/ }),

/***/ "./src/blocks/modules/ui-library/ui-library.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/ui-library/ui-library.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
  // Выпадение дроп-карточки
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
  })(); // Скролл наверх


  (function scrollTop() {
    var btn = document.querySelector('.footer__to-top');

    if (btn) {
      btn.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  })();

  (function fixedTopBtn() {
    var btn = document.querySelector('.footer__to-top');

    if (btn) {
      window.addEventListener('scroll', toggleBtn);
    }

    function toggleBtn() {
      if (btn) {
        if (pageYOffset > 3000) {
          btn.classList.add('footer__to-top--visible');
        } else {
          btn.classList.remove('footer__to-top--visible');
        }
      }
    }

    toggleBtn();
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
/* harmony import */ var _modules_event_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/event/event */ "./src/blocks/modules/event/event.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_1_events_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/1_events/events */ "./src/blocks/modules/1_events/events.js");
/* harmony import */ var _modules_1_events_events__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_1_events_events__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/tab/tab */ "./src/blocks/modules/tab/tab.js");
/* harmony import */ var _modules_tab_tab__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_tab__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_slider_news_slider_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/slider-news/slider-news */ "./src/blocks/modules/slider-news/slider-news.js");
// Плагины
// import $ from 'jquery';
// Блоки










 // Дальше все по БЭМ




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