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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Basket/Basket.jsx":
/*!**************************************!*\
  !*** ./components/Basket/Basket.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Icons = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");

var _ShowUp = __webpack_require__(/*! ../ShowUp */ "./components/ShowUp/index.js");

__webpack_require__(/*! ./Basket.scss */ "./components/Basket/Basket.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Basket/Basket.jsx";

const WrapComp = ({
  className
}) => _react.default.createElement("div", {
  className: className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}, _react.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: void 0
}, "Your shopping cart is empty!"));

const Basket = () => _react.default.createElement(_ShowUp.HoverShow, {
  Component: WrapComp,
  hoverSide: "_d",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}, _react.default.createElement("div", {
  id: "basket",
  className: "jsx-548934571",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}, _react.default.createElement(_Icons.SvgIcon, {
  size: "50px",
  icon: "basket",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: void 0
}), _react.default.createElement(_style.default, {
  id: "548934571",
  __self: void 0
}, `#basket.jsx-548934571::after{content:"${0}";position:absolute;top:68%;right:2%;width:18px;height:18px;background-color:#f77d12;border:2px solid #f5f6f7;border-radius:50%;font-family:serif;text-align:center;box-sizing:content-box;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FybWEvTXkvU29mdHdhcmUvUHJvamVjdHMvU3RvcnlfU1NSX0N1c3RvbS9jb21wb25lbnRzL0Jhc2tldC9CYXNrZXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCSyxBQUc4Qyx1Q0FDckIsa0JBQ1YsUUFDQyxTQUNFLFdBQ0MsWUFDYSx5QkFDQSx5QkFDUCxrQkFDQSxrQkFDQSxrQkFDSyx1QkFDeEIiLCJmaWxlIjoiL2hvbWUvYXJtYS9NeS9Tb2Z0d2FyZS9Qcm9qZWN0cy9TdG9yeV9TU1JfQ3VzdG9tL2NvbXBvbmVudHMvQmFza2V0L0Jhc2tldC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdmdJY29uIH0gZnJvbSBcImNvbXBvbmVudHMvSWNvbnNcIjtcbmltcG9ydCB7IEhvdmVyU2hvdyB9IGZyb20gXCJjb21wb25lbnRzL1Nob3dVcFwiO1xuXG5pbXBvcnQgXCIuL0Jhc2tldC5zY3NzXCI7XG5cbmNvbnN0IFdyYXBDb21wID0gKHsgY2xhc3NOYW1lIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0PHA+WW91ciBzaG9wcGluZyBjYXJ0IGlzIGVtcHR5ITwvcD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBCYXNrZXQgPSAoKSA9PiAoXG5cdDxIb3ZlclNob3cgQ29tcG9uZW50PXtXcmFwQ29tcH0gaG92ZXJTaWRlPVwiX2RcIj5cblx0XHQ8ZGl2IGlkPVwiYmFza2V0XCI+XG5cdFx0XHQ8U3ZnSWNvbiBzaXplPVwiNTBweFwiIGljb249XCJiYXNrZXRcIiAvPlxuXG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdCNiYXNrZXQ6OmFmdGVyIHtcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwiJHswfVwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0dG9wOiA2OCU7XG5cdFx0XHRcdFx0XHRyaWdodDogMiU7XG5cdFx0XHRcdFx0XHR3aWR0aDogMThweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMThweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNmNzdkMTI7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZjVmNmY3O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IHNlcmlmO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0Ym94LXNpemluZzogY29udGVudC1ib3g7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0PC9Ib3ZlclNob3c+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNrZXQ7XG4iXX0= */
/*@ sourceURL=/home/arma/My/Software/Projects/Story_SSR_Custom/components/Basket/Basket.jsx */`)));

var _default = Basket;
exports.default = _default;

/***/ }),

/***/ "./components/Basket/Basket.scss":
/*!***************************************!*\
  !*** ./components/Basket/Basket.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Basket/index.js":
/*!************************************!*\
  !*** ./components/Basket/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Basket", {
  enumerable: true,
  get: function () {
    return _Basket.default;
  }
});

var _Basket = _interopRequireDefault(__webpack_require__(/*! ./Basket */ "./components/Basket/Basket.jsx"));

/***/ }),

/***/ "./components/Block/BlockContainer.jsx":
/*!*********************************************!*\
  !*** ./components/Block/BlockContainer.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./BlockContainer.scss */ "./components/Block/BlockContainer.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Block/BlockContainer.jsx";

const BlockContainer = ({
  children,
  className
}) => _react.default.createElement("section", {
  className: (0, _clsx.default)("BlockContainer", className),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, children);

var _default = BlockContainer;
exports.default = _default;

/***/ }),

/***/ "./components/Block/BlockContainer.scss":
/*!**********************************************!*\
  !*** ./components/Block/BlockContainer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Block/index.js":
/*!***********************************!*\
  !*** ./components/Block/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "BlockContainer", {
  enumerable: true,
  get: function () {
    return _BlockContainer.default;
  }
});

var _BlockContainer = _interopRequireDefault(__webpack_require__(/*! ./BlockContainer */ "./components/Block/BlockContainer.jsx"));

/***/ }),

/***/ "./components/Category/Category.jsx":
/*!******************************************!*\
  !*** ./components/Category/Category.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Form = __webpack_require__(/*! ../Form */ "./components/Form/index.js");

__webpack_require__(/*! ./Category.scss */ "./components/Category/Category.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Category/Category.jsx";

const Category = ({
  CategoriesMocks
}) => {
  const {
    lists
  } = CategoriesMocks();

  const handleFormChange = e => console.log(e);

  return _react.default.createElement(_Form.FormGroup, {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: void 0
  }, _react.default.createElement(_Form.SelectCategories, {
    size: "lg",
    name: "rate",
    value: lists.mainText,
    options: lists.sections,
    onChange: handleFormChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: void 0
  }));
};

Category.propTypes = {};
var _default = Category;
exports.default = _default;

/***/ }),

/***/ "./components/Category/Category.scss":
/*!*******************************************!*\
  !*** ./components/Category/Category.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Category/index.js":
/*!**************************************!*\
  !*** ./components/Category/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Category", {
  enumerable: true,
  get: function () {
    return _Category.default;
  }
});

var _Category = _interopRequireDefault(__webpack_require__(/*! ./Category */ "./components/Category/Category.jsx"));

/***/ }),

/***/ "./components/Drawer/TemporaryDrawer.jsx":
/*!***********************************************!*\
  !*** ./components/Drawer/TemporaryDrawer.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TemporaryDrawer;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");

var _Drawer = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List"));

var _Divider = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider"));

var _Toggle = _interopRequireDefault(__webpack_require__(/*! ./Toggle */ "./components/Drawer/Toggle.jsx"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText"));

__webpack_require__(/*! ./TemporaryDrawer.scss */ "./components/Drawer/TemporaryDrawer.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Drawer/TemporaryDrawer.jsx";
const useStyles = (0, _styles.makeStyles)({
  list: {
    width: "80vw"
  }
});

function TemporaryDrawer({
  Mocks
}) {
  const classes = useStyles();
  const [state, setState] = (0, _react.useState)({
    right: false,
    sub: {
      open: false,
      id: ""
    }
  });
  const {
    lists
  } = Mocks();

  const toggleDrawer = (side, open) => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState((0, _objectSpread2.default)({}, state, {
      [side]: open
    }));
  };

  const toggleSub = (id, open) => toggleDrawer("sub", {
    open,
    id
  });

  const getById = id => lists.sections.filter(item => item.id === id)[0];

  const sideList = side => _react.default.createElement("div", {
    className: classes.list,
    role: "presentation" //onClick={toggleDrawer(side, false)}
    ,
    onKeyDown: toggleDrawer(side, false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, state.sub.open ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    onClick: toggleSub("", false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, " ", "Back", " "), _react.default.createElement(_Divider.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })) : null, _react.default.createElement(_List.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, state.sub.open ? getById(state.sub.id).subsection.map(category => _react.default.createElement(_List.default, {
    key: category.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    key: category.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, _react.default.createElement(_ListItemText.default, {
    primary: category.mainSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), category.sectionKinds.length ? category.sectionKinds.map(kind => _react.default.createElement("div", {
    key: kind,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, kind)) : null)) : lists.sections.map(category => _react.default.createElement(_ListItem.default, {
    onClick: toggleSub(category.id, true),
    button: true,
    key: category.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, _react.default.createElement(_ListItemText.default, {
    primary: category.mainSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })))), _react.default.createElement(_Divider.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }));

  return _react.default.createElement("div", {
    className: (0, _clsx.default)("Drawer_right", {
      open: state.right
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, _react.default.createElement(_Toggle.default, {
    handleClick: toggleDrawer("right", !state.right),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), _react.default.createElement(_Drawer.default, {
    anchor: "right",
    open: state.right,
    onClose: toggleDrawer("right", false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, sideList("right")));
}

/***/ }),

/***/ "./components/Drawer/TemporaryDrawer.scss":
/*!************************************************!*\
  !*** ./components/Drawer/TemporaryDrawer.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Drawer/Toggle.jsx":
/*!**************************************!*\
  !*** ./components/Drawer/Toggle.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Form = __webpack_require__(/*! ../Form */ "./components/Form/index.js");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Drawer/Toggle.jsx";

const Toggle = ({
  handleClick
}) => _react.default.createElement(_Form.Button, {
  classpropname: "toggle mobile-toggle",
  onClick: handleClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}, _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "close",
  viewBox: "0 0 448 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, _react.default.createElement("path", {
  d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}), " "), _react.default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "open",
  viewBox: "0 0 352 512",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}, _react.default.createElement("path", {
  d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: void 0
}), " "));

Toggle.propTypes = {
  handleClick: _propTypes.func.isRequired
};
var _default = Toggle;
exports.default = _default;

/***/ }),

/***/ "./components/Drawer/index.js":
/*!************************************!*\
  !*** ./components/Drawer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "TemporaryDrawer", {
  enumerable: true,
  get: function () {
    return _TemporaryDrawer.default;
  }
});

var _TemporaryDrawer = _interopRequireDefault(__webpack_require__(/*! ./TemporaryDrawer */ "./components/Drawer/TemporaryDrawer.jsx"));

/***/ }),

/***/ "./components/Form/Button.jsx":
/*!************************************!*\
  !*** ./components/Form/Button.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.buttonSizes = exports.buttonColors = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./Button.scss */ "./components/Form/Button.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Form/Button.jsx";

const Button = (_ref) => {
  let {
    children,
    type,
    classpropname,
    color,
    size
  } = _ref,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "type", "classpropname", "color", "size"]);
  return (//eslint-disable-next-line react/button-has-type
    _react.default.createElement("button", (0, _extends2.default)({
      className: (0, _clsx.default)("Button", color, size, {
        [classpropname]: classpropname
      }),
      type: type
    }, restProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: void 0
    }), children)
  );
};

const buttonColors = ["orange", "orange-light", "outline", "transparent", "white", "grey"];
exports.buttonColors = buttonColors;
const buttonSizes = ["md", "sm", "xs"];
exports.buttonSizes = buttonSizes;
Button.propTypes = {
  classpropname: PropTypes.string,
  color: PropTypes.oneOf(buttonColors),
  size: PropTypes.oneOf(buttonSizes),
  type: PropTypes.oneOf(["submit", "reset", "button"])
};
Button.defaultProps = {
  type: "button",
  color: "orange",
  size: "sm"
};
var _default = Button;
exports.default = _default;

