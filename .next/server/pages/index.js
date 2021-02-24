module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3h9u":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-056db5425a3e9e0b2ce6740dd8407e75.jpg";

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BwTs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    className: "relative bg-gray-300 pt-8 pb-6"
  }, __jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",
    style: {
      transform: "translateZ(0)"
    }
  }, __jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, __jsx("polygon", {
    className: "text-gray-300 fill-current",
    points: "2560 0 2560 100 0 100"
  }))), __jsx("div", {
    className: "container mx-auto px-4"
  }, __jsx("div", {
    className: "flex flex-wrap text-center lg:text-left"
  }, __jsx("div", {
    className: "w-full lg:w-6/12 px-4"
  }, __jsx("h4", {
    className: "text-3xl font-semibold"
  }, "Let's keep in touch!"), __jsx("h5", {
    className: "text-lg mt-0 mb-2 text-gray-700"
  }, "Find us on any of these platforms, we respond 1-2 business days."), __jsx("div", {
    className: "mt-6 lg:mb-0 mb-6"
  }, __jsx("button", {
    className: "bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
    type: "button"
  }, __jsx("i", {
    className: "fab fa-twitter"
  })), __jsx("button", {
    className: "bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
    type: "button"
  }, __jsx("i", {
    className: "fab fa-facebook-square"
  })), __jsx("button", {
    className: "bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
    type: "button"
  }, __jsx("i", {
    className: "fab fa-dribbble"
  })), __jsx("button", {
    className: "bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2",
    type: "button"
  }, __jsx("i", {
    className: "fab fa-github"
  })))), __jsx("div", {
    className: "w-full lg:w-6/12 px-4"
  }, __jsx("div", {
    className: "flex flex-wrap items-top mb-6"
  }, __jsx("div", {
    className: "w-full lg:w-4/12 px-4 ml-auto"
  }, __jsx("span", {
    className: "block uppercase text-gray-600 text-sm font-semibold mb-2"
  }, "Useful Links"), __jsx("ul", {
    className: "list-unstyled"
  }, __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://www.creative-tim.com/presentation?ref=nnjs-footer"
  }, "About Us")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://blog.creative-tim.com?ref=nnjs-footer"
  }, "Blog")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://www.github.com/creativetimofficial?ref=nnjs-footer"
  }, "Github")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
  }, "Free Products")))), __jsx("div", {
    className: "w-full lg:w-4/12 px-4"
  }, __jsx("span", {
    className: "block uppercase text-gray-600 text-sm font-semibold mb-2"
  }, "Other Resources"), __jsx("ul", {
    className: "list-unstyled"
  }, __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://github.com/creativetimofficial/notus-nextjs/blob/master/LICENSE.md?ref=nnjs-footer"
  }, "MIT License")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/terms?ref=nnjs-footer"
  }, "Terms & Conditions")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/privacy?ref=nnjs-footer"
  }, "Privacy Policy")), __jsx("li", null, __jsx("a", {
    className: "text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/contact-us?ref=nnjs-footer"
  }, "Contact Us"))))))), __jsx("hr", {
    className: "my-6 border-gray-400"
  }), __jsx("div", {
    className: "flex flex-wrap items-center md:justify-between justify-center"
  }, __jsx("div", {
    className: "w-full md:w-4/12 px-4 mx-auto text-center"
  }, __jsx("div", {
    className: "text-sm text-gray-600 font-semibold py-1"
  }, "Copyright \xA9 ", new Date().getFullYear(), " Notus NextJS by", " ", __jsx("a", {
    href: "https://www.creative-tim.com?ref=nnjs-footer",
    className: "text-gray-600 hover:text-gray-900"
  }, "Creative Tim"), "."))))));
}

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CSd0":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/component-menu-c72479a353e651fb0b57ae03ce4e62c1.png";

/***/ }),

/***/ "GJ7Y":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/documentation-e889cedc2c43d1df3983ca47e300f7e0.png";

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Index; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__("pccx");

// CONCATENATED MODULE: ./components/Dropdowns/IndexDropdown.js
var __jsx = external_react_default.a.createElement;




