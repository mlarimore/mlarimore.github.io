(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fedopsLogger", [], factory);
	else if(typeof exports === 'object')
		exports["fedopsLogger"] = factory();
	else
		root["fedopsLogger"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/fedops-logger/5.458.0/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************!*\
  !*** ./env.js ***!
  \****************/
/*! exports provided: env, hasSendBeacon, sendBeacon */
/*! exports used: env, hasSendBeacon, sendBeacon */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasSendBeacon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendBeacon; });
var envFallback = {};
var env = function env() {
  if (typeof window !== 'undefined') {
    return window;
  } else if (typeof globalThis !== 'undefined') {
    /* global globalThis */
    return globalThis;
  } else if (typeof global !== 'undefined') {
    return global;
  } else if (typeof WorkerGlobalScope !== 'undefined') {
    /* global WorkerGlobalScope */
    return WorkerGlobalScope;
  } else {
    return envFallback;
  }
};
function hasSendBeacon() {
  return typeof navigator !== 'undefined' && navigator && navigator.sendBeacon;
}
function sendBeacon(url) {
  return navigator.sendBeacon(url);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ 13)))

/***/ }),
/* 1 */
/*!********************************************!*\
  !*** ./global-app-data/global-app-data.js ***!
  \********************************************/
/*! exports provided: initializeFedops, initializeApp, initializeGlobal, getLoadStartTime, setLoadStartTime, setSessionId */
/*! exports used: getLoadStartTime, initializeFedops, initializeGlobal, setLoadStartTime, setSessionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initializeFedops; });
/* unused harmony export initializeApp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initializeGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoadStartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setLoadStartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setSessionId; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env */ 0);


function getAppData(appName) {
  return ((Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops || {}).apps || {})[appName];
}

function initializeFedops() {
  Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops || {};
  Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops.apps = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops.apps || {};
}
function initializeApp(appName) {
  Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops.apps[appName] = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops.apps[appName] || {};
}
function initializeGlobal(appName) {
  initializeFedops();
  initializeApp(appName);
}
function getLoadStartTime(appName) {
  return (getAppData(appName) || {}).startLoadTime || 0;
}
function setLoadStartTime(appName, startLoadTime) {
  return (getAppData(appName) || {}).startLoadTime = startLoadTime;
}
function setSessionId(sessionId) {
  return (Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* env */ "a"])().fedops || {}).sessionId = sessionId;
}

/***/ }),
/* 2 */
/*!*********************************************************************************!*\
  !*** ../node_modules/@wix/consent-policy-client-accessor/dist/es/src/consts.js ***!
  \*********************************************************************************/
/*! exports provided: METHODS, PROPS_ACCESS, ALLOW_ALL_POLICY */
/*! exports used: ALLOW_ALL_POLICY, METHODS, PROPS_ACCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PROPS_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALLOW_ALL_POLICY; });
var METHODS = {
    policy: 'getCurrentConsentPolicy',
    header: '_getConsentPolicyHeader',
    isMethod: true,
};
var PROPS_ACCESS = {
    policy: 'consentPolicy',
    header: 'consentPolicyHeader',
    isMethod: false,
};
var ALLOW_ALL_POLICY = {
    essential: true,
    dataToThirdParty: true,
    advertising: true,
    functional: true,
    analytics: true,
};
//# sourceMappingURL=consts.js.map

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/env.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGlobal = exports.getWindowIfTop = exports.isBackoffice = exports.isWebWorker = exports.getHost = exports.setHost = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ 9);
var host, hostByDomain;
function setHost(_host) {
    host = _host;
}
exports.setHost = setHost;
function getHost(brand) {
    if (brand === void 0) { brand = constants_1.DefaultBrand; }
    if (host) {
        return host;
    }
    var hostByDomainOrBrand = '';
    if (typeof hostByDomain === 'undefined') {
        hostByDomain = getGlobal(function (window) {
            if (!window.location || !window.location.hostname) {
                return null;
            }
            var _a = window.location.hostname.match(/\.(wix|editorx)\.com$/) || [], domain = _a[1];
            return domain || null;
        }, null);
    }
    hostByDomainOrBrand =
        hostByDomain || constants_1.BrandToHostMap[brand] || constants_1.BrandToHostMap[constants_1.DefaultBrand];
    return "frog.".concat(hostByDomainOrBrand, ".com");
}
exports.getHost = getHost;
function isWebWorker() {
    /* global WorkerGlobalScope */
    //At the moment, this is the most reliable way of detecting if current code is run in a worker
    //Taken from here: https://stackoverflow.com/a/18002694
    return (typeof WorkerGlobalScope !== 'undefined' &&
        self instanceof WorkerGlobalScope);
}
exports.isWebWorker = isWebWorker;
function isBackoffice() {
    return getWindowIfTop(function (_a) {
        var document = _a.document;
        return constants_1.BackofficeDomains.some(function (domain) { return document.location.host.indexOf(domain) !== -1; });
    });
}
exports.isBackoffice = isBackoffice;
/**
 * Provides a window object to the callback iff current window is the topmost one
 * Otherwise returns null
 */
function getWindowIfTop(cb) {
    if (typeof window !== 'undefined' && window) {
        try {
            return window.top === window.self ? (cb ? cb(window) : window) : null;
        }
        catch (e) {
            return null;
        }
    }
    return null;
}
exports.getWindowIfTop = getWindowIfTop;
function getGlobal(cb, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    if (typeof self !== 'undefined' && self) {
        return cb(self) || defaultValue;
    }
    return defaultValue;
}
exports.getGlobal = getGlobal;
//# sourceMappingURL=env.js.map

/***/ }),
/* 4 */
/*!**************************************************************************************************!*\
  !*** ../node_modules/@wix/consent-policy-client-accessor/dist/es/src/consent-policy-accessor.js ***!
  \**************************************************************************************************/
/*! exports provided: getGlobalAccessor, getConsentPolicyManager */
/*! exports used: getConsentPolicyManager */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export getGlobalAccessor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getConsentPolicyManager; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ 2);

var globalContext;
function getGlobalAccessor() {
    [getGlobalThis, getGlobal, getSelf, getWindow].forEach(function (globalAccessFunc) {
        try {
            if (!globalContext) {
                globalContext = globalAccessFunc();
            }
        }
        catch (e) {
            // Lint this mofo
        }
    });
    return globalContext;
}
function getWindow() {
    return window;
}
function getSelf() {
    return self;
}
function getGlobal() {
    return global;
}
function getGlobalThis() {
    return globalThis;
}
function getConsentPolicyManager(env) {
    if (env === void 0) { env = undefined; }
    if (env) {
        globalContext = env;
    }
    if (!globalContext && !env) {
        globalContext = getGlobalAccessor();
    }
    var consentPolicyManager;
    try {
        if (typeof globalContext.commonConfig === 'object' &&
            globalContext.commonConfig.consentPolicy) {
            consentPolicyManager = wrapConsentPolicy(globalContext.commonConfig, _consts__WEBPACK_IMPORTED_MODULE_0__[/* PROPS_ACCESS */ "c"]);
        }
        if (!consentPolicyManager &&
            typeof globalContext.consentPolicyManager === 'object') {
            consentPolicyManager = wrapConsentPolicy(globalContext.consentPolicyManager, _consts__WEBPACK_IMPORTED_MODULE_0__[/* METHODS */ "b"]);
        }
        if (!consentPolicyManager &&
            typeof globalContext.Wix === 'object' &&
            typeof globalContext.Wix.Utils === 'object' &&
            typeof globalContext.Wix.Utils.getCurrentConsentPolicy === 'function') {
            consentPolicyManager = wrapConsentPolicy(globalContext.Wix.Utils, _consts__WEBPACK_IMPORTED_MODULE_0__[/* METHODS */ "b"]);
        }
    }
    catch (e) {
        // Lint this if you can
    }
    return consentPolicyManager;
}
function wrapConsentPolicy(accessor, conf) {
    return {
        getCurrentConsentPolicy: function () {
            var extractor = accessor[conf.policy];
            return conf.isMethod ? extractor() : extractor;
        },
        _getConsentPolicyHeader: function () {
            var extractor = accessor[conf.header];
            return conf.isMethod ? extractor() : extractor;
        },
        deleteReference: !conf.isMethod,
    };
}
//# sourceMappingURL=consent-policy-accessor.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 13)))

/***/ }),
/* 5 */
/*!****************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/assert.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssertionError = function (_Error) {
  _inherits(AssertionError, _Error);

  function AssertionError(message) {
    _classCallCheck(this, AssertionError);

    var _this = _possibleConstructorReturn(this, (AssertionError.__proto__ || Object.getPrototypeOf(AssertionError)).call(this, message));

    _this.name = _this.constructor.name;
    return _this;
  }

  return AssertionError;
}(Error);

function assertDefined(target, message) {
  if (target === undefined) {
    throw new AssertionError(message);
  }
}

function assertObject(target, message) {
  if (target !== undefined && ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || Array.isArray(target) || target === null)) {
    throw new AssertionError(message);
  }
}

function assertOk(target, message) {
  if (!target) {
    throw new AssertionError(message);
  }
}

function assertFunc(target, message) {
  if (target !== undefined && typeof target !== 'function') {
    throw new AssertionError(message);
  }
}

function assertBoolean(target, message) {
  if (target !== undefined && typeof target !== 'boolean') {
    throw new AssertionError(message);
  }
}

function assertNumber(target, message) {
  if (target !== undefined && typeof target !== 'number') {
    throw new AssertionError(message);
  }
}

function assertArray(target, message) {
  if (typeof Array.isArray === 'function') {
    if (!Array.isArray(target)) {
      throw new AssertionError(message);
    }
  } else if (Object.prototype.toString.call(target) !== '[object Array]') {
    throw new AssertionError(message);
  }
}

module.exports.defined = assertDefined;
module.exports.object = assertObject;
module.exports.ok = assertOk;
module.exports.func = assertFunc;
module.exports.boolean = assertBoolean;
module.exports.number = assertNumber;
module.exports.array = assertArray;
module.exports.AssertionError = AssertionError;
//# sourceMappingURL=assert.js.map

/***/ }),
/* 6 */
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/batch-queue.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debounce = __webpack_require__(/*! ./debounce */ 33);
var throttle = __webpack_require__(/*! ./throttle */ 34);

var createEvent = function createEvent(event, context, startTime) {
  return {
    dt: Date.now() - startTime,
    f: event,
    context: context
  };
};

var createBatch = function createBatch(events, startTime) {
  return {
    dt: Date.now() - startTime,
    e: events,
    g: {}
  };
};

var optimizeBatch = function optimizeBatch(batch) {
  var fieldCounts = {};
  var batchLen = batch.e.length;

  var events = batch.e.map(function (event) {
    var fields = Object.keys(event.f).map(function (field) {
      var value = event.f[field];
      var key = field + '|' + value;
      fieldCounts[key] = fieldCounts[key] || 0;
      fieldCounts[key]++;
      return [field, value, key];
    });

    return _extends({}, event, {
      f: fields
    });
  });

  var globalFields = {};
  events = events.map(function (event) {
    var fields = event.f.reduce(function (res, _ref) {
      var _ref2 = _slicedToArray(_ref, 3),
          field = _ref2[0],
          value = _ref2[1],
          key = _ref2[2];

      if (fieldCounts[key] === batchLen) {
        globalFields[field] = value;
      } else {
        res[field] = value;
      }

      return res;
    }, {});

    return _extends({}, event, {
      f: fields
    });
  });

  return _extends({}, batch, {
    e: events,
    g: globalFields
  });
};

var BatchQueue = function () {
  function BatchQueue() {
    _classCallCheck(this, BatchQueue);

    this._initilized = false;
  }

  _createClass(BatchQueue, [{
    key: '_reset',
    value: function _reset() {
      var _this = this;

      this._startTime = Date.now();
      this._resolve = null;
      this._promise = new Promise(function (resolve) {
        return _this._resolve = resolve;
      });
    }
  }, {
    key: 'init',
    value: function init(_ref3, flushHandler) {
      var _this2 = this;

      var delayMs = _ref3.delayMs,
          maxBatchSize = _ref3.maxBatchSize,
          useThrottle = _ref3.useThrottle,
          optimizeBatch = _ref3.optimizeBatch;

      if (this._initilized) {
        return;
      }

      this._maxBatchSize = maxBatchSize;
      this._optimizeBatch = optimizeBatch;
      this._queue = [];
      this._flushHandler = flushHandler;
      this._flushDebounced = useThrottle ? throttle(function () {
        return _this2.flush();
      }, delayMs) : debounce(function () {
        return _this2.flush();
      }, delayMs);
      this._initilized = true;

      this._reset();
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (!this._queue.length) {
        return Promise.resolve();
      }

      var events = this._queue.splice(0, this._queue.length);
      var resolve = this._resolve;
      var startTime = this._startTime;

      this._reset();

      var batch = createBatch(events, startTime);

      if (this._optimizeBatch) {
        batch = optimizeBatch(batch);
      }

      return this._flushHandler(batch).then(resolve);
    }
  }, {
    key: 'feed',
    value: function feed(event, context) {
      this._queue.push(createEvent(event, context, this._startTime));

      if (this._queue.length === this._maxBatchSize) {
        return this.flush();
      }

      this._flushDebounced();

      return this._promise;
    }
  }]);

  return BatchQueue;
}();

module.exports = BatchQueue;
//# sourceMappingURL=batch-queue.js.map

/***/ }),
/* 7 */
/*!*****************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/errors.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.APINotSupportedError = exports.AssertionError = void 0;
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    return AssertionError;
}(Error));
exports.AssertionError = AssertionError;
var APINotSupportedError = /** @class */ (function (_super) {
    __extends(APINotSupportedError, _super);
    function APINotSupportedError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        return _this;
    }
    return APINotSupportedError;
}(Error));
exports.APINotSupportedError = APINotSupportedError;
//# sourceMappingURL=errors.js.map

/***/ }),
/* 8 */
/*!******************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/browser.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readCookie = exports.sendBeacon = exports.getWindowSize = exports.getDesktopSize = exports.now = void 0;
function now() {
    return typeof performance !== 'undefined' && performance && performance.now
        ? performance.now()
        : -1;
}
exports.now = now;
function getDesktopSize(window) {
    var width = (window.screen && window.screen.width) || 0;
    var height = (window.screen && window.screen.height) || 0;
    return "".concat(width, "x").concat(height);
}
exports.getDesktopSize = getDesktopSize;
function getWindowSize(window) {
    var width = 0;
    var height = 0;
    if (window.innerWidth) {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    else if (window.document) {
        if (window.document.documentElement &&
            window.document.documentElement.clientWidth) {
            width = window.document.documentElement.clientWidth;
            height = window.document.documentElement.clientHeight;
        }
        else if (window.document.body && window.document.body.clientWidth) {
            width = window.document.body.clientWidth;
            height = window.document.body.clientHeight;
        }
    }
    return "".concat(width, "x").concat(height);
}
exports.getWindowSize = getWindowSize;
function sendBeacon(url, data) {
    if (typeof navigator === 'undefined' || !navigator || !navigator.sendBeacon) {
        return false;
    }
    return navigator.sendBeacon(url, data);
}
exports.sendBeacon = sendBeacon;
function readCookie(cookieName) {
    if (typeof document === 'undefined') {
        return null;
    }
    var cookies = document.cookie.split(';');
    for (var _i = 0, cookies_1 = cookies; _i < cookies_1.length; _i++) {
        var cookie = cookies_1[_i];
        var pair = cookie.split('=');
        var name_1 = pair[0];
        var value = pair[1];
        while (name_1[0] === ' ') {
            name_1 = name_1.substr(1);
        }
        if (name_1 === cookieName) {
            return value;
        }
    }
    return '';
}
exports.readCookie = readCookie;
//# sourceMappingURL=browser.js.map

/***/ }),
/* 9 */
/*!****************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/constants.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCommonConfig = exports.BrandToHostMap = exports.DefaultBrand = exports.EventContextMap = exports.BackofficeDomains = exports.LoggerVersion = void 0;
exports.LoggerVersion = '2.0.985|C';
exports.BackofficeDomains = ['.wix.com', '.editorx.com'];
var EventContextMap;
(function (EventContextMap) {
    EventContextMap["msid"] = "_msid";
    EventContextMap["clientId"] = "_client_id";
    EventContextMap["uuid"] = "_uuid";
    EventContextMap["visitorId"] = "_visitorId";
    EventContextMap["siteMemberId"] = "_siteMemberId";
    EventContextMap["brandId"] = "_brandId";
    EventContextMap["siteBranchId"] = "_siteBranchId";
    EventContextMap["ms"] = "_ms";
    EventContextMap["lv"] = "_lv";
})(EventContextMap = exports.EventContextMap || (exports.EventContextMap = {}));
exports.DefaultBrand = 'wix';
exports.BrandToHostMap = {
    wix: 'wix',
    editorx: 'editorx',
};
exports.DefaultCommonConfig = {
    brand: exports.DefaultBrand,
};
//# sourceMappingURL=constants.js.map

/***/ }),
/* 10 */
/*!************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/types.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = exports.EventCategories = exports.PublishMethods = void 0;
var PublishMethods;
(function (PublishMethods) {
    PublishMethods["Auto"] = "auto";
    PublishMethods["PostMessage"] = "postMessage";
    PublishMethods["Fetch"] = "fetch";
})(PublishMethods = exports.PublishMethods || (exports.PublishMethods = {}));
var EventCategories;
(function (EventCategories) {
    EventCategories["Essential"] = "essential";
    EventCategories["Functional"] = "functional";
    EventCategories["Analytics"] = "analytics";
})(EventCategories = exports.EventCategories || (exports.EventCategories = {}));
var Errors;
(function (Errors) {
    Errors[Errors["Unsupported"] = 0] = "Unsupported";
})(Errors = exports.Errors || (exports.Errors = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 11 */
/*!********************************************************************************!*\
  !*** ../node_modules/@wix/consent-policy-client-accessor/dist/es/src/index.js ***!
  \********************************************************************************/
/*! exports provided: ConsentPolicyAccessor */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/@wix/web-bi-logger/dist/src/logger.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentPolicyAccessor", function() { return ConsentPolicyAccessor; });
/* harmony import */ var _consent_policy_accessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consent-policy-accessor */ 4);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ 2);


var ConsentPolicyAccessor = /** @class */ (function () {
    function ConsentPolicyAccessor(env) {
        if (env) {
            this.env = env;
        }
        this.consentPolicyAccess = Object(_consent_policy_accessor__WEBPACK_IMPORTED_MODULE_0__[/* getConsentPolicyManager */ "a"])(this.env);
    }
    ConsentPolicyAccessor.prototype.clearReference = function () {
        if (this.consentPolicyAccess && this.consentPolicyAccess.deleteReference) {
            this.consentPolicyAccess = undefined;
        }
    };
    ConsentPolicyAccessor.prototype.getCurrentConsentPolicy = function () {
        if (!this.consentPolicyAccess) {
            this.consentPolicyAccess = Object(_consent_policy_accessor__WEBPACK_IMPORTED_MODULE_0__[/* getConsentPolicyManager */ "a"])(this.env);
        }
        var policyObj = (this.consentPolicyAccess &&
            this.consentPolicyAccess.getCurrentConsentPolicy()) ||
            _consts__WEBPACK_IMPORTED_MODULE_1__[/* ALLOW_ALL_POLICY */ "a"];
        this.clearReference();
        return policyObj.policy ? policyObj.policy : policyObj;
    };
    ConsentPolicyAccessor.prototype.getConsentPolicyHeader = function (valueOnly) {
        if (valueOnly === void 0) { valueOnly = false; }
        if (!this.consentPolicyAccess) {
            this.consentPolicyAccess = Object(_consent_policy_accessor__WEBPACK_IMPORTED_MODULE_0__[/* getConsentPolicyManager */ "a"])(this.env);
        }
        var consentPolicyHeaderObj = (this.consentPolicyAccess &&
            this.consentPolicyAccess._getConsentPolicyHeader()) || {
            'consent-policy': '',
        };
        this.clearReference();
        return valueOnly
            ? consentPolicyHeaderObj['consent-policy']
            : consentPolicyHeaderObj;
    };
    return ConsentPolicyAccessor;
}());

