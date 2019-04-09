webpackHotUpdate("static\\development\\pages\\poll.js",{

/***/ "./pages/poll.js":
/*!***********************!*\
  !*** ./pages/poll.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "../node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Poll_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Poll_View */ "./component/Poll_View.js");
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _component_Error_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Error_View */ "./component/Error_View.js");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility */ "./utility.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var chart;

var Poll = function Poll(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, props.poll ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Poll_View__WEBPACK_IMPORTED_MODULE_3__["default"], {
    poll: props.poll
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Error_View__WEBPACK_IMPORTED_MODULE_5__["default"], {
    statusCode: props.statusCode
  }));
};

Poll.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var id, res, data, statusCode;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref.query.id;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_utility__WEBPACK_IMPORTED_MODULE_6__["urlConfig"].protocol, "://").concat(_utility__WEBPACK_IMPORTED_MODULE_6__["urlConfig"].host, "/api/polls/").concat(id));

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

/* harmony default export */ __webpack_exports__["default"] = (Poll);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/poll")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=poll.js.adf0c4dec62dcc5f1bf4.hot-update.js.map