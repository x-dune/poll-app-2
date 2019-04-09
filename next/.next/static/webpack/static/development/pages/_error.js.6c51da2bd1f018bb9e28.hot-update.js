webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./component/Error_View.js":
/*!*********************************!*\
  !*** ./component/Error_View.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
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
  }, "Umm...an error occurred on the client-side.") : props.statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error404, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "center-align"
  }, "Whoops...an error ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.statusCode), " occurred on the server."));
};

/* harmony default export */ __webpack_exports__["default"] = (Error_View);

/***/ })

})
//# sourceMappingURL=_error.js.6c51da2bd1f018bb9e28.hot-update.js.map