//# sourceMappingURL=index.js.map

/***/ }),
/* 12 */
/*!************************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/default.json ***!
  \************************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, appLoadFinish, loadPhaseStart, loadPhaseFinish, interactionStart, interactionEnd, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"performance\",\"nonPersistentEndpoint\":\"fed\",\"successRateRoot\":\"fedops_events\",\"performanceRoot\":\"fedops_performance\",\"appLoadStart\":{\"eventId\":14},\"appLoadFinish\":{\"eventId\":11},\"loadPhaseStart\":{\"eventId\":12},\"loadPhaseFinish\":{\"eventId\":13},\"interactionStart\":{\"eventId\":15},\"interactionEnd\":{\"eventId\":16},\"error\":{\"eventId\":17},\"resource\":{\"eventId\":18}}");

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/bi-logger.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(/*! ./assert */ 5);

var _require = __webpack_require__(/*! ./utils/collections */ 30),
    mapValues = _require.mapValues,
    filterValues = _require.filterValues;

var promise = __webpack_require__(/*! ./utils/promise */ 31);
var log = __webpack_require__(/*! ./utils/log */ 32);
var BatchQueue = __webpack_require__(/*! ./utils/batch-queue */ 6);

var _require2 = __webpack_require__(/*! ./consent-policy */ 35),
    shouldMuteByCategory = _require2.shouldMuteByCategory,
    shouldMuteNonEssentials = _require2.shouldMuteNonEssentials,
    getPolicy = _require2.getPolicy;

var BiLogger = function () {
  //TODO: validate args
  function BiLogger(options, context) {
    _classCallCheck(this, BiLogger);

    this._publishers = options.publishers;
    this._validators = options.validators || [];
    this._defaults = options.defaults;
    this._ownDefaults = {};
    this._events = options.events || {};
    this._context = context || {};
    this._defaultValueTimeout = options.defaultValueTimeout || 5000;
    this._defaultContinueOnFail = options.defaultContinueOnFail || false;
    this._onPublisherFailHandler = options.onPublisherFailHandler || BiLogger._defaultPublisherFailHandler;
    this._isMuted = options.isMuted || function () {
      return false;
    };
    this._eventTransformer = options.eventTransformer || function (event) {
      return event;
    };
    this._payloadTransformer = options.payloadTransformer || function (payload) {
      return payload;
    };
    this._consentPolicyGetter = options.consentPolicyGetter || function () {
      return null;
    };
    this._nonEssentialDefaults = options.nonEssentialDefaults || {};
    this._maxBatchSize = options.maxBatchSize || 100;
    this._globalBatchQueue = options.globalBatchQueue;
  }

  _createClass(BiLogger, [{
    key: 'report',
    value: function report(data) {
      assert.defined(data, 'Data must be provided');
      assert.object(data, 'Data must be an object');

      var src = data.src,
          evid = data.evid,
          params = data.params,
          context = _objectWithoutProperties(data, ['src', 'evid', 'params']);

      return this.log(_extends({ src: src, evid: evid }, params), context);
    }
  }, {
    key: 'log',
    value: function log(eventOrKey, eventOrContextOrUndefined, contextOrUndefined) {
      var _this = this;

      assert.defined(eventOrKey, 'Event object or event key must be provided.');

      var _extractEventAndConte = this._extractEventAndContext(eventOrKey, eventOrContextOrUndefined, contextOrUndefined),
          event = _extractEventAndConte.event,
          context = _extractEventAndConte.context;

      var policy = getPolicy(this._consentPolicyGetter);
      var fullContext = _extends({}, this._context, context);

      if (this._isMuted() || shouldMuteByCategory(policy, fullContext.category)) {
        return Promise.resolve();
      }

      if (fullContext.useBatch) {
        var queue = this._initQueue(fullContext, policy);

        var transformAndQueue = function transformAndQueue(_event) {
          var transformedEvent = _this._eventTransformer(_event, fullContext);

          return queue.feed(transformedEvent, fullContext);
        };

        if (this._globalBatchQueue) {
          return this._getDefaults(this._defaults).then(function (defaults) {
            var fullEvent = _extends({}, defaults, _this._getDynamicNonEssentialDefaults(policy), _this._getStaticNonEssentialDefaults(policy), event, _this._getPolicyFields(policy, fullContext.category));

            return transformAndQueue(fullEvent);
          });
        } else {
          var fullEvent = _extends({}, this._getDynamicDefaults(this._defaults), this._getDynamicNonEssentialDefaults(policy), event, this._getPolicyFields(policy, fullContext.category));

          return transformAndQueue(fullEvent);
        }
      }

      return this._getDefaults(this._defaults).then(function (defaults) {
        var fullEvent = Object.assign(defaults, _this._getDynamicNonEssentialDefaults(policy), _this._getStaticNonEssentialDefaults(policy), event, _this._getPolicyFields(policy, fullContext.category));

        var validatorsResult = _this._validators.length === 0 ? true : _this._validators.some(function (validator) {
          return validator.match(fullEvent) && (validator.execute(fullEvent) || true);
        });

        if (!validatorsResult) {
          throw new Error('No validator accepted the event. Source: ' + fullEvent.src + ' Evid: ' + (fullEvent.evid || fullEvent.evtId));
        }

        var transformedEvent = _this._eventTransformer(fullEvent, fullContext);
        transformedEvent = _this._payloadTransformer(transformedEvent, fullContext);

        return _this._send(transformedEvent, fullContext);
      });
    }
  }, {
    key: 'flush',
    value: function flush() {
      if (!this._queue) {
        return Promise.resolve();
      }
      return this._queue.flush();
    }
  }, {
    key: 'updateDefaults',
    value: function updateDefaults(defaults) {
      assert.defined(defaults, 'Defaults must be provided');
      assert.object(defaults, 'Defaults must be an object');
      Object.assign(this._ownDefaults, defaults);
      return this;
    }
  }, {
    key: '_send',
    value: function _send(payload) {
      var _this2 = this;

      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return Promise.all(this._publishers.map(function (publisher) {
        var cloned = _extends({}, payload);

        return Promise.resolve().then(function () {
          return publisher(cloned, context);
        }).catch(function (error) {
          return _this2._onPublisherFailHandler(error, { publisherName: publisher.name, payload: payload });
        });
      })).then(function () {
        return undefined;
      });
    }
  }, {
    key: '_extractEventAndContext',
    value: function _extractEventAndContext(eventOrKey, eventOrContextOrUndefined, contextOrUndefined) {
      var event = void 0;
      var context = {};

      if (typeof eventOrKey !== 'string') {
        event = eventOrKey;
        context = eventOrContextOrUndefined || context;
      } else {
        event = this._events[eventOrKey];

        if (!event) {
          throw new assert.AssertionError('Event with key \'' + eventOrKey + '\' not found in event map.');
        }

        if (eventOrContextOrUndefined) {
          event = _extends({}, event, eventOrContextOrUndefined);
          context = contextOrUndefined || context;
        }
      }

      return { event: event, context: context };
    }
  }, {
    key: '_initQueue',
    value: function _initQueue(context, policy) {
      var _this3 = this;

      if (this._queue) {
        return this._queue;
      }

      this._queue = this._globalBatchQueue || new BatchQueue();

      var onFlush = function onFlush(batch) {
        // if queue is global don't define global properties
        if (!_this3._globalBatchQueue) {
          batch.g = Object.assign(_this3._getStaticDefaults(_this3._defaults), _this3._getStaticNonEssentialDefaults(policy));
        }

        var transformedPayload = _this3._payloadTransformer(batch, context);

        return _this3._send(transformedPayload, context);
      };

      this._queue.init({
        delayMs: context.useBatch === true ? 300 : context.useBatch,
        maxBatchSize: this._maxBatchSize,
        useThrottle: !!this._globalBatchQueue,
        optimizeBatch: !!this._globalBatchQueue
      }, onFlush);

      return this._queue;
    }
  }, {
    key: '_handleDefaultsError',
    value: function _handleDefaultsError(err) {
      if (this._defaultContinueOnFail) {
        log.error(err);
        return null;
      }
      return Promise.reject(err);
    }
  }, {
    key: '_getDynamicNonEssentialDefaults',
    value: function _getDynamicNonEssentialDefaults(policy) {
      if (!shouldMuteNonEssentials(policy)) {
        return this._getDynamicDefaults(this._nonEssentialDefaults);
      }
    }
  }, {
    key: '_getStaticNonEssentialDefaults',
    value: function _getStaticNonEssentialDefaults(policy) {
      if (!shouldMuteNonEssentials(policy)) {
        return this._getStaticDefaults(this._nonEssentialDefaults);
      }
    }
  }, {
    key: '_withOwnDefaults',
    value: function _withOwnDefaults(defaults) {
      return Object.assign({}, defaults, this._ownDefaults);
    }
  }, {
    key: '_getDynamicDefaults',
    value: function _getDynamicDefaults(defaults) {
      defaults = this._withOwnDefaults(defaults);
      var dynamicDefaults = filterValues(defaults, function (v) {
        return typeof v === 'function';
      });
      return mapValues(dynamicDefaults, function (v) {
        return v();
      });
    }
  }, {
    key: '_getStaticDefaults',
    value: function _getStaticDefaults(defaults) {
      defaults = this._withOwnDefaults(defaults);
      var staticDefaults = filterValues(defaults, function (v) {
        return typeof v !== 'function';
      });
      return staticDefaults;
    }
  }, {
    key: '_getDefaults',
    value: function _getDefaults(defaults) {
      var _this4 = this;

      defaults = this._withOwnDefaults(defaults);
      if (!defaults) {
        return Promise.resolve({});
      }

      var promises = mapValues(defaults, function (value, key) {
        if (typeof value === 'function') {
          try {
            value = value();
          } catch (err) {
            return _this4._handleDefaultsError(err);
          }
        }

        if (value && typeof value.then === 'function') {
          return promise.timedPromise(value, {
            message: 'Cannot get default value \'' + key + ' for BI Event\'',
            timeout: _this4._defaultValueTimeout
          }).catch(function (err) {
            return _this4._handleDefaultsError(err);
          });
        }

        return value;
      });

      return promise.allAsObject(promises);
    }
  }, {
    key: '_encodePolicyValue',
    value: function _encodePolicyValue(policy, key) {
      if (!policy) {
        return 1;
      }

      if (typeof policy[key] === 'boolean') {
        return policy[key] ? 1 : 0;
      }

      return policy[key];
    }
  }, {
    key: '_getPolicyFields',
    value: function _getPolicyFields(policy, category) {
      return {
        _isca: this._encodePolicyValue(policy, 'analytics'),
        _iscf: this._encodePolicyValue(policy, 'functional'),
        _ispd: policy.__default ? 1 : 0,
        _ise: category === 'essential' ? 1 : 0
      };
    }
  }], [{
    key: '_defaultPublisherFailHandler',
    value: function _defaultPublisherFailHandler(error, _ref) {
      var publisherName = _ref.publisherName;

      return publisherName; // do nothing
    }
  }]);

  return BiLogger;
}();

module.exports = BiLogger;
//# sourceMappingURL=bi-logger.js.map

/***/ }),
/* 15 */
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-manager.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(/*! ./assert */ 5);

var BiLoggerManager = function () {
  function BiLoggerManager() {
    _classCallCheck(this, BiLoggerManager);

    this.reset();
  }

  _createClass(BiLoggerManager, [{
    key: 'reset',
    value: function reset() {
      this._handlers = [];
    }
  }, {
    key: 'onLoggerCreated',
    value: function onLoggerCreated(handler) {
      var _this = this;

      assert.defined(handler, 'Handler must be provided.');
      assert.func(handler, 'Handler must be a function.');

      this._handlers.push(handler);

      return function () {
        var index = _this._handlers.indexOf(handler);

        if (index !== -1) {
          _this._handlers.splice(index, 1);
        }
      };
    }
  }, {
    key: 'notifyLoggerCreated',
    value: function notifyLoggerCreated(logger) {
      this._handlers.forEach(function (handler) {
        return handler(logger);
      });
    }
  }]);

  return BiLoggerManager;
}();

module.exports = {
  manager: new BiLoggerManager(),
  BiLoggerManager: BiLoggerManager
};
//# sourceMappingURL=bi-logger-manager.js.map

/***/ }),
/* 16 */
/*!****************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/utils.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.guid = exports.buildBiUrl = exports.getCookies = void 0;
var browser_1 = __webpack_require__(/*! ./browser */ 8);
var env_1 = __webpack_require__(/*! ./env */ 3);
var cacheKillerCounter = 0;
function getCookies(params) {
    return Object.keys(params).reduce(function (res, param) {
        var _a = typeof params[param] === 'string'
            ? { name: params[param] }
            : params[param], name = _a.name, _b = _a.transform, transform = _b === void 0 ? function (x) { return x; } : _b;
        var value = transform((0, browser_1.readCookie)(name));
        if (value) {
            res[param] = value;
        }
        return res;
    }, {});
}
exports.getCookies = getCookies;
function buildBiUrl(_a, params, context) {
    var _b = _a.host, host = _b === void 0 ? '' : _b, _c = _a.endpoint, endpoint = _c === void 0 ? '' : _c;
    if (context === void 0) { context = {}; }
    host = typeof host === 'function' ? host() : host;
    host = host || (0, env_1.getHost)();
    endpoint = context.endpoint || endpoint;
    if (!context.useBatch) {
        params._ = '' + new Date().getTime() + cacheKillerCounter++;
    }
    var pairs = context.useBatch
        ? []
        : Object.keys(params).map(function (key) {
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
        }, []);
    return ["//".concat(host, "/").concat(endpoint)]
        .concat(pairs.length ? pairs.join('&') : [])
        .join('?');
}
exports.buildBiUrl = buildBiUrl;
function guid() {
    /*eslint-disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
    /*eslint-enable */
}
exports.guid = guid;
//# sourceMappingURL=utils.js.map

/***/ }),
/* 17 */
/*!************************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/common-config.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getBranchId = exports.getBrand = exports.getCommonConfigValue = void 0;
var env_1 = __webpack_require__(/*! ./env */ 3);
var constants_1 = __webpack_require__(/*! ../constants */ 9);
var resolveCommonConfig = function () {
    return (0, env_1.getGlobal)(function (g) { return (g.Wix && g.Wix.Utils && g.Wix.Utils.commonConfig) || g.commonConfig; });
};
var getCommonConfigValue = function (key, commonConfig) {
    if (commonConfig === void 0) { commonConfig = resolveCommonConfig(); }
    commonConfig =
        commonConfig && typeof commonConfig.getAll === 'function'
            ? commonConfig.getAll()
            : commonConfig;
    if (!commonConfig || typeof commonConfig[key] === 'undefined') {
        return constants_1.DefaultCommonConfig[key];
    }
    return commonConfig[key];
};
exports.getCommonConfigValue = getCommonConfigValue;
var getBrand = function (commonConfigGetter) {
    return (0, exports.getCommonConfigValue)('brand', commonConfigGetter());
};
exports.getBrand = getBrand;
var getBranchId = function (commonConfigGetter) {
    return (0, exports.getCommonConfigValue)('branchId', commonConfigGetter());
};
exports.getBranchId = getBranchId;
//# sourceMappingURL=common-config.js.map

/***/ }),
/* 18 */
/*!***************************************************************!*\
  !*** ../node_modules/@wix/fedops-overrides/dist/esm/types.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: FEDOPS_OVERRIDES_COOKIE */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

//# sourceMappingURL=types.js.map

/***/ }),
/* 19 */
/*!***************************************************************!*\
  !*** ../node_modules/@wix/fedops-overrides/dist/esm/const.js ***!
  \***************************************************************/
/*! exports provided: FEDOPS_OVERRIDES_COOKIE */
/*! exports used: FEDOPS_OVERRIDES_COOKIE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FEDOPS_OVERRIDES_COOKIE; });
var FEDOPS_OVERRIDES_COOKIE = 'fedops.logger.defaultOverrides';
//# sourceMappingURL=const.js.map

/***/ }),
/* 20 */
/*!*******************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/ds.json ***!
  \*******************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, appLoadFinish, interactionStart, interactionEnd, loadPhaseStart, loadPhaseFinish, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"ds-performance\",\"nonPersistentEndpoint\":\"ds-performance\",\"successRateRoot\":\"ds_events\",\"performanceRoot\":\"ds_performance\",\"appLoadStart\":{\"eventId\":31},\"appLoadFinish\":{\"eventId\":33},\"interactionStart\":{\"eventId\":34},\"interactionEnd\":{\"eventId\":35},\"loadPhaseStart\":{\"eventId\":38},\"loadPhaseFinish\":{\"eventId\":32},\"error\":{\"eventId\":36},\"resource\":{\"eventId\":37}}");

/***/ }),
/* 21 */
/*!***********************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/editor.json ***!
  \***********************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, appLoadFinish, interactionStart, interactionEnd, loadPhaseStart, loadPhaseFinish, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"editor-performance\",\"nonPersistentEndpoint\":\"editor-performance\",\"successRateRoot\":\"editor_events\",\"performanceRoot\":\"editor_performance\",\"appLoadStart\":{\"eventId\":41},\"appLoadFinish\":{\"eventId\":43},\"interactionStart\":{\"eventId\":44},\"interactionEnd\":{\"eventId\":45},\"loadPhaseStart\":{\"eventId\":48},\"loadPhaseFinish\":{\"eventId\":42},\"error\":{\"eventId\":46},\"resource\":{\"eventId\":47}}");

/***/ }),
/* 22 */
/*!*********************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/bolt.json ***!
  \*********************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, loadPhaseStart, loadPhaseFinish, appLoadFinish, interactionStart, interactionEnd, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"bolt-performance\",\"nonPersistentEndpoint\":\"bolt-performance\",\"successRateRoot\":\"bolt_events\",\"performanceRoot\":\"bolt_performance\",\"appLoadStart\":{\"eventId\":21},\"loadPhaseStart\":{\"eventId\":28},\"loadPhaseFinish\":{\"eventId\":22},\"appLoadFinish\":{\"eventId\":23},\"interactionStart\":{\"eventId\":24},\"interactionEnd\":{\"eventId\":25},\"error\":{\"eventId\":26},\"resource\":{\"eventId\":27}}");

/***/ }),
/* 23 */
/*!********************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/ooi.json ***!
  \********************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, appLoadFinish, interactionStart, interactionEnd, loadPhaseStart, loadPhaseFinish, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"ooi-performance\",\"nonPersistentEndpoint\":\"ooi-performance\",\"successRateRoot\":\"fedops_events\",\"performanceRoot\":\"fedops_performance\",\"appLoadStart\":{\"eventId\":61},\"appLoadFinish\":{\"eventId\":63},\"interactionStart\":{\"eventId\":64},\"interactionEnd\":{\"eventId\":65},\"loadPhaseStart\":{\"eventId\":68},\"loadPhaseFinish\":{\"eventId\":62},\"error\":{\"eventId\":66},\"resource\":{\"eventId\":67}}");

/***/ }),
/* 24 */
/*!***********************************************************************!*\
  !*** ../node_modules/@wix/fedops-presets/dist/es/presets/mobile.json ***!
  \***********************************************************************/