/***/ }),

/***/ "./components/Form/Button.scss":
/*!*************************************!*\
  !*** ./components/Form/Button.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/FormGroup.jsx":
/*!***************************************!*\
  !*** ./components/Form/FormGroup.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./FormGroup.scss */ "./components/Form/FormGroup.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Form/FormGroup.jsx";

const FormGroup = (_ref) => {
  let {
    children,
    className,
    inline
  } = _ref,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "inline"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)("FormGroup", {
      [className]: className,
      inline
    })
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: void 0
  }), children);
};

FormGroup.propTypes = {
  className: _propTypes.string,
  inline: _propTypes.bool
};
var _default = FormGroup;
exports.default = _default;

/***/ }),

/***/ "./components/Form/FormGroup.scss":
/*!****************************************!*\
  !*** ./components/Form/FormGroup.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/Input.jsx":
/*!***********************************!*\
  !*** ./components/Form/Input.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Icons = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");

__webpack_require__(/*! ./Input.scss */ "./components/Form/Input.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Form/Input.jsx";

const Input = (_ref) => {
  let {
    children,
    className,
    type,
    size,
    value,
    invalid,
    disabled,
    labelRight,
    labelLeft,
    iconRight,
    iconLeft,
    onChange,
    onFocus
  } = _ref,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "type", "size", "value", "invalid", "disabled", "labelRight", "labelLeft", "iconRight", "iconLeft", "onChange", "onFocus"]);
  const inputRef = (0, _react.useRef)(null);

  const handleChange = e => onChange(e, e.target.value);

  const handleBlur = () => onFocus(false);

  const handleFocus = () => onFocus(true);

  (0, _react.useEffect)(() => {
    inputRef.current.onfocus = () => handleFocus();
  }, []);
  const wrapperClassName = (0, _clsx.default)("Input", size, {
    [className]: className,
    invalid,
    disabled,
    "label-left": labelLeft,
    "label-right": labelRight,
    "icon-right": iconRight,
    "icon-left": iconLeft
  });
  return _react.default.createElement("div", {
    className: wrapperClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: void 0
  }, _react.default.createElement("input", (0, _extends2.default)({
    value: value,
    type: type,
    ref: inputRef,
    onBlur: handleBlur,
    onChange: handleChange
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: void 0
  })), labelRight && _react.default.createElement("div", {
    className: "label-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: void 0
  }, labelRight), iconRight && _react.default.createElement(_Icons.SvgIcon, {
    icon: iconRight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: void 0
  }));
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  invalid: PropTypes.bool,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(["lg_m", "lg", "md", "sm"]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Input.defaultProps = {
  type: "text",
  size: "md",
  autoComplete: "off"
};
var _default = Input;
exports.default = _default;

/***/ }),

/***/ "./components/Form/Input.scss":
/*!************************************!*\
  !*** ./components/Form/Input.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/SelectForms/Select.jsx":
/*!************************************************!*\
  !*** ./components/Form/SelectForms/Select.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ../../Icons/SvgIcon */ "./components/Icons/SvgIcon.jsx"));

var _ShowUp = __webpack_require__(/*! ../../ShowUp */ "./components/ShowUp/index.js");

__webpack_require__(/*! ./Select.scss */ "./components/Form/SelectForms/Select.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Form/SelectForms/Select.jsx";

const SelectOption = (_ref) => {
  let {
    onChange
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onChange"]);

  const handleSelect = () => onChange((0, _objectSpread2.default)({}, rest));

  return _react.default.createElement("div", {
    role: "button",
    className: "SelectOption",
    onClick: handleSelect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: void 0
  }, rest.label);
};

SelectOption.propTypes = {
  onChange: PropTypes.func.isRequired
};

const ShowOptions = ({
  options,
  handleChange
}) => //eslint-disable-next-line implicit-arrow-linebreak
options.map(option => _react.default.createElement(SelectOption, (0, _extends2.default)({
  key: option.id
}, option, {
  onChange: handleChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: void 0
})));

const Select = (_ref2) => {
  let {
    children,
    className,
    options,
    value,
    name,
    size,
    onChange,
    invalid,
    disabled
  } = _ref2,
      restProps = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className", "options", "value", "name", "size", "onChange", "invalid", "disabled"]);

  const handleChange = option => {
    const {
      id
    } = option;
    const e = {
      target: {
        name,
        value: id,
        type: "select"
      }
    };
    onChange(e, option.id, option);
  };

  const findOption = option => option.label === value;

  const selectedOption = options.find(findOption);
  const compositeClassName = (0, _clsx.default)("Select", size, {
    [className]: className,
    invalid,
    disabled
  });
  return _react.default.createElement(_ShowUp.ClickShow, (0, _extends2.default)({
    className: compositeClassName,
    onChange: handleChange,
    Component: ShowOptions,
    options: options
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: void 0
  }), _react.default.createElement("div", {
    role: "button",
    className: "selected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: void 0
  }, _react.default.createElement("span", {
    className: "selected_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: void 0
  }, selectedOption.label), _react.default.createElement(_SvgIcon.default, {
    icon: "arrow-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: void 0
  })));
};

Select.defaultProps = {
  size: "md"
};
Select.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])),
  size: PropTypes.oneOf(["sm", "md", "lg", "lg_m"]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])
};
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "./components/Form/SelectForms/Select.scss":
/*!*************************************************!*\
  !*** ./components/Form/SelectForms/Select.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/SelectForms/SelectCategories.jsx":
/*!**********************************************************!*\
  !*** ./components/Form/SelectForms/SelectCategories.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _ShowUp = __webpack_require__(/*! ../../ShowUp */ "./components/ShowUp/index.js");

var _Icons = __webpack_require__(/*! ../../Icons */ "./components/Icons/index.js");

__webpack_require__(/*! ./SelectCategories.scss */ "./components/Form/SelectForms/SelectCategories.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Form/SelectForms/SelectCategories.jsx";

const ShowOptionsList = ({
  subData
}) => _react.default.createElement(_react.default.Fragment, null, subData.map(option => _react.default.createElement("div", {
  key: option.id,
  className: "SelectOption_List_Block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: void 0
}, _react.default.createElement("h3", {
  className: "SelectOption_List_Block_Title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}, option.mainSection), _react.default.createElement("ul", {
  className: "SelectOption_List_Block_Subsec",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}, option.sectionKinds.length > 0 ? option.sectionKinds.map(item => _react.default.createElement("li", {
  key: item,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: void 0
}, item)) : null))));

const SelectOption = (_ref) => {
  let {
    onChange
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onChange"]);

  const handleSelect = () => onChange((0, _objectSpread2.default)({}, rest));

  return _react.default.createElement(_ShowUp.HoverShow, {
    className: "SelectOption",
    Component: ShowOptionsList,
    onClick: handleSelect,
    hoverSide: "_r",
    subData: rest.subsection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }, rest.mainSection, _react.default.createElement(_Icons.SvgIcon, {
    icon: "nav-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: void 0
  }));
};

const ShowOptions = ({
  options,
  handleChange
}) => //eslint-disable-next-line implicit-arrow-linebreak
options.map(option => _react.default.createElement(SelectOption, (0, _extends2.default)({
  key: option.id
}, option, {
  onChange: handleChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: void 0
})));

const SelectCategories = (_ref2) => {
  let {
    children,
    className,
    options,
    value,
    name,
    size,
    onChange,
    invalid,
    disabled
  } = _ref2,
      restProps = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className", "options", "value", "name", "size", "onChange", "invalid", "disabled"]);

  const handleChange = option => {
    const {
      mainSection
    } = option;
    const e = {
      target: {
        value: mainSection,
        type: "select"
      }
    };
    onChange(e);
  };

  const compositeClassName = (0, _clsx.default)("SelectCategories", size, {
    [className]: className,
    invalid,
    disabled
  });
  return _react.default.createElement(_ShowUp.ClickShow, (0, _extends2.default)({
    className: compositeClassName,
    Component: ShowOptions,
    onChange: handleChange,
    options: options,
    childClassName: "options options_List"
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: void 0
  }), _react.default.createElement("div", {
    role: "button",
    className: "selected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: void 0
  }, _react.default.createElement("span", {
    className: "selected_label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: void 0
  }, value), _react.default.createElement(_Icons.SvgIcon, {
    icon: "arrow-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: void 0
  })));
};

SelectCategories.defaultProps = {
  size: "md"
};
SelectCategories.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})])),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.shape({})]),
  name: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onChange: PropTypes.func.isRequired,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool
};
var _default = SelectCategories;
exports.default = _default;

/***/ }),

/***/ "./components/Form/SelectForms/SelectCategories.scss":
/*!***********************************************************!*\
  !*** ./components/Form/SelectForms/SelectCategories.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button.default;
  }
});

_Object$defineProperty(exports, "buttonColors", {
  enumerable: true,
  get: function () {
    return _Button.buttonColors;
  }
});

_Object$defineProperty(exports, "buttonSizes", {
  enumerable: true,
  get: function () {
    return _Button.buttonSizes;
  }
});

_Object$defineProperty(exports, "FormGroup", {
  enumerable: true,
  get: function () {
    return _FormGroup.default;
  }
});

_Object$defineProperty(exports, "Select", {
  enumerable: true,
  get: function () {
    return _Select.default;
  }
});

_Object$defineProperty(exports, "SelectCategories", {
  enumerable: true,
  get: function () {
    return _SelectCategories.default;
  }
});

var _Button = _interopRequireWildcard(__webpack_require__(/*! ./Button */ "./components/Form/Button.jsx"));

var _FormGroup = _interopRequireDefault(__webpack_require__(/*! ./FormGroup */ "./components/Form/FormGroup.jsx"));

var _Select = _interopRequireDefault(__webpack_require__(/*! ./SelectForms/Select */ "./components/Form/SelectForms/Select.jsx"));

var _SelectCategories = _interopRequireDefault(__webpack_require__(/*! ./SelectForms/SelectCategories */ "./components/Form/SelectForms/SelectCategories.jsx"));

/***/ }),

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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Badge = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");

var _ShoppingCart = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart"));

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
    lineNumber: 16
  },
  __self: void 0
}, _react.default.createElement(_ShoppingCart.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
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

/***/ }),

/***/ "./components/Icons/ChatIcon/ChatIcon.jsx":
/*!************************************************!*\
  !*** ./components/Icons/ChatIcon/ChatIcon.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Link = _interopRequireDefault(__webpack_require__(/*! ../../Link */ "./components/Link/index.js"));

