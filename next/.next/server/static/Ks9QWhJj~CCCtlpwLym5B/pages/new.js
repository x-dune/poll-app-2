module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return randomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pctString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return voteString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return genColorHexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return relativeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return urlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateTooltipString; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

;

function pctString(vote, totalVote) {
  if (totalVote === 0) {
    return 'No votes yet';
  } else if (vote === 0) {
    return '0%';
  } else if (vote === totalVote) {
    return '100%';
  } else {
    var pct = Math.round(vote / totalVote * 100);
    return !pct ? '<1%' : pct === 100 ? '>99%' : "".concat(pct, "%");
  }
}

;

function voteString(vote) {
  if (vote === 0) {
    return "0 votes";
  } else if (vote === 1) {
    return "1 vote";
  } else {
    return "".concat(vote, " votes");
  }
}

var colorClasses = ['red accent-3', 'blue accent-1', 'green accent-3', 'yellow accent-3', 'orange accent-4', 'purple accent-2', 'cyan accent-3', 'teal accent-3', 'lime accent-3', 'pink accent-2'];

function genColorHexes(length) {
  var colorHexes = ['#ff1744', '#82b1ff', '#00e676', '#ffea00', '#ff6d00', '#e040fb', '#00e5ff', '#1de9b6', '#c6ff00', '#ff4081'];

  if (length <= colorClasses.length) {
    return colorHexes.slice(0, length);
  } else {
    var multiple = Math.floor(length / colorClasses.length);
    var remainder = length % colorClasses.length;

    if (multiple > 1) {
      for (var i = 1; i < multiple; i++) {
        colorHexes.push.apply(colorHexes, colorHexes);
      }
    }

    if (remainder > 0) {
      colorHexes.push.apply(colorHexes, _toConsumableArray(colorHexes.slice(0, remainder)));
      return colorHexes;
    }
  }
}

function relativeDate(isoDateString) {
  var dateTime = __webpack_require__(10);

  var d = dateTime(new Date(isoDateString), new Date());

  for (var i = 0; i < 5; i++) {
    var value = d[Object.keys(d)[i]];

    if (!value) {
      continue;
    } else {
      return "".concat(value, " ").concat(value === 1 ? Object.keys(d)[i].slice(0, -1) : Object.keys(d)[i], " ago");
    }
  }

  return "Just now";
}

function isEmptyArray(array) {
  return !Array.isArray(array) || array.length === 0;
}

function dateTooltipString(isoDateString) {
  var d = new Date(isoDateString);
  var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var h = !d.getHours() ? '12' : d.getHours() % 12;
  return "".concat(d.getDate(), " ").concat(m[d.getMonth()], " ").concat(d.getFullYear(), " @ ").concat(h, ":").concat(d.getMinutes() ? d.getMinutes() : '00').concat(d.getHours() / 12 >= 1 ? 'PM' : 'AM');
}

var urlConfig =  false ? undefined : {
  protocol: 'https',
  host: 'generic-poll-app.herokuapp.com'
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./component/Navbar.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Navbar_Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      searchQuery: _this.props.searchQuery ? _this.props.searchQuery : ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (id) {
      var title = document.getElementById(id).value;
      console.log('router push search');
      router_default.a.push({
        pathname: '/search',
        query: {
          title: title
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchEnter", function (e, id) {
      if (e.keyCode === 13) {
        if (id === 'search-small') {
          var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));

          if (instance) {
            instance.close();
          }
        }

        ;

        _this.handleSearch(id);
      }
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("nav", null, external_react_default.a.createElement("div", {
        className: "nav-wrapper deep-purple"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "brand-logo"
      }, external_react_default.a.createElement("i", {
        className: "material-icons",
        style: {
          fontSize: "3.5rem"
        }
      }, "poll"), external_react_default.a.createElement("span", {
        className: "hide-on-small-and-down"
      }, "Poll App"))), external_react_default.a.createElement("a", {
        href: "#",
        "data-target": "mobile-sidenav",
        className: "sidenav-trigger"
      }, external_react_default.a.createElement("i", {
        className: "material-icons"
      }, "menu")), external_react_default.a.createElement("ul", {
        className: "right hide-on-med-and-down mr-3"
      }, external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/new"
      }, external_react_default.a.createElement("a", {
        className: "btn yellow black-text waves-effect waves-light"
      }, "Create New Poll"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", null, "About"))), external_react_default.a.createElement("li", {
        className: "ml-2 mr-0"
      }, external_react_default.a.createElement("input", {
        id: "search-med",
        type: "search",
        placeholder: "Search",
        className: "white-text",
        onKeyDown: function onKeyDown(e) {
          return _this2.handleSearchEnter(e, 'search-med');
        },
        value: this.state.searchQuery,
        onChange: function onChange(e) {
          return _this2.setState({
            searchQuery: e.target.value
          });
        }
      })), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        className: "btn yellow black-text ml-1 waves-effect waves-light",
        onClick: function onClick() {
          return _this2.handleSearch('search-med');
        }
      }, external_react_default.a.createElement("i", {
        className: "material-icons center"
      }, "search")))))), external_react_default.a.createElement("ul", {
        className: "sidenav",
        id: "mobile-sidenav"
      }, external_react_default.a.createElement("li", {
        className: "mx-2"
      }, external_react_default.a.createElement("div", {
        className: "row mb-0"
      }, external_react_default.a.createElement("div", {
        className: "col s10 px-0"
      }, external_react_default.a.createElement("input", {
        type: "search",
        id: "search-small",
        placeholder: "Search",
        onKeyDown: function onKeyDown(e) {
          return _this2.handleSearchEnter(e, 'search-small');
        },
        value: this.state.searchQuery,
        onChange: function onChange(e) {
          return _this2.setState({
            searchQuery: e.target.value
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "col s2 px-0"
      }, external_react_default.a.createElement("button", {
        className: "btn yellow black-text ml-1 sidenav-close",
        onClick: function onClick() {
          return _this2.handleSearch('search-small');
        }
      }, external_react_default.a.createElement("i", {
        className: "material-icons center"
      }, "search"))))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/new"
      }, external_react_default.a.createElement("a", {
        className: "sidenav-close"
      }, external_react_default.a.createElement("i", {
        className: "material-icons left ml-0 mr-1"
      }, "add"), " Create New Poll"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement(link_default.a, {
        href: "/about"
      }, external_react_default.a.createElement("a", {
        className: "sidenav-close"
      }, "About")))));
    }
  }]);

  return Navbar;
}(external_react_default.a.Component);

/* harmony default export */ var component_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./scss/style.scss
var style = __webpack_require__(7);

// EXTERNAL MODULE: ./scss/utilities.scss
var utilities = __webpack_require__(8);

// CONCATENATED MODULE: ./component/Layout.js


function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }






var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Layout_inherits(Layout, _React$Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems, {});
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      }), external_react_default.a.createElement("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }), external_react_default.a.createElement("link", {
        rel: "shortcut icon",
        href: "../static/favicon.ico",
        type: "image/x-icon"
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), external_react_default.a.createElement("title", null, "Poll App")), external_react_default.a.createElement(component_Navbar, {
        searchQuery: this.props.searchQuery
      }), external_react_default.a.createElement("div", {
        className: "container"
      }, this.props.children), external_react_default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
      }));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);

