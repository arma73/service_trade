webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Icons/BadgeCart.jsx":
/*!****************************************!*\
  !*** ./components/Icons/BadgeCart.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _Badge = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));

var _ShoppingCart = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/BadgeCart.jsx";
const StyledBadge = (0, _styles.withStyles)(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(_Badge.default);

const CustomizedBadges = ({
  count
}) => _react.default.createElement(StyledBadge, {
  badgeContent: count,
  color: "secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: void 0
}, _react.default.createElement(_ShoppingCart.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: void 0
}));

CustomizedBadges.propTypes = {
  count: _propTypes.number
};
CustomizedBadges.defaultProps = {
  count: 0
};
var _default = CustomizedBadges;
exports.default = _default;

/***/ })

})
//# sourceMappingURL=index.js.b3348178b69cf7dc0423.hot-update.js.map