__webpack_require__(/*! ./ChatIcon.scss */ "./components/Icons/ChatIcon/ChatIcon.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/ChatIcon/ChatIcon.jsx";

const ChatIcon = () => _react.default.createElement("div", {
  className: "ChatIcon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, _react.default.createElement(_Link.default, {
  href: "/",
  className: "icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}));

var _default = ChatIcon;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/ChatIcon/ChatIcon.scss":
/*!*************************************************!*\
  !*** ./components/Icons/ChatIcon/ChatIcon.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Icons/FaIcon.jsx":
/*!*************************************!*\
  !*** ./components/Icons/FaIcon.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/FaIcon.jsx";

const FaIcon = (_ref) => {
  let {
    icon,
    classpropname
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["icon", "classpropname"]);
  return _react.default.createElement("i", (0, _extends2.default)({
    className: (0, _clsx.default)("fab", icon, classpropname)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: void 0
  }));
};

FaIcon.propTypes = {
  classpropname: _propTypes.string,
  icon: _propTypes.string.isRequired
};
var _default = FaIcon;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/SvgIcon.jsx":
/*!**************************************!*\
  !*** ./components/Icons/SvgIcon.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _ArrowDown = _interopRequireDefault(__webpack_require__(/*! ./icons/ArrowDown */ "./components/Icons/icons/ArrowDown.jsx"));

var _Attach = _interopRequireDefault(__webpack_require__(/*! ./icons/Attach */ "./components/Icons/icons/Attach.jsx"));

var _Check = _interopRequireDefault(__webpack_require__(/*! ./icons/Check */ "./components/Icons/icons/Check.jsx"));

var _JobEntry = _interopRequireDefault(__webpack_require__(/*! ./icons/JobEntry */ "./components/Icons/icons/JobEntry.jsx"));

var _JobIntermediate = _interopRequireDefault(__webpack_require__(/*! ./icons/JobIntermediate */ "./components/Icons/icons/JobIntermediate.jsx"));

var _JobExpert = _interopRequireDefault(__webpack_require__(/*! ./icons/JobExpert */ "./components/Icons/icons/JobExpert.jsx"));

var _DurationWeek = _interopRequireDefault(__webpack_require__(/*! ./icons/DurationWeek */ "./components/Icons/icons/DurationWeek.jsx"));

var _DurationMonth = _interopRequireDefault(__webpack_require__(/*! ./icons/DurationMonth */ "./components/Icons/icons/DurationMonth.jsx"));

var _DurationQuarterYear = _interopRequireDefault(__webpack_require__(/*! ./icons/DurationQuarterYear */ "./components/Icons/icons/DurationQuarterYear.jsx"));

var _DurationHalfYear = _interopRequireDefault(__webpack_require__(/*! ./icons/DurationHalfYear */ "./components/Icons/icons/DurationHalfYear.jsx"));

var _DurationYear = _interopRequireDefault(__webpack_require__(/*! ./icons/DurationYear */ "./components/Icons/icons/DurationYear.jsx"));

var _Close = _interopRequireDefault(__webpack_require__(/*! ./icons/Close */ "./components/Icons/icons/Close.jsx"));

var _Search = _interopRequireDefault(__webpack_require__(/*! ./icons/Search */ "./components/Icons/icons/Search.jsx"));

var _NavLeft = _interopRequireDefault(__webpack_require__(/*! ./icons/NavLeft */ "./components/Icons/icons/NavLeft.jsx"));

var _NavRight = _interopRequireDefault(__webpack_require__(/*! ./icons/NavRight */ "./components/Icons/icons/NavRight.jsx"));

var _Star = _interopRequireDefault(__webpack_require__(/*! ./icons/Star */ "./components/Icons/icons/Star.jsx"));

var _Basket = _interopRequireDefault(__webpack_require__(/*! ./icons/Basket */ "./components/Icons/icons/Basket.jsx"));

__webpack_require__(/*! ./SvgIcon.scss */ "./components/Icons/SvgIcon.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/SvgIcon.jsx";

const SvgIcon = (_ref) => {
  let {
    icon,
    size,
    color,
    className
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["icon", "size", "color", "className"]);
  let IconComponent;

  switch (icon) {
    case "star":
      {
        IconComponent = _Star.default;
        break;
      }

    case "nav-left":
      {
        IconComponent = _NavLeft.default;
        break;
      }

    case "nav-right":
      {
        IconComponent = _NavRight.default;
        break;
      }

    case "close":
      {
        IconComponent = _Close.default;
        break;
      }

    case "arrow-down":
      {
        IconComponent = _ArrowDown.default;
        break;
      }

    case "attach":
      {
        IconComponent = _Attach.default;
        break;
      }

    case "check":
      {
        IconComponent = _Check.default;
        break;
      }

    case "job-entry":
      {
        IconComponent = _JobEntry.default;
        break;
      }

    case "job-intermediate":
      {
        IconComponent = _JobIntermediate.default;
        break;
      }

    case "job-expert":
      {
        IconComponent = _JobExpert.default;
        break;
      }

    case "duration-week":
      {
        IconComponent = _DurationWeek.default;
        break;
      }

    case "duration-month":
      {
        IconComponent = _DurationMonth.default;
        break;
      }

    case "duration-quarter-year":
      {
        IconComponent = _DurationQuarterYear.default;
        break;
      }

    case "duration-half-year":
      {
        IconComponent = _DurationHalfYear.default;
        break;
      }

    case "duration-year":
      {
        IconComponent = _DurationYear.default;
        break;
      }

    case "search":
      {
        IconComponent = _Search.default;
        break;
      }

    case "basket":
      {
        IconComponent = _Basket.default;
        break;
      }

    default:
      return null;
  }

  return _react.default.createElement(IconComponent, (0, _extends2.default)({
    className: (0, _clsx.default)("SvgIcon", className),
    width: size,
    height: size,
    fill: color
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: void 0
  }));
};

SvgIcon.propTypes = {
  className: _propTypes.string,
  color: _propTypes.string,
  icon: _propTypes.string,
  size: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number])
};
SvgIcon.defaultProps = {
  color: "#ffffff",
  size: "25px"
};
var _default = SvgIcon;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/SvgIcon.scss":
/*!***************************************!*\
  !*** ./components/Icons/SvgIcon.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Icons/icons/ArrowDown.jsx":
/*!**********************************************!*\
  !*** ./components/Icons/icons/ArrowDown.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/ArrowDown.jsx";

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 10 5",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M0.833252 0.333332L4.99992 4.5L9.16658 0.333332H0.833252Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Attach.jsx":
/*!*******************************************!*\
  !*** ./components/Icons/icons/Attach.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Attach.jsx";

const Attach = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M2 12.5C2 9.46 4.46 7 7.5 7H18C20.21 7 22 8.79 22 11C22 13.21 20.21 15 18 15H9.5C8.12 15 7 13.88 7 12.5C7 11.12 8.12 10 9.5 10H17V12H9.41C8.86 12 8.86 13 9.41 13H18C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9H7.5C5.57 9 4 10.57 4 12.5C4 14.43 5.57 16 7.5 16H17V18H7.5C4.46 18 2 15.54 2 12.5Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = Attach;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Basket.jsx":
/*!*******************************************!*\
  !*** ./components/Icons/icons/Basket.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Basket.jsx";

const Basket = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M485.7 198.5c-10.7-13.4-25.3-20.8-41.1-20.8h-36.1C405.1 85.1 338 11 256 11S106.9 85.1 103.5 177.7H67.4c-15.8 0-30.4 7.4-41.1 20.8-13.5 16.8-18.4 40.2-13.3 62.7L56.3 452c6.5 28.8 28.9 49 54.4 49h290.5c25.5 0 47.9-20.1 54.4-49L499 261.2c5.1-22.5.2-45.9-13.3-62.7zM256 51.8c59.6 0 108.4 55.8 111.6 125.9H144.4c3.2-70 52-125.9 111.6-125.9zm203.2 200.3L415.9 443c-2.2 9.8-8.5 17.2-14.6 17.2H110.7c-6.1 0-12.4-7.4-14.6-17.2L52.8 252.1c-2.3-10.1-3.7-33.6 14.6-33.6h377.2c19.7 0 16.9 23.5 14.6 33.6z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M154.7 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c.1-11.2-9.1-20.4-20.4-20.4zM253.6 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.2-20.4-20.4-20.4zM352.4 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.1-20.4-20.4-20.4z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}));

var _default = Basket;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Check.jsx":
/*!******************************************!*\
  !*** ./components/Icons/icons/Check.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Check.jsx";

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 12 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  width: "12",
  height: "9",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.70711 8.70711C4.31658 9.09763 3.68342 9.09763 3.29289 8.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L4 6.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z",
  fill: "white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Close.jsx":
/*!******************************************!*\
  !*** ./components/Icons/icons/Close.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Close.jsx";

const Close = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M12.6673 4.27331L11.7273 3.33331L8.00065 7.05998L4.27398 3.33331L3.33398 4.27331L7.06065 7.99998L3.33398 11.7266L4.27398 12.6666L8.00065 8.93998L11.7273 12.6666L12.6673 11.7266L8.94065 7.99998L12.6673 4.27331Z",
  fill: "#A7A8AA",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}));

var _default = Close;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/DurationHalfYear.jsx":
/*!*****************************************************!*\
  !*** ./components/Icons/icons/DurationHalfYear.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/DurationHalfYear.jsx";

const DurationHalfYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM15.4836 34C18.063 34 19.7768 32.5823 19.7768 30.6245C19.7768 29.0042 18.4785 28.1266 17.232 27.8565C18.4785 27.4852 19.5171 26.5907 19.5171 25.1561C19.5171 23.2996 17.8379 22 15.4317 22C13.4928 22 12.1425 22.8776 11.225 24.0422L12.3157 25.0886C13.1466 24.1435 14.0641 23.5359 15.3105 23.5359C16.6954 23.5359 17.7341 24.3122 17.7341 25.3924C17.7341 26.557 16.6781 27.1983 15.172 27.1983L13.8737 27.1814V28.7004H15.172C16.9551 28.6835 17.9764 29.308 17.9764 30.5063C17.9764 31.6709 16.9897 32.4641 15.449 32.4641C14.0814 32.4641 12.9215 31.8397 12.1252 30.8945L11 32.0253C11.9175 33.1392 13.4582 34 15.4836 34ZM21.5559 29.9494H26.1261V28.4304H21.5559V29.9494ZM29.7639 28.0084C30.491 27.0464 31.6854 26.4726 33.0011 26.4726C35.1823 26.4726 37 27.8059 37 30.1013C37 32.3291 35.1996 34 32.6895 34C29.3831 34 27.9808 31.4852 27.9808 28.1772C27.9808 24.6667 30.1101 22 33.0184 22C34.4726 22 35.5632 22.5401 36.4807 23.3333L35.5805 24.6498C34.8361 23.9916 34.0917 23.5359 33.0011 23.5359C31.1834 23.5359 29.8158 25.443 29.7639 28.0084ZM29.9024 29.7806C30.214 31.4346 31.0622 32.5485 32.6203 32.5485C34.2302 32.5485 35.1996 31.3502 35.1996 30.1857C35.1996 28.7679 34.0398 27.9072 32.5856 27.9072C31.27 27.9072 30.214 28.6498 29.9024 29.7806Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = DurationHalfYear;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/DurationMonth.jsx":
/*!**************************************************!*\
  !*** ./components/Icons/icons/DurationMonth.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/DurationMonth.jsx";

const DurationMonth = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM17 20H11V22H17V20ZM21 20H27V22H21V20ZM37 20H31V22H37V20ZM11 25H17V27H11V25ZM27 25H21V27H27V25ZM31 25H37V27H31V25ZM17 30H11V32H17V30ZM21 30H27V32H21V30ZM37 30H31V32H37V30ZM11 35H17V37H11V35ZM27 35H21V37H27V35Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = DurationMonth;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/DurationQuarterYear.jsx":
/*!********************************************************!*\
  !*** ./components/Icons/icons/DurationQuarterYear.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/DurationQuarterYear.jsx";

const DurationQuarterYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM34 30.6245C34 32.5823 32.4325 34 30.0734 34C28.2209 34 26.8117 33.1392 25.9725 32.0253L27.0017 30.8945C27.73 31.8397 28.7909 32.4641 30.0417 32.4641C31.4508 32.4641 32.3533 31.6709 32.3533 30.5063C32.3533 29.308 31.4192 28.6835 29.7884 28.7004H28.6009V27.1814L29.7884 27.1983C31.1658 27.1983 32.1317 26.557 32.1317 25.3924C32.1317 24.3122 31.1817 23.5359 29.915 23.5359C28.775 23.5359 27.9359 24.1435 27.1759 25.0886L26.1784 24.0422C27.0175 22.8776 28.2525 22 30.0259 22C32.2267 22 33.7625 23.2996 33.7625 25.1561C33.7625 26.5907 32.8125 27.4852 31.6725 27.8565C32.8125 28.1266 34 29.0042 34 30.6245ZM16.5492 33.7975H18.1641V22.2025H16.8658L14 24.2785L14.665 25.5105L16.5492 24.2278V33.7975ZM20.397 29.9494H24.577V28.4304H20.397V29.9494Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = DurationQuarterYear;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/DurationWeek.jsx":
/*!*************************************************!*\
  !*** ./components/Icons/icons/DurationWeek.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/DurationWeek.jsx";

const DurationWeek = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM17 25H11V27H17V25ZM21 25H27V27H21V25ZM37 25H31V27H37V25ZM11 30H17V32H11V30ZM27 30H21V32H27V30Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = DurationWeek;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/DurationYear.jsx":
/*!*************************************************!*\
  !*** ./components/Icons/icons/DurationYear.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/DurationYear.jsx";

const DurationYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM16.7664 28.0084C17.4867 27.0464 18.6701 26.4726 19.9734 26.4726C22.1343 26.4726 23.9351 27.8059 23.9351 30.1013C23.9351 32.3291 22.1515 34 19.6648 34C16.3891 34 15 31.4852 15 28.1772C15 24.6667 17.1094 22 19.9906 22C21.4312 22 22.5116 22.5401 23.4206 23.3333L22.5288 24.6498C21.7913 23.9916 21.0539 23.5359 19.9734 23.5359C18.1727 23.5359 16.8179 25.443 16.7664 28.0084ZM16.9036 29.7806C17.2123 31.4346 18.0527 32.5485 19.5962 32.5485C21.1911 32.5485 22.1515 31.3502 22.1515 30.1857C22.1515 28.7679 21.0024 27.9072 19.5619 27.9072C18.2585 27.9072 17.2123 28.6498 16.9036 29.7806ZM30.7758 27.4177H34V28.9198H30.7758V32.0928H29.198V28.9198H25.991V27.4177H29.198V24.211H30.7758V27.4177Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = DurationYear;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/JobEntry.jsx":
/*!*********************************************!*\
  !*** ./components/Icons/icons/JobEntry.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/JobEntry.jsx";

const JobEntry = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23 17.075V16H25V17.0907C26.9074 17.4384 28.277 18.7027 28.8 19.4L27.2 20.6C26.8976 20.1967 26.0849 19.4554 25 19.1438V23.1756C26.1588 23.4356 27.0792 23.8077 27.7497 24.3441C28.6402 25.0566 29 25.9844 29 27C29 28.9614 27.3416 30.5663 25 30.925V32H23V30.9121C22.1733 30.769 21.4166 30.4677 20.7843 30.1349C19.9035 29.6714 19.1972 29.1114 18.7929 28.7071L20.2071 27.2929C20.4695 27.5552 21.0131 27.9953 21.7157 28.3651C22.1198 28.5778 22.5545 28.7556 23 28.8685V24.8244C21.8412 24.5644 20.9208 24.1923 20.2503 23.6559C19.3598 22.9434 19 22.0156 19 21C19 19.0386 20.6584 17.4337 23 17.075ZM23 19.1018C21.5848 19.4122 21 20.3637 21 21C21 21.4844 21.1402 21.8066 21.4997 22.0941C21.7932 22.3289 22.2636 22.5629 23 22.7643V19.1018ZM25 25.2357V28.8982C26.4152 28.5878 27 27.6363 27 27C27 26.5156 26.8598 26.1934 26.5003 25.9059C26.2068 25.6711 25.7364 25.4371 25 25.2357Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39ZM24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: void 0
}));

var _default = JobEntry;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/JobExpert.jsx":
/*!**********************************************!*\
  !*** ./components/Icons/icons/JobExpert.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/JobExpert.jsx";

const JobExpert = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 46 46",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M8.00817 15.4998C8.00274 15.3339 8 15.1672 8 15C8 6.71573 14.7157 0 23 0C31.2843 0 38 6.71573 38 15C38 15.1672 37.9973 15.3339 37.9918 15.4998C37.3475 15.2087 36.6817 14.9566 35.9976 14.7465C35.8625 7.68377 30.095 2 23 2C15.905 2 10.1375 7.68377 10.0024 14.7465C9.31828 14.9566 8.65253 15.2087 8.00817 15.4998Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23 15.9962C23.9068 15.5117 24.8626 15.107 25.8582 14.7915C25.33 14.5361 24.7097 14.3348 24 14.1756V10.1438C25.0849 10.4554 25.8976 11.1967 26.2 11.6L27.8 10.4C27.277 9.70269 25.9074 8.43845 24 8.09066V7H22V8.07498C19.6584 8.43371 18 10.0386 18 12C18 12.9367 18.306 13.7987 19.0522 14.4859C20.4432 14.8261 21.7669 15.3374 23 15.9962ZM20 12C20 11.3637 20.5848 10.4122 22 10.1018V13.7643C21.2636 13.5629 20.7932 13.3289 20.4997 13.0941C20.1402 12.8066 20 12.4844 20 12Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 24.075V23H16V24.0907C17.9074 24.4384 19.277 25.7027 19.8 26.4L18.2 27.6C17.8976 27.1967 17.0849 26.4554 16 26.1438V30.1756C17.1588 30.4356 18.0792 30.8077 18.7497 31.3441C19.6402 32.0566 20 32.9844 20 34C20 35.9614 18.3416 37.5663 16 37.925V39H14V37.9121C13.1733 37.769 12.4166 37.4677 11.7843 37.1349C10.9035 36.6714 10.1972 36.1114 9.79289 35.7071L11.2071 34.2929C11.4695 34.5552 12.0131 34.9953 12.7157 35.3651C13.1198 35.5778 13.5545 35.7556 14 35.8685V31.8244C12.8412 31.5644 11.9208 31.1923 11.2503 30.6559C10.3598 29.9434 10 29.0156 10 28C10 26.0386 11.6584 24.4337 14 24.075ZM14 26.1018C12.5848 26.4122 12 27.3637 12 28C12 28.4844 12.1402 28.8066 12.4997 29.0941C12.7932 29.3289 13.2636 29.5629 14 29.7643V26.1018ZM16 32.2357V35.8982C17.4152 35.5878 18 34.6363 18 34C18 33.5156 17.8598 33.1934 17.5003 32.9059C17.2068 32.6711 16.7364 32.4371 16 32.2357Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 46C23.2843 46 30 39.2843 30 31C30 22.7157 23.2843 16 15 16C6.71573 16 0 22.7157 0 31C0 39.2843 6.71573 46 15 46ZM15 44C22.1797 44 28 38.1797 28 31C28 23.8203 22.1797 18 15 18C7.8203 18 2 23.8203 2 31C2 38.1797 7.8203 44 15 44Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M26.7472 18.7116C28.0797 18.2505 29.5106 18 31 18C38.1797 18 44 23.8203 44 31C44 38.1797 38.1797 44 31 44C29.5106 44 28.0797 43.7495 26.7472 43.2884C26.1979 43.8137 25.6134 44.3024 24.9977 44.7509C26.8357 45.5543 28.8658 46 31 46C39.2843 46 46 39.2843 46 31C46 22.7157 39.2843 16 31 16C28.8658 16 26.8357 16.4457 24.9977 17.2491C25.6134 17.6976 26.1979 18.1863 26.7472 18.7116Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30.0038 39C31.2778 36.6157 32 33.8922 32 31C32 28.1078 31.2778 25.3843 30.0038 23H32V24.0907C33.9074 24.4384 35.277 25.7027 35.8 26.4L34.2 27.6C33.8975 27.1967 33.0849 26.4554 32 26.1438V30.1756C33.1588 30.4356 34.0792 30.8077 34.7497 31.3441C35.6402 32.0566 36 32.9844 36 34C36 35.9614 34.3416 37.5663 32 37.925V39H30.0038ZM32 35.8982V32.2357C32.7364 32.4371 33.2068 32.6711 33.5003 32.9059C33.8598 33.1934 34 33.5156 34 34C34 34.6363 33.4151 35.5878 32 35.8982Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: void 0
}));

var _default = JobExpert;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/JobIntermediate.jsx":
/*!****************************************************!*\
  !*** ./components/Icons/icons/JobIntermediate.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/JobIntermediate.jsx";

const JobIntermediate = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 46 46",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M10.669 10.5566C12.5629 4.44174 18.2627 0 25 0C33.2843 0 40 6.71573 40 15C40 20.7757 36.7357 25.7889 31.9514 28.2955C31.9836 27.8679 32 27.4359 32 27C32 26.6561 31.9898 26.3146 31.9697 25.9757C35.5949 23.6689 38 19.6153 38 15C38 7.8203 32.1797 2 25 2C19.5451 2 14.8749 5.35976 12.9458 10.1228C12.1696 10.2163 11.4095 10.3621 10.669 10.5566Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M20.2125 10.814C20.7305 9.41662 22.1526 8.358 24 8.07498V7H26V8.09066C27.9074 8.43845 29.277 9.70269 29.8 10.4L28.2 11.6C27.8976 11.1967 27.0849 10.4554 26 10.1438V14.0381C25.3711 13.5038 24.7027 13.0145 24 12.5751V10.1018C22.8968 10.3438 22.2982 10.9754 22.0879 11.5435C21.4811 11.2648 20.8552 11.0208 20.2125 10.814Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M28.7497 15.3441C28.1218 14.8418 27.2748 14.4836 26.2181 14.2265C27.6958 15.5253 28.9463 17.0765 29.9022 18.8127C29.9665 18.5507 30 18.2789 30 18C30 16.9844 29.6402 16.0566 28.7497 15.3441Z",
  fill: "black",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 19V20.075C11.6584 20.4337 10 22.0386 10 24C10 25.0156 10.3598 25.9434 11.2503 26.6559C11.9208 27.1923 12.8412 27.5644 14 27.8244V31.8685C13.5545 31.7556 13.1198 31.5778 12.7157 31.3651C12.0131 30.9953 11.4695 30.5552 11.2071 30.2929L9.79289 31.7071C10.1972 32.1114 10.9035 32.6714 11.7843 33.1349C12.4166 33.4677 13.1733 33.769 14 33.9121V35H16V33.925C18.3416 33.5663 20 31.9614 20 30C20 28.9844 19.6402 28.0566 18.7497 27.3441C18.0792 26.8077 17.1588 26.4356 16 26.1756V22.1438C17.0849 22.4554 17.8976 23.1967 18.2 23.6L19.8 22.4C19.277 21.7027 17.9074 20.4384 16 20.0907V19H14ZM12 24C12 23.3637 12.5848 22.4122 14 22.1018V25.7643C13.2636 25.5629 12.7932 25.3289 12.4997 25.0941C12.1402 24.8066 12 24.4844 12 24ZM16 31.8982V28.2357C16.7364 28.4371 17.2068 28.6711 17.5003 28.9059C17.8598 29.1934 18 29.5156 18 30C18 30.6363 17.4152 31.5878 16 31.8982Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30 27C30 35.2843 23.2843 42 15 42C6.71573 42 0 35.2843 0 27C0 18.7157 6.71573 12 15 12C23.2843 12 30 18.7157 30 27ZM28 27C28 34.1797 22.1797 40 15 40C7.8203 40 2 34.1797 2 27C2 19.8203 7.8203 14 15 14C22.1797 14 28 19.8203 28 27Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}));

var _default = JobIntermediate;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/NavLeft.jsx":
/*!********************************************!*\
  !*** ./components/Icons/icons/NavLeft.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/NavLeft.jsx";

const NavLeft = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "7",
  height: "10",
  viewBox: "0 0 7 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M6.84199 1.175L5.66699 0L0.666992 5L5.66699 10L6.84199 8.825L3.02533 5L6.84199 1.175Z",
  fill: "#898A8C",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}));

var _default = NavLeft;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/NavRight.jsx":
/*!*********************************************!*\
  !*** ./components/Icons/icons/NavRight.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/NavRight.jsx";

const NavRight = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "7",
  height: "10",
  viewBox: "0 0 7 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M1.3332 0L0.158203 1.175L3.97487 5L0.158203 8.825L1.3332 10L6.3332 5L1.3332 0Z",
  fill: "#6B6C6F",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}));

var _default = NavRight;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Search.jsx":
/*!*******************************************!*\
  !*** ./components/Icons/icons/Search.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Search.jsx";

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/icons/Star.jsx":
/*!*****************************************!*\
  !*** ./components/Icons/icons/Star.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Icons/icons/Star.jsx";

const Star = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "18",
  height: "17",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: void 0
}), _react.default.createElement("path", {
  d: "M9.00033 13.3917L14.1503 16.5L12.7837 10.6417L17.3337 6.70004L11.342 6.1917L9.00033 0.666702L6.65866 6.1917L0.666992 6.70004L5.21699 10.6417L3.85033 16.5L9.00033 13.3917Z",
  fill: "#EF6722",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}));

var _default = Star;
exports.default = _default;

/***/ }),

/***/ "./components/Icons/index.js":
/*!***********************************!*\
  !*** ./components/Icons/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FaIcon", {
  enumerable: true,
  get: function () {
    return _FaIcon.default;
  }
});

_Object$defineProperty(exports, "SvgIcon", {
  enumerable: true,
  get: function () {
    return _SvgIcon.default;
  }
});

_Object$defineProperty(exports, "ChatIcon", {
  enumerable: true,
  get: function () {
    return _ChatIcon.default;
  }
});

_Object$defineProperty(exports, "BadgeCart", {
  enumerable: true,
  get: function () {
    return _BadgeCart.default;
  }
});

var _FaIcon = _interopRequireDefault(__webpack_require__(/*! ./FaIcon */ "./components/Icons/FaIcon.jsx"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! ./SvgIcon */ "./components/Icons/SvgIcon.jsx"));

var _ChatIcon = _interopRequireDefault(__webpack_require__(/*! ./ChatIcon/ChatIcon */ "./components/Icons/ChatIcon/ChatIcon.jsx"));

var _BadgeCart = _interopRequireDefault(__webpack_require__(/*! ./BadgeCart */ "./components/Icons/BadgeCart.jsx"));

/***/ }),

/***/ "./components/Layout/Footer/Footer.jsx":
/*!*********************************************!*\
  !*** ./components/Layout/Footer/Footer.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./Footer.scss */ "./components/Layout/Footer/Footer.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Footer/Footer.jsx";

const Footer = ({
  children,
  classpropname
}) => _react.default.createElement("footer", {
  className: (0, _clsx.default)("Footer", classpropname),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}, children);

Footer.propTypes = {
  classpropname: _propTypes.string
};
Footer.defaultProps = {
  classpropname: ""
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Footer/Footer.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Footer/Footer.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Footer/FooterNavigation.jsx":
/*!*******************************************************!*\
  !*** ./components/Layout/Footer/FooterNavigation.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Navigation = __webpack_require__(/*! ../../Navigation */ "./components/Navigation/index.js");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Footer/FooterNavigation.jsx";

const FooterNavigation = ({
  children,
  title
}) => _react.default.createElement("div", {
  className: "list-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}, title && _react.default.createElement("h5", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, title), _react.default.createElement(_Navigation.NavigationList, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}, children));

FooterNavigation.propTypes = {
  title: _propTypes.string
};
FooterNavigation.defaultProps = {
  title: ""
};
var _default = FooterNavigation;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Footer/PublicFooter.jsx":
/*!***************************************************!*\
  !*** ./components/Layout/Footer/PublicFooter.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Logo = _interopRequireDefault(__webpack_require__(/*! ../../Logo */ "./components/Logo/index.js"));

var _Icons = __webpack_require__(/*! ../../Icons */ "./components/Icons/index.js");

var _ = __webpack_require__(/*! . */ "./components/Layout/Footer/index.js");

var _Navigation = __webpack_require__(/*! ../../Navigation */ "./components/Navigation/index.js");

__webpack_require__(/*! ./Footer.scss */ "./components/Layout/Footer/Footer.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Footer/PublicFooter.jsx";

const PublicFooter = () => _react.default.createElement(_.Footer, {
  classpropname: "Footer_access-public",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
}, _react.default.createElement("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}, _react.default.createElement("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: void 0
}, _react.default.createElement("div", {
  className: "col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: void 0
}, _react.default.createElement(_Logo.default, {
  type: "dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}), _react.default.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis nunc, posuere quis ipsum quis consectetur."), _react.default.createElement(_Navigation.NavigationList, {
  classpropname: "SocialList inline-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: void 0
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: void 0
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: void 0
})), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: void 0
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-facebook-f",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: void 0
})), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: void 0
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: void 0
}))), _react.default.createElement("p", {
  className: "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: void 0
}, "\xA9 BuyEnjoy. All rights reserved")), _react.default.createElement("div", {
  className: "col-md-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: void 0
}), _react.default.createElement("div", {
  className: "col-md-7 flex-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: void 0
}, _react.default.createElement(_.FooterNavigation, {
  title: "Company",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: void 0
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: void 0
}, "About")), _react.default.createElement(_.FooterNavigation, {
  title: "Resources",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: void 0
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/sign-up",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: void 0
}, "Sign Up")), _react.default.createElement(_.FooterNavigation, {
  title: "Help",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: void 0
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/how-it-works",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: void 0
}, "How it works"), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/contact-us",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: void 0
}, "Contact Us"), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: void 0
}, "Blog"))))));

var _default = PublicFooter;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Footer/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Footer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Footer", {
  enumerable: true,
  get: function () {
    return _Footer.default;
  }
});

_Object$defineProperty(exports, "FooterNavigation", {
  enumerable: true,
  get: function () {
    return _FooterNavigation.default;
  }
});

_Object$defineProperty(exports, "PublicFooter", {
  enumerable: true,
  get: function () {
    return _PublicFooter.default;
  }
});

var _Footer = _interopRequireDefault(__webpack_require__(/*! ./Footer */ "./components/Layout/Footer/Footer.jsx"));

var _FooterNavigation = _interopRequireDefault(__webpack_require__(/*! ./FooterNavigation */ "./components/Layout/Footer/FooterNavigation.jsx"));

var _PublicFooter = _interopRequireDefault(__webpack_require__(/*! ./PublicFooter */ "./components/Layout/Footer/PublicFooter.jsx"));

/***/ }),

/***/ "./components/Layout/Header/Concept/PublicConcept.jsx":
/*!************************************************************!*\
  !*** ./components/Layout/Header/Concept/PublicConcept.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Header/Concept/PublicConcept.jsx";

const PublicConcept = ({
  children,
  classpropname
}) => _react.default.createElement("section", {
  className: (0, _clsx.default)("Concept", classpropname),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}, children);

PublicConcept.propTypes = {
  classpropname: _propTypes.string
};
var _default = PublicConcept;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Header/Concept/index.js":
/*!***************************************************!*\
  !*** ./components/Layout/Header/Concept/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PublicConcept", {
  enumerable: true,
  get: function () {
    return _PublicConcept.default;
  }
});

var _PublicConcept = _interopRequireDefault(__webpack_require__(/*! ./PublicConcept */ "./components/Layout/Header/Concept/PublicConcept.jsx"));

/***/ }),

/***/ "./components/Layout/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/Layout/Header/Header.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./Header.scss */ "./components/Layout/Header/Header.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Header/Header.jsx";

const Header = ({
  children,
  classpropname
}) => _react.default.createElement("section", {
  className: (0, _clsx.default)("Header", classpropname),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: void 0
}, children);

Header.propTypes = {
  classpropname: _propTypes.string
};
Header.defaultProps = {
  classpropname: ""
};
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Header/Header.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Header/Header.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Header/PublicHeader.jsx":
/*!***************************************************!*\
  !*** ./components/Layout/Header/PublicHeader.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Logo = _interopRequireDefault(__webpack_require__(/*! ../../Logo */ "./components/Logo/index.js"));

var _Navigation = __webpack_require__(/*! ../../../containers/Navigation */ "./containers/Navigation/index.js");

var _Detect = __webpack_require__(/*! ../../../containers/Detect */ "./containers/Detect/index.js");

var _Concept = __webpack_require__(/*! ./Concept */ "./components/Layout/Header/Concept/index.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ./index */ "./components/Layout/Header/index.js"));

var _Category = __webpack_require__(/*! ../../Category */ "./components/Category/index.js");

var _Search = __webpack_require__(/*! ../../Search */ "./components/Search/index.js");

var _Basket = __webpack_require__(/*! ../../Basket */ "./components/Basket/index.js");

var _Drawer = __webpack_require__(/*! ../../Drawer */ "./components/Drawer/index.js");

var _CategoriesMocks = _interopRequireDefault(__webpack_require__(/*! ../../../mocks/CategoriesMocks */ "./mocks/CategoriesMocks.js"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Header/PublicHeader.jsx";

const HeaderConcepts = ({
  isMobile
}) => {
  const ConceptName = (0, _clsx.default)("Concept_access-public", {
    mobile: isMobile
  });
  return _react.default.createElement(_Concept.PublicConcept, {
    classpropname: ConceptName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: void 0
  }, isMobile ? _react.default.createElement(_Drawer.TemporaryDrawer, {
    Mocks: _CategoriesMocks.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: void 0
  }) : _react.default.createElement(_Category.Category, {
    CategoriesMocks: _CategoriesMocks.default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }), _react.default.createElement(_Search.Search, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }), _react.default.createElement(_Basket.Basket, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  }));
};

const PublicHeader = () => _react.default.createElement("header", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: void 0
}, _react.default.createElement(_index.default, {
  classpropname: "Header_access-public",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: void 0
}, _react.default.createElement(_Logo.default, {
  type: "white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: void 0
}), _react.default.createElement(_Navigation.PublicNavigationContainer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: void 0
})), _react.default.createElement(_Detect.DetectMobile, {
  Component: HeaderConcepts,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: void 0
}));

var _default = PublicHeader;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Header/index.js":
/*!*******************************************!*\
  !*** ./components/Layout/Header/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Header.default;
  }
});

var _Header = _interopRequireDefault(__webpack_require__(/*! ./Header */ "./components/Layout/Header/Header.jsx"));

/***/ }),

/***/ "./components/Layout/Layout.jsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./Layout.scss */ "./components/Layout/Layout.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Layout.jsx";

const Layout = ({
  children
}) => _react.default.createElement("main", {
  className: "Layout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}, children);

var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Layout.scss":
/*!***************************************!*\
  !*** ./components/Layout/Layout.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/Main.jsx":
/*!************************************!*\
  !*** ./components/Layout/Main.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./Main.scss */ "./components/Layout/Main.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/Main.jsx";

const Main = ({
  children
}) => _react.default.createElement("main", {
  className: "Main",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: void 0
}, children);

var _default = Main;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/Main.scss":
/*!*************************************!*\
  !*** ./components/Layout/Main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout/PublicLayout.jsx":
/*!********************************************!*\
  !*** ./components/Layout/PublicLayout.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Icons = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");

var _SpeedDials = __webpack_require__(/*! ../SpeedDials */ "./components/SpeedDials/index.js");

var _Layout = _interopRequireDefault(__webpack_require__(/*! ./Layout */ "./components/Layout/Layout.jsx"));

var _PublicHeader = _interopRequireDefault(__webpack_require__(/*! ./Header/PublicHeader */ "./components/Layout/Header/PublicHeader.jsx"));

var _PublicFooter = _interopRequireDefault(__webpack_require__(/*! ./Footer/PublicFooter */ "./components/Layout/Footer/PublicFooter.jsx"));

var _Main = _interopRequireDefault(__webpack_require__(/*! ./Main */ "./components/Layout/Main.jsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Layout/PublicLayout.jsx";

const PublicLayout = ({
  children
}) => _react.default.createElement(_Layout.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: void 0
}, _react.default.createElement(_PublicHeader.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: void 0
}), _react.default.createElement(_Main.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: void 0
}, children), _react.default.createElement(_Icons.ChatIcon, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: void 0
}), _react.default.createElement(_SpeedDials.SpeedDials, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}), _react.default.createElement(_PublicFooter.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: void 0
}));

var _default = PublicLayout;
exports.default = _default;

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PublicLayout", {
  enumerable: true,
  get: function () {
    return _PublicLayout.default;
  }
});

var _PublicLayout = _interopRequireDefault(__webpack_require__(/*! ./PublicLayout */ "./components/Layout/PublicLayout.jsx"));

/***/ }),

/***/ "./components/Link/Link.jsx":
/*!**********************************!*\
  !*** ./components/Link/Link.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

__webpack_require__(/*! ./Link.scss */ "./components/Link/Link.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Link/Link.jsx";

const Link = (_ref) => {
  let {
    classpropname,
    href,
    children,
    prefetch,
    as
  } = _ref,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["classpropname", "href", "children", "prefetch", "as"]);
  return _react.default.createElement(_link.default, {
    href: href,
    as: as,
    prefetch: prefetch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: void 0
  }, _react.default.createElement("a", (0, _extends2.default)({
    className: (0, _clsx.default)("Link", classpropname)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: void 0
  }), children));
};

Link.propTypes = {
  as: _propTypes.string,
  classpropname: _propTypes.string,
  href: _propTypes.string.isRequired,
  prefetch: _propTypes.bool
};
Link.defaultProps = {
  prefetch: false
};
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./components/Link/Link.scss":
/*!***********************************!*\
  !*** ./components/Link/Link.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Link.default;
  }
});

var _Link = _interopRequireDefault(__webpack_require__(/*! ./Link */ "./components/Link/Link.jsx"));

/***/ }),

/***/ "./components/Logo/Logo.jsx":
/*!**********************************!*\
  !*** ./components/Logo/Logo.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "prop-types"));

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _logoWhite = _interopRequireDefault(__webpack_require__(/*! ./assets/logo-white.svg */ "./components/Logo/assets/logo-white.svg"));

__webpack_require__(/*! ./Logo.scss */ "./components/Logo/Logo.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Logo/Logo.jsx";
const LogoImage = {
  /*
   * "default": DefaultLogo,
   * "dark": DarkLogo,
   */
  white: _logoWhite.default
};

const Logo = ({
  type
}) => _react.default.createElement("div", {
  className: (0, _clsx.default)("Logo", type),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: void 0
}, _react.default.createElement(_link.default, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: void 0
}, _react.default.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: void 0
}, _react.default.createElement("img", {
  src: LogoImage[type],
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: void 0
}))));

Logo.defaultProps = {
  type: "default"
};
Logo.propTypes = {
  type: PropTypes.oneOf(["default", "white", "dark"])
};
var _default = Logo;
exports.default = _default;

/***/ }),

/***/ "./components/Logo/Logo.scss":
/*!***********************************!*\
  !*** ./components/Logo/Logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Logo/assets/logo-white.svg":
/*!***********************************************!*\
  !*** ./components/Logo/assets/logo-white.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNmZTdlMGY7IiBkPSJNMjk0LjY0NywyNTUuOTk5SDEwMy41MjV2MjI3LjY1N2gxOTEuMTIyYzYyLjg2NSwwLDExMy44MjgtNTAuOTYyLDExMy44MjgtMTEzLjgyOWwwLDANCglDNDA4LjQ3NSwzMDYuOTYzLDM1Ny41MTMsMjU1Ljk5OSwyOTQuNjQ3LDI1NS45OTl6IE0yOTQuNjQ3LDQxMS45MDdIMTc1LjI3NXYtODQuMTU2aDExOS4zNzJjMjMuMjAxLDAsNDIuMDc4LDE4Ljg3Niw0Mi4wNzgsNDIuMDc4DQoJQzMzNi43MjUsMzkzLjAzLDMxNy44NDksNDExLjkwNywyOTQuNjQ3LDQxMS45MDd6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyIgZD0iTTI1OC43NTEsMTY5LjUwM2MtOC4xNDMsMC0xNC43NDYsNi42MDMtMTQuNzQ2LDE0Ljc0NnM2LjYwMywxNC43NDYsMTQuNzQ2LDE0Ljc0Ng0KCQljMzEuMzMyLDAsNTYuODI0LTI1LjQ5Miw1Ni44MjQtNTYuODI0cy0yNS40OTItNTYuODI0LTU2LjgyNC01Ni44MjRoLTgzLjQ3NWMtOC4xNDMsMC0xNC43NDYsNi42MDMtMTQuNzQ2LDE0Ljc0NnY4NC4xNTYNCgkJYzAsOC4xNDMsNi42MDMsMTQuNzQ2LDE0Ljc0NiwxNC43NDZjOC4xNDMsMCwxNC43NDYtNi42MDMsMTQuNzQ2LTE0Ljc0NnYtNjkuNDFoNjguNzI5YzE1LjA3MiwwLDI3LjMzMiwxMi4yNiwyNy4zMzIsMjcuMzMyDQoJCVMyNzMuODIxLDE2OS41MDMsMjU4Ljc1MSwxNjkuNTAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IiBkPSJNMjk0LjY0NywzMTMuMDA1SDE3NS4yNzVjLTguMTQzLDAtMTQuNzQ2LDYuNjAzLTE0Ljc0NiwxNC43NDZ2ODQuMTU2DQoJCWMwLDguMTQzLDYuNjAzLDE0Ljc0NiwxNC43NDYsMTQuNzQ2aDExOS4zNzJjMzEuMzMyLDAsNTYuODI0LTI1LjQ5Miw1Ni44MjQtNTYuODI0UzMyNS45ODEsMzEzLjAwNSwyOTQuNjQ3LDMxMy4wMDV6DQoJCSBNMjk0LjY0NywzOTcuMTYxSDE5MC4wMjF2LTU0LjY2NGgxMDQuNjI2YzE1LjA3MiwwLDI3LjMzMiwxMi4yNiwyNy4zMzIsMjcuMzMyQzMyMS45NzksMzg0LjkwMSwzMDkuNzE5LDM5Ny4xNjEsMjk0LjY0NywzOTcuMTYxeg0KCQkiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyIgZD0iTTI5NC42NDcsMjQxLjI1M0gxMTguMjY5VjQzLjA5aDE0MC40OGM1NC42MzQsMCw5OS4wODIsNDQuNDQ5LDk5LjA4Miw5OS4wODINCgkJYzAsMjIuNTc5LTcuMzk1LDQzLjg0Mi0yMS4zODMsNjEuNDljLTUuMDU5LDYuMzgyLTMuOTg2LDE1LjY1NywyLjM5NiwyMC43MTdjMi43MSwyLjE0OCw1Ljk0MSwzLjE5LDkuMTUsMy4xOQ0KCQljNC4zNDksMCw4LjY1Ni0xLjkxNCwxMS41NjctNS41ODZjMTguMTYxLTIyLjkxNCwyNy43NjItNTAuNTEzLDI3Ljc2Mi03OS44MWMwLTcwLjg5Ni01Ny42NzgtMTI4LjU3NC0xMjguNTc0LTEyOC41NzRIMTE4LjIxMg0KCQlDMTE3LjYyNCw1Ljk5MSwxMTEuMjgsMCwxMDMuNTIzLDBjLTguMTQzLDAtMTQuNzQ2LDYuNjAzLTE0Ljc0NiwxNC43NDZ2MjQxLjI1M3YyMjcuNjU3djEzLjU5Nw0KCQljMCw4LjE0Myw2LjYwMywxNC43NDYsMTQuNzQ2LDE0Ljc0NmM3Ljc1NSwwLDE0LjEtNS45OTEsMTQuNjg5LTEzLjU5N2gxNzYuNDM3YzcwLjg5NiwwLDEyOC41NzQtNTcuNjc4LDEyOC41NzQtMTI4LjU3NA0KCQlTMzY1LjU0NSwyNDEuMjUzLDI5NC42NDcsMjQxLjI1M3ogTTI5NC42NDcsNDY4LjkxSDExOC4yNjlWMjcwLjc0NWgxNzYuMzc4YzU0LjYzNCwwLDk5LjA4Miw0NC40NDksOTkuMDgyLDk5LjA4Mg0KCQlTMzQ5LjI4MSw0NjguOTEsMjk0LjY0Nyw0NjguOTF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Logo.default;
  }
});

var _Logo = _interopRequireDefault(__webpack_require__(/*! ./Logo */ "./components/Logo/Logo.jsx"));

/***/ }),

/***/ "./components/NProgress/NProgress.jsx":
/*!********************************************!*\
  !*** ./components/NProgress/NProgress.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "next/router"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

var _nprogress = _interopRequireDefault(__webpack_require__(/*! nprogress */ "nprogress"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/NProgress/NProgress.jsx";

_nprogress.default.configure({
  showSpinner: false
});

_router.default.onRouteChangeStart = () => {
  _nprogress.default.start();
};

_router.default.onRouteChangeComplete = () => _nprogress.default.done();

_router.default.onRouteChangeError = () => _nprogress.default.done();

const NProgressUI = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_head.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: void 0
}, _react.default.createElement("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/css/nprogress.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: void 0
})));

var _default = NProgressUI;
exports.default = _default;

/***/ }),

/***/ "./components/NProgress/index.js":
/*!***************************************!*\
  !*** ./components/NProgress/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _NProgress.default;
  }
});

var _NProgress = _interopRequireDefault(__webpack_require__(/*! ./NProgress */ "./components/NProgress/NProgress.jsx"));

/***/ }),

/***/ "./components/Navigation/Group.jsx":
/*!*****************************************!*\
  !*** ./components/Navigation/Group.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Navigation/Group.jsx";

const NavigationGroup = ({
  children,
  classpropname
}) => _react.default.createElement("nav", {
  className: classpropname,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}, children);

NavigationGroup.propTypes = {
  classpropname: _propTypes.string
};
var _default = NavigationGroup;
exports.default = _default;

/***/ }),

/***/ "./components/Navigation/Item.jsx":
/*!****************************************!*\
  !*** ./components/Navigation/Item.jsx ***!
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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _Link = _interopRequireDefault(__webpack_require__(/*! ../Link */ "./components/Link/index.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Navigation/Item.jsx";

