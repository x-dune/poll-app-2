webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Pagination */ "./component/Pagination.js");
/* harmony import */ var _component_Sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Sort */ "./component/Sort.js");
/* harmony import */ var _component_Polls_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Polls_View */ "./component/Polls_View.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility */ "./utility.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! url */ "../node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_8__);



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Sort__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pathname: "/",
    query: _objectSpread({}, props.query),
    render: props.count > 1
  }), Object(_utility__WEBPACK_IMPORTED_MODULE_7__["isEmptyArray"])(props.polls) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "center-align"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "No polls are available at the moment.")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Polls_View__WEBPACK_IMPORTED_MODULE_5__["default"], {
    polls: props.polls
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pages: Math.ceil(props.count / 10),
    currentPage: props.query.page ? parseInt(props.query.page) : 1,
    pathname: "/",
    query: _objectSpread({}, props.query)
  }));
};

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, fetchUrl, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;

            if (query.title) {
              delete query.title;
            }

            fetchUrl = url__WEBPACK_IMPORTED_MODULE_8___default.a.format({
              protocol: _utility__WEBPACK_IMPORTED_MODULE_7__["urlConfig"].protocol,
              host: _utility__WEBPACK_IMPORTED_MODULE_7__["urlConfig"].host,
              pathname: '/api/polls',
              query: query
            });
            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(fetchUrl);

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;
            return _context.abrupt("return", {
              polls: data.polls,
              count: data.count,
              query: query
            });

          case 10:
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

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.300c3be4ed9f14009a5f.hot-update.js.map