/*! exports provided: src, persistentEndpoint, nonPersistentEndpoint, successRateRoot, performanceRoot, appLoadStart, appLoadFinish, interactionStart, interactionEnd, loadPhaseStart, loadPhaseFinish, error, resource, default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

module.exports = JSON.parse("{\"src\":72,\"persistentEndpoint\":\"mobile-performance\",\"nonPersistentEndpoint\":\"mobile-performance\",\"successRateRoot\":\"fedops_events\",\"performanceRoot\":\"fedops_performance\",\"appLoadStart\":{\"eventId\":51},\"appLoadFinish\":{\"eventId\":53},\"interactionStart\":{\"eventId\":54},\"interactionEnd\":{\"eventId\":55},\"loadPhaseStart\":{\"eventId\":58},\"loadPhaseFinish\":{\"eventId\":52},\"error\":{\"eventId\":56},\"resource\":{\"eventId\":57}}");

/***/ }),
/* 25 */
/*!*************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/logger.js ***!
  \*************************************************************/
/*! no static exports found */
/*! exports used: factory */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BiLoggerClientFactory = exports.createBatchQueue = exports.manager = exports.factory = exports.Factory = exports.setHost = exports.EventCategories = exports.PublishMethods = void 0;
var wix_bi_logger_client_1 = __webpack_require__(/*! @wix/wix-bi-logger-client */ 28);
var consent_policy_client_accessor_1 = __webpack_require__(/*! @wix/consent-policy-client-accessor */ 11);
var assert = __importStar(__webpack_require__(/*! ./lib/assert */ 36));
var publishers_1 = __webpack_require__(/*! ./lib/publishers */ 37);
var common_config_1 = __webpack_require__(/*! ./lib/common-config */ 17);
var env_1 = __webpack_require__(/*! ./lib/env */ 3);
var types_1 = __webpack_require__(/*! ./types */ 10);
var event_defaults_1 = __webpack_require__(/*! ./lib/event-defaults */ 39);
var types_2 = __webpack_require__(/*! ./types */ 10);
Object.defineProperty(exports, "PublishMethods", { enumerable: true, get: function () { return types_2.PublishMethods; } });
Object.defineProperty(exports, "EventCategories", { enumerable: true, get: function () { return types_2.EventCategories; } });
var env_2 = __webpack_require__(/*! ./lib/env */ 3);
Object.defineProperty(exports, "setHost", { enumerable: true, get: function () { return env_2.setHost; } });
var Factory = /** @class */ (function () {
    function Factory(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.commonConfigGetter = function () { return undefined; };
        this.initialized = false;
        assert.ok(!options.publishMethod ||
            Object.keys(types_1.PublishMethods)
                .map(function (key) { return types_1.PublishMethods[key]; })
                .indexOf(options.publishMethod) !== -1, "Unsupported publish method \"".concat(options.publishMethod, "\""));
        Factory.consentPolicyAccessor =
            Factory.consentPolicyAccessor || new consent_policy_client_accessor_1.ConsentPolicyAccessor();
        this.loggerClientFactory = (0, wix_bi_logger_client_1.factory)();
    }
    Factory.prototype.initFactory = function () {
        var _this = this;
        if (this.initialized) {
            return this.loggerClientFactory;
        }
        this.initialized = true;
        this.updateDefaults((0, event_defaults_1.getCommonDefaults)(this.commonConfigGetter, Factory.consentPolicyAccessor));
        this.withUserContext((0, event_defaults_1.getUserDefaults)());
        var options = __assign(__assign({}, this.options), { host: this.options.host || (function () { return (0, env_1.getHost)((0, common_config_1.getBrand)(_this.commonConfigGetter)); }) });
        var publisher = (0, publishers_1.getPublisher)(options, this.publishFunctions);
        var _a = (0, publishers_1.getTransformers)(options, this.transformer), eventTransformer = _a.eventTransformer, payloadTransformer = _a.payloadTransformer;
        var baseFactory = this.loggerClientFactory
            .addPublisher(publisher)
            .withConsentPolicyGetter(function () {
            return Factory.consentPolicyAccessor.getCurrentConsentPolicy();
        });
        if (eventTransformer) {
            baseFactory.withEventTransformer(eventTransformer);
        }
        if (payloadTransformer) {
            baseFactory.withPayloadTransformer(payloadTransformer);
        }
        return baseFactory;
    };
    Factory.prototype.withTransformer = function (transformer) {
        assert.defined(transformer, 'Transformer must be provided');
        assert.ok(typeof transformer === 'function' ||
            (transformer &&
                typeof transformer[types_1.PublishMethods.PostMessage] === 'function'), 'Valid transformer must be provided');
        this.transformer = transformer;
        return this;
    };
    Factory.prototype.withPublishFunction = function (publishFunctions) {
        assert.defined(publishFunctions, 'Publish functions object must be provided');
        assert.ok(this.options.publishMethod &&
            this.options.publishMethod !== types_1.PublishMethods.Auto, 'Publish function can be used only when using a custom publish method');
        assert.ok(publishFunctions &&
            typeof publishFunctions[this.options.publishMethod] === 'function', 'Valid publish function must be provided');
        this.publishFunctions = publishFunctions;
        return this;
    };
    Factory.prototype.withUserContext = function (context) {
        assert.defined(context, 'User context object must be provided');
        this.updateDefaults((0, event_defaults_1.transformDefaults)(context));
        return this;
    };
    Factory.prototype.withUoUContext = function (context) {
        assert.defined(context, 'UoU context object must be provided');
        this.updateDefaults((0, event_defaults_1.transformDefaults)(context));
        return this;
    };
    Factory.prototype.withNonEssentialContext = function (context) {
        assert.defined(context, 'Non-essential context object must be provided');
        this.loggerClientFactory.updateNonEssentialDefaults((0, event_defaults_1.transformDefaults)(context));
        return this;
    };
    Factory.prototype.withCommonConfigGetter = function (commonConfigGetter) {
        assert.defined(commonConfigGetter, 'Common config getter must be provided');
        assert.ok(typeof commonConfigGetter === 'function', 'Common config getter must be a function');
        this.commonConfigGetter = commonConfigGetter;
        return this;
    };
    Factory.prototype.updateDefaults = function (params) {
        this.loggerClientFactory.updateDefaults(params);
        return this;
    };
    Factory.prototype.setMuted = function (isMuted) {
        this.loggerClientFactory.setMuted(isMuted);
        return this;
    };
    Factory.prototype.setEvents = function (events) {
        this.loggerClientFactory.setEvents(events);
        return this;
    };
    Factory.prototype.setGlobalBatchQueue = function (batchQueue) {
        this.loggerClientFactory.setGlobalBatchQueue(batchQueue);
        return this;
    };
    Factory.prototype.onError = function (handler) {
        this.loggerClientFactory.setPublisherFailHandler(handler);
        return this;
    };
    Factory.prototype.logger = function (options) {
        if (options === void 0) { options = {}; }
        var _a = this.options, endpoint = _a.endpoint, useBatch = _a.useBatch;
        var logger = this.initFactory().logger(__assign({ endpoint: endpoint, useBatch: useBatch }, options));
        return logger;
    };
    return Factory;
}());
exports.Factory = Factory;
var factory = function (options) {
    if (options === void 0) { options = {}; }
    return new Factory(options);
};
exports.factory = factory;
exports.manager = wix_bi_logger_client_1.manager;
exports.createBatchQueue = wix_bi_logger_client_1.createBatchQueue;
exports.BiLoggerClientFactory = wix_bi_logger_client_1.BiLoggerFactory;
//# sourceMappingURL=logger.js.map

/***/ }),
/* 26 */
/*!***************************************************************!*\
  !*** ../node_modules/@wix/fedops-overrides/dist/esm/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: FEDOPS_OVERRIDES_COOKIE */
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ 18);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_types__WEBPACK_IMPORTED_MODULE_0__, "FEDOPS_OVERRIDES_COOKIE")) __webpack_require__.d(__webpack_exports__, "FEDOPS_OVERRIDES_COOKIE", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FEDOPS_OVERRIDES_COOKIE"]; });

/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FEDOPS_OVERRIDES_COOKIE", function() { return _const__WEBPACK_IMPORTED_MODULE_1__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),
/* 27 */
/*!****************************************!*\
  !*** ./logger-factory.js + 26 modules ***!
  \****************************************/
/*! exports provided: create, reportAppLoadStarted, phasesConfig */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/consent-policy-client-accessor/dist/es/src/index.js (<- Module is referenced from these modules with unsupported syntax: ../node_modules/@wix/web-bi-logger/dist/src/logger.js (referenced with cjs require)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-overrides/dist/esm/index.js (<- Module exports are unknown) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/bolt.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/default.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/ds.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/editor.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/mobile.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/fedops-presets/dist/es/presets/ooi.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/@wix/web-bi-logger/dist/src/logger.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ./env.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./global-app-data/global-app-data.js because of ./app-angular.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "create", function() { return /* binding */ logger_factory_create; });
__webpack_require__.d(__webpack_exports__, "reportAppLoadStarted", function() { return /* binding */ reportAppLoadStarted; });
__webpack_require__.d(__webpack_exports__, "phasesConfig", function() { return /* binding */ logger_factory_phasesConfig; });

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/default.json
var presets_default = __webpack_require__(12);

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/ds.json
var ds = __webpack_require__(20);

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/editor.json
var editor = __webpack_require__(21);

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/bolt.json
var bolt = __webpack_require__(22);

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/ooi.json
var ooi = __webpack_require__(23);

// EXTERNAL MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/mobile.json
var mobile = __webpack_require__(24);

// CONCATENATED MODULE: ../node_modules/@wix/fedops-presets/dist/es/presets/presets-types.js
var presetsTypes = {
    DEFAULT: 'DEFAULT',
    DS: 'DS',
    EDITOR: 'EDITOR',
    OOI: 'OOI',
    BOLT: 'BOLT',
    MOBILE: 'MOBILE',
};
//# sourceMappingURL=presets-types.js.map
// CONCATENATED MODULE: ../node_modules/@wix/fedops-presets/dist/es/src/loader.js







function presetLoader(presetType) {
    switch (presetType) {
        case presetsTypes.DEFAULT:
            return presets_default;
        case presetsTypes.BOLT:
            return bolt;
        case presetsTypes.DS:
            return ds;
        case presetsTypes.EDITOR:
            return editor;
        case presetsTypes.OOI:
            return ooi;
        case presetsTypes.MOBILE:
            return mobile;
        default:
            return presets_default;
    }
}
//# sourceMappingURL=loader.js.map
// CONCATENATED MODULE: ../node_modules/@wix/fedops-presets/dist/es/src/index.js



//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./env.js
var env = __webpack_require__(0);

// CONCATENATED MODULE: ./conf.js
var SESSION_ID_STORAGE_KEY = 'fedops.logger.sessionId';
var DEFAULT_APP_VERSION = '0.0.0';
// EXTERNAL MODULE: ../node_modules/@wix/web-bi-logger/dist/src/logger.js
var logger = __webpack_require__(25);

// CONCATENATED MODULE: ./reporter/reporter.js


var reporter_Reporter = /*#__PURE__*/function () {
  function Reporter(_ref) {
    var biLoggerFactory = _ref.biLoggerFactory,
        baseUrl = _ref.baseUrl,
        preset = _ref.preset,
        useBatch = _ref.useBatch;
    this._preset = preset;
    var shouldBatch = !(useBatch === false);
    this._factory = biLoggerFactory || logger["factory"]({
      host: baseUrl,
      useBatch: shouldBatch
    });
    this._publisher = this._factory.logger();
    this._nonBatchedPublisher = this._factory.logger({
      useBatch: false
    });
  }

  var _proto = Reporter.prototype;

  _proto.flush = function flush() {
    this._publisher.flush();
  };

  _proto.report = function report(data, reporterEndpoint, params) {
    if (!data) {
      return null;
    }

    var endpoint = reporterEndpoint || this._preset.nonPersistentEndpoint;

    if (params && params.useBatch === false) {
      return this._nonBatchedPublisher.log(data, {
        endpoint: endpoint,
        category: 'essential'
      });
    }

    return this._publisher.log(data, {
      endpoint: endpoint,
      category: 'essential'
    });
  };

  return Reporter;
}();


// CONCATENATED MODULE: ./reporter/reporter-factory.js

var ReporterFactory;
function setFactory(factory) {
  ReporterFactory = factory;
}
function create(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      biLoggerFactory = _ref.biLoggerFactory,
      baseUrl = _ref.baseUrl,
      endpoint = _ref.endpoint,
      preset = _ref.preset,
      useBatch = _ref.useBatch;

  if (!ReporterFactory) {
    return new reporter_Reporter({
      biLoggerFactory: biLoggerFactory,
      baseUrl: baseUrl,
      endpoint: endpoint,
      preset: preset,
      useBatch: useBatch
    });
  } else {
    return ReporterFactory({
      preset: preset
    });
  }
}
// EXTERNAL MODULE: ../node_modules/@wix/consent-policy-client-accessor/dist/es/src/index.js
var src = __webpack_require__(11);

// CONCATENATED MODULE: ./performance/performance.js

/* harmony default export */ var performance_performance = ({
  getNavigation: function getNavigation() {
    var _env$performance;

    return ((_env$performance = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance.navigation) || {};
  },

  /**
   * get all loaded resources
   */
  getResources: function getResources() {
    var _env$performance2;

    return ((_env$performance2 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance2.getEntriesByType == null ? void 0 : _env$performance2.getEntriesByType('resource')) || [];
  },

  /**
   * get all loaded resources
   */
  getMarks: function getMarks() {
    var _env$performance3;

    return ((_env$performance3 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance3.getEntriesByType == null ? void 0 : _env$performance3.getEntriesByType('mark')) || [];
  },
  getTiming: function getTiming() {
    var _env$performance4;

    return ((_env$performance4 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance4.timing) || {};
  },
  clearResourceTimings: function clearResourceTimings() {
    var _env$performance5;

    // eslint-disable-next-line no-unused-expressions
    (_env$performance5 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance5.clearResourceTimings == null ? void 0 : _env$performance5.clearResourceTimings();
  },

  /**
   * Duration relative to navigation start (env().performance.timing.navigationStart)
   * fallback to: performance.now -> now (nodejs) -> getTime()
   */
  now: function now() {
    var _env$performance6, _performance;

    return ((_env$performance6 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance6.now == null ? void 0 : _env$performance6.now()) || typeof performance !== 'undefined' && ((_performance = performance) == null ? void 0 : _performance.now == null ? void 0 : _performance.now()) || new Date().getTime();
  },

  /**
   * Duration from fetch start to response end
   */
  responseEndTime: function responseEndTime() {
    var _performance2, _performance2$timing, _performance3, _performance3$timing;

    var fetchStart = (_performance2 = performance) == null ? void 0 : (_performance2$timing = _performance2.timing) == null ? void 0 : _performance2$timing.fetchStart;
    var responseEnd = (_performance3 = performance) == null ? void 0 : (_performance3$timing = _performance3.timing) == null ? void 0 : _performance3$timing.responseEnd;

    if (fetchStart && responseEnd) {
      return responseEnd - fetchStart;
    }
  },

  /**
   * Create a performance timestamp
   */
  mark: function mark(name) {
    var _env$performance7;

    // eslint-disable-next-line no-unused-expressions
    (_env$performance7 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance7.mark == null ? void 0 : _env$performance7.mark(name);
  },

  /**
   * Record a performance measurement
   */
  measure: function measure(name, startMark, endMark) {
    var _env$performance8;

    // eslint-disable-next-line no-unused-expressions
    (_env$performance8 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance8.measure == null ? void 0 : _env$performance8.measure(name, startMark, endMark);
  },

  /**
   * Get performance entries by name
   */
  getEntriesByName: function getEntriesByName(name) {
    var _env$performance9;

    return ((_env$performance9 = Object(env["a" /* env */])().performance) == null ? void 0 : _env$performance9.getEntriesByName == null ? void 0 : _env$performance9.getEntriesByName(name)) || [];
  }
});
// EXTERNAL MODULE: ./global-app-data/global-app-data.js
var global_app_data = __webpack_require__(1);

// CONCATENATED MODULE: ./times/times.js



var times_Times = /*#__PURE__*/function () {
  function Times(appName) {
    this.appName = appName;
    this.apps = {};
    this.apps[appName] = {};
  }

  var _proto = Times.prototype;

  _proto._getKeyForApp = function _getKeyForApp(appId, widgetId) {
    if (appId === void 0) {
      appId = this.appName;
    }

    return widgetId ? appId + "_" + widgetId : appId;
  };

  _proto.setLoadStarted = function setLoadStarted(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        appId = _ref.appId,
        widgetId = _ref.widgetId;

    var key = this._getKeyForApp(appId, widgetId);

    if (!this.apps[key]) {
      this.apps[key] = {};
    }

    var loadStartTime = performance_performance.now();
    this.apps[key].startLoadTime = loadStartTime;

    if (!appId) {
      Object(global_app_data["d" /* setLoadStartTime */])(key, loadStartTime);
    }
  };

  _proto.getLoadStartTime = function getLoadStartTime(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        appId = _ref2.appId,
        widgetId = _ref2.widgetId;

    var key = this._getKeyForApp(appId, widgetId);

    var loadStartTime = this.getLoadStartTimeFromInstance(key) || Object(global_app_data["a" /* getLoadStartTime */])(key) || 0;
    return Math.floor(loadStartTime);
  };

  _proto.getLoadStartTimeFromInstance = function getLoadStartTimeFromInstance(key) {
    return this.apps[key] && this.apps[key].startLoadTime;
  };

  _proto.getAppLoadTime = function getAppLoadTime(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        appId = _ref3.appId,
        widgetId = _ref3.widgetId;

    return Math.floor(performance_performance.now() - this.getLoadStartTime({
      appId: appId,
      widgetId: widgetId
    }));
  };

  _proto.getFirstRequestDuration = function getFirstRequestDuration(_temp4) {
    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        appId = _ref4.appId,
        widgetId = _ref4.widgetId;

    return this.getLoadStartTime({
      appId: appId,
      widgetId: widgetId
    });
  };

  return Times;
}();


// CONCATENATED MODULE: ./data-items/common/data-item.js
var DataItem = /*#__PURE__*/function () {
  function DataItem(data) {
    if (data === void 0) {
      data = undefined;
    }

    this.data = data;
  }

  var _proto = DataItem.prototype;

  _proto.isActive = function isActive() {
    return true;
  };

  _proto["export"] = function _export() {
    return this.data;
  };

  return DataItem;
}();


// CONCATENATED MODULE: ./global-app-data/location.js


var location_location = function location() {
  return typeof Object(env["a" /* env */])() !== 'undefined' && Object(env["a" /* env */])().location;
};

/* harmony default export */ var global_app_data_location = ({
  getHost: function getHost() {
    return location_location() && Object(env["a" /* env */])().location.host;
  },
  isFedopsDev: function isFedopsDev() {
    var q = (location_location() || {}).search || '';
    return q.indexOf("fedops=dev") > -1;
  }
});
// CONCATENATED MODULE: ./data-items/resource/resource-item.js
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RESOURCES_TYPES = {
  xmlhttprequest: {
    count: 'countXhr',
    unsupported: 'unsprtXhr',
    duration: 'timeXhr',
    total: 'sizeXhr',
    longest: 'longXhr',
    http2: 'h2Xhr'
  },
  script: {
    count: 'countJs',
    unsupported: 'unsprtJs',
    duration: 'timeJs',
    total: 'sizeJs',
    cached: 'cachedJs',
    http2: 'h2Js'
  },
  link: {
    // css
    count: 'countCss',
    unsupported: 'unsprtCss',
    duration: 'timeCss',
    total: 'sizeCss',
    cached: 'cachedCss',
    http2: 'h2Css'
  },
  img: {
    count: 'countImg',
    unsupported: 'unsprtImg',
    duration: 'timeImg',
    total: 'sizeImg',
    cached: 'cachedImages',
    http2: 'h2Images'
  },
  fetch: {
    count: 'countFetch',
    unsupported: 'unsprtFetch',
    duration: 'timeFetch',
    total: 'sizeFetch',
    cached: 'cachedFetch',
    http2: 'h2Fetch'
  },
  other: {
    count: 'countOther',
    unsupported: 'unsprtOther',
    duration: 'timeOther',
    total: 'sizeOther',
    cached: 'cachedOther',
    http2: 'h2Other'
  }
};
var CUSTOM_VALIDATORS = {
  link: function link(resource) {
    return /(.\.css$|.\.css?.)/g.test(resource.name);
  }
};

var durationOf = function durationOf(item) {
  return item.responseEnd - item.startTime;
};

function filterResourcesByType(resources, type) {
  var validator = CUSTOM_VALIDATORS[type];
  return resources.filter(function (r) {
    return type === r.initiatorType && (validator ? validator(r) : true);
  });
}

function calculateTotalSizeOfResource(resources) {
  return resources.reduce(function (totalSize, resource) {
    return totalSize + resource.transferSize;
  }, 0);
}

function calculateResourceLoadLongestDuration(resources) {
  if (resources.length === 0) {
    return 0;
  }

  var longest = resources.reduce(function (acc, cur) {
    return durationOf(cur) >= durationOf(acc) ? cur : acc;
  });
  return durationOf(longest);
}

function calculateResourceLoadDuration(resources) {
  if (resources.length === 0) {
    return 0;
  }

  var loadStartStop = {
    startTime: Infinity,
    responseEnd: 0
  };
  resources.forEach(function (r) {
    if (loadStartStop.startTime > r.startTime) {
      loadStartStop.startTime = r.startTime;
    }

    if (loadStartStop.responseEnd < r.responseEnd) {
      loadStartStop.responseEnd = r.responseEnd;
    }
  });
  return loadStartStop.responseEnd - loadStartStop.startTime;
}

function calculatePercentageOfUnsupportedResources(resources) {
  var totalCount = resources.length;

  if (totalCount === 0) {
    return 0;
  }

  var unsupportedCount = resources.filter(isResourceUnsupported).length;
  return Math.round(unsupportedCount / totalCount * 100);
}

function calculateCachedResourcesPercentage(resources) {
  if (resources.length === 0) {
    return 0;
  }

  var cached = resources.filter(function (r) {
    return r.transferSize === 0;
  });
  return Math.round(cached.length / resources.length * 100);
}

function calculatePercentageOfHttp2(resources) {
  if (resources.length === 0) {
    return 0;
  }

  var supported = false;
  var res = Math.round(resources.filter(function (r) {
    supported = supported || 'nextHopProtocol' in r;
    return r.nextHopProtocol === 'h2';
  }).length / resources.length * 100);
  return supported ? res : NaN;
}

function isResourceRelevant(resource) {
  return !resource.name.match(/http(s)?:\/\/frog.wix.com\//);
}

function isResourceUnsupported(resource) {
  return isCORS(resource.name) && resource.transferSize === 0 && resource.requestStart === 0;
}

function isCORS(resourceName) {
  var host = global_app_data_location.getHost();
  return host && resourceName.indexOf(host) === -1;
}

function normalizeValues(analysis) {
  return Object.keys(analysis).reduce(function (result, key) {
    var n = parseInt(analysis[key]);

    if (!isNaN(n) && typeof n === 'number') {
      result[key] = n;
    }

    return result;
  }, {});
}

function countAllResourcesByType(resources) {
  var supportedResources = resources.filter(function (r) {
    return !isResourceUnsupported(r);
  });
  return Object.keys(RESOURCES_TYPES).reduce(function (result, currentType) {
    var allSameTypeResources = filterResourcesByType(resources, currentType);
    var supportedSameTypeResources = filterResourcesByType(supportedResources, currentType);
    var type = RESOURCES_TYPES[currentType];
    result[type.count] = supportedSameTypeResources.length;
    result[type.duration] = calculateResourceLoadDuration(supportedSameTypeResources);
    result[type.total] = calculateTotalSizeOfResource(supportedSameTypeResources);
    result[type.unsupported] = calculatePercentageOfUnsupportedResources(allSameTypeResources);
    result[type.http2] = calculatePercentageOfHttp2(allSameTypeResources);

    if (type.longest) {
      result[type.longest] = calculateResourceLoadLongestDuration(supportedSameTypeResources);
    }

    if (type.cached) {
      result[type.cached] = calculateCachedResourcesPercentage(supportedSameTypeResources);
    }

    return result;
  }, {});
}

function extractResourceMetrics(resource) {
  return {
    url: resource.name,
    downloadDuration: resource.responseEnd - resource.startTime,
    bytesTransferred: resource.transferSize,
    isHTTP2: resource.nextHopProtocol === 'h2'
  };
}

function getResourcesBreakdown(resources) {
  var resourcesPartition = resources.reduce(function (result, r) {
    if (isResourceUnsupported(r)) {
      result.unsupported.push(r);
    } else {
      result.supported.push(r);
    }

    return result;
  }, {
    supported: [],
    unsupported: []
  });
  return Object.keys(RESOURCES_TYPES).reduce(function (result, currentType) {
    result[currentType] = {};
    result[currentType].supported = filterResourcesByType(resourcesPartition.supported, currentType).map(function (r) {
      return extractResourceMetrics(r);
    });
    result[currentType].unsupported = filterResourcesByType(resourcesPartition.unsupported, currentType).map(function (r) {
      return extractResourceMetrics(r);
    });
    return result;
  }, {});
}

var resource_item_ResourceDataItem = /*#__PURE__*/function (_DataItem) {
  _inheritsLoose(ResourceDataItem, _DataItem);

  function ResourceDataItem() {
    return _DataItem.apply(this, arguments) || this;
  }

  var _proto = ResourceDataItem.prototype;

  _proto.performNetworkAnalysis = function performNetworkAnalysis(resources) {
    if (resources.length === 0) {
      return null;
    }

    var t0 = performance_performance.now();
    var resourcesToHandle = resources.filter(isResourceRelevant);
    var analysis = countAllResourcesByType(resourcesToHandle);
    analysis.overhead = performance_performance.now() - t0;
    var result = normalizeValues(analysis);

    if (console.debug && global_app_data_location.isFedopsDev()) {
      var resourcesBreakdown = getResourcesBreakdown(resourcesToHandle);
      console.debug("[fedops network analysis] [bytes analysis]\n" + JSON.stringify(result, null, 4));
      console.debug("[fedops network analysis] [resources breakdown]\n", resourcesBreakdown);
    }

    return result;
  };

  return ResourceDataItem;
}(DataItem);


var RESOURCES_TYPES_PROPS = Object.keys(RESOURCES_TYPES).reduce(function (acc, type) {
  return acc.concat(Object.values(RESOURCES_TYPES[type]));
}, []);
// CONCATENATED MODULE: ./data-source/data-source.js


/**
 * Data accumulator
 */

var data_source_DataSource = /*#__PURE__*/function () {
  function DataSource(item) {
    var _this = this;

    if (item === void 0) {
      item = null;
    }

    this.items = [];

    if (item) {
      (typeof item.length === 'undefined' ? [item] : item).forEach(function (item) {
        return _this.addItem(item);
      });
    }
  }
  /**
   * Creates a new DataSource instance and clones internal state.
   *
   * @returns {DataSource}
   */


  var _proto = DataSource.prototype;

  _proto.clone = function clone() {
    return new DataSource(this.items.slice());
  }
  /**
   * Adds a new item.
   *
   * @param {Object | DataItem} item
   *
   * @return {DataSource} self
   */
  ;

  _proto.addItem = function addItem(item) {
    this.items.push(item instanceof DataItem ? item : new DataItem(item));
    return this;
  }
  /**
   * Merges all added items into one plain object.
   *
   * @returns {Object}
   */
  ;

  _proto.mergeItems = function mergeItems() {
    var res = {};

    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];

      if (!item.isActive()) {
        res = null;
        break;
      }

      var data = item["export"]();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          res[key] = data[key];
        }
      }
    }

    return res;
  }
  /**
   * Merges all added items into one plain object and sum up resource types props.
   *
   * @returns {Object}
   */
  ;

  _proto.mergePhasesItems = function mergePhasesItems() {
    var res = {};

    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i];

      if (!item.isActive()) {
        res = null;
        break;
      }

      var data = item["export"]();

      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          // eslint-disable-line
          if (RESOURCES_TYPES_PROPS.includes(key) && typeof res[key] === 'number') {
            res[key] += data[key];
          } else {
            res[key] = data[key];
          }
        }
      }
    }

    return res;
  };

  return DataSource;
}();


// CONCATENATED MODULE: ./storage/storage.js

/**
 * Local storage wrapper (for tests mainly)
 */

/* harmony default export */ var storage = ({
  getItem: function getItem(key) {
    try {
      return Object(env["a" /* env */])().localStorage && Object(env["a" /* env */])().localStorage.getItem(key);
    } catch (e) {}
  },
  setItem: function setItem(key, value) {
    try {
      return Object(env["a" /* env */])().localStorage && Object(env["a" /* env */])().localStorage.setItem(key, value);
    } catch (e) {}
  }
});
// CONCATENATED MODULE: ./utils.js

var generateGuid = function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8; // eslint-disable-line

    return v.toString(16);
  });
};
var phaseNameExtractor = /\[fedops] phase:([^ ]+) ([^ ]+) ?(.*) (started|finished)/;
var getPhaseMark = function getPhaseMark(markName) {
  var matches = phaseNameExtractor.exec(markName);

  if (matches) {
    return {
      phaseName: matches[1],
      appId: matches[2],
      widgetId: matches[3]
    };
  }
};
var interactionNameExtractor = /\[fedops] ([^ ]+) interaction ([^ ]+) (started|ended)/;
var getInteractionMark = function getInteractionMark(markName) {
  var matches = interactionNameExtractor.exec(markName);

  if (matches) {
    return {
      appName: matches[1],
      interactionName: matches[2]
    };
  }
};
var getPathnameTemplate = function getPathnameTemplate(pathname) {
  if (isNumber(pathname)) {
    return ':param';
  }

  return pathname;
};

var isNumber = function isNumber(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
};

var utils_extractUrl = function extractUrl(url) {
  var parsedUrl;

  try {
    parsedUrl = new URL(url);
    return parsedUrl;
  } catch (e) {
    var _env$location$origin, _env, _env$location;

    return {
      pathname: url,
      origin: (_env$location$origin = (_env = Object(env["a" /* env */])()) == null ? void 0 : (_env$location = _env.location) == null ? void 0 : _env$location.origin) != null ? _env$location$origin : ''
    };
  }
};
// CONCATENATED MODULE: ./session-manager/session-manager.js





var sessionManager = {
  getSessionId: function getSessionId() {
    var res = typeof Object(env["a" /* env */])() !== 'undefined' && Object(env["a" /* env */])().fedops && Object(env["a" /* env */])().fedops.sessionId;
    res = res || storage.getItem(SESSION_ID_STORAGE_KEY);
    res = res || generateGuid();
    Object(global_app_data["e" /* setSessionId */])(res);
    storage.setItem(SESSION_ID_STORAGE_KEY, res);
    return res;
  }
};
/* harmony default export */ var session_manager = (sessionManager);
// CONCATENATED MODULE: ./loading-phases/loading-phases.js


var CODE_PARSING_PHASE_NAME = 'code-parsing-phase';

var loading_phases_LoadingPhases = /*#__PURE__*/function () {
  function LoadingPhases(appName, times) {
    this.appName = appName;
    this.phases = new Map();
    this.indexToKey = new Map();
    this.times = times || new times_Times(appName);
  }

  LoadingPhases._getIndexForPhase = function _getIndexForPhase(_ref) {
    var name = _ref.name,
        _ref$appId = _ref.appId,
        appId = _ref$appId === void 0 ? '' : _ref$appId,
        _ref$widgetId = _ref.widgetId,
        widgetId = _ref$widgetId === void 0 ? '' : _ref$widgetId;
    return name + "_" + appId + "_" + widgetId;
  };

  var _proto = LoadingPhases.prototype;

  _proto.getAppLoadingPhaseData = function getAppLoadingPhaseData(_ref2) {
    var name = _ref2.name,
        appId = _ref2.appId,
        widgetId = _ref2.widgetId;
    return this.phases.get(LoadingPhases._getIndexForPhase({
      name: name,
      appId: appId,
      widgetId: widgetId
    }));
  };

  _proto.saveLoadingPhase = function saveLoadingPhase(_ref3) {
    var name = _ref3.name,
        appId = _ref3.appId,
        widgetId = _ref3.widgetId;

    var phaseKey = LoadingPhases._getIndexForPhase({
      name: name,
      appId: appId,
      widgetId: widgetId
    });

    if (!this.phases.has(phaseKey)) {
      var index = this.phases.size;
      this.phases.set(phaseKey, {
        name: name,
        phaseStartTime: performance_performance.now(),
        index: index
      });
      this.indexToKey.set(index, phaseKey);
    }
  };

  _proto.endLoadingPhase = function endLoadingPhase(_ref4) {
    var name = _ref4.name,
        appId = _ref4.appId,
        widgetId = _ref4.widgetId,
        widgetArray = _ref4.widgetArray;

    var phaseKey = LoadingPhases._getIndexForPhase({
      name: name,
      appId: appId,
      widgetId: widgetId
    });

    if (!this.phases.has(phaseKey) || this.phases.get(phaseKey).duration) {
      return;
    }

    var phase = this.phases.get(phaseKey);
    phase.duration = performance_performance.now() - phase.phaseStartTime;

    if (widgetArray) {
      phase.widgetArray = widgetArray;
    }

    if (widgetId) {
      phase.widgetId = widgetId;
    }

    this.phases.set(phaseKey, phase);
  };

  _proto.getNextPhaseToReport = function getNextPhaseToReport() {
    var latestStepIndex = this.phases.size - 1;
    var lastPhaseKey = this.indexToKey.get(latestStepIndex);
    return this.phases.get(lastPhaseKey);
  };

  _proto.getPhasePreviousTo = function getPhasePreviousTo(_ref5) {
    var name = _ref5.name,
        appId = _ref5.appId,
        widgetId = _ref5.widgetId;
    var currentPhase = this.phases.get(LoadingPhases._getIndexForPhase({
      name: name,
      appId: appId,
      widgetId: widgetId
    }));
    var previousPhaseIndex = this.indexToKey.get(currentPhase.index - 1);
    return this.phases.get(previousPhaseIndex);
  };

  _proto.getPhases = function getPhases(_temp) {
    var _ref6 = _temp === void 0 ? {} : _temp,
        appId = _ref6.appId;

    var phaseToNamedPhaseObject = function phaseToNamedPhaseObject(phase) {
      var _ref7;

      return _ref7 = {}, _ref7[phase.name] = phase, _ref7;
    };

    return Array.from(this.phases).filter(function (_ref8) {
      var phaseKey = _ref8[0];

      var _phaseKey$split = phaseKey.split('_'),
          appIdOfPhase = _phaseKey$split[1];

      return appId && appIdOfPhase === appId || !appId;
    }).map(function (_ref9) {
      var phase = _ref9[1];
      return phaseToNamedPhaseObject(phase);
    });
  };

  _proto.createCodeParsingPhaseIfNotExist = function createCodeParsingPhaseIfNotExist(_temp2) {
    var _ref10 = _temp2 === void 0 ? {} : _temp2,
        appId = _ref10.appId,
        widgetId = _ref10.widgetId;

    var phaseKey = LoadingPhases._getIndexForPhase({
      name: CODE_PARSING_PHASE_NAME,
      appId: appId,
      widgetId: widgetId
    });

    if (!this.phases.has(phaseKey)) {
      var appLoadStartTime = this.times.getLoadStartTime({
        appId: appId,
        widgetId: widgetId
      });
      this.phases.set(phaseKey, {
        phaseStartTime: appLoadStartTime,
        index: 0,
        name: CODE_PARSING_PHASE_NAME
      });
      this.indexToKey.set(0, phaseKey);
    }
  };

  return LoadingPhases;
}();


// CONCATENATED MODULE: ./data-items/common/bi-app-context-item.js
function bi_app_context_item_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; bi_app_context_item_setPrototypeOf(subClass, superClass); }

function bi_app_context_item_setPrototypeOf(o, p) { bi_app_context_item_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return bi_app_context_item_setPrototypeOf(o, p); }



var BiAppContextDataItem = /*#__PURE__*/function (_DataItem) {
  bi_app_context_item_inheritsLoose(BiAppContextDataItem, _DataItem);

  function BiAppContextDataItem(_ref) {
    var _this;

    var appId = _ref.appId,
        widgetId = _ref.widgetId,
        isServerSide = _ref.isServerSide,
        widgetArray = _ref.widgetArray;
    _this = _DataItem.call(this) || this;
    _this.data = _this._filterUndefined({
      appId: appId,
      widgetId: widgetId,
      isServerSide: isServerSide,
      widgetArray: widgetArray
    });
    return _this;
  }

  var _proto = BiAppContextDataItem.prototype;

  _proto._filterUndefined = function _filterUndefined(contextData) {
    var definedValues = {};
    Object.keys(contextData).forEach(function (key) {
      if (contextData[key]) {
        definedValues[key] = contextData[key];
      }
    });
    return definedValues;
  };

  return BiAppContextDataItem;
}(DataItem);


// CONCATENATED MODULE: ./data-items/duration/duration-item.js
function duration_item_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; duration_item_setPrototypeOf(subClass, superClass); }

function duration_item_setPrototypeOf(o, p) { duration_item_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return duration_item_setPrototypeOf(o, p); }



var DurationDataItem = /*#__PURE__*/function (_DataItem) {
  duration_item_inheritsLoose(DurationDataItem, _DataItem);

  function DurationDataItem(duration) {
    return _DataItem.call(this, {
      duration: duration
    }) || this;
  }

  var _proto = DurationDataItem.prototype;

  _proto.setFirstRequestDuration = function setFirstRequestDuration(firstRequestDuration) {
    this.data.frd = firstRequestDuration;
    return this;
  };

  return DurationDataItem;
}(DataItem);


// CONCATENATED MODULE: ./data-items/phases/utils.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function createPhasesCollection(phasesOfApp) {
  var phases = {};

  for (var _iterator = _createForOfIteratorHelperLoose(phasesOfApp), _step; !(_step = _iterator()).done;) {
    var phase = _step.value;
    deleteIndexFrom(phase);
    phases = Object.assign(phases, phase);
  }

  return phases;
}
function calcPhaseDuration(phaseStartTime) {
  return Math.floor(performance_performance.now() - phaseStartTime);
}

function deleteIndexFrom(phase) {
  delete phase[Object.getOwnPropertyNames(phase)[0]].index;
}
// CONCATENATED MODULE: ./data-items/data-items.js





var data_items_DataItems = /*#__PURE__*/function () {
  function DataItems(sessionId, preset) {
    this._sessionId = sessionId;
    this._preset = preset;
  }

  var _proto = DataItems.prototype;

  _proto.biAppLoadStart = function biAppLoadStart() {
    return this._biDataItem(this._preset.appLoadStart.eventId);
  };

  _proto.biAppLoadFinish = function biAppLoadFinish() {
    return this._biDataItem(this._preset.appLoadFinish.eventId);
  };

  _proto.biInteractionStart = function biInteractionStart() {
    return this._biDataItem(this._preset.interactionStart.eventId);
  };

  _proto.biInteractionEnd = function biInteractionEnd() {
    return this._biDataItem(this._preset.interactionEnd.eventId);
  };

  _proto.biLoadPhaseStart = function biLoadPhaseStart() {
    return this._biDataItem(this._preset.loadPhaseStart.eventId);
  };

  _proto.biLoadPhaseFinish = function biLoadPhaseFinish() {
    return this._biDataItem(this._preset.loadPhaseFinish.eventId);
  };

  _proto.biHttpRequest = function biHttpRequest() {
    return this._biDataItem(this._preset.httpRequest.eventId);
  };

  _proto.biHttpResponse = function biHttpResponse() {
    return this._biDataItem(this._preset.httpResponse.eventId);
  };

  _proto.biHttpResponseTime = function biHttpResponseTime() {
    return this._biDataItem(this._preset.httpResponseTime.eventId);
  };

  _proto.biBlackbox = function biBlackbox(performanceEntry) {
    var entryTypeToEventId = {
      environment: 500,
      'initial-paint': 501,
      loaded: 502,
      visibility: 503,
      'first-input': 504,
      'page-transition': 505,
      crux: 506,
      'crux-cls': 507,
      responsiveness: 508
    };
    var eventId = entryTypeToEventId[performanceEntry.entryType];
    return eventId && this._biDataItem(eventId);
  };

  _proto.blackboxPerformance = function blackboxPerformance(performanceEntry) {
    return this.dataItem(performanceEntry);
  };

  _proto.webVitalsLoaded = function webVitalsLoaded() {
    return this._biDataItem(29);
  };

  _proto.webVitalsFirstInput = function webVitalsFirstInput() {
    return this._biDataItem(39);
  };

  _proto.biError = function biError() {
    return this._biDataItem(this._preset.error.eventId);
  };

  _proto.appName = function appName(_ref) {
    var _appName = _ref.appName,
        isServerSide = _ref.isServerSide;
    return this.dataItem({
      appName: isServerSide ? _appName + '_ssr' : _appName
    });
  };

  _proto.artifact = function artifact(_ref2) {
    var artifactId = _ref2.id,
        artifactVersion = _ref2.version,
        isRollout = _ref2.isRollout;
    return this.dataItem({
      artifactId: artifactId,
      artifactVersion: artifactVersion,
      isRollout: isRollout
    });
  };

  _proto.appContext = function appContext(params) {
    return new BiAppContextDataItem(params);
  };

  _proto.customParams = function customParams(_customParams) {
    return this.dataItem({
      customParams: _customParams
    });
  };

  _proto.duration = function duration(_duration) {
    return new DurationDataItem(_duration);
  };

  _proto.loadingPhaseCollection = function loadingPhaseCollection(phasesOfApp) {
    var phases = JSON.stringify(createPhasesCollection(phasesOfApp));
    return this.dataItem({
      phases: phases
    });
  };

  _proto.loadingPhaseStart = function loadingPhaseStart(_ref3) {
    var name = _ref3.name;
    return this.dataItem({
      name: name
    });
  };

  _proto.loadingPhaseFinish = function loadingPhaseFinish(_ref4) {
    var name = _ref4.name,
        phaseStartTime = _ref4.phaseStartTime;
    var duration = calcPhaseDuration(phaseStartTime);
    return this.dataItem({
      name: name,
      duration: duration
    });
  };

  _proto.resource = function resource() {
    var data = this._asBiEvent(this._preset.resource.eventId);

    return new resource_item_ResourceDataItem(data);
  };

  _proto.dataItem = function dataItem(params) {
    return new DataItem(params);
  };

  _proto._biDataItem = function _biDataItem(eventId) {
    var data = this._asBiEvent(eventId);

    return this.dataItem(data);
  };

  _proto._asBiEvent = function _asBiEvent(evid) {
    return {
      src: this._preset.src,
      evid: evid,
      session_id: this._sessionId,
      _: new Date().getTime() // cache buster

    };
  };

  return DataItems;
}();
// CONCATENATED MODULE: ./loading-phases/loading-phases-config.js
var phasesConfigValues = {
  SEND_ON_START: 'SEND_ON_START',
  SEND_ON_FINISH: 'SEND_START_AND_FINISH',
  SEND_ON_APP_LOADED: 'SEND_ON_START',
  SEND_START_AND_FINISH: 'SEND_START_AND_FINISH'
};
// EXTERNAL MODULE: ../node_modules/@wix/fedops-overrides/dist/esm/index.js
var esm = __webpack_require__(26);

// CONCATENATED MODULE: ./cookie-overrides.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var FEDOPS_OVERRIDES_WINDOW_IDENTIFIER = '__DEFAULT_FEDOPS_OVERRIDES__';
var cookie_overrides_CookieOverrides = /*#__PURE__*/function () {
  /**
   * @param {import('@wix/fedops-overrides').FedopsOverrideCookie} overridesCookie
   */
  function CookieOverrides() {
    var _this$_getOverridesFr;

    this._overridesCookie = (_this$_getOverridesFr = this._getOverridesFromWindow()) != null ? _this$_getOverridesFr : this._getOverridesFromDocumentCookieIfExists();
  }

  var _proto = CookieOverrides.prototype;

  _proto.getCookieOverridesForApp = function getCookieOverridesForApp(appName) {
    return Object.assign({}, this._overridesCookie.paramsOverrides, this._overridesCookie.paramsOverridesForApp && this._overridesCookie.paramsOverridesForApp[appName]);
  };

  _proto._getOverridesFromDocumentCookieIfExists = function _getOverridesFromDocumentCookieIfExists() {
    try {
      var overridesCookieContent = getCookie(esm["FEDOPS_OVERRIDES_COOKIE"]);
      var overridesObject = parseJsonFromNodeOrScalaServers(overridesCookieContent);

      if (overridesObject && typeof overridesObject === 'object') {
        if (overridesObject.paramsOverridesForApp) {
          overridesObject.paramsOverridesForApp = Object.entries(overridesObject.paramsOverridesForApp).reduce(toOverridesWithoutDots, {});
        }

        this._persistOverridesToWindow(overridesObject);

        return overridesObject;
      } else {
        return {};
      }
    } catch (err) {
      console.log(err);
      return {};
    }
  };

  _proto._persistOverridesToWindow = function _persistOverridesToWindow(overridesObject) {
    Object(env["a" /* env */])()[FEDOPS_OVERRIDES_WINDOW_IDENTIFIER] = overridesObject;
  };

  _proto._getOverridesFromWindow = function _getOverridesFromWindow() {
    return Object(env["a" /* env */])()[FEDOPS_OVERRIDES_WINDOW_IDENTIFIER];
  };

  return CookieOverrides;
}();

function toOverridesWithoutDots(overridesMap, _ref) {
  var _objectSpread2;

  var appName = _ref[0],
      overrides = _ref[1];
  return _objectSpread(_objectSpread({}, overridesMap), {}, (_objectSpread2 = {}, _objectSpread2[appName.replace(/\./g, '-')] = overrides, _objectSpread2));
}

function getCookie(cookieName) {
  if (!Object(env["a" /* env */])().document || !Object(env["a" /* env */])().document.cookie) {
    return '';
  }

  var cookieKeyValuePairs = Object(env["a" /* env */])().document.cookie.split(';').map(function (c) {
    return c.trim().split('=');
  });

  var _cookieKeyValuePairs$ = cookieKeyValuePairs.filter(function (_ref2) {
    var key = _ref2[0];
    return key === cookieName;
  }),
      relevantCookie = _cookieKeyValuePairs$[0];

  if (relevantCookie) {
    var value = relevantCookie[1];
    return value;
  } else {
    return '';
  }
}