const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = external_react_default.a.useState(false);
  const btnDropdownRef = /*#__PURE__*/external_react_default.a.createRef();
  const popoverDropdownRef = /*#__PURE__*/external_react_default.a.createRef();

  const openDropdownPopover = () => {
    Object(core_["createPopper"])(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    ref: btnDropdownRef,
    onClick: e => {
      e.preventDefault();
      dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
    }
  }, "Demo Pages"), __jsx("div", {
    ref: popoverDropdownRef,
    className: (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
  }, __jsx("span", {
    className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  }, "Admin Layout"), __jsx(link_default.a, {
    href: "/admin/dashboard"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Dashboard")), __jsx(link_default.a, {
    href: "/admin/settings"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Settings")), __jsx(link_default.a, {
    href: "/admin/tables"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Tables")), __jsx(link_default.a, {
    href: "/admin/maps"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Maps")), __jsx("div", {
    className: "h-0 mx-4 my-2 border border-solid border-gray-200"
  }), __jsx("span", {
    className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  }, "Auth Layout"), __jsx(link_default.a, {
    href: "/auth/login"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Login")), __jsx(link_default.a, {
    href: "/auth/register"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Register")), __jsx("div", {
    className: "h-0 mx-4 my-2 border border-solid border-gray-200"
  }), __jsx("span", {
    className: "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
  }, "No Layout"), __jsx(link_default.a, {
    href: "/landing"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Lading")), __jsx(link_default.a, {
    href: "/profile"
  }, __jsx("a", {
    href: "#pablo",
    className: "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
  }, "Profile"))));
};

/* harmony default export */ var Dropdowns_IndexDropdown = (IndexDropdown);
// CONCATENATED MODULE: ./components/Navbars/IndexNavbar.js
var IndexNavbar_jsx = external_react_default.a.createElement;

 // components


function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = external_react_default.a.useState(false);
  return IndexNavbar_jsx(external_react_default.a.Fragment, null, IndexNavbar_jsx("nav", {
    className: "top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  }, IndexNavbar_jsx("div", {
    className: "container px-4 mx-auto flex flex-wrap items-center justify-between"
  }, IndexNavbar_jsx("div", {
    className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
  }, IndexNavbar_jsx(link_default.a, {
    href: "/"
  }, IndexNavbar_jsx("a", {
    className: "text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",
    href: "#pablo"
  }, "Notus NextJS")), IndexNavbar_jsx("button", {
    className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
    type: "button",
    onClick: () => setNavbarOpen(!navbarOpen)
  }, IndexNavbar_jsx("i", {
    className: "fas fa-bars"
  }))), IndexNavbar_jsx("div", {
    className: "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block" : " hidden"),
    id: "example-navbar-warning"
  }, IndexNavbar_jsx("ul", {
    className: "flex flex-col lg:flex-row list-none mr-auto"
  }, IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
  }, IndexNavbar_jsx("i", {
    className: "text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
  }), " ", "Docs"))), IndexNavbar_jsx("ul", {
    className: "flex flex-col lg:flex-row list-none lg:ml-auto"
  }, IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx(Dropdowns_IndexDropdown, null)), IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F",
    target: "_blank"
  }, IndexNavbar_jsx("i", {
    className: "text-gray-500 fab fa-facebook text-lg leading-lg "
  }), IndexNavbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Share"))), IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.",
    target: "_blank"
  }, IndexNavbar_jsx("i", {
    className: "text-gray-500 fab fa-twitter text-lg leading-lg "
  }), IndexNavbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Tweet"))), IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx("a", {
    className: "hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar",
    target: "_blank"
  }, IndexNavbar_jsx("i", {
    className: "text-gray-500 fab fa-github text-lg leading-lg "
  }), IndexNavbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Star"))), IndexNavbar_jsx("li", {
    className: "flex items-center"
  }, IndexNavbar_jsx("button", {
    className: "bg-gray-800 text-white active:bg-gray-700 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150",
    type: "button"
  }, IndexNavbar_jsx("i", {
    className: "fas fa-arrow-alt-circle-down"
  }), " Download")))))));
}
// EXTERNAL MODULE: ./components/Footers/Footer.js
var Footer = __webpack_require__("BwTs");

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;