const NavigationItem = ({
  children,
  href,
  as,
  classpropname
}) => _react.default.createElement("li", {
  className: "navigation-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: void 0
}, _react.default.createElement(_Link.default, {
  href: href,
  as: as,
  classpropname: classpropname,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: void 0
}, children));

NavigationItem.propTypes = {
  as: _propTypes.string,
  classpropname: _propTypes.string,
  href: _propTypes.string.isRequired
};
var _default = NavigationItem;
exports.default = _default;

/***/ }),

/***/ "./components/Navigation/List.jsx":
/*!****************************************!*\
  !*** ./components/Navigation/List.jsx ***!
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

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Navigation/List.jsx";

const NavigationList = ({
  children,
  classpropname
}) => _react.default.createElement("ul", {
  className: classpropname,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: void 0
}, children);

NavigationList.propTypes = {
  classpropname: _propTypes.string
};
var _default = NavigationList;
exports.default = _default;

/***/ }),

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "NavigationList", {
  enumerable: true,
  get: function () {
    return _List.default;
  }
});

_Object$defineProperty(exports, "NavigationItem", {
  enumerable: true,
  get: function () {
    return _Item.default;
  }
});

_Object$defineProperty(exports, "NavigationGroup", {
  enumerable: true,
  get: function () {
    return _Group.default;
  }
});

var _List = _interopRequireDefault(__webpack_require__(/*! ./List */ "./components/Navigation/List.jsx"));

var _Item = _interopRequireDefault(__webpack_require__(/*! ./Item */ "./components/Navigation/Item.jsx"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./components/Navigation/Group.jsx"));

/***/ }),

/***/ "./components/Search/Search.jsx":
/*!**************************************!*\
  !*** ./components/Search/Search.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ../Form/Input */ "./components/Form/Input.jsx"));

var _Form = __webpack_require__(/*! ../Form */ "./components/Form/index.js");

var _ShowUp = __webpack_require__(/*! ../ShowUp */ "./components/ShowUp/index.js");

var _CategoriesMocks = _interopRequireDefault(__webpack_require__(/*! ../../mocks/CategoriesMocks */ "./mocks/CategoriesMocks.js"));

__webpack_require__(/*! ./Search.scss */ "./components/Search/Search.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/Search/Search.jsx";

const Search = () => {
  const [value, SetValue] = (0, _react.useState)("");
  const [focus, SetFocus] = (0, _react.useState)(false);
  const {
    Categories
  } = (0, _CategoriesMocks.default)();

  const handleValueChange = (_, value) => SetValue(value);

  const handleFormChange = e => console.log(e);

  const handleFocus = focus => SetFocus(focus);

  return _react.default.createElement(_Form.FormGroup, {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: void 0
  }, _react.default.createElement(_Form.Select, {
    size: "lg_m",
    name: "rate",
    value: Categories.mainText,
    options: Categories.lists,
    onChange: handleFormChange,
    className: "Concepts_search_select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: void 0
  }), _react.default.createElement(_ShowUp.ShowInput, {
    value: value,
    focus: focus,
    Component: () => _react.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: void 0
    }, value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }, _react.default.createElement(_Input.default, {
    size: "lg_m",
    type: "text",
    value: value,
    onChange: handleValueChange,
    onFocus: handleFocus,
    className: "Concepts_search_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  })), _react.default.createElement(_Form.Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: void 0
  }, "Search"));
};

var _default = Search;
exports.default = _default;

/***/ }),

/***/ "./components/Search/Search.scss":
/*!***************************************!*\
  !*** ./components/Search/Search.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Search/index.js":
/*!************************************!*\
  !*** ./components/Search/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Search", {
  enumerable: true,
  get: function () {
    return _Search.default;
  }
});

var _Search = _interopRequireDefault(__webpack_require__(/*! ./Search */ "./components/Search/Search.jsx"));

/***/ }),

/***/ "./components/ShowUp/ClickShow.jsx":
/*!*****************************************!*\
  !*** ./components/ShowUp/ClickShow.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Block = __webpack_require__(/*! ../Block */ "./components/Block/index.js");

__webpack_require__(/*! ./ClickShow.scss */ "./components/ShowUp/ClickShow.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/ShowUp/ClickShow.jsx";

const ClickShow = ({
  children,
  Component,
  className,
  childClassName,
  onChange,
  options
}) => {
  const [isShow, setIsShow] = (0, _react.useState)(false);

  const handleClose = () => {
    document.removeEventListener("click", handleClose);
    setIsShow(false);
  };

  const handleOpen = () => {
    document.addEventListener("click", handleClose);
    setIsShow(true);
  };

  const handleToggle = () => isShow ? handleClose() : handleOpen();

  (0, _react.useEffect)(() => () => document.removeEventListener("click", handleClose), []);
  const compositeClassName = (0, _clsx.default)("ClickShow", {
    [className]: className,
    opened: isShow
  });
  return _react.default.createElement("div", {
    className: compositeClassName,
    onClick: handleToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: void 0
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: (0, _clsx.default)("ClickShow_Element", childClassName, {
      _sl: isShow && childClassName
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: void 0
  }, _react.default.createElement(Component, {
    className: "ClickShow_Element_Component",
    handleChange: onChange,
    options: options,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: void 0
  })));
};

ClickShow.propTypes = {
  className: _propTypes.string
};
var _default = ClickShow;
exports.default = _default;

/***/ }),

/***/ "./components/ShowUp/ClickShow.scss":
/*!******************************************!*\
  !*** ./components/ShowUp/ClickShow.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ShowUp/HoverShow.jsx":
/*!*****************************************!*\
  !*** ./components/ShowUp/HoverShow.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Block = __webpack_require__(/*! ../Block */ "./components/Block/index.js");

__webpack_require__(/*! ./HoverShow.scss */ "./components/ShowUp/HoverShow.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/ShowUp/HoverShow.jsx";

const HoverShow = ({
  children,
  Component,
  className,
  hoverSide,
  subData
}) => {
  const [isShow, setIsShow] = (0, _react.useState)(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

  const compositeClassName = (0, _clsx.default)("HoverShow", {
    [className]: className,
    opened: isShow
  });
  return _react.default.createElement("div", {
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose,
    className: compositeClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: (0, _clsx.default)("HoverShow_Element", hoverSide),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }, _react.default.createElement(Component, {
    className: (0, _clsx.default)("HoverShow_Element_Component", hoverSide),
    subData: subData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  })));
};

HoverShow.propTypes = {
  className: _propTypes.string,
  hoverSide: (0, _propTypes.oneOf)(["_r", "_l", "_t", "_d"])
};
HoverShow.defaultProps = {
  hoverSide: "_d"
};
var _default = HoverShow;
exports.default = _default;

/***/ }),

/***/ "./components/ShowUp/HoverShow.scss":
/*!******************************************!*\
  !*** ./components/ShowUp/HoverShow.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ShowUp/ShowInput.jsx":
/*!*****************************************!*\
  !*** ./components/ShowUp/ShowInput.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Block = __webpack_require__(/*! ../Block */ "./components/Block/index.js");

__webpack_require__(/*! ./ShowInput.scss */ "./components/ShowUp/ShowInput.scss");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/ShowUp/ShowInput.jsx";

const ShowInput = ({
  children,
  Component,
  className,
  value,
  focus
}) => {
  const [isShow, setIsShow] = (0, _react.useState)(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  }; //const handleToggle = () => (isShow ? handleClose() : handleOpen());


  (0, _react.useEffect)(() => {
    if (value.length > 1 && focus) {
      handleOpen();
    } else handleClose();

    return () => handleClose();
  }, [value, focus]); //const memoizedValue = useMemo(() => value.length > 1, [value]);

  const compositeClassName = (0, _clsx.default)("ShowInput", {
    [className]: className,
    opened: isShow
  });
  return _react.default.createElement("div", {
    className: compositeClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: void 0
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: "ShowInput_Element",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: void 0
  }, _react.default.createElement(Component, {
    className: "ShowInput_Element_Component",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: void 0
  })));
};

ShowInput.propTypes = {
  className: _propTypes.string,
  value: _propTypes.string,
  focus: _propTypes.bool
};
var _default = ShowInput;
exports.default = _default;

/***/ }),

/***/ "./components/ShowUp/ShowInput.scss":
/*!******************************************!*\
  !*** ./components/ShowUp/ShowInput.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ShowUp/index.js":
/*!************************************!*\
  !*** ./components/ShowUp/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "HoverShow", {
  enumerable: true,
  get: function () {
    return _HoverShow.default;
  }
});

_Object$defineProperty(exports, "ClickShow", {
  enumerable: true,
  get: function () {
    return _ClickShow.default;
  }
});

_Object$defineProperty(exports, "ShowInput", {
  enumerable: true,
  get: function () {
    return _ShowInput.default;
  }
});

var _HoverShow = _interopRequireDefault(__webpack_require__(/*! ./HoverShow */ "./components/ShowUp/HoverShow.jsx"));

var _ClickShow = _interopRequireDefault(__webpack_require__(/*! ./ClickShow */ "./components/ShowUp/ClickShow.jsx"));

var _ShowInput = _interopRequireDefault(__webpack_require__(/*! ./ShowInput */ "./components/ShowUp/ShowInput.jsx"));

/***/ }),

/***/ "./components/SpeedDials/SpeedDials.jsx":
/*!**********************************************!*\
  !*** ./components/SpeedDials/SpeedDials.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");

var _SpeedDial = _interopRequireDefault(__webpack_require__(/*! @material-ui/lab/SpeedDial */ "@material-ui/lab/SpeedDial"));

var _SpeedDialIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/lab/SpeedDialIcon */ "@material-ui/lab/SpeedDialIcon"));

var _SpeedDialAction = _interopRequireDefault(__webpack_require__(/*! @material-ui/lab/SpeedDialAction */ "@material-ui/lab/SpeedDialAction"));

var _Share = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share"));

var _Icons = __webpack_require__(/*! ../Icons */ "./components/Icons/index.js");

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/components/SpeedDials/SpeedDials.jsx";
const useStyles = (0, _styles.makeStyles)(theme => ({
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  }
}));
const actions = [{
  icon: _react.default.createElement(_Icons.BadgeCart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: void 0
  }),
  name: "Cart"
}, {
  icon: _react.default.createElement(_Share.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }),
  name: "Share"
}];

const SpeedDials = () => {
  const classes = useStyles();
  const [open, setOpen] = (0, _react.useState)(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return _react.default.createElement(_SpeedDial.default, {
    ariaLabel: "SpeedDial example",
    className: classes.speedDial,
    icon: _react.default.createElement(_SpeedDialIcon.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: void 0
    }),
    onClose: handleClose,
    onOpen: handleOpen,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: void 0
  }, actions.map(action => _react.default.createElement(_SpeedDialAction.default, {
    key: action.name,
    icon: action.icon,
    tooltipTitle: action.name,
    onClick: handleClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: void 0
  })));
};

var _default = SpeedDials;
exports.default = _default;

/***/ }),

/***/ "./components/SpeedDials/index.js":
/*!****************************************!*\
  !*** ./components/SpeedDials/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "SpeedDials", {
  enumerable: true,
  get: function () {
    return _SpeedDials.default;
  }
});

var _SpeedDials = _interopRequireDefault(__webpack_require__(/*! ./SpeedDials */ "./components/SpeedDials/SpeedDials.jsx"));

/***/ }),

/***/ "./containers/Detect/DetectMobile.jsx":
/*!********************************************!*\
  !*** ./containers/Detect/DetectMobile.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Navigation = __webpack_require__(/*! ../../components/Navigation */ "./components/Navigation/index.js");

var _WithViewportDetection = _interopRequireDefault(__webpack_require__(/*! ../Hocs/WithViewportDetection */ "./containers/Hocs/WithViewportDetection.jsx"));

var _WithToggle = _interopRequireDefault(__webpack_require__(/*! ../Hocs/WithToggle */ "./containers/Hocs/WithToggle.jsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/containers/Detect/DetectMobile.jsx";

const DetectMobile = ({
  isMobile,
  Component
}) => {
  const navClassName = (0, _clsx.default)("Navigation", {
    mobile: isMobile
  });
  return _react.default.createElement(_Navigation.NavigationGroup, {
    classpropname: navClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: void 0
  }, _react.default.createElement(Component, {
    isMobile: isMobile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: void 0
  }));
};

DetectMobile.propTypes = {
  isMobile: _propTypes.bool.isRequired
};

var _default = (0, _WithToggle.default)((0, _WithViewportDetection.default)(DetectMobile));

exports.default = _default;

/***/ }),

/***/ "./containers/Detect/index.js":
/*!************************************!*\
  !*** ./containers/Detect/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "DetectMobile", {
  enumerable: true,
  get: function () {
    return _DetectMobile.default;
  }
});

var _DetectMobile = _interopRequireDefault(__webpack_require__(/*! ./DetectMobile */ "./containers/Detect/DetectMobile.jsx"));

/***/ }),

/***/ "./containers/Hocs/WithToggle.jsx":
/*!****************************************!*\
  !*** ./containers/Hocs/WithToggle.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__(/*! ../../utils/getDisplayName */ "./utils/getDisplayName.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/containers/Hocs/WithToggle.jsx";

const withToggle = WrappedComponent => {
  const HOC = props => {
    const [isOpen, setIsOpen] = (0, _react.useState)(false);

    const handleToggleClick = () => setIsOpen(!isOpen);

    return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
      handleToggleClick: handleToggleClick,
      isOpen: isOpen,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: void 0
    }));
  };

  HOC.displayName = `withToggle(${(0, _getDisplayName.default)(WrappedComponent)})`;
  return HOC;
};

var _default = withToggle;
exports.default = _default;

/***/ }),

/***/ "./containers/Hocs/WithViewportDetection.jsx":
/*!***************************************************!*\
  !*** ./containers/Hocs/WithViewportDetection.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactSizes = _interopRequireDefault(__webpack_require__(/*! react-sizes */ "react-sizes"));

var _viewports = _interopRequireDefault(__webpack_require__(/*! ../../utils/constants/viewports */ "./utils/constants/viewports.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__(/*! ../../utils/getDisplayName */ "./utils/getDisplayName.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/containers/Hocs/WithViewportDetection.jsx";

const mapSizes = ({
  width
}) => ({
  isMobile: width < _viewports.default.TABLET,
  isTablet: width < _viewports.default.DESKTOP && width > _viewports.default.TABLET,
  isDesktop: width > _viewports.default.DESKTOP
});

const withViewportDetection = WrappedComponent => {
  const ComponentWithViewportDetection = (0, _reactSizes.default)(mapSizes)(WrappedComponent);

  const HOC = props => _react.default.createElement(ComponentWithViewportDetection, (0, _extends2.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: void 0
  }));

  HOC.displayName = `withViewportDetection(${(0, _getDisplayName.default)(WrappedComponent)})`;
  return HOC;
};

var _default = withViewportDetection;
exports.default = _default;

/***/ }),

/***/ "./containers/Navigation/PrivateNavigation.jsx":
/*!*****************************************************!*\
  !*** ./containers/Navigation/PrivateNavigation.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/containers/Navigation/PrivateNavigation.jsx";

const Private = () => _react.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1
  },
  __self: void 0
}, " Private ");

var _default = Private;
exports.default = _default;

/***/ }),

/***/ "./containers/Navigation/PublicNavigation.jsx":
/*!****************************************************!*\
  !*** ./containers/Navigation/PublicNavigation.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _clsx = _interopRequireDefault(__webpack_require__(/*! clsx */ "clsx"));

var _Navigation = __webpack_require__(/*! ../../components/Navigation */ "./components/Navigation/index.js");

var _WithViewportDetection = _interopRequireDefault(__webpack_require__(/*! ../Hocs/WithViewportDetection */ "./containers/Hocs/WithViewportDetection.jsx"));

var _WithToggle = _interopRequireDefault(__webpack_require__(/*! ../Hocs/WithToggle */ "./containers/Hocs/WithToggle.jsx"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/containers/Navigation/PublicNavigation.jsx";

const PublicNavigationContainer = ({
  isMobile
}) => {
  const navClassName = (0, _clsx.default)("Navigation", {
    mobile: isMobile
  });
  const listClassName = (0, _clsx.default)("Navigation_list", {
    mobile: isMobile
  });
  return _react.default.createElement(_Navigation.NavigationGroup, {
    classpropname: navClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: void 0
  }, _react.default.createElement(_Navigation.NavigationList, {
    classpropname: `${listClassName} stripped`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: void 0
  }, _react.default.createElement(_Navigation.NavigationItem, {
    href: "/our-magazine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: void 0
  }, "Our Magazine"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/handtohand/handtohand",
    as: "/handtohand/1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: void 0
  }, "Hand To Hand"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/wholesale/wholesale",
    as: "/wholesale/1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: void 0
  }, "WholeSale"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/activity",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: void 0
  }, "Activity")), !isMobile ? _react.default.createElement(_Navigation.NavigationList, {
    classpropname: `${listClassName} authorization_buttons`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  }, _react.default.createElement(_Navigation.NavigationItem, {
    href: "/sign-in",
    classpropname: "sign_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: void 0
  }, "Login"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/sign-up",
    classpropname: "sign_btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: void 0
  }, "Sign Up")) : null);
};

PublicNavigationContainer.propTypes = {
  isMobile: _propTypes.bool.isRequired
};

var _default = (0, _WithToggle.default)((0, _WithViewportDetection.default)(PublicNavigationContainer));

exports.default = _default;

/***/ }),

/***/ "./containers/Navigation/index.js":
/*!****************************************!*\
  !*** ./containers/Navigation/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PrivateNavigationContainer", {
  enumerable: true,
  get: function () {
    return _PrivateNavigation.default;
  }
});

_Object$defineProperty(exports, "PublicNavigationContainer", {
  enumerable: true,
  get: function () {
    return _PublicNavigation.default;
  }
});

var _PrivateNavigation = _interopRequireDefault(__webpack_require__(/*! ./PrivateNavigation */ "./containers/Navigation/PrivateNavigation.jsx"));

var _PublicNavigation = _interopRequireDefault(__webpack_require__(/*! ./PublicNavigation */ "./containers/Navigation/PublicNavigation.jsx"));

/***/ }),

/***/ "./mocks/CategoriesMocks.js":
/*!**********************************!*\
  !*** ./mocks/CategoriesMocks.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

const CategoriesMocks = () => ({
  lists: {
    mainText: "All Categories",
    sections: [{
      id: "smart_watch_1",
      mainSection: "Smart Watch",
      subsection: [{
        id: "sport_1",
        mainSection: "Sport",
        sectionKinds: ["Apple", "Microsoft", "Nike"]
      }, {
        id: "business_1",
        mainSection: "Business",
        sectionKinds: ["Apple", "Samsung"]
      }]
    }, {
      id: "tv_1",
      mainSection: "TV",
      subsection: [{
        id: "smart_1",
        mainSection: "Smart",
        sectionKinds: ["Hisence", "Samsung"]
      }, {
        id: "android_1",
        mainSection: "Android",
        sectionKinds: ["Dell", "Fujitsu"]
      }]
    }]
  },
  Categories: {
    mainText: "Categories",
    lists: [{
      id: 0,
      label: "Categories"
    }, {
      id: 1,
      label: "Web development"
    }, {
      id: 2,
      label: "UX Design"
    }, {
      id: 3,
      label: "UX Design"
    }, {
      id: 4,
      label: "UX Design"
    }, {
      id: 5,
      label: "UX Design"
    }]
  }
});

var _default = CategoriesMocks;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/objectSpread.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _Object$keys(source);

    if (typeof _Object$getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(_Object$getOwnPropertySymbols(source).filter(function (sym) {
        return _Object$getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/objectWithoutProperties.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__(/*! ../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (_Object$getOwnPropertySymbols) {
    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__(/*! ../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _Object$keys(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(err => {
        if (this.props.onError) this.props.onError(err);
      });
    };
  }

  componentDidMount() {
    this.cleanUpListeners = () => {};
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react.default.useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/HomePage/HomePage.jsx":
/*!*************************************!*\
  !*** ./pages/HomePage/HomePage.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

__webpack_require__(/*! ./HomePage.scss */ "./pages/HomePage/HomePage.scss");

var _Layout = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.js");

var _NProgress = _interopRequireDefault(__webpack_require__(/*! ../../components/NProgress */ "./components/NProgress/index.js"));

var _jsxFileName = "/home/arma/My/Software/Projects/Story_SSR_Custom/pages/HomePage/HomePage.jsx";

const Home = () => _react.default.createElement("div", {
  className: "Homepage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: void 0
}, _react.default.createElement(_head.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: void 0
}, _react.default.createElement("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: void 0
}, "Home")), _react.default.createElement(_NProgress.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: void 0
}), _react.default.createElement(_Layout.PublicLayout, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: void 0
}, _react.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: void 0
}, "PublicLayout > Main")));

var _default = (0, _reactRedux.connect)()(Home);

exports.default = _default;

/***/ }),

/***/ "./pages/HomePage/HomePage.scss":
/*!**************************************!*\
  !*** ./pages/HomePage/HomePage.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/HomePage/index.js":
/*!*********************************!*\
  !*** ./pages/HomePage/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _HomePage.default;
  }
});

var _HomePage = _interopRequireDefault(__webpack_require__(/*! ./HomePage */ "./pages/HomePage/HomePage.jsx"));

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _HomePage.default;
  }
});

var _HomePage = _interopRequireDefault(__webpack_require__(/*! ./HomePage */ "./pages/HomePage/index.js"));

/***/ }),

/***/ "./utils/constants/viewports.js":
/*!**************************************!*\
  !*** ./utils/constants/viewports.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;
var _default = {
  TABLET: 768,
  DESKTOP: 990
};
exports.default = _default;

/***/ }),

/***/ "./utils/getDisplayName.js":
/*!*********************************!*\
  !*** ./utils/getDisplayName.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

const getDisplayName = Component => Component.displayName || Component.name || "Component";

var _default = getDisplayName;
exports.default = _default;

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arma/My/Software/Projects/Story_SSR_Custom/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "@material-ui/lab/SpeedDial":
/*!*********************************************!*\
  !*** external "@material-ui/lab/SpeedDial" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDial");

/***/ }),

/***/ "@material-ui/lab/SpeedDialAction":
/*!***************************************************!*\
  !*** external "@material-ui/lab/SpeedDialAction" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialAction");

/***/ }),

/***/ "@material-ui/lab/SpeedDialIcon":
/*!*************************************************!*\
  !*** external "@material-ui/lab/SpeedDialIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialIcon");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-sizes":
/*!******************************!*\
  !*** external "react-sizes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map