function parseJsonFromNodeOrScalaServers(rawPayload) {
  function attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() {
    try {
      return JSON.parse(JSON.parse(rawPayload));
    } catch (err) {
      return null;
    }
  }

  function attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding() {
    try {
      return JSON.parse(decodeURIComponent(rawPayload));
    } catch (err) {
      return null;
    }
  }

  return attemptToParseJsonRecursivelySinceScalaServersSerializeItTwice() || attemptURIDecodeAndParseJsonSinceNodeServersUseWithURIEncoding();
}
// CONCATENATED MODULE: ./errors/error-flow-type.js
var APP_LOAD_ERROR_FLOW = 'app-load';
// CONCATENATED MODULE: ./http-monitoring-preset.js
/* harmony default export */ var http_monitoring_preset = ({
  src: 72,
  endpoint: 'http-client-poc',
  httpRequest: {
    eventId: 1100
  },
  httpResponse: {
    eventId: 1101
  },
  httpResponseTime: {
    eventId: 1102
  }
});
// CONCATENATED MODULE: ./defer.js
var defer = function defer() {
  var res, rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
};
// CONCATENATED MODULE: ./base-logger.js
function base_logger_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function base_logger_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? base_logger_ownKeys(Object(source), !0).forEach(function (key) { base_logger_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : base_logger_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function base_logger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function base_logger_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = base_logger_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function base_logger_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return base_logger_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return base_logger_arrayLikeToArray(o, minLen); }

function base_logger_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

















var BLACKBOX = 'wixPerformanceMeasurements';
var BLACKBOX_ENDPOINT = 'bpm';

var callHook = function callHook(hook, hookArgs) {
  if (hook) {
    return hook(hookArgs);
  }
};
/**
 * Base Logger
 * Before adding new parameters to the reported events, please make sure the BI schema supports them:
 * http://bo.wix.com/bi-catalog-webapp/#/sources/72
 */


var base_logger_BaseLogger = /*#__PURE__*/function () {
  function BaseLogger(appName, appVersion, reporter, params) {
    var defaultParams = {
      appId: null,
      widgetId: null,
      metasiteId: null,
      sessionId: session_manager.getSessionId(),
      isServerSide: null,
      disableAutoLoadFinish: false,
      phasesConfig: phasesConfigValues.SEND_ON_START,
      interactionTimeout: null,
      timeoutHook: null,
      startHook: null,
      endHook: null,
      isPersistent: false,
      corrId: generateGuid(),
      presetType: presetsTypes.DEFAULT,
      customParams: {},
      paramsOverrides: {}
    };
    var paramsWithDefaults = Object.assign({}, defaultParams, params);
    this.appName = appName;
    this.appVersion = appVersion;
    this.appId = paramsWithDefaults.appId;
    this.widgetId = paramsWithDefaults.widgetId;
    this.metasiteId = paramsWithDefaults.metasiteId;
    this.corrId = paramsWithDefaults.corrId;
    this.isServerSide = paramsWithDefaults.isServerSide;
    this.params = {
      sessionId: paramsWithDefaults.sessionId
    };
    this.httpMonitoringDataItems = new data_items_DataItems(this.sessionId, http_monitoring_preset);
    this.httpMonitoringReporter = create({
      preset: http_monitoring_preset
    });
    this._customParams = Object.assign({}, paramsWithDefaults.customParams);
    this.disableAutoLoadFinish = paramsWithDefaults.disableAutoLoadFinish;
    this.phasesConfig = paramsWithDefaults.phasesConfig;
    this._appLoadedCalled = {};
    this._appStartLoadCalled = {};
    this._presetType = paramsWithDefaults.presetType;
    this._preset = presetLoader(this._presetType);
    this._constructorParamsOverrides = paramsWithDefaults.paramsOverrides;
    this._cookiesParamsOverrides = new cookie_overrides_CookieOverrides();
    this.dataItems = new data_items_DataItems(this.sessionId, this._preset);
    this.reporter = reporter || create({
      preset: this._preset
    });
    this._times = new times_Times(appName);
    this.loadingPhases = new loading_phases_LoadingPhases(appName, this._times);
    this.dataSourceBase = new data_source_DataSource();
    this.dataSourceBase.addItem(this.dataItems.appName({
      appName: appName,
      isServerSide: this.isServerSide
    })).addItem(this.dataItems.dataItem({
      corrId: this.corrId,
      is_rollout: false
    })).addItem(this.dataItems.dataItem(paramsWithDefaults.paramsOverrides));

    if (params && params.artifactData) {
      this.dataSourceBase.addItem(this.dataItems.artifact(params.artifactData));
    }

    this._outgoingInteractions = {};
    this._outgoingHttpRequests = {};
    this.interactionTimeout = paramsWithDefaults.interactionTimeout;
    this.timeoutHook = paramsWithDefaults.timeoutHook;
    this.startHook = paramsWithDefaults.startHook;
    this.endHook = paramsWithDefaults.endHook;
    this.isPersistent = paramsWithDefaults.isPersistent;
    this._firstErrorFiredInFlow = {};
    this._platformTenantsPromise = defer();
    this._webVitalsLoadedPromise = defer();
    this._webVitalsFirstInputPromise = defer();

    if (paramsWithDefaults.reportBlackbox) {
      this._handleBlackboxPerformance();
    }

    this._reportWebVitalsWhenAvailable();
  }

  var _proto = BaseLogger.prototype;

  _proto._report = function _report(dataSource, reporterEndpoint, params) {
    return this.reporter.report(dataSource.mergeItems(), reporterEndpoint, params);
  };

  _proto._reportHttpMonitoring = function _reportHttpMonitoring(dataSource) {
    return this.httpMonitoringReporter.report(dataSource.mergeItems(), http_monitoring_preset.endpoint);
  };

  _proto._reportPhases = function _reportPhases(dataSource, reporterEndpoint) {
    return this.reporter.report(dataSource.mergePhasesItems(), reporterEndpoint);
  };

  _proto.getAppName = function getAppName() {
    return this.appName;
  };

  _proto.getAppVersion = function getAppVersion() {
    return this.appVersion;
  };

  _proto.getReporter = function getReporter() {
    return this.reporter;
  };

  _proto.getHttpMonitoringReporter = function getHttpMonitoringReporter() {
    return this.httpMonitoringReporter;
  };

  _proto.getParam = function getParam(paramName) {
    return this.params[paramName];
  };

  _proto._isDisableAutoLoadFinish = function _isDisableAutoLoadFinish() {
    return this.disableAutoLoadFinish;
  };

  _proto.isDisableAutoLoadFinish = function isDisableAutoLoadFinish() {
    return this._isDisableAutoLoadFinish();
  };

  _proto.reportNetworkAnalysis = function reportNetworkAnalysis(_ref) {
    var _this = this;

    var appId = _ref.appId;
    var resources = performance_performance.getResources();
    setTimeout(function () {
      try {
        var resourceDataItem = _this.dataItems.resource();

        var analysis = resourceDataItem.performNetworkAnalysis(resources);

        if (!analysis) {
          return;
        }

        var dataSource = _this.dataSource.addItem(resourceDataItem).addItem(analysis).addItem(_this._getDataItemWithDefaultParamsOverrides({
          appName: appId
        }));

        if (appId) {
          _this._changeAppNameForEvent(dataSource, appId);
        }

        _this._report(dataSource);
      } catch (e) {
        console.error('[fedops] Failed to report resource metrics', e);
      }
    }, 1000);
  };

  _proto._getAppLoadingPhaseMarksForApp = function _getAppLoadingPhaseMarksForApp(_ref2) {
    var appId = _ref2.appId;
    var allMarks = performance_performance.getMarks();
    var appMarks = [];
    allMarks.forEach(function (x) {
      var markData = getPhaseMark(x.name);

      if (markData && markData.appId === appId && !markData.widgetId) {
        var startTime = x.startTime,
            name = x.name;
        var markWithStartTime = Object.assign({}, {
          startTime: startTime,
          name: name
        }, markData);
        appMarks.push(markWithStartTime);
      }
    });
    return appMarks;
  };

  _proto._getTimesOfPhase = function _getTimesOfPhase(_ref3) {
    var _appPhasesMarks$find, _appPhasesMarks$find2;

    var phaseName = _ref3.phaseName,
        appPhasesMarks = _ref3.appPhasesMarks,
        appId = _ref3.appId;
    var startMarkTime = (_appPhasesMarks$find = appPhasesMarks.find(function (mark) {
      return mark.name === "[fedops] phase:" + phaseName + " " + appId + " started";
    })) == null ? void 0 : _appPhasesMarks$find.startTime;
    var finishMarkTime = (_appPhasesMarks$find2 = appPhasesMarks.find(function (mark) {
      return mark.name === "[fedops] phase:" + phaseName + " " + appId + " finished";
    })) == null ? void 0 : _appPhasesMarks$find2.startTime;
    return {
      startMarkTime: startMarkTime,
      finishMarkTime: finishMarkTime
    };
  };

  _proto._getPhaseNamesFromMarks = function _getPhaseNamesFromMarks(marks) {
    return new Set(marks.map(function (mark) {
      return mark.phaseName;
    }));
  };

  _proto.reportAppPhasesNetworkAnalysis = function reportAppPhasesNetworkAnalysis(_ref4) {
    var _this2 = this;

    var appId = _ref4.appId;

    var appPhasesMarks = this._getAppLoadingPhaseMarksForApp({
      appId: appId
    });

    var phaseNames = this._getPhaseNamesFromMarks(appPhasesMarks);

    var resources = performance_performance.getResources();
    var dataSource = this.dataSource;
    var resourceDataItem = this.dataItems.resource();
    dataSource.addItem(resourceDataItem);

    for (var _iterator = base_logger_createForOfIteratorHelperLoose(phaseNames), _step; !(_step = _iterator()).done;) {
      var phaseName = _step.value;

      try {
        (function () {
          var _this2$_getTimesOfPha = _this2._getTimesOfPhase({
            phaseName: phaseName,
            appPhasesMarks: appPhasesMarks,
            appId: appId
          }),
              startMarkTime = _this2$_getTimesOfPha.startMarkTime,
              finishMarkTime = _this2$_getTimesOfPha.finishMarkTime;

          var resourcesInPhase = resources.filter(function (resource) {
            return resource.startTime > startMarkTime && resource.startTime + resource.duration < finishMarkTime;
          });
          var analysis = resourceDataItem.performNetworkAnalysis(resourcesInPhase);

          if (analysis) {
            dataSource.addItem(analysis);
          }
        })();
      } catch (e) {
        console.error("[fedops] Failed to report resource metrics for \"" + phaseName + "\" phase", e);
      }
    }

    var dataSourceContainsNetworkAnalysis = function dataSourceContainsNetworkAnalysis(datasource) {
      return datasource.items.find(function (dataItem) {
        return typeof dataItem.data.countXhr !== 'undefined';
      });
    };

    if (dataSourceContainsNetworkAnalysis(dataSource)) {
      this._changeAppNameForEvent(dataSource, appId);

      this._reportPhases(dataSource);
    }
  }
  /**
   * Manual report for widget load start - Should only be used if your widget doesn't have its own .vm / .ejs file
   * Call this method at the earliest point possible when your widget starts loading.
   */
  ;

  _proto.appLoadStarted = function appLoadStarted(_temp) {
    var _ref5 = _temp === void 0 ? {} : _temp,
        appId = _ref5.appId,
        paramsOverrides = _ref5.paramsOverrides;

    if (appId && this._appStartLoadCalled[appId] || !appId && this._appStartLoadCalled[this.appName]) {
      return;
    }

    BaseLogger._markAppLoadStarted(this.appName);

    this._appStartLoadCalled[appId || this.appName] = true;

    this._times.setLoadStarted({
      appId: appId
    });

    var dataSource = this.dataSource.addItem(this.dataItems.biAppLoadStart()).addItem(this.dataItems.appContext({
      appId: appId || this.appId,
      widgetId: this.widgetId,
      isServerSide: this.isServerSide
    })).addItem(this._getDataItemWithDefaultParamsOverrides({
      appName: appId
    })).addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    return this._report(dataSource, this._getEndpoint());
  };

  _proto.httpRequest = function httpRequest(_ref6) {
    var artifactId = _ref6.artifactId,
        method = _ref6.method,
        url = _ref6.url;

    var urlTemplate = this._getUrlTemplate(url);

    this._outgoingHttpRequests[urlTemplate] = {
      timestamp: performance_performance.now()
    };
    var dataSource = this.dataSource.addItem(this.httpMonitoringDataItems.biHttpRequest()).addItem({
      artifactId: artifactId,
      method: method,
      url: urlTemplate
    });

    this._reportHttpMonitoring(dataSource);
  };

  _proto.httpResponse = function httpResponse(_ref7) {
    var artifactId = _ref7.artifactId,
        method = _ref7.method,
        statusCode = _ref7.statusCode,
        url = _ref7.url;

    var urlTemplate = this._getUrlTemplate(url);

    if (!this._outgoingHttpRequests[urlTemplate]) {
      throw new Error('To use httpResponse you must use httpRequest first');
    }

    var startTime = this._outgoingHttpRequests[urlTemplate].timestamp;
    var endTime = performance_performance.now();
    var responseTime = Math.floor(endTime - startTime);
    var dataSource = this.dataSource.addItem(this.httpMonitoringDataItems.biHttpResponse()).addItem({
      artifactId: artifactId,
      method: method,
      responseTime: responseTime,
      status_code: statusCode,
      url: urlTemplate
    });

    this._httpResponseTime({
      artifactId: artifactId,
      method: method,
      responseTime: responseTime,
      url: urlTemplate
    });

    this._reportHttpMonitoring(dataSource);
  };

  _proto._httpResponseTime = function _httpResponseTime(_ref8) {
    var artifactId = _ref8.artifactId,
        method = _ref8.method,
        responseTime = _ref8.responseTime,
        url = _ref8.url;
    var dataSource = this.dataSource.addItem(this.httpMonitoringDataItems.biHttpResponseTime()).addItem({
      artifactId: artifactId,
      method: method,
      responseTime: responseTime,
      url: url
    });
    return this._reportHttpMonitoring(dataSource);
  };

  _proto._getUrlTemplate = function _getUrlTemplate(url) {
    var _extractUrl = utils_extractUrl(url),
        origin = _extractUrl.origin,
        pathname = _extractUrl.pathname;

    var convertedPathname = pathname.split('/').filter(function (p) {
      return !!p;
    }).map(function (p) {
      return getPathnameTemplate(p);
    }).join('/');
    return origin + "/" + convertedPathname;
  };

  _proto._shouldAddCustomParams = function _shouldAddCustomParams(customParams) {
    var isEmptyObject = function isEmptyObject(obj) {
      return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    var bothCustomParamsAreEmpty = isEmptyObject(this._customParams) && isEmptyObject(customParams);
    var consentPolicyAccessor = new src["ConsentPolicyAccessor"]();

    var _consentPolicyAccesso = consentPolicyAccessor.getCurrentConsentPolicy(),
        functional = _consentPolicyAccesso.functional,
        analytics = _consentPolicyAccesso.analytics;

    var consentAllowsCustomParams = functional && analytics;
    return !bothCustomParamsAreEmpty && consentAllowsCustomParams;
  };

  _proto._addCustomParamsToEvent = function _addCustomParamsToEvent(dataSource, customParams) {
    var customParamsObj = typeof customParams === 'string' ? JSON.parse(customParams) : customParams;
    customParams = Object.assign({}, this._customParams, customParamsObj);

    if (Object.keys(customParams).length > 0) {
      var stringifiedCustomParams = JSON.stringify(customParams);
      dataSource.addItem(this.dataItems.customParams(stringifiedCustomParams));
    }
  }
  /**
   * Final phase. Call this method when your application finishes loading and after all custom phases.
   */
  ;

  _proto.appLoaded = function appLoaded(_temp2) {
    var _ref9 = _temp2 === void 0 ? {} : _temp2,
        appId = _ref9.appId,
        customParams = _ref9.customParams,
        paramsOverrides = _ref9.paramsOverrides;

    if (appId && this._appLoadedCalled[appId] || !appId && this._appLoadedCalled[this.appName]) {
      return;
    }

    BaseLogger._clearLoadTimeout();

    BaseLogger._markAndMeasureAppLoad(this.appName);

    this._appLoadedCalled[appId || this.appName] = true;

    this._sendLastAppLoadPhaseIfNeeded();

    this.reportNetworkAnalysis({
      appId: appId
    });
    var dataSource = this.dataSource.addItem(this.dataItems.biAppLoadFinish()).addItem(this.dataItems.appContext({
      appId: appId || this.appId,
      widgetId: this.widgetId,
      isServerSide: this.isServerSide
    })).addItem(this.dataItems.duration(this._times.getAppLoadTime({
      appId: appId
    })).setFirstRequestDuration(this._times.getFirstRequestDuration())).addItem(this._getDataItemWithDefaultParamsOverrides({
      appName: appId
    })).addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    return this._report(dataSource, this._getEndpoint());
  }
  /**
   * Start of an app loading phase, reports end of previous phase if configured
   */
  ;

  _proto.appLoadingPhaseStart = function appLoadingPhaseStart(name, _temp3) {
    var _ref10 = _temp3 === void 0 ? {} : _temp3,
        appId = _ref10.appId,
        widgetId = _ref10.widgetId,
        paramsOverrides = _ref10.paramsOverrides;

    this.loadingPhases.createCodeParsingPhaseIfNotExist({
      appId: appId,
      widgetId: widgetId
    });
    this.loadingPhases.saveLoadingPhase({
      name: name,
      appId: appId,
      widgetId: widgetId
    });

    this._sendPreviousPhaseIfNeeded(name, {
      appId: appId,
      widgetId: widgetId,
      paramsOverrides: paramsOverrides
    });

    performance_performance.mark("[fedops] " + name + " started");
    performance_performance.mark("[fedops] phase:" + name + " " + appId + (widgetId ? " " + widgetId : '') + " started");
    var dataSource = this.dataSource.addItem(this.dataItems.biLoadPhaseStart()).addItem(this.dataItems.appContext({
      appId: appId,
      widgetId: widgetId
    })).addItem(this.dataItems.loadingPhaseStart({
      name: name
    })).addItem(this._getDataItemWithDefaultParamsOverrides({
      appName: appId
    })).addItem(this.dataItems.dataItem(paramsOverrides));

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    this._report(dataSource, this._getEndpoint());
  };

  _proto._changeAppNameForEvent = function _changeAppNameForEvent(dataSource, appName) {
    dataSource.addItem(this.dataItems.appName({
      appName: appName,
      isServerSide: this.isServerSide
    }));
  };

  _proto._sendPreviousPhaseIfNeeded = function _sendPreviousPhaseIfNeeded(name, _temp4) {
    var _ref11 = _temp4 === void 0 ? {} : _temp4,
        appId = _ref11.appId,
        widgetId = _ref11.widgetId,
        paramsOverrides = _ref11.paramsOverrides;

    var previousPhase = this.loadingPhases.getPhasePreviousTo({
      name: name,
      appId: appId,
      widgetId: widgetId
    });

    if (this.phasesConfig === phasesConfigValues.SEND_ON_START || previousPhase && previousPhase.name === CODE_PARSING_PHASE_NAME) {
      performance_performance.mark("[fedops] " + previousPhase.name + " finished");
      var loadingPhaseDataItem = this.dataItems.loadingPhaseFinish(previousPhase);
      var loadingPhaseBiItem = this.dataItems.biLoadPhaseFinish();
      var overridesDataItem = this.dataItems.dataItem(paramsOverrides);
      var dataSource = this.dataSource.addItem(loadingPhaseDataItem).addItem(loadingPhaseBiItem).addItem(this._getDataItemWithDefaultParamsOverrides({
        appName: appId
      })).addItem(overridesDataItem);

      this._report(dataSource);
    }
  }
  /**
   * End of an app loading phase, reports end of previous phase
   */
  ;

  _proto.appLoadingPhaseFinish = function appLoadingPhaseFinish(name, _temp5) {
    var _ref12 = _temp5 === void 0 ? {} : _temp5,
        appId = _ref12.appId,
        widgetId = _ref12.widgetId,
        widgetArray = _ref12.widgetArray,
        paramsOverrides = _ref12.paramsOverrides;

    if (this.phasesConfig === phasesConfigValues.SEND_ON_START) {
      throw new Error('To use appLoadingPhaseFinish you must use "phasesConfig: SEND_START_AND_FINISH" setting');
    }

    performance_performance.mark("[fedops] " + name + " finished");
    performance_performance.mark("[fedops] phase:" + name + " " + appId + (widgetId ? " " + widgetId : '') + " finished");
    var loadingPhase = this.loadingPhases.getAppLoadingPhaseData({
      name: name,
      appId: appId,
      widgetId: widgetId
    });

    if (!loadingPhase) {
      throw new Error("Cannot report end of a phase that wasn't started. Phase " + name + " doesn't exist");
    }

    var loadingPhaseDataItem = this.dataItems.loadingPhaseFinish(loadingPhase);
    var loadingPhaseBiItem = this.dataItems.biLoadPhaseFinish();

    var defaultParamsOverridesDataItem = this._getDataItemWithDefaultParamsOverrides({
      appName: appId
    });

    var overridesDataItem = this.dataItems.dataItem(paramsOverrides);
    var eventContextDataItem = this.dataItems.appContext({
      appId: appId,
      widgetId: widgetId,
      widgetArray: widgetArray,
      isServerSide: this.isServerSide
    });
    var dataSource = this.dataSource.addItem(loadingPhaseDataItem).addItem(loadingPhaseBiItem).addItem(eventContextDataItem).addItem(defaultParamsOverridesDataItem).addItem(overridesDataItem);

    if (appId) {
      this._changeAppNameForEvent(dataSource, appId);
    }

    return this._report(dataSource, this._getEndpoint());
  };

  _proto._getEndpoint = function _getEndpoint() {
    return this.isPersistent ? this._preset.persistentEndpoint : this._preset.nonPersistentEndpoint;
  };

  _proto._getDataItemWithDefaultParamsOverrides = function _getDataItemWithDefaultParamsOverrides(_temp6) {
    var _ref13 = _temp6 === void 0 ? {} : _temp6,
        _ref13$appName = _ref13.appName,
        appName = _ref13$appName === void 0 ? null : _ref13$appName;

    return this.dataItems.dataItem(base_logger_objectSpread(base_logger_objectSpread({}, this._cookiesParamsOverrides.getCookieOverridesForApp(appName || this.appName)), this._constructorParamsOverrides));
  } // only for backwards compatibility purposes until we eliminate phasesConfig and SEND_ON_START
  ;

  _proto._sendLastAppLoadPhaseIfNeeded = function _sendLastAppLoadPhaseIfNeeded() {
    var appLoadingPhase = this.loadingPhases.getNextPhaseToReport();
    var shouldReportLastPhase = this.phasesConfig === phasesConfigValues.SEND_ON_START && appLoadingPhase && appLoadingPhase.name !== CODE_PARSING_PHASE_NAME;

    if (shouldReportLastPhase) {
      this._report(this.dataSource.addItem(this.dataItems.loadingPhaseFinish(appLoadingPhase)).addItem(this.dataItems.biLoadPhaseFinish()));
    }
  };

  BaseLogger._clearLoadTimeout = function _clearLoadTimeout() {
    if (Object(env["a" /* env */])() && Object(env["a" /* env */])().fedops && typeof Object(env["a" /* env */])().fedops.clearLoadTimeout === 'function') {
      Object(env["a" /* env */])().fedops.clearLoadTimeout();
    }
  };

  _proto.clearResourceTimings = function clearResourceTimings() {
    performance_performance.clearResourceTimings();
  };

  BaseLogger._markAppLoadStarted = function _markAppLoadStarted(appName) {
    performance_performance.mark("[fedops] " + appName + " app-load-started");
  };

  BaseLogger._markAndMeasureAppLoad = function _markAndMeasureAppLoad(appName) {
    performance_performance.mark("[fedops] " + appName + " app-loaded");

    try {
      performance_performance.measure("[fedops] " + appName + " app-loaded", "[fedops] " + appName + " app-load-started", "[fedops] " + appName + " app-loaded");
    } catch (e) {}
  };

  _proto._markInteractionStarted = function _markInteractionStarted(interactionName) {
    performance_performance.mark("[fedops] " + this.appName + " interaction " + interactionName + " started");
  };

  _proto._markAndMeasureInteractionEnded = function _markAndMeasureInteractionEnded(interactionName, outgoingInteraction) {
    if (outgoingInteraction) {
      performance_performance.mark("[fedops] " + this.appName + " interaction " + interactionName + " ended");

      try {
        performance_performance.measure("[fedops] " + interactionName + " duration", "[fedops] " + this.appName + " interaction " + interactionName + " started", "[fedops] " + this.appName + " interaction " + interactionName + " ended");
      } catch (e) {}
    }
  }
  /**
   * Custom interaction start (http://bo.wix.com/bi-catalog-webapp/#/sources/72/events/)
   */
  ;

  _proto.interactionStarted = function interactionStarted(interactionName, _temp7) {
    var _this3 = this;

    var _ref14 = _temp7 === void 0 ? {} : _temp7,
        timeOverride = _ref14.timeOverride,
        interactionTimeout = _ref14.interactionTimeout,
        startHook = _ref14.startHook,
        timeoutHook = _ref14.timeoutHook,
        customParams = _ref14.customParams,
        paramsOverrides = _ref14.paramsOverrides;

    this._markInteractionStarted(interactionName);

    var scheduleTimeoutEvent = function scheduleTimeoutEvent() {
      if (interactionTimeout || _this3.interactionTimeout) {
        return setTimeout(function () {
          var dataSource = _this3.dataSource.addItem({
            interactionName: interactionName
          }).addItem({
            errorType: 'timeout'
          }).addItem(_this3.dataItems.biError());

          _this3._report(dataSource);

          callHook(timeoutHook || _this3.timeoutHook, {
            name: interactionName,
            timeout: interactionTimeout || _this3.interactionTimeout
          });
        }, interactionTimeout || _this3.interactionTimeout);
      }
    };

    var dataSource = this.dataSource.addItem({
      name: interactionName
    }).addItem(this.dataItems.biInteractionStart()).addItem(this._getDataItemWithDefaultParamsOverrides()).addItem(this.dataItems.dataItem(paramsOverrides));

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    this._outgoingInteractions[interactionName] = {
      timestamp: timeOverride ? timeOverride : performance_performance.now(),
      timeout: interactionTimeout || this.interactionTimeout
    };

    this._report(dataSource);

    callHook(startHook || this.startHook, {
      name: interactionName
    });
    var timeoutId = scheduleTimeoutEvent();
    return {
      timeoutId: timeoutId
    };
  }
  /**
   * Custom interaction end (http://bo.wix.com/bi-catalog-webapp/#/sources/72/events/)
   */
  ;

  _proto.interactionEnded = function interactionEnded(interactionName, _temp8) {
    var _ref15 = _temp8 === void 0 ? {} : _temp8,
        timeOverride = _ref15.timeOverride,
        timeoutId = _ref15.timeoutId,
        endHook = _ref15.endHook,
        customParams = _ref15.customParams,
        paramsOverrides = _ref15.paramsOverrides;

    var outgoingInteraction = this._outgoingInteractions[interactionName];

    this._markAndMeasureInteractionEnded(interactionName, outgoingInteraction);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    var interaction = this._outgoingInteractions[interactionName] || this._getInteractionFromWindowIfPresent(interactionName);

    var endTime = timeOverride ? timeOverride : performance_performance.now();
    var duration = interaction ? Math.floor(endTime - interaction.timestamp) : '';
    callHook(endHook || this.endHook, {
      name: interactionName,
      duration: duration,
      timeout: this._outgoingInteractions[interactionName] && this._outgoingInteractions[interactionName].timeout
    });
    var dataSource = this.dataSource.addItem({
      name: interactionName
    }).addItem({
      duration: duration
    }).addItem(this.dataItems.biInteractionEnd()).addItem(this._getDataItemWithDefaultParamsOverrides()).addItem(this.dataItems.dataItem(paramsOverrides));

    if (this._shouldAddCustomParams(customParams)) {
      this._addCustomParamsToEvent(dataSource, customParams);
    }

    delete this._outgoingInteractions[interactionName];

    this._report(dataSource);
  };

  _proto._getInteractionsObjectFromWindow = function _getInteractionsObjectFromWindow() {
    var _env, _env$fedops, _env$fedops$apps, _env$fedops$apps$this;

    return ((_env = Object(env["a" /* env */])()) == null ? void 0 : (_env$fedops = _env.fedops) == null ? void 0 : (_env$fedops$apps = _env$fedops.apps) == null ? void 0 : (_env$fedops$apps$this = _env$fedops$apps[this.appName]) == null ? void 0 : _env$fedops$apps$this.interactions) || {};
  };

  _proto._getInteractionFromWindowIfPresent = function _getInteractionFromWindowIfPresent(interactionName) {
    return this._getInteractionsObjectFromWindow()[interactionName];
  };

  _proto.flush = function flush() {
    this.reporter.flush();
  };

  _proto._handleBlackboxPerformance = function _handleBlackboxPerformance() {
    var _this4 = this;

    var actualEnv = Object(env["a" /* env */])();
    var wixPerformanceMeasurements = actualEnv[BLACKBOX];

    if (wixPerformanceMeasurements) {
      this._handleBlackboxPerformanceEntries(actualEnv, wixPerformanceMeasurements);
    }

    if (actualEnv.addEventListener) {
      actualEnv.addEventListener(BLACKBOX, function (_ref16) {
        var detail = _ref16.detail;
        return _this4._handleBlackboxPerformanceEntries(actualEnv, detail);
      });
    }
  };

  _proto._handleBlackboxPerformanceEntries = function _handleBlackboxPerformanceEntries(actualEnv, measurements) {
    var _this5 = this;

    measurements.filter(function (_ref17) {
      var then = _ref17.then;
      return then;
    }).forEach(function (performanceEntryPromise) {
      performanceEntryPromise.then(function (performanceEntry) {
        // eslint-disable-next-line default-case
        switch (performanceEntry.entryType) {
          case 'loaded':
            _this5._webVitalsLoadedPromise.resolve(performanceEntry);

            break;

          case 'first-input':
            _this5._webVitalsFirstInputPromise.resolve(performanceEntry);

            break;

          case 'page-transitions':
          case 'crux-cls-s':
          case 'responsiveness':
            if (performanceEntry.eventName && actualEnv.addEventListener) {
              actualEnv.addEventListener(performanceEntry.eventName, function (_ref18) {
                var detail = _ref18.detail;
                return _this5._sendBlackboxMeasurement(detail);
              });
            }

            return;
          // these entries are wrappers for sequences - they themselves are not reported
        }

        _this5._sendBlackboxMeasurement(performanceEntry);
      });
    });
  };

  _proto._sendBlackboxMeasurement = function _sendBlackboxMeasurement(measurement) {
    var blackboxBiDataItem = this.dataItems.biBlackbox(measurement);

    if (blackboxBiDataItem) {
      var blackboxDataItem = this.dataItems.blackboxPerformance(measurement);
      var dataSource = new data_source_DataSource().addItem(blackboxBiDataItem).addItem(blackboxDataItem);
      var params;

      if (measurement.entryType === 'loaded') {
        params = {
          useBatch: false
        };
      }

      this._report(dataSource, BLACKBOX_ENDPOINT, params);

      if (measurement.entryType === 'crux') {
        this.flush();
      }
    }
  };

  _proto.getLoggerForWidget = function getLoggerForWidget(_ref19) {
    var appName = _ref19.appName,
        appId = _ref19.appId,
        widgetId = _ref19.widgetId,
        version = _ref19.version,
        timeoutHook = _ref19.timeoutHook,
        startHook = _ref19.startHook,
        endHook = _ref19.endHook,
        useGlobalLogger = _ref19.useGlobalLogger,
        paramsOverrides = _ref19.paramsOverrides,
        phasesConfig = _ref19.phasesConfig;
    var widgetAppName = appName || appId + "_" + widgetId;
    var widgetVersion = version || this.getAppVersion();
    var reporter = useGlobalLogger ? this.reporter : create({
      biLoggerFactory: this.reporter._factory,
      preset: this._preset
    });
    var config = {
      isServerSide: this.isServerSide,
      appId: appId,
      widgetId: widgetId,
      sessionId: this.sessionId,
      phasesConfig: phasesConfig || phasesConfigValues.SEND_ON_START,
      isPersistent: this.isPersistent,
      timeoutHook: timeoutHook,
      startHook: startHook,
      endHook: endHook,
      customParams: this._customParams,
      presetType: this._presetType,
      paramsOverrides: base_logger_objectSpread(base_logger_objectSpread({}, this._constructorParamsOverrides), paramsOverrides)
    };
    return new BaseLogger(widgetAppName, widgetVersion, reporter, config);
  };

  _proto._getUnReportedErrorFlows = function _getUnReportedErrorFlows(flows) {
    var _this6 = this;

    return flows.filter(function (flow) {
      return !_this6._firstErrorFiredInFlow[flow];
    });
  };

  _proto.reportErrorThrownOncePerFlow = function reportErrorThrownOncePerFlow() {
    var _this7 = this;

    var flows = this._getFlowsOfError();

    var unReportedErrorFlows = this._getUnReportedErrorFlows(flows);

    if (unReportedErrorFlows.length) {
      unReportedErrorFlows.forEach(function (flow) {
        _this7._firstErrorFiredInFlow[flow] = true;

        var dataSource = _this7.dataSource.addItem({
          interactionName: flow
        }).addItem(_this7.dataItems.biError());

        _this7._report(dataSource);
      });
    }
  };

  _proto._errorHappenedInOneOfAppLoadFlows = function _errorHappenedInOneOfAppLoadFlows() {
    return this._errorHappenedInAppLoadFlow() || this._errorHappenedInAppLoadingPhasesFlow();
  };

  _proto._errorHappenedInAppLoadFlow = function _errorHappenedInAppLoadFlow() {
    var appLoadStarted = this._getAppLoadStartedIndication();

    var appLoaded = this._getAppLoadedIndication();

    return appLoadStarted && !appLoaded;
  };

  _proto._getAppLoadStartedIndication = function _getAppLoadStartedIndication() {
    var _performance$getEntri;

    var appLoadStartedMarkName = "[fedops] " + this.appName + " app-load-started";
    var appLoadStartedMark = (_performance$getEntri = performance_performance.getEntriesByName(appLoadStartedMarkName)) == null ? void 0 : _performance$getEntri[0];

    var appLoadStartedTime = this._times.getLoadStartTime();

    return appLoadStartedMark || appLoadStartedTime;
  };

  _proto._getAppLoadedIndication = function _getAppLoadedIndication() {
    var _performance$getEntri2;

    var appLoadedMarkName = "[fedops] " + this.appName + " app-loaded";
    var appLoadedMark = (_performance$getEntri2 = performance_performance.getEntriesByName(appLoadedMarkName)) == null ? void 0 : _performance$getEntri2[0];
    return appLoadedMark || this._appLoadedCalled[this.appName];
  };

  _proto._errorHappenedInAppLoadingPhasesFlow = function _errorHappenedInAppLoadingPhasesFlow(_temp9) {
    var _ref20 = _temp9 === void 0 ? {
      appId: this.appName
    } : _temp9,
        appId = _ref20.appId;

    var appPhasesMarks = this._getAppLoadingPhaseMarksForApp({
      appId: appId
    });

    var phaseNames = this._getPhaseNamesFromMarks(appPhasesMarks);

    for (var _iterator2 = base_logger_createForOfIteratorHelperLoose(phaseNames), _step2; !(_step2 = _iterator2()).done;) {
      var phaseName = _step2.value;

      var _this$_getTimesOfPhas = this._getTimesOfPhase({
        phaseName: phaseName,
        appPhasesMarks: appPhasesMarks,
        appId: appId
      }),
          startMarkTime = _this$_getTimesOfPhas.startMarkTime,
          finishMarkTime = _this$_getTimesOfPhas.finishMarkTime;

      if (startMarkTime && !finishMarkTime) {
        return true;
      }
    }

    return false;
  };

  _proto._getFlowsOfError = function _getFlowsOfError() {
    var flowsWithErrors = this._errorHappenedInOneOfAppLoadFlows() ? [APP_LOAD_ERROR_FLOW] : [];
    return [].concat(flowsWithErrors, this._getInteractionNamesWhereErrorHappened());
  };

  _proto._getInteractionNamesWhereErrorHappened = function _getInteractionNamesWhereErrorHappened() {
    var interactionsFromInstance = this._getInteractionNamesWhereErrorHappenedFromInstance();

    if (interactionsFromInstance.length) {
      return interactionsFromInstance;
    }

    var interactionsFromWindow = Object.keys(this._getInteractionsObjectFromWindow());

    if (interactionsFromWindow.length) {
      return interactionsFromWindow;
    }

    return this._getInteractionNamesWhereErrorHappenedFromPerformanceMarks();
  };

  _proto._getInteractionNamesWhereErrorHappenedFromInstance = function _getInteractionNamesWhereErrorHappenedFromInstance() {
    return Object.keys(this._outgoingInteractions);
  };

  _proto._getInteractionNamesWhereErrorHappenedFromPerformanceMarks = function _getInteractionNamesWhereErrorHappenedFromPerformanceMarks() {
    var interactionMarks = this._getInteractionMarksOfCurrentApp();

    return BaseLogger._getInteractionsThatDidntEndFromMarks(interactionMarks);
  };

  _proto._getInteractionMarksOfCurrentApp = function _getInteractionMarksOfCurrentApp() {
    var _this8 = this;

    var allMarks = performance_performance.getMarks();
    return allMarks.reduce(function (interactionMarksOfCurrentApp, mark) {
      var markData = getInteractionMark(mark.name);

      if (markData && markData.appName === _this8.appName) {
        interactionMarksOfCurrentApp[markData.interactionName] = interactionMarksOfCurrentApp[markData.interactionName] || [];
        interactionMarksOfCurrentApp[markData.interactionName].push({
          startTime: mark.startTime,
          name: mark.name
        });
      }

      return interactionMarksOfCurrentApp;
    }, {});
  };

  BaseLogger._getInteractionsThatDidntEndFromMarks = function _getInteractionsThatDidntEndFromMarks(interactionsMarks) {
    var unFinishedInteractions = [];

    for (var interactionName in interactionsMarks) {
      if (interactionsMarks.hasOwnProperty(interactionName)) {
        var _BaseLogger$_countSta = BaseLogger._countStartedEndedInteractionMarks(interactionsMarks[interactionName]),
            startedInteractions = _BaseLogger$_countSta.startedInteractions,
            endedInteractions = _BaseLogger$_countSta.endedInteractions;

        var noInteractionMarks = !startedInteractions && !endedInteractions;
        var moreStartedOrEndedInteractions = startedInteractions - endedInteractions !== 0;

        if (noInteractionMarks || moreStartedOrEndedInteractions) {
          unFinishedInteractions.push(interactionName);
        }
      }
    }

    return unFinishedInteractions;
  };

  BaseLogger._countStartedEndedInteractionMarks = function _countStartedEndedInteractionMarks(interactionsMarks) {
    var startedInteractions = 0;
    var endedInteractions = 0;
    interactionsMarks.forEach(function (mark) {
      if (mark.name.includes('started')) {
        startedInteractions++;
      } else if (mark.name.includes('ended')) {
        endedInteractions++;
      }
    });
    return {
      startedInteractions: startedInteractions,
      endedInteractions: endedInteractions
    };
  };

  _proto.registerPlatformTenants = function registerPlatformTenants(appNames) {
    this._platformTenantsPromise.resolve(appNames);
  };

  _proto._reportWebVitalsWhenAvailable = function _reportWebVitalsWhenAvailable() {
    var _this9 = this;

    Promise.all([this._webVitalsLoadedPromise, this._platformTenantsPromise]).then(function (_ref21) {
      var webVitalsLoaded = _ref21[0],
          platformTenantAppNames = _ref21[1];
      var cls = webVitalsLoaded.cls,
          lcp = webVitalsLoaded.lcp;
      platformTenantAppNames.forEach(function (appName) {
        var dataSource = _this9.dataSource.addItem(_this9.dataItems.webVitalsLoaded()).addItem(_this9.dataItems.appName({
          appName: appName
        })).addItem({
          cls: cls,
          lcp: lcp
        });

        _this9._report(dataSource);
      });
    });
    Promise.all([this._webVitalsFirstInputPromise, this._platformTenantsPromise]).then(function (_ref22) {
      var webVitalsFirstInput = _ref22[0],
          platformTenantAppNames = _ref22[1];
      var delay = webVitalsFirstInput.delay;
      platformTenantAppNames.forEach(function (appName) {
        var dataSource = _this9.dataSource.addItem(_this9.dataItems.webVitalsFirstInput()).addItem(_this9.dataItems.appName({
          appName: appName
        })).addItem({
          fid: delay
        });

        _this9._report(dataSource);
      });
    });
  };

  _createClass(BaseLogger, [{
    key: "dataSource",
    get: function get() {
      return this.dataSourceBase.clone();
    }
  }, {
    key: "sessionId",
    get: function get() {
      return this.getParam('sessionId');
    },
    set: function set(sessionId) {
      this.params['sessionId'] = sessionId;
    }
  }]);

  return BaseLogger;
}();


// CONCATENATED MODULE: ./logger-factory.js
function logger_factory_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function logger_factory_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? logger_factory_ownKeys(Object(source), !0).forEach(function (key) { logger_factory_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : logger_factory_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function logger_factory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function getAppVersion() {
  return Object(env["a" /* env */])().__CI_APP_VERSION__ || DEFAULT_APP_VERSION;
}
/*
 * @param baseUrl
 * @param appId
 * @param disableAutoLoadFinish
 * @param interactionTimeout
 * @param timeoutHook
 * @param startHook
 * @param endHook
 * @param biLoggerFactory
 * @param endpoint
 * @param endpoint artifactData
 */

/**
 * @param {string} appName
 */


function logger_factory_create(appName, params) {
  if (params === void 0) {
    params = {};
  }

  if (!appName) {
    return null;
  }

  var appNameWithoutDots = appName.replace(/\./g, '-').toLowerCase();
  Object(global_app_data["c" /* initializeGlobal */])(appNameWithoutDots);

  var fullParams = logger_factory_objectSpread(logger_factory_objectSpread({}, params), {}, {
    preset: presetLoader(params.presetType)
  });

  var reporter = create(fullParams);
  return new base_logger_BaseLogger(appNameWithoutDots, getAppVersion(), reporter, fullParams);
}
/**
 * Report application started loading
 * @param {string} appName Application/Dashboard name
 * @param {{artifactData}} artifact data
 */

function reportAppLoadStarted(appName, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      artifactData = _ref.artifactData,
      presetType = _ref.presetType,
      isPersistent = _ref.isPersistent,
      paramsOverrides = _ref.paramsOverrides;

  Object(global_app_data["c" /* initializeGlobal */])(appName);
  Object(global_app_data["d" /* setLoadStartTime */])(appName, performance_performance.responseEndTime() || performance_performance.now());
  var sessionId = session_manager.getSessionId();
  Object(global_app_data["e" /* setSessionId */])(sessionId);
  var preset = presetLoader(presetType);
  var endpoint = isPersistent === true ? preset.persistentEndpoint : preset.nonPersistentEndpoint;
  var urlSearchParams = new URLSearchParams();
  urlSearchParams.set('appName', appName);
  urlSearchParams.set('src', preset.src);
  urlSearchParams.set('evid', preset.appLoadStart.eventId);
  urlSearchParams.set('session_id', sessionId);
  urlSearchParams.set('_', Math.random());
  urlSearchParams.set('is_rollout', false);

  if (artifactData) {
    urlSearchParams.set('artifactId', artifactData.id);
    urlSearchParams.set('artifactVersion', artifactData.version);
    urlSearchParams.set('is_rollout', artifactData.isRollout);
  }

  var cookieOverrides = new cookie_overrides_CookieOverrides().getCookieOverridesForApp(appName);
  Object.keys(cookieOverrides || {}).forEach(function (x) {
    return urlSearchParams.set(x, cookieOverrides[x]);
  });
  Object.keys(paramsOverrides || {}).forEach(function (x) {
    return urlSearchParams.set(x, paramsOverrides[x]);
  });
  var url = "//frog.wix.com/" + endpoint + "?" + urlSearchParams.toString();

  if (Object(env["b" /* hasSendBeacon */])()) {
    Object(env["c" /* sendBeacon */])(url);
  } else {
    new Image().src = url;
  }
}
var logger_factory_phasesConfig = phasesConfigValues;

/***/ }),
/* 28 */
/*!***************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BiLoggerClientFactory = __webpack_require__(/*! ./bi-logger-factory */ 29);
var BiLogger = __webpack_require__(/*! ./bi-logger */ 14);
var biLoggerManager = __webpack_require__(/*! ./bi-logger-manager */ 15);
var BatchQueue = __webpack_require__(/*! ./utils/batch-queue */ 6);

module.exports.BiLoggerFactory = BiLoggerClientFactory;
module.exports.BiLogger = BiLogger;
module.exports.BiLoggerManager = biLoggerManager.BiLoggerManager;

module.exports.factory = function () {
  return new BiLoggerClientFactory();
};
module.exports.manager = biLoggerManager.manager;
module.exports.createBatchQueue = function () {
  return new BatchQueue();
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/bi-logger-factory.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var assert = __webpack_require__(/*! ./assert */ 5);
var BiLogger = __webpack_require__(/*! ./bi-logger */ 14);
var biLoggerManager = __webpack_require__(/*! ./bi-logger-manager */ 15);
var BatchQueue = __webpack_require__(/*! ./utils/batch-queue */ 6);

var BiLoggerFactory = function () {
  function BiLoggerFactory() {
    _classCallCheck(this, BiLoggerFactory);

    this._publishers = [];
    this._validators = [];
    this._defaults = {};
    this._nonEssentialDefaults = {};
    this._events = {};
    this._isMuted = false;
    this._eventTransformer = null;
    this._payloadTransformer = null;
    this._consentPolicyGetter = null;
    this._maxBatchSize = null;
    this._batchQueue = null;
  }

  _createClass(BiLoggerFactory, [{
    key: 'addPublisher',
    value: function addPublisher(publisher) {
      assert.defined(publisher, 'Publisher must be provided');
      assert.ok(typeof publisher === 'function', 'Expected a publisher function');
      this._publishers.push(publisher);
      return this;
    }
  }, {
    key: 'addValidator',
    value: function addValidator(validator) {
      assert.defined(validator, 'Validator must be provided');
      assert.ok((typeof validator === 'undefined' ? 'undefined' : _typeof(validator)) === 'object' && validator, 'Expected a validator object');
      assert.ok(validator.execute && validator.match, 'Provided validator does not match the interface');
      this._validators.push(validator);
      return this;
    }
  }, {
    key: 'setDefaults',
    value: function setDefaults(defaults) {
      assert.defined(defaults, 'Defaults must be provided');
      assert.object(defaults, 'Defaults must be an object');
      this._defaults = defaults;
      return this;
    }
  }, {
    key: 'updateDefaults',
    value: function updateDefaults(defaults) {
      assert.defined(defaults, 'Defaults must be provided');
      assert.object(defaults, 'Defaults must be an object');
      Object.assign(this._defaults, defaults);
      return this;
    }
  }, {
    key: 'updateNonEssentialDefaults',
    value: function updateNonEssentialDefaults(defaults) {
      assert.defined(defaults, 'Non-essential Defaults must be provided');
      assert.object(defaults, 'Non-essential Defaults must be an object');
      Object.assign(this._nonEssentialDefaults, defaults);
      return this;
    }
  }, {
    key: 'setEvents',
    value: function setEvents(events) {
      assert.defined(events, 'Events must be provided');
      assert.object(events, 'Events must be an object');
      this._events = events;
      return this;
    }
  }, {
    key: 'setDefaultValueTimeout',
    value: function setDefaultValueTimeout(defaultValueTimeout) {
      assert.defined(defaultValueTimeout, 'Default Value Timeout must be provided');
      this._defaultValueTimeout = defaultValueTimeout;
      return this;
    }
  }, {
    key: 'setDefaultContinueOnFail',
    value: function setDefaultContinueOnFail(defaultContinueOnFail) {
      assert.defined(defaultContinueOnFail, 'Default Continue On Fail must be provided');
      this._defaultContinueOnFail = defaultContinueOnFail;
      return this;
    }
  }, {
    key: 'setPublisherFailHandler',
    value: function setPublisherFailHandler(onPublisherFailHandler) {
      assert.defined(onPublisherFailHandler, 'Publisher Fail Handler must be provided');
      this._onPublisherFailHandler = onPublisherFailHandler;
      return this;
    }
  }, {
    key: 'setMuted',
    value: function setMuted(isMuted) {
      assert.defined(isMuted, 'Is Muted must be provided');
      assert.boolean(isMuted, 'Is Muted must be a boolean');
      this._isMuted = isMuted;
      return this;
    }
  }, {
    key: 'setMaxBatchSize',
    value: function setMaxBatchSize(maxBatchSize) {
      assert.defined(maxBatchSize, 'Max Batch Size must be provided');
      assert.number(maxBatchSize, 'Max Batch Size must be a number');
      assert.ok(maxBatchSize > 0, 'Max Batch Size must be higher than 0');
      this._maxBatchSize = maxBatchSize;
      return this;
    }
  }, {
    key: 'setGlobalBatchQueue',
    value: function setGlobalBatchQueue(batchQueue) {
      assert.defined(batchQueue, 'Global Batch Queue must be provided');
      assert.ok(batchQueue instanceof BatchQueue, 'Global Batch Queue must be an instance of BatchQueue');
      this._globalBatchQueue = batchQueue;
      return this;
    }
  }, {
    key: 'withEventTransformer',
    value: function withEventTransformer(transformer) {
      assert.defined(transformer, 'Event Transformer must be provided');
      assert.func(transformer, 'Event Transformer must be a function');
      this._eventTransformer = transformer;
      return this;
    }
  }, {
    key: 'withPayloadTransformer',
    value: function withPayloadTransformer(transformer) {
      assert.defined(transformer, 'Payload Transformer must be provided');
      assert.func(transformer, 'Payload Transformer must be a function');
      this._payloadTransformer = transformer;
      return this;
    }
  }, {
    key: 'withConsentPolicyGetter',
    value: function withConsentPolicyGetter(getter) {
      assert.defined(getter, 'Consent Policy Getter must be provided');
      assert.func(getter, 'Consent Policy Getter must be a function');
      this._consentPolicyGetter = getter;
      return this;
    }
  }, {
    key: 'logger',
    value: function logger(context) {
      var _this = this;

      var logger = new BiLogger({
        publishers: this._publishers,
        validators: this._validators,
        defaults: this._defaults,
        events: this._events,
        defaultValueTimeout: this._defaultValueTimeout,
        defaultContinueOnFail: this._defaultContinueOnFail,
        onPublisherFailHandler: this._onPublisherFailHandler,
        isMuted: function isMuted() {
          return _this._isMuted;
        },
        eventTransformer: this._eventTransformer,
        payloadTransformer: this._payloadTransformer,
        consentPolicyGetter: this._consentPolicyGetter,
        nonEssentialDefaults: this._nonEssentialDefaults,
        maxBatchSize: this._maxBatchSize,
        globalBatchQueue: this._globalBatchQueue
      }, context);

      biLoggerManager.manager.notifyLoggerCreated(logger);

      return logger;
    }
  }]);

  return BiLoggerFactory;
}();

module.exports = BiLoggerFactory;
//# sourceMappingURL=bi-logger-factory.js.map

/***/ }),
/* 30 */
/*!***************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/collections.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback iterateeCallback
 * @param {*} Value
 * @param {string} Key
 * @param {object} Original object
 */
/**
 * Iterates over object values
 * @param {Object} collection
 * @param {iterateeCallback} iteratee
 * @return {Object} iterated object
 */
module.exports.mapValues = function (collection, iteratee) {
  if (!collection) {
    return {};
  }

  return Object.keys(collection).reduce(function (acc, key) {
    acc[key] = iteratee(collection[key], key, collection);
    return acc;
  }, {});
};

module.exports.filterValues = function (collection, iteratee) {
  if (!collection) {
    return {};
  }

  return Object.keys(collection).reduce(function (acc, key) {
    var keep = iteratee(collection[key], key, collection);

    if (keep) {
      acc[key] = collection[key];
    }

    return acc;
  }, {});
};
//# sourceMappingURL=collections.js.map

/***/ }),
/* 31 */
/*!***********************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * rejects original promise after specified timeout
 * @param {Promise<R>} promise Original promise
 * @param {string} [message] Additional message for timeout reject
 * @param {number} timeout Time for reject
 * @return {Promise<R>}
 */
module.exports.timedPromise = function (promise, _ref) {
  var message = _ref.message,
      timeout = _ref.timeout;

  var timeoutPromise = new Promise(function (resolve, reject) {
    setTimeout(reject, timeout, message ? 'Timeout: ' + message : 'Timeout');
  });
  return Promise.race([promise, timeoutPromise]);
};

/**
 * Works like Promise.all expect uses object insetead of array.
 * @param {Object} promiseObject
 * @return {Promise} Promise wiht original keys and resolved values
 */
module.exports.allAsObject = function (promiseObject) {
  var keys = Object.keys(promiseObject);
  return Promise.all(keys.map(function (key) {
    return promiseObject[key];
  })).then(function (resolved) {
    return resolved.reduce(function (acc, value, i) {
      acc[keys[i]] = value;
      return acc;
    }, {});
  });
};
//# sourceMappingURL=promise.js.map

/***/ }),
/* 32 */
/*!*******************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/log.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  error: function error() {
    if (console && console.error) {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }
};
//# sourceMappingURL=log.js.map

/***/ }),
/* 33 */
/*!************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/debounce.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout = void 0;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function () {
    // Store the context of this and any parameters passed to executedFunction
    var context = this;
    var args = arguments;

    // The function to be called after
    // the debounce time has elapsed
    var later = function later() {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not on the leading end
      if (!immediate) {
        func.apply(context, args);
      }
    };

    // Determine if you should call the function
    // on the leading or trail end
    var callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the
    // inside of the previous setTimeout
    clearTimeout(timeout);

    // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs node)
    timeout = setTimeout(later, wait);

    // Call immediately if you're dong a leading
    // end execution
    if (callNow) {
      func.apply(context, args);
    }
  };
}

module.exports = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 34 */
/*!************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/utils/throttle.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function throttle(func, wait) {
  var timeout = void 0;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(undefined, args);
        timeout = null;
      }, wait);
    }
  };
}

module.exports = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 35 */
/*!************************************************************************!*\
  !*** ../node_modules/@wix/wix-bi-logger-client/dist/consent-policy.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DefaultConsentPolicy = {
  functional: true,
  analytics: true,
  __default: true
};

var getPolicy = function getPolicy(consentPolicyGetter) {
  return typeof consentPolicyGetter === 'function' && consentPolicyGetter() || DefaultConsentPolicy;
};

var shouldMuteNonEssentials = function shouldMuteNonEssentials(policy) {
  return policy.functional === false || policy.analytics === false;
};

var shouldMuteByCategory = function shouldMuteByCategory(policy, category) {
  if (category === 'essential') {
    return false;
  }

  if (category === 'functional' || category === 'analytics') {
    return policy[category] === false;
  }

  return shouldMuteNonEssentials(policy);
};

module.exports = {
  shouldMuteNonEssentials: shouldMuteNonEssentials,
  shouldMuteByCategory: shouldMuteByCategory,
  getPolicy: getPolicy
};
//# sourceMappingURL=consent-policy.js.map

/***/ }),
/* 36 */
/*!*****************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/assert.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ok = exports.object = exports.defined = void 0;
var errors_1 = __webpack_require__(/*! ./errors */ 7);
var defined = function (target, message) {
    if (target === undefined) {
        throw new errors_1.AssertionError(message);
    }
};
exports.defined = defined;
var object = function (target, message) {
    if (target !== undefined &&
        (typeof target !== 'object' || Array.isArray(target) || target === null)) {
        throw new errors_1.AssertionError(message);
    }
};
exports.object = object;
var ok = function (target, message) {
    if (!target) {
        throw new errors_1.AssertionError(message);
    }
};
exports.ok = ok;
//# sourceMappingURL=assert.js.map

/***/ }),
/* 37 */
/*!*********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/publishers.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransformers = exports.getPublisher = exports.postMessagePublisher = exports.xhrPublisher = exports.fetchPublisher = exports.beaconPublisher = exports.imagePublisher = exports.resolvePublisher = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ 16);
var env_1 = __webpack_require__(/*! ./env */ 3);
var errors_1 = __webpack_require__(/*! ./errors */ 7);
var types_1 = __webpack_require__(/*! ../types */ 10);
var transport_1 = __webpack_require__(/*! ./transport */ 38);
var getHttpMethod = function (context) {
    return context.useBatch ? 'POST' : 'GET';
};
var resolvePublisher = function (options, publishFunctions) {
    var publisherFactory;
    var publishFunction;
    if (options.publishMethod === types_1.PublishMethods.PostMessage) {
        publisherFactory = postMessagePublisher;
        publishFunction =
            publishFunctions && publishFunctions[types_1.PublishMethods.PostMessage];
    }
    else if (options.publishMethod === types_1.PublishMethods.Fetch) {
        publisherFactory = fetchPublisher;
        publishFunction =
            publishFunctions && publishFunctions[types_1.PublishMethods.Fetch];
    }
    else if ((0, env_1.isWebWorker)()) {
        publisherFactory = fetchPublisher;
    }
    else {
        publisherFactory = beaconPublisher;
    }
    return publisherFactory(options, publishFunction);
};
exports.resolvePublisher = resolvePublisher;
function imagePublisher(options) {
    if (options === void 0) { options = {}; }
    return function image(params, context) {
        if (context === void 0) { context = {}; }
        if (context.useBatch) {
            throw new errors_1.APINotSupportedError("Can't use image publisher to send batched events.");
        }
        var url = (0, utils_1.buildBiUrl)(options, params, context);
        return (0, transport_1.pixelTransport)(url, context.image);
    };
}
exports.imagePublisher = imagePublisher;
function beaconPublisher(options) {
    if (options === void 0) { options = {}; }
    return function beacon(params, context) {
        if (context === void 0) { context = {}; }
        var url = (0, utils_1.buildBiUrl)(options, params, context);
        return (0, transport_1.beaconTransport)(url, params, !!context.useBatch).catch(function () {
            var method = getHttpMethod(context);
            return context.useBatch
                ? (0, transport_1.fetchTransport)(url, params, method).catch(function (error) {
                    return error instanceof errors_1.APINotSupportedError
                        ? (0, transport_1.xhrTransport)(url, params, method)
                        : Promise.reject(error);
                })
                : (0, transport_1.pixelTransport)(url, context.image);
        });
    };
}
exports.beaconPublisher = beaconPublisher;
function fetchPublisher(options, fetchFunction) {
    if (options === void 0) { options = {}; }
    return function fetch(params, context) {
        if (context === void 0) { context = {}; }
        var url = (0, utils_1.buildBiUrl)(options, params, context);
        var method = getHttpMethod(context);
        return (0, transport_1.fetchTransport)(url, params, method, fetchFunction).catch(function (error) {
            return error instanceof errors_1.APINotSupportedError
                ? (0, transport_1.xhrTransport)(url, params, method)
                : Promise.reject(error);
        });
    };
}
exports.fetchPublisher = fetchPublisher;
function xhrPublisher(options) {
    if (options === void 0) { options = {}; }
    return function xhr(params, context) {
        if (context === void 0) { context = {}; }
        var url = (0, utils_1.buildBiUrl)(options, params, context);
        var method = getHttpMethod(context);
        return (0, transport_1.xhrTransport)(url, params, method);
    };
}
exports.xhrPublisher = xhrPublisher;
function postMessagePublisher(options, publishFunction) {
    if (options === void 0) { options = {}; }
    return function postMessage(params) {
        return (0, transport_1.postMessageTransport)(params, publishFunction);
    };
}
exports.postMessagePublisher = postMessagePublisher;
function getPublisher(options, publishFunctions) {
    return (0, exports.resolvePublisher)(options, publishFunctions);
}
exports.getPublisher = getPublisher;
var getTransformers = function (factoryOptions, transformer) {
    var _eventTransformer, _payloadTransformer;
    if (transformer) {
        if (typeof transformer !== 'function' &&
            transformer.postMessage &&
            factoryOptions.publishMethod === types_1.PublishMethods.PostMessage) {
            _payloadTransformer = transformer.postMessage;
        }
        else if (typeof transformer === 'function') {
            _eventTransformer = transformer;
        }
    }
    var eventTransformer = _eventTransformer;
    var payloadTransformer = function (params, publisherContext) {
        if (publisherContext.useBatch) {
            var getEndpoint_1 = function (context) {
                return ((context === null || context === void 0 ? void 0 : context.endpoint) ||
                    publisherContext.endpoint ||
                    factoryOptions.endpoint);
            };
            params.e = params.e.map(function (e) {
                var context = e.context, event = __rest(e, ["context"]);
                var res = __assign(__assign({}, event), { f: __assign(__assign({}, event.f), { _rp: getEndpoint_1(context) }) });
                return res;
            });
        }
        return _payloadTransformer ? _payloadTransformer(params) : params;
    };
    return { eventTransformer: eventTransformer, payloadTransformer: payloadTransformer };
};
exports.getTransformers = getTransformers;
//# sourceMappingURL=publishers.js.map

/***/ }),
/* 38 */
/*!********************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/transport.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessageTransport = exports.xhrTransport = exports.fetchTransport = exports.pixelTransport = exports.beaconTransport = void 0;
var browser_1 = __webpack_require__(/*! ./browser */ 8);
var errors_1 = __webpack_require__(/*! ./errors */ 7);
function beaconTransport(url, params, sendInBody) {
    if (sendInBody === void 0) { sendInBody = false; }
    return new Promise(function (resolve, reject) {
        return (0, browser_1.sendBeacon)(url, sendInBody ? JSON.stringify(params) : undefined)
            ? resolve()
            : reject(new Error('Transport Error: Cannot send bi using beacon'));
    });
}
exports.beaconTransport = beaconTransport;
function pixelTransport(url, image) {
    return new Promise(function (resolve, reject) {
        var biImage = image || new window.Image(0, 0);
        biImage.onload = function () { return resolve(); };
        biImage.onerror = function () {
            return reject(new Error('Transport Error: Cannot send bi using pixel'));
        };
        biImage.src = url;
    });
}
exports.pixelTransport = pixelTransport;
function fetchTransport(url, params, method, fetchFunction) {
    if (method === void 0) { method = 'GET'; }
    if (typeof fetchFunction === 'undefined') {
        if (typeof fetch === 'undefined') {
            return Promise.reject(new errors_1.APINotSupportedError('fetch'));
        }
        fetchFunction = fetch;
    }
    var options = {
        method: method,
        credentials: 'include',
    };
    if (method === 'POST') {
        options.body = JSON.stringify(params);
    }
    else {
        options.keepalive = true;
    }
    return fetchFunction(url, options).then(function (response) {
        if (!response.ok) {
            throw Error("Transport Error: Cannot send bi using fetch. Status: ".concat(response.status));
        }
    });
}
exports.fetchTransport = fetchTransport;
function xhrTransport(url, params, method) {
    if (method === void 0) { method = 'GET'; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, "".concat(location.protocol).concat(url));
        xhr.onload = resolve;
        xhr.onerror = function () {
            reject(new Error("Transport Error: Cannot send bi using xhr."));
        };
        xhr.withCredentials = true;
        if (method === 'POST') {
            xhr.send(JSON.stringify(params));
        }
        else {
            xhr.send();
        }
    });
}
exports.xhrTransport = xhrTransport;
function postMessageTransport(message, postMesasage) {
    if (postMesasage === void 0) { postMesasage = self.postMessage; }
    var messageArgs = [message];
    // when not in a web worker...
    if (typeof WorkerGlobalScope === 'undefined') {
        messageArgs.push('*');
    }
    return postMesasage.apply(self, messageArgs);
}
exports.postMessageTransport = postMessageTransport;
//# sourceMappingURL=transport.js.map

/***/ }),
/* 39 */
/*!*************************************************************************!*\
  !*** ../node_modules/@wix/web-bi-logger/dist/src/lib/event-defaults.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommonDefaults = exports.getUserDefaults = exports.transformDefaults = void 0;
var constants_1 = __webpack_require__(/*! ../constants */ 9);
var browser_1 = __webpack_require__(/*! ./browser */ 8);
var common_config_1 = __webpack_require__(/*! ./common-config */ 17);
var utils_1 = __webpack_require__(/*! ./utils */ 16);
var transformDefaults = function (context) {
    return Object.keys(context).reduce(function (res, key) {
        var mappedKey = constants_1.EventContextMap[key] || key;
        if (constants_1.EventContextMap[key] && typeof context[key] !== 'undefined') {
            res[mappedKey] = context[key];
        }
        else {
            res[key] = context[key];
        }
        return res;
    }, {});
};
exports.transformDefaults = transformDefaults;
var getUserDefaults = function () {
    return (0, utils_1.getCookies)({
        clientId: '_wixCIDX',
        uuid: {
            name: '_wixUIDX',
            transform: function (value) { return typeof value === 'string' && value.split('|')[1]; },
        },
    });
};
exports.getUserDefaults = getUserDefaults;
var getCommonDefaults = function (commonConfigGetter, consentPolicyGetter) {
    return (0, exports.transformDefaults)({
        brandId: function () { return (0, common_config_1.getBrand)(commonConfigGetter); },
        siteBranchId: function () { return (0, common_config_1.getBranchId)(commonConfigGetter); },
        ms: function () { return Math.round((0, browser_1.now)()); },
        lv: constants_1.LoggerVersion,
    });
};
exports.getCommonDefaults = getCommonDefaults;
//# sourceMappingURL=event-defaults.js.map

/***/ }),
/* 40 */
/*!************************!*\
  !*** ./app-angular.js ***!
  \************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is an entry point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_app_data_global_app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-app-data/global-app-data */ 1);
/* harmony import */ var _logger_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger-factory */ 27);


angular.module('fedops', []);
angular.module('fedops').provider('fedopsLogger', function () {
  return {
    setAppName: function setAppName(name) {
      this.appName = name;
      return this;
    },
    setAppId: function setAppId(appId) {
      this.appId = appId;
      return this;
    },
    setBaseUrl: function setBaseUrl(url) {
      this.baseUrl = url;
      return this;
    },
    setDisableAutoLoadFinish: function setDisableAutoLoadFinish() {
      this.disableAutoLoadFinish = true;
      return this;
    },
    setNetworkAnalysis: function setNetworkAnalysis() {
      this.networkAnalysis = true;
    },
    $get: function $get() {
      return Object(_logger_factory__WEBPACK_IMPORTED_MODULE_1__["create"])(this.appName, {
        baseUrl: this.baseUrl,
        appId: this.appId,
        disableAutoLoadFinish: this.disableAutoLoadFinish,
        networkAnalysis: this.networkAnalysis,
        useBatch: false
      });
    }
  };
}).config(function () {
  Object(_global_app_data_global_app_data__WEBPACK_IMPORTED_MODULE_0__[/* initializeFedops */ "b"])();
}).config(['$provide', function ($provide) {
  $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {
    return function (exception, cause) {
      $delegate(exception, cause);
    };
  }]);
}]).run(['$injector', 'fedopsLogger', function ($injector, fedopsLogger) {
  $injector.get('$$testability').whenStable(function () {
    if (!fedopsLogger || fedopsLogger.isDisableAutoLoadFinish()) {
      return;
    }

    fedopsLogger.appLoaded();
  });
}]);

/***/ })
/******/ ]);
});
//# sourceMappingURL=fedops-logger-angular.bundle.js.map