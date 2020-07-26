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

/***/ "+065":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const DurationMonth = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM17 20H11V22H17V20ZM21 20H27V22H21V20ZM37 20H31V22H37V20ZM11 25H17V27H11V25ZM27 25H21V27H27V25ZM31 25H37V27H31V25ZM17 30H11V32H17V30ZM21 30H27V32H21V30ZM37 30H31V32H37V30ZM11 35H17V37H11V35ZM27 35H21V37H27V35Z"
}));

var _default = DurationMonth;
exports.default = _default;

/***/ }),

/***/ "+2sj":
/***/ (function(module, exports) {



/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+qME":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Navigation = __webpack_require__("gaBn");

var _WithViewportDetection = _interopRequireDefault(__webpack_require__("E9UE"));

var _WithToggle = _interopRequireDefault(__webpack_require__("GumV"));

const DetectMobile = (_ref) => {
  let isMobile = _ref.isMobile,
      Component = _ref.Component;
  const navClassName = (0, _clsx.default)("Navigation", {
    mobile: isMobile
  });
  return _react.default.createElement(_Navigation.NavigationGroup, {
    classpropname: navClassName
  }, _react.default.createElement(Component, {
    isMobile: isMobile
  }));
};

var _default = (0, _WithToggle.default)((0, _WithViewportDetection.default)(DetectMobile));

exports.default = _default;

/***/ }),

/***/ "/0Uv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "TemporaryDrawer", {
  enumerable: true,
  get: function get() {
    return _TemporaryDrawer.default;
  }
});

var _TemporaryDrawer = _interopRequireDefault(__webpack_require__("T88c"));

/***/ }),

/***/ "/A51":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

const getDisplayName = Component => Component.displayName || Component.name || "Component";

var _default = getDisplayName;
exports.default = _default;

/***/ }),

/***/ "/DYF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

const FaIcon = (_ref) => {
  let icon = _ref.icon,
      classpropname = _ref.classpropname,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["icon", "classpropname"]);
  return _react.default.createElement("i", (0, _extends2.default)({
    className: (0, _clsx.default)("fab", icon, classpropname)
  }, rest));
};

var _default = FaIcon;
exports.default = _default;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "0sIx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const NavLeft = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "7",
  height: "10",
  viewBox: "0 0 7 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M6.84199 1.175L5.66699 0L0.666992 5L5.66699 10L6.84199 8.825L3.02533 5L6.84199 1.175Z",
  fill: "#898A8C"
}));

var _default = NavLeft;
exports.default = _default;

/***/ }),

/***/ "1EVI":
/***/ (function(module, exports) {



/***/ }),

/***/ "1LaC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _ShowUp = __webpack_require__("tPQi");

var _Icons = __webpack_require__("Z12H");

__webpack_require__("Ixi7");

/*eslint-disable max-lines*/
const ShowOptionsList = (_ref) => {
  let subData = _ref.subData;
  return _react.default.createElement(_react.default.Fragment, null, subData.map(option => _react.default.createElement("div", {
    key: option.id,
    className: "SelectOption_List_Block"
  }, _react.default.createElement("h3", {
    className: "SelectOption_List_Block_Title"
  }, option.mainSection), _react.default.createElement("ul", {
    className: "SelectOption_List_Block_Subsec"
  }, option.sectionKinds.length > 0 ? option.sectionKinds.map(item => _react.default.createElement("li", {
    key: item
  }, item)) : null))));
};

const SelectOption = (_ref2) => {
  let onChange = _ref2.onChange,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["onChange"]);

  const handleSelect = () => onChange((0, _objectSpread2.default)({}, rest));

  return _react.default.createElement(_ShowUp.HoverShow, {
    className: "SelectOption",
    Component: ShowOptionsList,
    onClick: handleSelect,
    hoverSide: "_r",
    subData: rest.subsection
  }, rest.mainSection, _react.default.createElement(_Icons.SvgIcon, {
    icon: "nav-left"
  }));
};

const ShowOptions = (_ref3) => {
  let options = _ref3.options,
      handleChange = _ref3.handleChange;
  return (//eslint-disable-next-line implicit-arrow-linebreak
    options.map(option => _react.default.createElement(SelectOption, (0, _extends2.default)({
      key: option.id
    }, option, {
      onChange: handleChange
    })))
  );
};

const SelectCategories = (_ref4) => {
  let children = _ref4.children,
      className = _ref4.className,
      options = _ref4.options,
      value = _ref4.value,
      name = _ref4.name,
      size = _ref4.size,
      onChange = _ref4.onChange,
      invalid = _ref4.invalid,
      disabled = _ref4.disabled,
      restProps = (0, _objectWithoutProperties2.default)(_ref4, ["children", "className", "options", "value", "name", "size", "onChange", "invalid", "disabled"]);

  const handleChange = option => {
    const mainSection = option.mainSection;
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
  }, restProps), _react.default.createElement("div", {
    role: "button",
    className: "selected"
  }, _react.default.createElement("span", {
    className: "selected_label"
  }, value), _react.default.createElement(_Icons.SvgIcon, {
    icon: "arrow-down"
  })));
};

SelectCategories.defaultProps = {
  size: "md"
};
var _default = SelectCategories;
exports.default = _default;

/***/ }),

/***/ "1M6r":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const NavRight = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "7",
  height: "10",
  viewBox: "0 0 7 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M1.3332 0L0.158203 1.175L3.97487 5L0.158203 8.825L1.3332 10L6.3332 5L1.3332 0Z",
  fill: "#6B6C6F"
}));

var _default = NavRight;
exports.default = _default;

/***/ }),

/***/ "1es8":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNmZTdlMGY7IiBkPSJNMjk0LjY0NywyNTUuOTk5SDEwMy41MjV2MjI3LjY1N2gxOTEuMTIyYzYyLjg2NSwwLDExMy44MjgtNTAuOTYyLDExMy44MjgtMTEzLjgyOWwwLDANCglDNDA4LjQ3NSwzMDYuOTYzLDM1Ny41MTMsMjU1Ljk5OSwyOTQuNjQ3LDI1NS45OTl6IE0yOTQuNjQ3LDQxMS45MDdIMTc1LjI3NXYtODQuMTU2aDExOS4zNzJjMjMuMjAxLDAsNDIuMDc4LDE4Ljg3Niw0Mi4wNzgsNDIuMDc4DQoJQzMzNi43MjUsMzkzLjAzLDMxNy44NDksNDExLjkwNywyOTQuNjQ3LDQxMS45MDd6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyIgZD0iTTI1OC43NTEsMTY5LjUwM2MtOC4xNDMsMC0xNC43NDYsNi42MDMtMTQuNzQ2LDE0Ljc0NnM2LjYwMywxNC43NDYsMTQuNzQ2LDE0Ljc0Ng0KCQljMzEuMzMyLDAsNTYuODI0LTI1LjQ5Miw1Ni44MjQtNTYuODI0cy0yNS40OTItNTYuODI0LTU2LjgyNC01Ni44MjRoLTgzLjQ3NWMtOC4xNDMsMC0xNC43NDYsNi42MDMtMTQuNzQ2LDE0Ljc0NnY4NC4xNTYNCgkJYzAsOC4xNDMsNi42MDMsMTQuNzQ2LDE0Ljc0NiwxNC43NDZjOC4xNDMsMCwxNC43NDYtNi42MDMsMTQuNzQ2LTE0Ljc0NnYtNjkuNDFoNjguNzI5YzE1LjA3MiwwLDI3LjMzMiwxMi4yNiwyNy4zMzIsMjcuMzMyDQoJCVMyNzMuODIxLDE2OS41MDMsMjU4Ljc1MSwxNjkuNTAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNmZmZmZmY7IiBkPSJNMjk0LjY0NywzMTMuMDA1SDE3NS4yNzVjLTguMTQzLDAtMTQuNzQ2LDYuNjAzLTE0Ljc0NiwxNC43NDZ2ODQuMTU2DQoJCWMwLDguMTQzLDYuNjAzLDE0Ljc0NiwxNC43NDYsMTQuNzQ2aDExOS4zNzJjMzEuMzMyLDAsNTYuODI0LTI1LjQ5Miw1Ni44MjQtNTYuODI0UzMyNS45ODEsMzEzLjAwNSwyOTQuNjQ3LDMxMy4wMDV6DQoJCSBNMjk0LjY0NywzOTcuMTYxSDE5MC4wMjF2LTU0LjY2NGgxMDQuNjI2YzE1LjA3MiwwLDI3LjMzMiwxMi4yNiwyNy4zMzIsMjcuMzMyQzMyMS45NzksMzg0LjkwMSwzMDkuNzE5LDM5Ny4xNjEsMjk0LjY0NywzOTcuMTYxeg0KCQkiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojZmZmZmZmOyIgZD0iTTI5NC42NDcsMjQxLjI1M0gxMTguMjY5VjQzLjA5aDE0MC40OGM1NC42MzQsMCw5OS4wODIsNDQuNDQ5LDk5LjA4Miw5OS4wODINCgkJYzAsMjIuNTc5LTcuMzk1LDQzLjg0Mi0yMS4zODMsNjEuNDljLTUuMDU5LDYuMzgyLTMuOTg2LDE1LjY1NywyLjM5NiwyMC43MTdjMi43MSwyLjE0OCw1Ljk0MSwzLjE5LDkuMTUsMy4xOQ0KCQljNC4zNDksMCw4LjY1Ni0xLjkxNCwxMS41NjctNS41ODZjMTguMTYxLTIyLjkxNCwyNy43NjItNTAuNTEzLDI3Ljc2Mi03OS44MWMwLTcwLjg5Ni01Ny42NzgtMTI4LjU3NC0xMjguNTc0LTEyOC41NzRIMTE4LjIxMg0KCQlDMTE3LjYyNCw1Ljk5MSwxMTEuMjgsMCwxMDMuNTIzLDBjLTguMTQzLDAtMTQuNzQ2LDYuNjAzLTE0Ljc0NiwxNC43NDZ2MjQxLjI1M3YyMjcuNjU3djEzLjU5Nw0KCQljMCw4LjE0Myw2LjYwMywxNC43NDYsMTQuNzQ2LDE0Ljc0NmM3Ljc1NSwwLDE0LjEtNS45OTEsMTQuNjg5LTEzLjU5N2gxNzYuNDM3YzcwLjg5NiwwLDEyOC41NzQtNTcuNjc4LDEyOC41NzQtMTI4LjU3NA0KCQlTMzY1LjU0NSwyNDEuMjUzLDI5NC42NDcsMjQxLjI1M3ogTTI5NC42NDcsNDY4LjkxSDExOC4yNjlWMjcwLjc0NWgxNzYuMzc4YzU0LjYzNCwwLDk5LjA4Miw0NC40NDksOTkuMDgyLDk5LjA4Mg0KCQlTMzQ5LjI4MSw0NjguOTEsMjk0LjY0Nyw0NjguOTF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "2wjS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

const NavigationList = (_ref) => {
  let children = _ref.children,
      classpropname = _ref.classpropname;
  return _react.default.createElement("ul", {
    className: classpropname
  }, children);
};

var _default = NavigationList;
exports.default = _default;

/***/ }),

/***/ "3TsV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Footer", {
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
});

_Object$defineProperty(exports, "FooterNavigation", {
  enumerable: true,
  get: function get() {
    return _FooterNavigation.default;
  }
});

_Object$defineProperty(exports, "PublicFooter", {
  enumerable: true,
  get: function get() {
    return _PublicFooter.default;
  }
});

var _Footer = _interopRequireDefault(__webpack_require__("Bdm+"));

var _FooterNavigation = _interopRequireDefault(__webpack_require__("ExZQ"));

var _PublicFooter = _interopRequireDefault(__webpack_require__("iIqU"));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YMvw");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Qtj":
/***/ (function(module, exports) {



/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "5gCX":
/***/ (function(module, exports) {



/***/ }),

/***/ "5sG4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Block = __webpack_require__("MRGs");

__webpack_require__("+2sj");

const ClickShow = (_ref) => {
  let children = _ref.children,
      Component = _ref.Component,
      className = _ref.className,
      childClassName = _ref.childClassName,
      onChange = _ref.onChange,
      options = _ref.options;

  const _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        isShow = _useState2[0],
        setIsShow = _useState2[1];

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
    onClick: handleToggle
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: (0, _clsx.default)("ClickShow_Element", childClassName, {
      _sl: isShow && childClassName
    })
  }, _react.default.createElement(Component, {
    className: "ClickShow_Element_Component",
    handleChange: onChange,
    options: options
  })));
};

var _default = ClickShow;
exports.default = _default;

/***/ }),

/***/ "5v1S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

__webpack_require__("wJYp");

const Layout = (_ref) => {
  let children = _ref.children;
  return _react.default.createElement("main", {
    className: "Layout"
  }, children);
};

var _default = Layout;
exports.default = _default;

/***/ }),

/***/ "69F/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Link = _interopRequireDefault(__webpack_require__("T8Fm"));

__webpack_require__("FMfw");

const ChatIcon = () => _react.default.createElement("div", {
  className: "ChatIcon"
}, _react.default.createElement(_Link.default, {
  href: "/",
  className: "icon"
}));

var _default = ChatIcon;
exports.default = _default;

/***/ }),

/***/ "79So":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const DurationQuarterYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM34 30.6245C34 32.5823 32.4325 34 30.0734 34C28.2209 34 26.8117 33.1392 25.9725 32.0253L27.0017 30.8945C27.73 31.8397 28.7909 32.4641 30.0417 32.4641C31.4508 32.4641 32.3533 31.6709 32.3533 30.5063C32.3533 29.308 31.4192 28.6835 29.7884 28.7004H28.6009V27.1814L29.7884 27.1983C31.1658 27.1983 32.1317 26.557 32.1317 25.3924C32.1317 24.3122 31.1817 23.5359 29.915 23.5359C28.775 23.5359 27.9359 24.1435 27.1759 25.0886L26.1784 24.0422C27.0175 22.8776 28.2525 22 30.0259 22C32.2267 22 33.7625 23.2996 33.7625 25.1561C33.7625 26.5907 32.8125 27.4852 31.6725 27.8565C32.8125 28.1266 34 29.0042 34 30.6245ZM16.5492 33.7975H18.1641V22.2025H16.8658L14 24.2785L14.665 25.5105L16.5492 24.2278V33.7975ZM20.397 29.9494H24.577V28.4304H20.397V29.9494Z"
}));

var _default = DurationQuarterYear;
exports.default = _default;

/***/ }),

/***/ "7aEn":
/***/ (function(module, exports) {



/***/ }),

/***/ "8+Nu":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("8bdy");

var iterableToArrayLimit = __webpack_require__("fprZ");

var nonIterableRest = __webpack_require__("Bh1o");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "8bdy":
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__("p0XB");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "9IO3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "ANi/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Icons = __webpack_require__("Z12H");

__webpack_require__("SurQ");

const Input = (_ref) => {
  let children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      size = _ref.size,
      value = _ref.value,
      invalid = _ref.invalid,
      disabled = _ref.disabled,
      labelRight = _ref.labelRight,
      labelLeft = _ref.labelLeft,
      iconRight = _ref.iconRight,
      iconLeft = _ref.iconLeft,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
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
    className: wrapperClassName
  }, _react.default.createElement("input", (0, _extends2.default)({
    value: value,
    type: type,
    ref: inputRef,
    onBlur: handleBlur,
    onChange: handleChange
  }, restProps)), labelRight && _react.default.createElement("div", {
    className: "label-right"
  }, labelRight), iconRight && _react.default.createElement(_Icons.SvgIcon, {
    icon: iconRight
  }));
};

Input.defaultProps = {
  type: "text",
  size: "md",
  autoComplete: "off"
};
var _default = Input;
exports.default = _default;

/***/ }),

/***/ "Avpf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var _Object$keys = __webpack_require__("pLtp");

var defineProperty = __webpack_require__("xHqa");

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

/***/ "AyVJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Logo = _interopRequireDefault(__webpack_require__("IDnS"));

var _Navigation = __webpack_require__("bSmL");

var _Detect = __webpack_require__("HheA");

var _Concept = __webpack_require__("bBUj");

var _index = _interopRequireDefault(__webpack_require__("Eqj9"));

var _Category = __webpack_require__("Y8CY");

var _Search = __webpack_require__("nntU");

var _Basket = __webpack_require__("No7m");

var _Drawer = __webpack_require__("/0Uv");

var _CategoriesMocks = _interopRequireDefault(__webpack_require__("9IO3"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

const HeaderConcepts = (_ref) => {
  let isMobile = _ref.isMobile;
  const ConceptName = (0, _clsx.default)("Concept_access-public", {
    mobile: isMobile
  });
  return _react.default.createElement(_Concept.PublicConcept, {
    classpropname: ConceptName
  }, isMobile ? _react.default.createElement(_Drawer.TemporaryDrawer, {
    Mocks: _CategoriesMocks.default
  }) : _react.default.createElement(_Category.Category, {
    CategoriesMocks: _CategoriesMocks.default
  }), _react.default.createElement(_Search.Search, null), _react.default.createElement(_Basket.Basket, null));
};

const PublicHeader = () => _react.default.createElement("header", null, _react.default.createElement(_index.default, {
  classpropname: "Header_access-public"
}, _react.default.createElement(_Logo.default, {
  type: "white"
}), _react.default.createElement(_Navigation.PublicNavigationContainer, null)), _react.default.createElement(_Detect.DetectMobile, {
  Component: HeaderConcepts
}));

var _default = PublicHeader;
exports.default = _default;

/***/ }),

/***/ "Bdm+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("jb+7");

const Footer = (_ref) => {
  let children = _ref.children,
      classpropname = _ref.classpropname;
  return _react.default.createElement("footer", {
    className: (0, _clsx.default)("Footer", classpropname)
  }, children);
};

Footer.defaultProps = {
  classpropname: ""
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ "Bh1o":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "CEfg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Badge = _interopRequireDefault(__webpack_require__("IfcR"));

var _styles = __webpack_require__("9Pu4");

var _ShoppingCart = _interopRequireDefault(__webpack_require__("FQAE"));

const StyledBadge = (0, _styles.withStyles)(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: "2px solid ".concat(theme.palette.background.paper),
    padding: "0 4px"
  }
}))(_Badge.default);

const CustomizedBadges = (_ref) => {
  let count = _ref.count;
  return _react.default.createElement(StyledBadge, {
    badgeContent: count,
    color: "secondary"
  }, _react.default.createElement(_ShoppingCart.default, null));
};

CustomizedBadges.defaultProps = {
  count: 0
};
var _default = CustomizedBadges;
exports.default = _default;

/***/ }),

/***/ "CGta":
/***/ (function(module, exports) {



/***/ }),

/***/ "DggI":
/***/ (function(module, exports) {



/***/ }),

/***/ "E9UE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactSizes = _interopRequireDefault(__webpack_require__("rpIo"));

var _viewports = _interopRequireDefault(__webpack_require__("IKNs"));

var _getDisplayName = _interopRequireDefault(__webpack_require__("/A51"));

const mapSizes = (_ref) => {
  let width = _ref.width;
  return {
    isMobile: width < _viewports.default.TABLET,
    isTablet: width < _viewports.default.DESKTOP && width > _viewports.default.TABLET,
    isDesktop: width > _viewports.default.DESKTOP
  };
};

const withViewportDetection = WrappedComponent => {
  const ComponentWithViewportDetection = (0, _reactSizes.default)(mapSizes)(WrappedComponent);

  const HOC = props => _react.default.createElement(ComponentWithViewportDetection, props);

  HOC.displayName = "withViewportDetection(".concat((0, _getDisplayName.default)(WrappedComponent), ")");
  return HOC;
};

var _default = withViewportDetection;
exports.default = _default;

/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "EIG2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("zeFg");

const BlockContainer = (_ref) => {
  let children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("section", {
    className: (0, _clsx.default)("BlockContainer", className)
  }, children);
};

var _default = BlockContainer;
exports.default = _default;

/***/ }),

/***/ "ETas":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("xnum"));

var _reactRedux = __webpack_require__("h74D");

__webpack_require__("Q5AL");

var _Layout = __webpack_require__("G9T2");

var _NProgress = _interopRequireDefault(__webpack_require__("IN3c"));

//Components
const Home = () => _react.default.createElement("div", {
  className: "Homepage"
}, _react.default.createElement(_head.default, null, _react.default.createElement("title", null, "Home")), _react.default.createElement(_NProgress.default, null), _react.default.createElement(_Layout.PublicLayout, null, _react.default.createElement("div", null, "PublicLayout > Main")));

var _default = (0, _reactRedux.connect)()(Home);

exports.default = _default;

/***/ }),

/***/ "EY6e":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertySymbols = __webpack_require__("4mXO");

var objectWithoutPropertiesLoose = __webpack_require__("L2E4");

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

/***/ "Eqj9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Header.default;
  }
});

var _Header = _interopRequireDefault(__webpack_require__("hQk3"));

/***/ }),

/***/ "ExZQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Navigation = __webpack_require__("gaBn");

const FooterNavigation = (_ref) => {
  let children = _ref.children,
      title = _ref.title;
  return _react.default.createElement("div", {
    className: "list-item"
  }, title && _react.default.createElement("h5", null, title), _react.default.createElement(_Navigation.NavigationList, null, children));
};

FooterNavigation.defaultProps = {
  title: ""
};
var _default = FooterNavigation;
exports.default = _default;

/***/ }),

/***/ "F+RT":
/***/ (function(module, exports) {



/***/ }),

/***/ "FMfw":
/***/ (function(module, exports) {



/***/ }),

/***/ "FQAE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "G9T2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PublicLayout", {
  enumerable: true,
  get: function get() {
    return _PublicLayout.default;
  }
});

var _PublicLayout = _interopRequireDefault(__webpack_require__("p64d"));

/***/ }),

/***/ "GumV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _getDisplayName = _interopRequireDefault(__webpack_require__("/A51"));

const withToggle = WrappedComponent => {
  const HOC = props => {
    const _useState = (0, _react.useState)(false),
          _useState2 = (0, _slicedToArray2.default)(_useState, 2),
          isOpen = _useState2[0],
          setIsOpen = _useState2[1];

    const handleToggleClick = () => setIsOpen(!isOpen);

    return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
      handleToggleClick: handleToggleClick,
      isOpen: isOpen
    }));
  };

  HOC.displayName = "withToggle(".concat((0, _getDisplayName.default)(WrappedComponent), ")");
  return HOC;
};

var _default = withToggle;
exports.default = _default;

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "H7ie":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Block = __webpack_require__("MRGs");

__webpack_require__("JXqX");

const HoverShow = (_ref) => {
  let children = _ref.children,
      Component = _ref.Component,
      className = _ref.className,
      hoverSide = _ref.hoverSide,
      subData = _ref.subData;

  const _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        isShow = _useState2[0],
        setIsShow = _useState2[1];

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
    className: compositeClassName
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: (0, _clsx.default)("HoverShow_Element", hoverSide)
  }, _react.default.createElement(Component, {
    className: (0, _clsx.default)("HoverShow_Element_Component", hoverSide),
    subData: subData
  })));
};

HoverShow.defaultProps = {
  hoverSide: "_d"
};
var _default = HoverShow;
exports.default = _default;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HN0K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const JobExpert = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 46 46",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M8.00817 15.4998C8.00274 15.3339 8 15.1672 8 15C8 6.71573 14.7157 0 23 0C31.2843 0 38 6.71573 38 15C38 15.1672 37.9973 15.3339 37.9918 15.4998C37.3475 15.2087 36.6817 14.9566 35.9976 14.7465C35.8625 7.68377 30.095 2 23 2C15.905 2 10.1375 7.68377 10.0024 14.7465C9.31828 14.9566 8.65253 15.2087 8.00817 15.4998Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23 15.9962C23.9068 15.5117 24.8626 15.107 25.8582 14.7915C25.33 14.5361 24.7097 14.3348 24 14.1756V10.1438C25.0849 10.4554 25.8976 11.1967 26.2 11.6L27.8 10.4C27.277 9.70269 25.9074 8.43845 24 8.09066V7H22V8.07498C19.6584 8.43371 18 10.0386 18 12C18 12.9367 18.306 13.7987 19.0522 14.4859C20.4432 14.8261 21.7669 15.3374 23 15.9962ZM20 12C20 11.3637 20.5848 10.4122 22 10.1018V13.7643C21.2636 13.5629 20.7932 13.3289 20.4997 13.0941C20.1402 12.8066 20 12.4844 20 12Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 24.075V23H16V24.0907C17.9074 24.4384 19.277 25.7027 19.8 26.4L18.2 27.6C17.8976 27.1967 17.0849 26.4554 16 26.1438V30.1756C17.1588 30.4356 18.0792 30.8077 18.7497 31.3441C19.6402 32.0566 20 32.9844 20 34C20 35.9614 18.3416 37.5663 16 37.925V39H14V37.9121C13.1733 37.769 12.4166 37.4677 11.7843 37.1349C10.9035 36.6714 10.1972 36.1114 9.79289 35.7071L11.2071 34.2929C11.4695 34.5552 12.0131 34.9953 12.7157 35.3651C13.1198 35.5778 13.5545 35.7556 14 35.8685V31.8244C12.8412 31.5644 11.9208 31.1923 11.2503 30.6559C10.3598 29.9434 10 29.0156 10 28C10 26.0386 11.6584 24.4337 14 24.075ZM14 26.1018C12.5848 26.4122 12 27.3637 12 28C12 28.4844 12.1402 28.8066 12.4997 29.0941C12.7932 29.3289 13.2636 29.5629 14 29.7643V26.1018ZM16 32.2357V35.8982C17.4152 35.5878 18 34.6363 18 34C18 33.5156 17.8598 33.1934 17.5003 32.9059C17.2068 32.6711 16.7364 32.4371 16 32.2357Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M15 46C23.2843 46 30 39.2843 30 31C30 22.7157 23.2843 16 15 16C6.71573 16 0 22.7157 0 31C0 39.2843 6.71573 46 15 46ZM15 44C22.1797 44 28 38.1797 28 31C28 23.8203 22.1797 18 15 18C7.8203 18 2 23.8203 2 31C2 38.1797 7.8203 44 15 44Z"
}), _react.default.createElement("path", {
  d: "M26.7472 18.7116C28.0797 18.2505 29.5106 18 31 18C38.1797 18 44 23.8203 44 31C44 38.1797 38.1797 44 31 44C29.5106 44 28.0797 43.7495 26.7472 43.2884C26.1979 43.8137 25.6134 44.3024 24.9977 44.7509C26.8357 45.5543 28.8658 46 31 46C39.2843 46 46 39.2843 46 31C46 22.7157 39.2843 16 31 16C28.8658 16 26.8357 16.4457 24.9977 17.2491C25.6134 17.6976 26.1979 18.1863 26.7472 18.7116Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30.0038 39C31.2778 36.6157 32 33.8922 32 31C32 28.1078 31.2778 25.3843 30.0038 23H32V24.0907C33.9074 24.4384 35.277 25.7027 35.8 26.4L34.2 27.6C33.8975 27.1967 33.0849 26.4554 32 26.1438V30.1756C33.1588 30.4356 34.0792 30.8077 34.7497 31.3441C35.6402 32.0566 36 32.9844 36 34C36 35.9614 34.3416 37.5663 32 37.925V39H30.0038ZM32 35.8982V32.2357C32.7364 32.4371 33.2068 32.6711 33.5003 32.9059C33.8598 33.1934 34 33.5156 34 34C34 34.6363 33.4151 35.5878 32 35.8982Z"
}));

var _default = JobExpert;
exports.default = _default;

/***/ }),

/***/ "HheA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "DetectMobile", {
  enumerable: true,
  get: function get() {
    return _DetectMobile.default;
  }
});

var _DetectMobile = _interopRequireDefault(__webpack_require__("+qME"));

/***/ }),

/***/ "IDnS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Logo.default;
  }
});

var _Logo = _interopRequireDefault(__webpack_require__("JN6b"));

/***/ }),

/***/ "IKNs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "IN3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _NProgress.default;
  }
});

var _NProgress = _interopRequireDefault(__webpack_require__("QoDg"));

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "Ixi7":
/***/ (function(module, exports) {



/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JN6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _link = _interopRequireDefault(__webpack_require__("YFqc"));

var _logoWhite = _interopRequireDefault(__webpack_require__("1es8"));

__webpack_require__("F+RT");

/*
 * import DefaultLogo from "./assets/logo-default.svg";
 * import DarkLogo from "./assets/logo-dark.svg";
 */
const LogoImage = {
  /*
   * "default": DefaultLogo,
   * "dark": DarkLogo,
   */
  white: _logoWhite.default
};

const Logo = (_ref) => {
  let type = _ref.type;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)("Logo", type)
  }, _react.default.createElement(_link.default, {
    href: "/"
  }, _react.default.createElement("a", null, _react.default.createElement("img", {
    src: LogoImage[type],
    alt: ""
  }))));
};

Logo.defaultProps = {
  type: "default"
};
var _default = Logo;
exports.default = _default;

/***/ }),

/***/ "JXqX":
/***/ (function(module, exports) {



/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JvL2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const DurationHalfYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM15.4836 34C18.063 34 19.7768 32.5823 19.7768 30.6245C19.7768 29.0042 18.4785 28.1266 17.232 27.8565C18.4785 27.4852 19.5171 26.5907 19.5171 25.1561C19.5171 23.2996 17.8379 22 15.4317 22C13.4928 22 12.1425 22.8776 11.225 24.0422L12.3157 25.0886C13.1466 24.1435 14.0641 23.5359 15.3105 23.5359C16.6954 23.5359 17.7341 24.3122 17.7341 25.3924C17.7341 26.557 16.6781 27.1983 15.172 27.1983L13.8737 27.1814V28.7004H15.172C16.9551 28.6835 17.9764 29.308 17.9764 30.5063C17.9764 31.6709 16.9897 32.4641 15.449 32.4641C14.0814 32.4641 12.9215 31.8397 12.1252 30.8945L11 32.0253C11.9175 33.1392 13.4582 34 15.4836 34ZM21.5559 29.9494H26.1261V28.4304H21.5559V29.9494ZM29.7639 28.0084C30.491 27.0464 31.6854 26.4726 33.0011 26.4726C35.1823 26.4726 37 27.8059 37 30.1013C37 32.3291 35.1996 34 32.6895 34C29.3831 34 27.9808 31.4852 27.9808 28.1772C27.9808 24.6667 30.1101 22 33.0184 22C34.4726 22 35.5632 22.5401 36.4807 23.3333L35.5805 24.6498C34.8361 23.9916 34.0917 23.5359 33.0011 23.5359C31.1834 23.5359 29.8158 25.443 29.7639 28.0084ZM29.9024 29.7806C30.214 31.4346 31.0622 32.5485 32.6203 32.5485C34.2302 32.5485 35.1996 31.3502 35.1996 30.1857C35.1996 28.7679 34.0398 27.9072 32.5856 27.9072C31.27 27.9072 30.214 28.6498 29.9024 29.7806Z"
}));

var _default = DurationHalfYear;
exports.default = _default;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kf1K":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialAction");

/***/ }),

/***/ "KoC9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Basket = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M485.7 198.5c-10.7-13.4-25.3-20.8-41.1-20.8h-36.1C405.1 85.1 338 11 256 11S106.9 85.1 103.5 177.7H67.4c-15.8 0-30.4 7.4-41.1 20.8-13.5 16.8-18.4 40.2-13.3 62.7L56.3 452c6.5 28.8 28.9 49 54.4 49h290.5c25.5 0 47.9-20.1 54.4-49L499 261.2c5.1-22.5.2-45.9-13.3-62.7zM256 51.8c59.6 0 108.4 55.8 111.6 125.9H144.4c3.2-70 52-125.9 111.6-125.9zm203.2 200.3L415.9 443c-2.2 9.8-8.5 17.2-14.6 17.2H110.7c-6.1 0-12.4-7.4-14.6-17.2L52.8 252.1c-2.3-10.1-3.7-33.6 14.6-33.6h377.2c19.7 0 16.9 23.5 14.6 33.6z"
}), _react.default.createElement("path", {
  d: "M154.7 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c.1-11.2-9.1-20.4-20.4-20.4zM253.6 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.2-20.4-20.4-20.4zM352.4 259.1c-11.3 0-20.4 9.1-20.4 20.4V407c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V279.5c0-11.2-9.1-20.4-20.4-20.4z"
}));

var _default = Basket;
exports.default = _default;

/***/ }),

/***/ "L2E4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$keys = __webpack_require__("pLtp");

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

/***/ "LSQ2":
/***/ (function(module, exports) {



/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MA7Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

const PublicConcept = (_ref) => {
  let children = _ref.children,
      classpropname = _ref.classpropname;
  return _react.default.createElement("section", {
    className: (0, _clsx.default)("Concept", classpropname)
  }, children);
};

var _default = PublicConcept;
exports.default = _default;

/***/ }),

/***/ "MDG7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("5gCX");

const FormGroup = (_ref) => {
  let children = _ref.children,
      className = _ref.className,
      inline = _ref.inline,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "inline"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)("FormGroup", {
      [className]: className,
      inline
    })
  }, restProps), children);
};

var _default = FormGroup;
exports.default = _default;

/***/ }),

/***/ "MRGs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "BlockContainer", {
  enumerable: true,
  get: function get() {
    return _BlockContainer.default;
  }
});

var _BlockContainer = _interopRequireDefault(__webpack_require__("EIG2"));

/***/ }),

/***/ "NSCD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const DurationWeek = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM17 25H11V27H17V25ZM21 25H27V27H21V25ZM37 25H31V27H37V25ZM11 30H17V32H11V30ZM27 30H21V32H27V30Z"
}));

var _default = DurationWeek;
exports.default = _default;

/***/ }),

/***/ "No7m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Basket", {
  enumerable: true,
  get: function get() {
    return _Basket.default;
  }
});

var _Basket = _interopRequireDefault(__webpack_require__("X4xU"));

/***/ }),

/***/ "OQiK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _Input = _interopRequireDefault(__webpack_require__("ANi/"));

var _Form = __webpack_require__("qoM+");

var _ShowUp = __webpack_require__("tPQi");

var _CategoriesMocks2 = _interopRequireDefault(__webpack_require__("9IO3"));

__webpack_require__("bd96");

const Search = () => {
  const _useState = (0, _react.useState)(""),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        value = _useState2[0],
        SetValue = _useState2[1];

  const _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
        focus = _useState4[0],
        SetFocus = _useState4[1];

  const _CategoriesMocks = (0, _CategoriesMocks2.default)(),
        Categories = _CategoriesMocks.Categories;

  const handleValueChange = (_, value) => SetValue(value);

  const handleFormChange = e => console.log(e);

  const handleFocus = focus => SetFocus(focus);

  return _react.default.createElement(_Form.FormGroup, {
    inline: true
  }, _react.default.createElement(_Form.Select, {
    size: "lg_m",
    name: "rate",
    value: Categories.mainText,
    options: Categories.lists,
    onChange: handleFormChange,
    className: "Concepts_search_select"
  }), _react.default.createElement(_ShowUp.ShowInput, {
    value: value,
    focus: focus,
    Component: () => _react.default.createElement("div", null, value)
  }, _react.default.createElement(_Input.default, {
    size: "lg_m",
    type: "text",
    value: value,
    onChange: handleValueChange,
    onFocus: handleFocus,
    className: "Concepts_search_input"
  })), _react.default.createElement(_Form.Button, null, "Search"));
};

var _default = Search;
exports.default = _default;

/***/ }),

/***/ "OxZ6":
/***/ (function(module, exports) {



/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "Q5AL":
/***/ (function(module, exports) {



/***/ }),

/***/ "QhVa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 10 5",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M0.833252 0.333332L4.99992 4.5L9.16658 0.333332H0.833252Z"
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "QoDg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("4Q3z"));

var _head = _interopRequireDefault(__webpack_require__("xnum"));

var _nprogress = _interopRequireDefault(__webpack_require__("GvLQ"));

_nprogress.default.configure({
  showSpinner: false
});

_router.default.onRouteChangeStart = () => {
  _nprogress.default.start();
};

_router.default.onRouteChangeComplete = () => _nprogress.default.done();

_router.default.onRouteChangeError = () => _nprogress.default.done();

const NProgressUI = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/static/css/nprogress.css"
})));

var _default = NProgressUI;
exports.default = _default;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "R42Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Link = _interopRequireDefault(__webpack_require__("T8Fm"));

const NavigationItem = (_ref) => {
  let children = _ref.children,
      href = _ref.href,
      as = _ref.as,
      classpropname = _ref.classpropname;
  return _react.default.createElement("li", {
    className: "navigation-item"
  }, _react.default.createElement(_Link.default, {
    href: href,
    as: as,
    classpropname: classpropname
  }, children));
};

var _default = NavigationItem;
exports.default = _default;

/***/ }),

/***/ "SdsZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Navigation = __webpack_require__("gaBn");

var _WithViewportDetection = _interopRequireDefault(__webpack_require__("E9UE"));

var _WithToggle = _interopRequireDefault(__webpack_require__("GumV"));

const PublicNavigationContainer = (_ref) => {
  let isMobile = _ref.isMobile;
  const navClassName = (0, _clsx.default)("Navigation", {
    mobile: isMobile
  });
  const listClassName = (0, _clsx.default)("Navigation_list", {
    mobile: isMobile
  });
  return _react.default.createElement(_Navigation.NavigationGroup, {
    classpropname: navClassName
  }, _react.default.createElement(_Navigation.NavigationList, {
    classpropname: "".concat(listClassName, " stripped")
  }, _react.default.createElement(_Navigation.NavigationItem, {
    href: "/our-magazine"
  }, "Our Magazine"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/handtohand/handtohand",
    as: "/handtohand/1"
  }, "Hand To Hand"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/wholesale/wholesale",
    as: "/wholesale/1"
  }, "WholeSale"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/activity"
  }, "Activity")), !isMobile ? _react.default.createElement(_Navigation.NavigationList, {
    classpropname: "".concat(listClassName, " authorization_buttons")
  }, _react.default.createElement(_Navigation.NavigationItem, {
    href: "/sign-in",
    classpropname: "sign_btn"
  }, "Login"), _react.default.createElement(_Navigation.NavigationItem, {
    href: "/sign-up",
    classpropname: "sign_btn"
  }, "Sign Up")) : null);
};

var _default = (0, _WithToggle.default)((0, _WithViewportDetection.default)(PublicNavigationContainer));

exports.default = _default;

/***/ }),

/***/ "SurQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "T88c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = TemporaryDrawer;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _styles = __webpack_require__("9Pu4");

var _Drawer = _interopRequireDefault(__webpack_require__("Q01v"));

var _List = _interopRequireDefault(__webpack_require__("0LMq"));

var _Divider = _interopRequireDefault(__webpack_require__("nybW"));

var _Toggle = _interopRequireDefault(__webpack_require__("jiuG"));

var _ListItem = _interopRequireDefault(__webpack_require__("c25J"));

var _ListItemText = _interopRequireDefault(__webpack_require__("W+03"));

__webpack_require__("LSQ2");

const useStyles = (0, _styles.makeStyles)({
  list: {
    width: "80vw"
  }
});

function TemporaryDrawer(_ref) {
  let Mocks = _ref.Mocks;
  const classes = useStyles();

  const _useState = (0, _react.useState)({
    right: false,
    sub: {
      open: false,
      id: ""
    }
  }),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

  const _Mocks = Mocks(),
        lists = _Mocks.lists;

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
    onKeyDown: toggleDrawer(side, false)
  }, state.sub.open ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("button", {
    type: "button",
    onClick: toggleSub("", false)
  }, " ", "Back", " "), _react.default.createElement(_Divider.default, null)) : null, _react.default.createElement(_List.default, null, state.sub.open ? getById(state.sub.id).subsection.map(category => _react.default.createElement(_List.default, {
    key: category.id
  }, _react.default.createElement(_ListItem.default, {
    button: true,
    key: category.id
  }, _react.default.createElement(_ListItemText.default, {
    primary: category.mainSection
  })), category.sectionKinds.length ? category.sectionKinds.map(kind => _react.default.createElement("div", {
    key: kind
  }, kind)) : null)) : lists.sections.map(category => _react.default.createElement(_ListItem.default, {
    onClick: toggleSub(category.id, true),
    button: true,
    key: category.id
  }, _react.default.createElement(_ListItemText.default, {
    primary: category.mainSection
  })))), _react.default.createElement(_Divider.default, null));

  return _react.default.createElement("div", {
    className: (0, _clsx.default)("Drawer_right", {
      open: state.right
    })
  }, _react.default.createElement(_Toggle.default, {
    handleClick: toggleDrawer("right", !state.right)
  }), _react.default.createElement(_Drawer.default, {
    anchor: "right",
    open: state.right,
    onClose: toggleDrawer("right", false)
  }, sideList("right")));
}

/***/ }),

/***/ "T8Fm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Link.default;
  }
});

var _Link = _interopRequireDefault(__webpack_require__("umHw"));

/***/ }),

/***/ "TE5G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const DurationYear = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7 10V8H2V13H46V8H41V10H39V8H9V10H7ZM2 6H7V4H9V6H39V4H41V6H46C47.1046 6 48 6.89543 48 8V42C48 43.1046 47.1046 44 46 44H2C0.895432 44 0 43.1046 0 42V8C0 6.89543 0.895431 6 2 6ZM2 42V15H46V42H2ZM16.7664 28.0084C17.4867 27.0464 18.6701 26.4726 19.9734 26.4726C22.1343 26.4726 23.9351 27.8059 23.9351 30.1013C23.9351 32.3291 22.1515 34 19.6648 34C16.3891 34 15 31.4852 15 28.1772C15 24.6667 17.1094 22 19.9906 22C21.4312 22 22.5116 22.5401 23.4206 23.3333L22.5288 24.6498C21.7913 23.9916 21.0539 23.5359 19.9734 23.5359C18.1727 23.5359 16.8179 25.443 16.7664 28.0084ZM16.9036 29.7806C17.2123 31.4346 18.0527 32.5485 19.5962 32.5485C21.1911 32.5485 22.1515 31.3502 22.1515 30.1857C22.1515 28.7679 21.0024 27.9072 19.5619 27.9072C18.2585 27.9072 17.2123 28.6498 16.9036 29.7806ZM30.7758 27.4177H34V28.9198H30.7758V32.0928H29.198V28.9198H25.991V27.4177H29.198V24.211H30.7758V27.4177Z"
}));

var _default = DurationYear;
exports.default = _default;

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TZnW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Attach = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M2 12.5C2 9.46 4.46 7 7.5 7H18C20.21 7 22 8.79 22 11C22 13.21 20.21 15 18 15H9.5C8.12 15 7 13.88 7 12.5C7 11.12 8.12 10 9.5 10H17V12H9.41C8.86 12 8.86 13 9.41 13H18C19.1 13 20 12.1 20 11C20 9.9 19.1 9 18 9H7.5C5.57 9 4 10.57 4 12.5C4 14.43 5.57 16 7.5 16H17V18H7.5C4.46 18 2 15.54 2 12.5Z"
}));

var _default = Attach;
exports.default = _default;

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "V8wA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _ArrowDown = _interopRequireDefault(__webpack_require__("QhVa"));

var _Attach = _interopRequireDefault(__webpack_require__("TZnW"));

var _Check = _interopRequireDefault(__webpack_require__("v4s/"));

var _JobEntry = _interopRequireDefault(__webpack_require__("f/FC"));

var _JobIntermediate = _interopRequireDefault(__webpack_require__("hLbh"));

var _JobExpert = _interopRequireDefault(__webpack_require__("HN0K"));

var _DurationWeek = _interopRequireDefault(__webpack_require__("NSCD"));

var _DurationMonth = _interopRequireDefault(__webpack_require__("+065"));

var _DurationQuarterYear = _interopRequireDefault(__webpack_require__("79So"));

var _DurationHalfYear = _interopRequireDefault(__webpack_require__("JvL2"));

var _DurationYear = _interopRequireDefault(__webpack_require__("TE5G"));

var _Close = _interopRequireDefault(__webpack_require__("tolD"));

var _Search = _interopRequireDefault(__webpack_require__("aPr0"));

var _NavLeft = _interopRequireDefault(__webpack_require__("0sIx"));

var _NavRight = _interopRequireDefault(__webpack_require__("1M6r"));

var _Star = _interopRequireDefault(__webpack_require__("y2/N"));

var _Basket = _interopRequireDefault(__webpack_require__("KoC9"));

__webpack_require__("4Qtj");

/*eslint-disable max-lines*/
const SvgIcon = (_ref) => {
  let icon = _ref.icon,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
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
  }, rest));
};

SvgIcon.defaultProps = {
  color: "#ffffff",
  size: "25px"
};
var _default = SvgIcon;
exports.default = _default;

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "X+60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

const NavigationGroup = (_ref) => {
  let children = _ref.children,
      classpropname = _ref.classpropname;
  return _react.default.createElement("nav", {
    className: classpropname
  }, children);
};

var _default = NavigationGroup;
exports.default = _default;

/***/ }),

/***/ "X4xU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("HJQg"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Icons = __webpack_require__("Z12H");

var _ShowUp = __webpack_require__("tPQi");

__webpack_require__("1EVI");

const WrapComp = (_ref) => {
  let className = _ref.className;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("p", null, "Your shopping cart is empty!"));
};

const Basket = () => _react.default.createElement(_ShowUp.HoverShow, {
  Component: WrapComp,
  hoverSide: "_d"
}, _react.default.createElement("div", {
  id: "basket",
  className: "jsx-548934571"
}, _react.default.createElement(_Icons.SvgIcon, {
  size: "50px",
  icon: "basket"
}), _react.default.createElement(_style.default, {
  id: "548934571"
}, ["#basket.jsx-548934571::after{content:\"".concat(0, "\";position:absolute;top:68%;right:2%;width:18px;height:18px;background-color:#f77d12;border:2px solid #f5f6f7;border-radius:50%;font-family:serif;text-align:center;box-sizing:content-box;}")])));

var _default = Basket;
exports.default = _default;

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "XkvL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.buttonSizes = exports.buttonColors = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("7aEn");

const Button = (_ref) => {
  let children = _ref.children,
      type = _ref.type,
      classpropname = _ref.classpropname,
      color = _ref.color,
      size = _ref.size,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "type", "classpropname", "color", "size"]);
  return (//eslint-disable-next-line react/button-has-type
    _react.default.createElement("button", (0, _extends2.default)({
      className: (0, _clsx.default)("Button", color, size, {
        [classpropname]: classpropname
      }),
      type: type
    }, restProps), children)
  );
};

const buttonColors = ["orange", "orange-light", "outline", "transparent", "white", "grey"];
exports.buttonColors = buttonColors;
const buttonSizes = ["md", "sm", "xs"];
exports.buttonSizes = buttonSizes;
Button.defaultProps = {
  type: "button",
  color: "orange",
  size: "sm"
};
var _default = Button;
exports.default = _default;

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "XuMd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDialIcon");

/***/ }),

/***/ "Y8CY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Category", {
  enumerable: true,
  get: function get() {
    return _Category.default;
  }
});

var _Category = _interopRequireDefault(__webpack_require__("k63K"));

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YMvw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _HomePage.default;
  }
});

var _HomePage = _interopRequireDefault(__webpack_require__("ETas"));

/***/ }),

/***/ "Z12H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FaIcon", {
  enumerable: true,
  get: function get() {
    return _FaIcon.default;
  }
});

_Object$defineProperty(exports, "SvgIcon", {
  enumerable: true,
  get: function get() {
    return _SvgIcon.default;
  }
});

_Object$defineProperty(exports, "ChatIcon", {
  enumerable: true,
  get: function get() {
    return _ChatIcon.default;
  }
});

_Object$defineProperty(exports, "BadgeCart", {
  enumerable: true,
  get: function get() {
    return _BadgeCart.default;
  }
});

var _FaIcon = _interopRequireDefault(__webpack_require__("/DYF"));

var _SvgIcon = _interopRequireDefault(__webpack_require__("V8wA"));

var _ChatIcon = _interopRequireDefault(__webpack_require__("69F/"));

var _BadgeCart = _interopRequireDefault(__webpack_require__("CEfg"));

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Zqds":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

__webpack_require__("cPw5");

const Main = (_ref) => {
  let children = _ref.children;
  return _react.default.createElement("main", {
    className: "Main"
  }, children);
};

var _default = Main;
exports.default = _default;

/***/ }),

/***/ "aPr0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z"
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "bBUj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PublicConcept", {
  enumerable: true,
  get: function get() {
    return _PublicConcept.default;
  }
});

var _PublicConcept = _interopRequireDefault(__webpack_require__("MA7Y"));

/***/ }),

/***/ "bSmL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "PrivateNavigationContainer", {
  enumerable: true,
  get: function get() {
    return _PrivateNavigation.default;
  }
});

_Object$defineProperty(exports, "PublicNavigationContainer", {
  enumerable: true,
  get: function get() {
    return _PublicNavigation.default;
  }
});

var _PrivateNavigation = _interopRequireDefault(__webpack_require__("vrlX"));

var _PublicNavigation = _interopRequireDefault(__webpack_require__("SdsZ"));

/***/ }),

/***/ "bd96":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPw5":
/***/ (function(module, exports) {



/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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
      const _e$currentTarget = e.currentTarget,
            nodeName = _e$currentTarget.nodeName,
            target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let _this$formatUrls = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let scroll = this.props.scroll;

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

    const pathname = window.location.pathname;

    const _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let children = this.props.children;

    const _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "ebD0":
/***/ (function(module, exports) {



/***/ }),

/***/ "f/FC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const JobEntry = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23 17.075V16H25V17.0907C26.9074 17.4384 28.277 18.7027 28.8 19.4L27.2 20.6C26.8976 20.1967 26.0849 19.4554 25 19.1438V23.1756C26.1588 23.4356 27.0792 23.8077 27.7497 24.3441C28.6402 25.0566 29 25.9844 29 27C29 28.9614 27.3416 30.5663 25 30.925V32H23V30.9121C22.1733 30.769 21.4166 30.4677 20.7843 30.1349C19.9035 29.6714 19.1972 29.1114 18.7929 28.7071L20.2071 27.2929C20.4695 27.5552 21.0131 27.9953 21.7157 28.3651C22.1198 28.5778 22.5545 28.7556 23 28.8685V24.8244C21.8412 24.5644 20.9208 24.1923 20.2503 23.6559C19.3598 22.9434 19 22.0156 19 21C19 19.0386 20.6584 17.4337 23 17.075ZM23 19.1018C21.5848 19.4122 21 20.3637 21 21C21 21.4844 21.1402 21.8066 21.4997 22.0941C21.7932 22.3289 22.2636 22.5629 23 22.7643V19.1018ZM25 25.2357V28.8982C26.4152 28.5878 27 27.6363 27 27C27 26.5156 26.8598 26.1934 26.5003 25.9059C26.2068 25.6711 25.7364 25.4371 25 25.2357Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39ZM24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z"
}));