function Index() {
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(Navbar, {
    fixed: true
  }), pages_jsx("section", {
    className: "header relative pt-16 items-center flex h-screen max-h-860-px"
  }, pages_jsx("div", {
    className: "container mx-auto items-center flex flex-wrap"
  }, pages_jsx("div", {
    className: "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"
  }, pages_jsx("div", {
    className: "pt-32 sm:pt-0"
  }, pages_jsx("h2", {
    className: "font-semibold text-4xl text-gray-700"
  }, "Notus NextJS - A beautiful extension for Tailwind CSS."), pages_jsx("p", {
    className: "mt-4 text-lg leading-relaxed text-gray-600"
  }, "Notus NextJS is Free and Open Source. It does not change or add any CSS to the already one from", " ", pages_jsx("a", {
    href: "https://tailwindcss.com/?ref=creativetim",
    className: "text-gray-700",
    target: "_blank"
  }, "Tailwind CSS"), ". It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular."), pages_jsx("div", {
    className: "mt-12"
  }, pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index",
    target: "_blank",
    className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
  }, "Get started"), pages_jsx("a", {
    href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
    className: "github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg",
    target: "_blank"
  }, "Github Star"))))), pages_jsx("img", {
    className: "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px",
    src: __webpack_require__("SvQ/"),
    alt: "..."
  })), pages_jsx("section", {
    className: "mt-48 md:mt-40 pb-40 relative bg-gray-200"
  }, pages_jsx("div", {
    className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
    style: {
      transform: "translateZ(0)"
    }
  }, pages_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, pages_jsx("polygon", {
    className: "text-gray-200 fill-current",
    points: "2560 0 2560 100 0 100"
  }))), pages_jsx("div", {
    className: "container mx-auto"
  }, pages_jsx("div", {
    className: "flex flex-wrap items-center"
  }, pages_jsx("div", {
    className: "w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
  }, pages_jsx("div", {
    className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800"
  }, pages_jsx("img", {
    alt: "...",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    className: "w-full align-middle rounded-t-lg"
  }), pages_jsx("blockquote", {
    className: "relative p-8 mb-4"
  }, pages_jsx("svg", {
    preserveAspectRatio: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 583 95",
    className: "absolute left-0 w-full block h-95-px -top-94-px"
  }, pages_jsx("polygon", {
    points: "-30,95 583,95 583,65",
    className: "text-gray-800 fill-current"
  })), pages_jsx("h4", {
    className: "text-xl font-bold text-white"
  }, "Great for your awesome project"), pages_jsx("p", {
    className: "text-md font-light mt-2 text-white"
  }, "Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.")))), pages_jsx("div", {
    className: "w-full md:w-6/12 px-4"
  }, pages_jsx("div", {
    className: "flex flex-wrap"
  }, pages_jsx("div", {
    className: "w-full md:w-6/12 px-4"
  }, pages_jsx("div", {
    className: "relative flex flex-col mt-4"
  }, pages_jsx("div", {
    className: "px-4 py-5 flex-auto"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-sitemap"
  })), pages_jsx("h6", {
    className: "text-xl mb-1 font-semibold"
  }, "CSS Components"), pages_jsx("p", {
    className: "mb-4 text-gray-600"
  }, "Notus NextJS comes with a huge number of Fully Coded CSS components."))), pages_jsx("div", {
    className: "relative flex flex-col min-w-0"
  }, pages_jsx("div", {
    className: "px-4 py-5 flex-auto"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-drafting-compass"
  })), pages_jsx("h6", {
    className: "text-xl mb-1 font-semibold"
  }, "JavaScript Components"), pages_jsx("p", {
    className: "mb-4 text-gray-600"
  }, "We also feature many dynamic components for React, NextJS, Vue and Angular.")))), pages_jsx("div", {
    className: "w-full md:w-6/12 px-4"
  }, pages_jsx("div", {
    className: "relative flex flex-col min-w-0 mt-4"
  }, pages_jsx("div", {
    className: "px-4 py-5 flex-auto"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-newspaper"
  })), pages_jsx("h6", {
    className: "text-xl mb-1 font-semibold"
  }, "Pages"), pages_jsx("p", {
    className: "mb-4 text-gray-600"
  }, "This extension also comes with 3 sample pages. They are fully coded so you can start working instantly."))), pages_jsx("div", {
    className: "relative flex flex-col min-w-0"
  }, pages_jsx("div", {
    className: "px-4 py-5 flex-auto"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-file-alt"
  })), pages_jsx("h6", {
    className: "text-xl mb-1 font-semibold"
  }, "Documentation"), pages_jsx("p", {
    className: "mb-4 text-gray-600"
  }, "Built by developers for developers. You will love how easy is to to work with Notus NextJS.")))))))), pages_jsx("div", {
    className: "container mx-auto overflow-hidden pb-20"
  }, pages_jsx("div", {
    className: "flex flex-wrap items-center"
  }, pages_jsx("div", {
    className: "w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-sitemap text-xl"
  })), pages_jsx("h3", {
    className: "text-3xl mb-2 font-semibold leading-normal"
  }, "CSS Components"), pages_jsx("p", {
    className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
  }, "Every element that you need in a product comes built in as a component. All components fit perfectly with each other and can have different colours."), pages_jsx("div", {
    className: "block pb-6"
  }, pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Buttons"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Inputs"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Labels"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Menus"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Navbars"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Pagination"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Progressbars"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Typography")), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index",
    target: "_blank",
    className: "font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
  }, "View All", " ", pages_jsx("i", {
    className: "fa fa-angle-double-right ml-1 leading-relaxed"
  }))), pages_jsx("div", {
    className: "w-full md:w-5/12 px-4 mr-auto ml-auto mt-32"
  }, pages_jsx("div", {
    className: "relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0"
  }, pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("tCIl"),
    className: "w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
  }), pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("oeHe"),
    className: "w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
  }), pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("ps/m"),
    className: "w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
  }), pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("ilBX"),
    className: "w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
  }), pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("CSd0"),
    className: "w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
  }), pages_jsx("img", {
    alt: "...",
    src: __webpack_require__("rI1T"),
    className: "w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
  })))), pages_jsx("div", {
    className: "flex flex-wrap items-center pt-32"
  }, pages_jsx("div", {
    className: "w-full md:w-6/12 px-4 mr-auto ml-auto mt-32"
  }, pages_jsx("div", {
    className: "justify-center flex flex-wrap relative"
  }, pages_jsx("div", {
    className: "my-4 w-full lg:w-6/12 px-4"
  }, pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-red-600 shadow-lg rounded-lg text-center p-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "Svelte"))), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "ReactJS"))), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "NextJS")))), pages_jsx("div", {
    className: "my-4 w-full lg:w-6/12 px-4 lg:mt-16"
  }, pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-yellow-500 shadow-lg rounded-lg text-center p-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "JavaScript"))), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "Angular"))), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index",
    target: "_blank"
  }, pages_jsx("div", {
    className: "bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8"
  }, pages_jsx("img", {
    alt: "...",
    className: "shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white",
    src: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
  }), pages_jsx("p", {
    className: "text-lg text-white mt-4 font-semibold"
  }, "Vue.js")))))), pages_jsx("div", {
    className: "w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-drafting-compass text-xl"
  })), pages_jsx("h3", {
    className: "text-3xl mb-2 font-semibold leading-normal"
  }, "Javascript Components"), pages_jsx("p", {
    className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
  }, "In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users."), pages_jsx("p", {
    className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
  }, "We created a set of Components that are dynamic and come to help you."), pages_jsx("div", {
    className: "block pb-6"
  }, pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Alerts"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Dropdowns"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Menus"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Modals"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Navbars"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Popovers"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Tabs"), pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2"
  }, "Tooltips")), pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index",
    target: "_blank",
    className: "font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
  }, "View all", " ", pages_jsx("i", {
    className: "fa fa-angle-double-right ml-1 leading-relaxed"
  }))))), pages_jsx("div", {
    className: "container mx-auto px-4 pb-32 pt-48"
  }, pages_jsx("div", {
    className: "items-center flex flex-wrap"
  }, pages_jsx("div", {
    className: "w-full md:w-5/12 ml-auto px-12 md:px-4"
  }, pages_jsx("div", {
    className: "md:pr-12"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-file-alt text-xl"
  })), pages_jsx("h3", {
    className: "text-3xl font-semibold"
  }, "Complex Documentation"), pages_jsx("p", {
    className: "mt-4 text-lg leading-relaxed text-gray-600"
  }, "This extension comes a lot of fully coded examples that help you get started faster. You can adjust the colors and also the programming language. You can change the text and images and you're good to go."), pages_jsx("ul", {
    className: "list-none mt-6"
  }, pages_jsx("li", {
    className: "py-2"
  }, pages_jsx("div", {
    className: "flex items-center"
  }, pages_jsx("div", null, pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
  }, pages_jsx("i", {
    className: "fas fa-fingerprint"
  }))), pages_jsx("div", null, pages_jsx("h4", {
    className: "text-gray-600"
  }, "Built by Developers for Developers")))), pages_jsx("li", {
    className: "py-2"
  }, pages_jsx("div", {
    className: "flex items-center"
  }, pages_jsx("div", null, pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
  }, pages_jsx("i", {
    className: "fab fa-html5"
  }))), pages_jsx("div", null, pages_jsx("h4", {
    className: "text-gray-600"
  }, "Carefully crafted code for Components")))), pages_jsx("li", {
    className: "py-2"
  }, pages_jsx("div", {
    className: "flex items-center"
  }, pages_jsx("div", null, pages_jsx("span", {
    className: "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3"
  }, pages_jsx("i", {
    className: "far fa-paper-plane"
  }))), pages_jsx("div", null, pages_jsx("h4", {
    className: "text-gray-600"
  }, "Dynamic Javascript Components"))))))), pages_jsx("div", {
    className: "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"
  }, pages_jsx("img", {
    alt: "...",
    className: "max-w-full rounded-lg shadow-xl",
    style: {
      transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
    },
    src: __webpack_require__("GJ7Y")
  })))), pages_jsx("div", {
    className: "justify-center text-center flex flex-wrap mt-24"
  }, pages_jsx("div", {
    className: "w-full md:w-6/12 px-12 md:px-4"
  }, pages_jsx("h2", {
    className: "font-semibold text-4xl"
  }, "Beautiful Example Pages"), pages_jsx("p", {
    className: "text-lg leading-relaxed mt-4 mb-4 text-gray-600"
  }, "Notus NextJS is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.")))), pages_jsx("section", {
    className: "block relative z-1 bg-gray-700"
  }, pages_jsx("div", {
    className: "container mx-auto"
  }, pages_jsx("div", {
    className: "justify-center flex flex-wrap"
  }, pages_jsx("div", {
    className: "w-full lg:w-12/12 px-4  -mt-24"
  }, pages_jsx("div", {
    className: "flex flex-wrap"
  }, pages_jsx("div", {
    className: "w-full lg:w-4/12 px-4"
  }, pages_jsx("h5", {
    className: "text-xl font-semibold pb-4 text-center"
  }, "Login Page"), pages_jsx(link_default.a, {
    href: "/auth/login"
  }, pages_jsx("div", {
    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
  }, pages_jsx("img", {
    alt: "...",
    className: "align-middle border-none max-w-full h-auto rounded-lg",
    src: __webpack_require__("j0kW")
  })))), pages_jsx("div", {
    className: "w-full lg:w-4/12 px-4"
  }, pages_jsx("h5", {
    className: "text-xl font-semibold pb-4 text-center"
  }, "Profile Page"), pages_jsx(link_default.a, {
    href: "/profile"
  }, pages_jsx("div", {
    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
  }, pages_jsx("img", {
    alt: "...",
    className: "align-middle border-none max-w-full h-auto rounded-lg",
    src: __webpack_require__("3h9u")
  })))), pages_jsx("div", {
    className: "w-full lg:w-4/12 px-4"
  }, pages_jsx("h5", {
    className: "text-xl font-semibold pb-4 text-center"
  }, "Landing Page"), pages_jsx(link_default.a, {
    href: "/landing"
  }, pages_jsx("div", {
    className: "hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
  }, pages_jsx("img", {
    alt: "...",
    className: "align-middle border-none max-w-full h-auto rounded-lg",
    src: __webpack_require__("S/Dw")
  }))))))))), pages_jsx("section", {
    className: "py-20 bg-gray-700 overflow-hidden"
  }, pages_jsx("div", {
    className: "container mx-auto pb-64"
  }, pages_jsx("div", {
    className: "flex flex-wrap justify-center"
  }, pages_jsx("div", {
    className: "w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64"
  }, pages_jsx("div", {
    className: "text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
  }, pages_jsx("i", {
    className: "fas fa-code-branch text-xl"
  })), pages_jsx("h3", {
    className: "text-3xl mb-2 font-semibold leading-normal text-white"
  }, "Open Source"), pages_jsx("p", {
    className: "text-lg font-light leading-relaxed mt-4 mb-4 text-gray-500"
  }, "Since", " ", pages_jsx("a", {
    href: "https://tailwindcss.com/?ref=creative",
    className: "text-gray-400",
    target: "_blank"
  }, "Tailwind CSS"), " ", "is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the code!"), pages_jsx("p", {
    className: "text-lg font-light leading-relaxed mt-0 mb-4 text-gray-500"
  }, "Get it free on Github and please help us spread the news with a Star!"), pages_jsx("a", {
    href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
    target: "_blank",
    className: "github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
  }, "Github Star")), pages_jsx("div", {
    className: "w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative"
  }, pages_jsx("i", {
    className: "fab fa-github text-gray-800 absolute text-55 -top-150-px -right-100 left-auto opacity-80"
  }))))), pages_jsx("section", {
    className: "pb-16 bg-gray-300 relative pt-32"
  }, pages_jsx("div", {
    className: "-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20",
    style: {
      transform: "translateZ(0)"
    }
  }, pages_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, pages_jsx("polygon", {
    className: "text-gray-300 fill-current",
    points: "2560 0 2560 100 0 100"
  }))), pages_jsx("div", {
    className: "container mx-auto"
  }, pages_jsx("div", {
    className: "flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
  }, pages_jsx("div", {
    className: "w-full text-center lg:w-8/12"
  }, pages_jsx("p", {
    className: "text-4xl text-center"
  }, pages_jsx("span", {
    role: "img",
    "aria-label": "love"
  }, "\uD83D\uDE0D")), pages_jsx("h3", {
    className: "font-semibold text-3xl"
  }, "Do you love this Starter Kit?"), pages_jsx("p", {
    className: "text-gray-600 text-lg leading-relaxed mt-4 mb-4"
  }, "Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!"), pages_jsx("div", {
    className: "sm:block flex flex-col mt-10"
  }, pages_jsx("a", {
    href: "https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index",
    target: "_blank",
    className: "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
  }, "Get started"), pages_jsx("a", {
    href: "https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index",
    target: "_blank",
    className: "github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
  }, pages_jsx("i", {
    className: "fab fa-github text-lg mr-1"
  }), pages_jsx("span", null, "Help With a Star"))), pages_jsx("div", {
    className: "text-center mt-16"
  }))))), pages_jsx(Footer["a" /* default */], null));
}

/***/ }),

/***/ "S/Dw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/landing-37b6ed3b5e885d97a5b58b78a85ddb16.jpg";

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "SvQ/":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/pattern_nextjs-aef6ae8cd67e947b15627f3da3c191b5.png";

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
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
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "ilBX":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/component-info-2-4c7eaa621c85a6093d2f1bee914589c0.png";

/***/ }),

/***/ "j0kW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/login-a6f0905b44dd05314d7fd7761294120d.jpg";

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
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
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
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
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oeHe":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/component-profile-card-51088525bf7d6f7336983e50dad43375.png";

/***/ }),

/***/ "pccx":
/***/ (function(module, exports) {

module.exports = require("@popperjs/core");

/***/ }),

/***/ "ps/m":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/component-info-card-66aa97eaedba2579561eed7d4e52a2f8.png";

/***/ }),

/***/ "rI1T":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "tCIl":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });