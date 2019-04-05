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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("datetime-difference");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Error404 = function Error404() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "center-align"
  }, "404 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      color: 'red'
    }
  }, "|"), " Not Found"));
};

var Error_View = function Error_View(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, !props.statusCode ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "center-align"
  }, "Umm...an error occurred on client") : props.statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error404, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "center-align"
  }, "Whoops...an error ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.statusCode), " occurred on the server"));
};

/* harmony default export */ __webpack_exports__["a"] = (Error_View);

/***/ }),
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
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("chart.js");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(9);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./utility.js
var utility = __webpack_require__(2);

// CONCATENATED MODULE: ./component/Poll_View.js


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



var chart;

var Poll_View_Poll_View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Poll_View, _React$Component);

  function Poll_View() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Poll_View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Poll_View)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      totalVote: _this.props.poll.options.map(function (elem) {
        return elem.vote;
      }).reduce(function (acc, curr) {
        return acc + curr;
      }),
      votes: _this.props.poll.options.map(function (elem) {
        return elem.vote;
      }),
      lastVotedOn: _this.props.poll.lastVotedOn
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderChart", function (votes) {
      var ctx = document.getElementById("chart").getContext('2d');

      var Chart = __webpack_require__(25);

      chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: _this.props.poll.options.map(function (elem) {
            return elem.name;
          }),
          datasets: [{
            label: '# of Votes',
            data: votes,
            backgroundColor: Object(utility["c" /* genColorHexes */])(_this.props.poll.options.length),
            borderColor: 'rgba(100,100,100,0.5)',
            borderWidth: 1
          }]
        },
        options: {
          legend: {
            display: false
          },
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 35
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmitVote", function (e) {
      e.preventDefault();
      document.getElementById('btn-vote').disabled = true;

      function errorHandler(message) {
        document.getElementById('btn-vote').disabled = false;
        M.toast({
          html: message,
          classes: 'red white-text',
          durationLength: 5000
        });
      }

      var voteIndex;
      var votedOption;

      _toConsumableArray(document.querySelectorAll('[name="input-vote"]')).some(function (vote, index) {
        if (vote.checked) {
          voteIndex = index;
          votedOption = vote.nextElementSibling.textContent;
          return true;
        }
      });

      if (voteIndex === undefined) {
        return errorHandler('You must select an option to vote!');
      }

      ;
      M.toast({
        html: "Congratulations, you've voted for ".concat(votedOption ? '"' + votedOption + '"' : "something"),
        classes: 'green white-text'
      });
      external_isomorphic_unfetch_default()("/api/polls/".concat(_this.props.poll.id), {
        method: 'PUT',
        body: JSON.stringify({
          voteIndex: voteIndex
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        if (res.status === 200) {
          var votes = _toConsumableArray(_this.state.votes);

          votes[voteIndex]++;

          _this.setState({
            totalVote: _this.state.totalVote + 1,
            votes: votes,
            lastVotedOn: new Date()
          });

          if (chart) {
            chart.destroy();
          }

          _this.renderChart(votes);
        } else {
          return errorHandler('500: Internal Server Error');
        }
      }).catch(function (err) {
        return console.error(err);
      });
    });

    return _this;
  }

  _createClass(Poll_View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.totalVote) {
        this.renderChart(this.state.votes);
      }

      M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var chartContainer;
      var firstVoteMessage;
      var lastVotedOn;

      if (this.state.totalVote) {
        chartContainer = external_react_default.a.createElement("div", {
          className: "col s12",
          style: {
            position: "relative",
            height: "50vh"
          }
        }, external_react_default.a.createElement("canvas", {
          id: "chart"
        }));
        lastVotedOn = external_react_default.a.createElement("h6", null, "Last voted on :", external_react_default.a.createElement("span", {
          className: "tooltipped",
          "data-position": "top",
          "data-tooltip": Object(utility["b" /* dateTooltipString */])(this.state.lastVotedOn)
        }, " ", Object(utility["g" /* relativeDate */])(this.state.lastVotedOn)));
      } else {
        firstVoteMessage = external_react_default.a.createElement("h5", {
          className: "center mb-3"
        }, "Be the first to vote on this poll!!");
      }

      return external_react_default.a.createElement("div", {
        className: "card grey lighten-5 z-depth-3 black-text"
      }, external_react_default.a.createElement("div", {
        className: "card-content"
      }, external_react_default.a.createElement("span", {
        className: "card-title center"
      }, this.props.poll.title), external_react_default.a.createElement("div", {
        className: "row my-0"
      }, chartContainer, external_react_default.a.createElement("div", {
        className: "col s12"
      }, external_react_default.a.createElement("ul", {
        className: "collection"
      }, this.props.poll.options.map(function (option, index) {
        var pct = Object(utility["e" /* pctString */])(_this2.state.votes[index], _this2.state.totalVote);
        return external_react_default.a.createElement("li", {
          className: "collection-item grey lighten-3",
          key: index
        }, !_this2.state.totalVote ? external_react_default.a.createElement("div", {
          className: "row my-0"
        }, external_react_default.a.createElement("div", {
          className: "col s9"
        }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "radio",
          name: "input-vote",
          className: "with-gap"
        }), external_react_default.a.createElement("span", {
          className: "black-text"
        }, option.name)))), external_react_default.a.createElement("div", {
          className: "col s3  right-align"
        }, pct)) : external_react_default.a.createElement("div", {
          className: "row my-0"
        }, external_react_default.a.createElement("div", {
          className: "col s12 l10"
        }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("label", null, external_react_default.a.createElement("input", {
          type: "radio",
          name: "input-vote",
          className: "with-gap"
        }), external_react_default.a.createElement("span", {
          className: "black-text"
        }, option.name))), external_react_default.a.createElement("div", {
          className: "progress white"
        }, external_react_default.a.createElement("div", {
          className: "determinate \n                                                        ".concat(utility["a" /* colorClasses */][index % utility["a" /* colorClasses */].length]),
          style: {
            width: pct.replace(/<|>/, "")
          }
        }))), external_react_default.a.createElement("div", {
          className: "col s12 l2"
        }, external_react_default.a.createElement("p", null, pct), external_react_default.a.createElement("p", null, Object(utility["i" /* voteString */])(_this2.state.votes[index])))));
      })))), external_react_default.a.createElement("h6", {
        className: "right-align mr-5"
      }, "Total Votes : ", this.state.totalVote), firstVoteMessage, external_react_default.a.createElement("div", {
        className: "center mb-3"
      }, external_react_default.a.createElement("button", {
        className: "btn-large waves-effect waves-light yellow accent-4 black-text",
        id: "btn-vote",
        onClick: function onClick(e) {
          return _this2.handleSubmitVote(e);
        }
      }, external_react_default.a.createElement("i", {
        className: "material-icons left mr-2"
      }, "arrow_upward"), "Vote")), external_react_default.a.createElement("h6", null, "Created on :", external_react_default.a.createElement("span", {
        className: "tooltipped",
        "data-position": "top",
        "data-tooltip": Object(utility["b" /* dateTooltipString */])(this.props.poll.createdOn)
      }, " ", Object(utility["g" /* relativeDate */])(this.props.poll.createdOn))), lastVotedOn));
    }
  }]);

  return Poll_View;
}(external_react_default.a.Component);

/* harmony default export */ var component_Poll_View = (Poll_View_Poll_View);
// EXTERNAL MODULE: ./component/Layout.js + 1 modules
var Layout = __webpack_require__(5);

// EXTERNAL MODULE: ./component/Error_View.js
var Error_View = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/poll.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var poll_chart;

var poll_Poll = function Poll(props) {
  return external_react_default.a.createElement(Layout["a" /* default */], null, props.poll ? external_react_default.a.createElement(component_Poll_View, {
    poll: props.poll
  }) : external_react_default.a.createElement(Error_View["a" /* default */], {
    statusCode: props.statusCode
  }));
};

poll_Poll.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref) {
    var id, res, data, statusCode;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id;
            _context.next = 3;
            return external_isomorphic_unfetch_default()("".concat(utility["h" /* urlConfig */].protocol, "://").concat(utility["h" /* urlConfig */].host, "/api/polls/").concat(id));

          case 3:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            data.id = id;
            return _context.abrupt("return", {
              poll: data
            });

          case 12:
            statusCode = res ? res.status : null;
            return _context.abrupt("return", {
              statusCode: statusCode
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var poll = __webpack_exports__["default"] = (poll_Poll);

/***/ })
/******/ ]);