var _default = JobEntry;
exports.default = _default;

/***/ }),

/***/ "fprZ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("XXOK");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "gaBn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "NavigationList", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});

_Object$defineProperty(exports, "NavigationItem", {
  enumerable: true,
  get: function get() {
    return _Item.default;
  }
});

_Object$defineProperty(exports, "NavigationGroup", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});

var _List = _interopRequireDefault(__webpack_require__("2wjS"));

var _Item = _interopRequireDefault(__webpack_require__("R42Q"));

var _Group = _interopRequireDefault(__webpack_require__("X+60"));

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hCXb":
/***/ (function(module, exports) {



/***/ }),

/***/ "hLbh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const JobIntermediate = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 46 46",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M10.669 10.5566C12.5629 4.44174 18.2627 0 25 0C33.2843 0 40 6.71573 40 15C40 20.7757 36.7357 25.7889 31.9514 28.2955C31.9836 27.8679 32 27.4359 32 27C32 26.6561 31.9898 26.3146 31.9697 25.9757C35.5949 23.6689 38 19.6153 38 15C38 7.8203 32.1797 2 25 2C19.5451 2 14.8749 5.35976 12.9458 10.1228C12.1696 10.2163 11.4095 10.3621 10.669 10.5566Z"
}), _react.default.createElement("path", {
  d: "M20.2125 10.814C20.7305 9.41662 22.1526 8.358 24 8.07498V7H26V8.09066C27.9074 8.43845 29.277 9.70269 29.8 10.4L28.2 11.6C27.8976 11.1967 27.0849 10.4554 26 10.1438V14.0381C25.3711 13.5038 24.7027 13.0145 24 12.5751V10.1018C22.8968 10.3438 22.2982 10.9754 22.0879 11.5435C21.4811 11.2648 20.8552 11.0208 20.2125 10.814Z"
}), _react.default.createElement("path", {
  d: "M28.7497 15.3441C28.1218 14.8418 27.2748 14.4836 26.2181 14.2265C27.6958 15.5253 28.9463 17.0765 29.9022 18.8127C29.9665 18.5507 30 18.2789 30 18C30 16.9844 29.6402 16.0566 28.7497 15.3441Z",
  fill: "black"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M14 19V20.075C11.6584 20.4337 10 22.0386 10 24C10 25.0156 10.3598 25.9434 11.2503 26.6559C11.9208 27.1923 12.8412 27.5644 14 27.8244V31.8685C13.5545 31.7556 13.1198 31.5778 12.7157 31.3651C12.0131 30.9953 11.4695 30.5552 11.2071 30.2929L9.79289 31.7071C10.1972 32.1114 10.9035 32.6714 11.7843 33.1349C12.4166 33.4677 13.1733 33.769 14 33.9121V35H16V33.925C18.3416 33.5663 20 31.9614 20 30C20 28.9844 19.6402 28.0566 18.7497 27.3441C18.0792 26.8077 17.1588 26.4356 16 26.1756V22.1438C17.0849 22.4554 17.8976 23.1967 18.2 23.6L19.8 22.4C19.277 21.7027 17.9074 20.4384 16 20.0907V19H14ZM12 24C12 23.3637 12.5848 22.4122 14 22.1018V25.7643C13.2636 25.5629 12.7932 25.3289 12.4997 25.0941C12.1402 24.8066 12 24.4844 12 24ZM16 31.8982V28.2357C16.7364 28.4371 17.2068 28.6711 17.5003 28.9059C17.8598 29.1934 18 29.5156 18 30C18 30.6363 17.4152 31.5878 16 31.8982Z"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M30 27C30 35.2843 23.2843 42 15 42C6.71573 42 0 35.2843 0 27C0 18.7157 6.71573 12 15 12C23.2843 12 30 18.7157 30 27ZM28 27C28 34.1797 22.1797 40 15 40C7.8203 40 2 34.1797 2 27C2 19.8203 7.8203 14 15 14C22.1797 14 28 19.8203 28 27Z"
}));

var _default = JobIntermediate;
exports.default = _default;

/***/ }),

/***/ "hQk3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("OxZ6");

const Header = (_ref) => {
  let children = _ref.children,
      classpropname = _ref.classpropname;
  return _react.default.createElement("section", {
    className: (0, _clsx.default)("Header", classpropname)
  }, children);
};

Header.defaultProps = {
  classpropname: ""
};
var _default = Header;
exports.default = _default;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "iIqU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Logo = _interopRequireDefault(__webpack_require__("IDnS"));

var _Icons = __webpack_require__("Z12H");

var _ = __webpack_require__("3TsV");

var _Navigation = __webpack_require__("gaBn");

__webpack_require__("jb+7");

const PublicFooter = () => _react.default.createElement(_.Footer, {
  classpropname: "Footer_access-public"
}, _react.default.createElement("div", {
  className: "container"
}, _react.default.createElement("div", {
  className: "row"
}, _react.default.createElement("div", {
  className: "col-md-4"
}, _react.default.createElement(_Logo.default, {
  type: "dark"
}), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis nunc, posuere quis ipsum quis consectetur."), _react.default.createElement(_Navigation.NavigationList, {
  classpropname: "SocialList inline-list"
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/"
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-twitter"
})), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/"
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-facebook-f"
})), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/"
}, _react.default.createElement(_Icons.FaIcon, {
  icon: "fa-instagram"
}))), _react.default.createElement("p", {
  className: "copyright"
}, "\xA9 BuyEnjoy. All rights reserved")), _react.default.createElement("div", {
  className: "col-md-1"
}), _react.default.createElement("div", {
  className: "col-md-7 flex-list"
}, _react.default.createElement(_.FooterNavigation, {
  title: "Company"
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/"
}, "About")), _react.default.createElement(_.FooterNavigation, {
  title: "Resources"
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/sign-up"
}, "Sign Up")), _react.default.createElement(_.FooterNavigation, {
  title: "Help"
}, _react.default.createElement(_Navigation.NavigationItem, {
  href: "/how-it-works"
}, "How it works"), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/contact-us"
}, "Contact Us"), _react.default.createElement(_Navigation.NavigationItem, {
  href: "/"
}, "Blog"))))));

var _default = PublicFooter;
exports.default = _default;

/***/ }),

/***/ "jb+7":
/***/ (function(module, exports) {



/***/ }),

/***/ "jiuG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Form = __webpack_require__("qoM+");

const Toggle = (_ref) => {
  let handleClick = _ref.handleClick;
  return _react.default.createElement(_Form.Button, {
    classpropname: "toggle mobile-toggle",
    onClick: handleClick
  }, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "close",
    viewBox: "0 0 448 512"
  }, _react.default.createElement("path", {
    d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
  }), " "), _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "open",
    viewBox: "0 0 352 512"
  }, _react.default.createElement("path", {
    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
  }), " "));
};

var _default = Toggle;
exports.default = _default;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k63K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Form = __webpack_require__("qoM+");

__webpack_require__("hCXb");

const Category = (_ref) => {
  let CategoriesMocks = _ref.CategoriesMocks;

  const _CategoriesMocks = CategoriesMocks(),
        lists = _CategoriesMocks.lists;

  const handleFormChange = e => console.log(e);

  return _react.default.createElement(_Form.FormGroup, {
    inline: true
  }, _react.default.createElement(_Form.SelectCategories, {
    size: "lg",
    name: "rate",
    value: lists.mainText,
    options: lists.sections,
    onChange: handleFormChange
  }));
};

var _default = Category;
exports.default = _default;

/***/ }),

/***/ "lUrH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _styles = __webpack_require__("9Pu4");

var _SpeedDial = _interopRequireDefault(__webpack_require__("tvBH"));

var _SpeedDialIcon = _interopRequireDefault(__webpack_require__("XuMd"));

var _SpeedDialAction = _interopRequireDefault(__webpack_require__("Kf1K"));

var _Share = _interopRequireDefault(__webpack_require__("EAEr"));

var _Icons = __webpack_require__("Z12H");

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
  icon: _react.default.createElement(_Icons.BadgeCart, null),
  name: "Cart"
}, {
  icon: _react.default.createElement(_Share.default, null),
  name: "Share"
}];