/* harmony default export */ var component_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("datetime-difference");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var New =
/*#__PURE__*/
function (_React$Component) {
  _inherits(New, _React$Component);

  function New() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, New);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(New)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      options: 2
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleAddMoreOptions", function (e) {
      e.preventDefault();
      var divId = Object(_utility__WEBPACK_IMPORTED_MODULE_3__[/* randomId */ "f"])();
      var div = document.createElement('div');
      div.id = divId;
      div.classList = 'row my-0';
      div.innerHTML = "\n        <div class=\"col s10 input-field pl-0 my-1\">\n            <textarea class=\"materialize-textarea\" data-length=\"256\" name=\"input-option\" id=\"input-option-".concat(divId, "\"></textarea>\n            <label for=\"input-option-").concat(divId, "\">Additional Option</label>\n        </div>");
      var div2 = document.createElement('div');
      div2.classList = 'col s2 input-field my-0';
      var btn = document.createElement('button');
      btn.className = 'btn red';
      btn.innerHTML = '<i class="material-icons">close</i>';
      btn.addEventListener('click', function () {
        document.getElementById(divId).remove();
        var options = _this.state.options;

        _this.setState({
          options: options - 1
        });
      });
      div2.appendChild(btn);
      div.appendChild(div2);
      document.getElementById('more-options').appendChild(div);
      var options = _this.state.options;

      if (options + 1 === 32) {
        M.toast({
          html: 'Maximum number of additional options reached!',
          classes: 'yellow black-text',
          displayLength: 6000
        });
      }

      _this.setState({
        options: options + 1
      });

      M.CharacterCounter.init(document.querySelectorAll("textarea#input-option-".concat(divId)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();
      document.getElementById('btn-submit').disabled = true;

      function errorHandler(message, displayLength) {
        M.toast({
          html: message,
          displayLength: displayLength,
          classes: 'red white-text'
        });
        document.getElementById('btn-submit').disabled = false;
      }

      var title = document.getElementById('input-title').value;

      if (!title) {
        return errorHandler('The poll must have a Title', 32000);
      }

      if (title.length > 512) {
        return errorHandler('The poll\'s Title cannot exceed 512 characters', 6000);
      }

      var options = _toConsumableArray(document.querySelectorAll('[name="input-option"]')).map(function (elem) {
        return elem.value.trim();
      }).filter(function (elem) {
        return elem;
      });

      if (options.length < 2) {
        return errorHandler('The poll needs AT LEAST 2 valid options!', 7000);
      }

      for (var i = 0; i < options.length; i++) {
        if (options[i].length > 256) {
          return errorHandler("The options \"".concat(options[i].name, "\" has exceeded 256 characters"), 7000);
        }
      }

      for (var _i = 0; _i < options.length - 1; _i++) {
        for (var j = _i + 1; j < options.length; j++) {
          if (options[_i] === options[j]) {
            return errorHandler('The poll must NOT have 2 or more identical options!', 7000);
          }
        }
      }

      M.toast({
        html: 'Successs!!!1',
        classes: 'green white-text'
      });
      fetch('/api/polls', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          options: options
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200 && res.redirected) {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(res.url);
        } else {
          return errorHandler('3200: Internal Server Error');
        }
      }).catch(function (err) {
        return console.log(err);
      });
    });

    return _this;
  }

  _createClass(New, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      M.CharacterCounter.init(document.querySelectorAll('textarea[data-length]'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "mt-32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "materialize-textarea",
        id: "input-title",
        placeholder: "Title for the pole",
        "data-length": "512"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "input-title",
        className: "active"
      }, "Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "materialize-textarea",
        name: "input-option",
        "data-length": "256"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "input-option-1"
      }, "Option 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: "materialize-textarea",
        name: "input-option",
        "data-length": "256"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "input-option-2"
      }, "Option 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "more-options",
        className: "mb-2"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn waves-effect waves-light yellow black-text accent-4",
        disabled: this.state.options < 32 ? false : true,
        onClick: function onClick(e) {
          return _this2.handleAddMoreOptions(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons left"
      }, "add"), "Add More Options", this.state.options < 32 ? " (".concat(32 - this.state.options, " left)") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn-large waves-effect waves-light yellow black-text accent-4",
        type: "submit",
        id: "btn-submit",
        onClick: function onClick(e) {
          return _this2.handleSubmit(e);
        }
      }, "Submit")))));
    }
  }]);

  return New;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ })
/******/ ]);