const SpeedDials = () => {
  const classes = useStyles();

  const _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return _react.default.createElement(_SpeedDial.default, {
    ariaLabel: "SpeedDial example",
    className: classes.speedDial,
    icon: _react.default.createElement(_SpeedDialIcon.default, null),
    onClose: handleClose,
    onOpen: handleOpen,
    open: open
  }, actions.map(action => _react.default.createElement(_SpeedDialAction.default, {
    key: action.name,
    icon: action.icon,
    tooltipTitle: action.name,
    onClick: handleClose
  })));
};

var _default = SpeedDials;
exports.default = _default;

/***/ }),

/***/ "lsuF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("Avpf"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _SvgIcon = _interopRequireDefault(__webpack_require__("V8wA"));

var _ShowUp = __webpack_require__("tPQi");

__webpack_require__("ebD0");

const SelectOption = (_ref) => {
  let onChange = _ref.onChange,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["onChange"]);

  const handleSelect = () => onChange((0, _objectSpread2.default)({}, rest));

  return _react.default.createElement("div", {
    role: "button",
    className: "SelectOption",
    onClick: handleSelect
  }, rest.label);
};

const ShowOptions = (_ref2) => {
  let options = _ref2.options,
      handleChange = _ref2.handleChange;
  return (//eslint-disable-next-line implicit-arrow-linebreak
    options.map(option => _react.default.createElement(SelectOption, (0, _extends2.default)({
      key: option.id
    }, option, {
      onChange: handleChange
    })))
  );
};

const Select = (_ref3) => {
  let children = _ref3.children,
      className = _ref3.className,
      options = _ref3.options,
      value = _ref3.value,
      name = _ref3.name,
      size = _ref3.size,
      onChange = _ref3.onChange,
      invalid = _ref3.invalid,
      disabled = _ref3.disabled,
      restProps = (0, _objectWithoutProperties2.default)(_ref3, ["children", "className", "options", "value", "name", "size", "onChange", "invalid", "disabled"]);

  const handleChange = option => {
    const id = option.id;
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
  }, restProps), _react.default.createElement("div", {
    role: "button",
    className: "selected"
  }, _react.default.createElement("span", {
    className: "selected_label"
  }, selectedOption.label), _react.default.createElement(_SvgIcon.default, {
    icon: "arrow-down"
  })));
};

Select.defaultProps = {
  size: "md"
};
var _default = Select;
exports.default = _default;

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mxc4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "SpeedDials", {
  enumerable: true,
  get: function get() {
    return _SpeedDials.default;
  }
});

var _SpeedDials = _interopRequireDefault(__webpack_require__("lUrH"));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _getIterator2 = _interopRequireDefault2(__webpack_require__("XXOK"));

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireDefault(__webpack_require__("qxCs"));

exports.Router = _router2.default;

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator2.default)(urlPropertyFields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      const property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

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

/***/ "nntU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Search", {
  enumerable: true,
  get: function get() {
    return _Search.default;
  }
});

var _Search = _interopRequireDefault(__webpack_require__("OQiK"));

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p64d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _Icons = __webpack_require__("Z12H");

var _SpeedDials = __webpack_require__("mxc4");

var _Layout = _interopRequireDefault(__webpack_require__("5v1S"));

var _PublicHeader = _interopRequireDefault(__webpack_require__("AyVJ"));

var _PublicFooter = _interopRequireDefault(__webpack_require__("iIqU"));

var _Main = _interopRequireDefault(__webpack_require__("Zqds"));

const PublicLayout = (_ref) => {
  let children = _ref.children;
  return _react.default.createElement(_Layout.default, null, _react.default.createElement(_PublicHeader.default, null), _react.default.createElement(_Main.default, null, children), _react.default.createElement(_Icons.ChatIcon, null), _react.default.createElement(_SpeedDials.SpeedDials, null), _react.default.createElement(_PublicFooter.default, null));
};

var _default = PublicLayout;
exports.default = _default;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qoM+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

_Object$defineProperty(exports, "buttonColors", {
  enumerable: true,
  get: function get() {
    return _Button.buttonColors;
  }
});

_Object$defineProperty(exports, "buttonSizes", {
  enumerable: true,
  get: function get() {
    return _Button.buttonSizes;
  }
});

_Object$defineProperty(exports, "FormGroup", {
  enumerable: true,
  get: function get() {
    return _FormGroup.default;
  }
});

_Object$defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});

_Object$defineProperty(exports, "SelectCategories", {
  enumerable: true,
  get: function get() {
    return _SelectCategories.default;
  }
});

var _Button = _interopRequireWildcard(__webpack_require__("XkvL"));

var _FormGroup = _interopRequireDefault(__webpack_require__("MDG7"));

var _Select = _interopRequireDefault(__webpack_require__("lsuF"));

var _SelectCategories = _interopRequireDefault(__webpack_require__("1LaC"));

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rpIo":
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "tPQi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "HoverShow", {
  enumerable: true,
  get: function get() {
    return _HoverShow.default;
  }
});

_Object$defineProperty(exports, "ClickShow", {
  enumerable: true,
  get: function get() {
    return _ClickShow.default;
  }
});

_Object$defineProperty(exports, "ShowInput", {
  enumerable: true,
  get: function get() {
    return _ShowInput.default;
  }
});

var _HoverShow = _interopRequireDefault(__webpack_require__("H7ie"));

var _ClickShow = _interopRequireDefault(__webpack_require__("5sG4"));

var _ShowInput = _interopRequireDefault(__webpack_require__("zLOR"));

/***/ }),

/***/ "tolD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Close = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M12.6673 4.27331L11.7273 3.33331L8.00065 7.05998L4.27398 3.33331L3.33398 4.27331L7.06065 7.99998L3.33398 11.7266L4.27398 12.6666L8.00065 8.93998L11.7273 12.6666L12.6673 11.7266L8.94065 7.99998L12.6673 4.27331Z",
  fill: "#A7A8AA"
}));

var _default = Close;
exports.default = _default;

/***/ }),

/***/ "tvBH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/SpeedDial");

/***/ }),

/***/ "umHw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("EY6e"));

var _link = _interopRequireDefault(__webpack_require__("YFqc"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

__webpack_require__("DggI");

const Link = (_ref) => {
  let classpropname = _ref.classpropname,
      href = _ref.href,
      children = _ref.children,
      prefetch = _ref.prefetch,
      as = _ref.as,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["classpropname", "href", "children", "prefetch", "as"]);
  return _react.default.createElement(_link.default, {
    href: href,
    as: as,
    prefetch: prefetch
  }, _react.default.createElement("a", (0, _extends2.default)({
    className: (0, _clsx.default)("Link", classpropname)
  }, rest), children));
};

Link.defaultProps = {
  prefetch: false
};
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "v4s/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Check = props => _react.default.createElement("svg", (0, _extends2.default)({
  viewBox: "0 0 12 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props, {
  width: "12",
  height: "9"
}), _react.default.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L4.70711 8.70711C4.31658 9.09763 3.68342 9.09763 3.29289 8.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L4 6.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893Z",
  fill: "white"
}));

var _default = Check;
exports.default = _default;

/***/ }),

/***/ "vrlX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

const Private = () => _react.default.createElement("div", null, " Private ");

var _default = Private;
exports.default = _default;

/***/ }),

/***/ "wJYp":
/***/ (function(module, exports) {



/***/ }),

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y2/N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

const Star = props => _react.default.createElement("svg", (0, _extends2.default)({
  width: "18",
  height: "17",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _react.default.createElement("path", {
  d: "M9.00033 13.3917L14.1503 16.5L12.7837 10.6417L17.3337 6.70004L11.342 6.1917L9.00033 0.666702L6.65866 6.1917L0.666992 6.70004L5.21699 10.6417L3.85033 16.5L9.00033 13.3917Z",
  fill: "#EF6722"
}));

var _default = Star;
exports.default = _default;

/***/ }),

/***/ "zLOR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("8+Nu"));

var _clsx = _interopRequireDefault(__webpack_require__("dYMV"));

var _Block = __webpack_require__("MRGs");

__webpack_require__("CGta");

const ShowInput = (_ref) => {
  let children = _ref.children,
      Component = _ref.Component,
      className = _ref.className,
      value = _ref.value,
      focus = _ref.focus;

  const _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        isShow = _useState2[0],
        setIsShow = _useState2[1];

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
    className: compositeClassName
  }, children, _react.default.createElement(_Block.BlockContainer, {
    className: "ShowInput_Element"
  }, _react.default.createElement(Component, {
    className: "ShowInput_Element_Component"
  })));
};

var _default = ShowInput;
exports.default = _default;

/***/ }),

/***/ "zeFg":
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=HomePage.js.map