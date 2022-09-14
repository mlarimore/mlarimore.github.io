/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5708:
/*!*****************************************************************************************************!*\
  !*** ../../../node_modules/@wix/yoshi-webpack-utils/node_modules/@babel/runtime/helpers/extends.js ***!
  \*****************************************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 841:
/*!*************************************************!*\
  !*** ../../../node_modules/classnames/index.js ***!
  \*************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 673:
/*!*******************************************************!*\
  !*** ../../../node_modules/lodash.frompairs/index.js ***!
  \*******************************************************/
/***/ (function(module) {

/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['fred', 30], ['barney', 40]]);
 * // => { 'fred': 30, 'barney': 40 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs ? pairs.length : 0,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ }),

/***/ 1397:
/*!**************************************************!*\
  !*** ../../../node_modules/ngcomponent/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var assign = __webpack_require__(/*! lodash/assign */ 3830);
var mapValues = __webpack_require__(/*! lodash/mapValues */ 5410);
var some = __webpack_require__(/*! lodash/some */ 5227);
var NgComponent = /** @class */ (function () {
    function NgComponent() {
        this.__isFirstRender = true;
        this.state = {};
        this.props = {};
    }
    /*
      eg. {
        as: {currentValue: [1, 2, 3], previousValue: [1, 2]},
        bs: {currentValue: 42, previousValue: undefined}
      }
    */
    // nb: this method is explicity exposed for unit testing
    NgComponent.prototype.$onChanges = function (changes) {
        var oldProps = this.props;
        // TODO: fix Lodash typings upstream
        var newProps = mapValues(changes, 'currentValue');
        // TODO: implement nextState (which also means implement this.setState)
        var nextProps = assign({}, this.props, newProps);
        if (this.__isFirstRender) {
            assign(this, { props: nextProps });
            this.componentWillMount();
            this.render();
            this.__isFirstRender = false;
        }
        else {
            if (!this.didPropsChange(newProps, oldProps))
                return;
            this.componentWillReceiveProps(nextProps);
            var shouldUpdate = this.shouldComponentUpdate(nextProps, this.state);
            assign(this, { props: nextProps });
            if (!shouldUpdate)
                return;
            this.componentWillUpdate(this.props, this.state);
            this.render();
            this.componentDidUpdate(this.props, this.state);
        }
    };
    NgComponent.prototype.$postLink = function () {
        this.componentDidMount();
    };
    NgComponent.prototype.$onDestroy = function () {
        this.componentWillUnmount();
    };
    NgComponent.prototype.didPropsChange = function (newProps, oldProps) {
        return some(newProps, function (v, k) { return v !== oldProps[k]; });
    };
    /*
      lifecycle hooks
    */
    NgComponent.prototype.componentWillMount = function () { };
    NgComponent.prototype.componentDidMount = function () { };
    NgComponent.prototype.componentWillReceiveProps = function (_props) { };
    NgComponent.prototype.shouldComponentUpdate = function (_nextProps, _nextState) { return true; };
    NgComponent.prototype.componentWillUpdate = function (_props, _state) { };
    NgComponent.prototype.componentDidUpdate = function (_props, _state) { };
    NgComponent.prototype.componentWillUnmount = function () { };
    NgComponent.prototype.render = function () { };
    return NgComponent;
}());
exports["default"] = NgComponent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5182:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_DataView.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733),
    root = __webpack_require__(/*! ./_root */ 150);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 7836:
/*!**********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Hash.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ 2545),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ 3911),
    hashGet = __webpack_require__(/*! ./_hashGet */ 1933),
    hashHas = __webpack_require__(/*! ./_hashHas */ 1898),
    hashSet = __webpack_require__(/*! ./_hashSet */ 7798);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 738:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_ListCache.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 688),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 4294),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 9006),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 8149),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 4870);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 986:
/*!*********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Map.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733),
    root = __webpack_require__(/*! ./_root */ 150);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 9361:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_MapCache.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 6362),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 3201),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 902),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 9933),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 4815);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 8245:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Promise.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733),
    root = __webpack_require__(/*! ./_root */ 150);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 5482:
/*!*********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Set.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733),
    root = __webpack_require__(/*! ./_root */ 150);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 8867:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_SetCache.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 9361),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 2560),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 8528);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 4861:
/*!***********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Stack.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 738),
    stackClear = __webpack_require__(/*! ./_stackClear */ 6658),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ 9182),
    stackGet = __webpack_require__(/*! ./_stackGet */ 6450),
    stackHas = __webpack_require__(/*! ./_stackHas */ 2863),
    stackSet = __webpack_require__(/*! ./_stackSet */ 4641);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 553:
/*!************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Symbol.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 150);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 7763:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_Uint8Array.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 150);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 5390:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_WeakMap.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733),
    root = __webpack_require__(/*! ./_root */ 150);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 3440:
/*!***********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_apply.js ***!
  \***********************************************************************/
/***/ (function(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 7257:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_arrayFilter.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 5066:
/*!*******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_arrayLikeKeys.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ 7282),
    isArguments = __webpack_require__(/*! ./isArguments */ 5844),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 2033),
    isIndex = __webpack_require__(/*! ./_isIndex */ 6788),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 525);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 5070:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_arrayMap.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 3392:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_arrayPush.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 3443:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_arraySome.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 4199:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_assignValue.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 8040),
    eq = __webpack_require__(/*! ./eq */ 3142);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 6700:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_assocIndexOf.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 3142);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 8040:
/*!*********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseAssignValue.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ 5059);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 8097:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseEach.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 6446),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 3208);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 1956:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseFor.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 6156);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 6446:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseForOwn.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ 1956),
    keys = __webpack_require__(/*! ./keys */ 9291);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 59:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseGet.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 6680),
    toKey = __webpack_require__(/*! ./_toKey */ 2886);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 9529:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseGetAllKeys.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ 3392),
    isArray = __webpack_require__(/*! ./isArray */ 2139);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 532:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseGetTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 553),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ 1485),
    objectToString = __webpack_require__(/*! ./_objectToString */ 4016);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 215:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseHasIn.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 8504:
/*!*********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsArguments.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 532),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 6231);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 3183:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsEqual.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 8942),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 6231);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 8942:
/*!*********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsEqualDeep.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 4861),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 4184),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ 6959),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ 5167),
    getTag = __webpack_require__(/*! ./_getTag */ 1141),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    isBuffer = __webpack_require__(/*! ./isBuffer */ 2033),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 525);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 1495:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsMatch.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ 4861),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 3183);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 3044:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsNative.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 9322),
    isMasked = __webpack_require__(/*! ./_isMasked */ 719),
    isObject = __webpack_require__(/*! ./isObject */ 7518),
    toSource = __webpack_require__(/*! ./_toSource */ 4012);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 7643:
/*!**********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIsTypedArray.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 532),
    isLength = __webpack_require__(/*! ./isLength */ 8162),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 6231);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 7377:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseIteratee.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ 386),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 3857),
    identity = __webpack_require__(/*! ./identity */ 2156),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    property = __webpack_require__(/*! ./property */ 3482);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 8514:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseKeys.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ 2559),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 5978);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 386:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseMatches.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 1495),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ 2514),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 814);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 3857:
/*!*************************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseMatchesProperty.js ***!
  \*************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 3183),
    get = __webpack_require__(/*! ./get */ 113),
    hasIn = __webpack_require__(/*! ./hasIn */ 8191),
    isKey = __webpack_require__(/*! ./_isKey */ 1901),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 5537),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 814),
    toKey = __webpack_require__(/*! ./_toKey */ 2886);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 8513:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseProperty.js ***!
  \******************************************************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 4556:
/*!**********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_basePropertyDeep.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 59);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 1752:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseRest.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ 2156),
    overRest = __webpack_require__(/*! ./_overRest */ 8159),
    setToString = __webpack_require__(/*! ./_setToString */ 5445);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 1989:
/*!*********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseSetToString.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ 4469),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ 5059),
    identity = __webpack_require__(/*! ./identity */ 2156);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 7100:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseSome.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ 8097);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ 7282:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseTimes.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 1364:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseToString.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 553),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ 5070),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 4847);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 6648:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_baseUnary.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 2814:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_cacheHas.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 6680:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_castPath.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 2139),
    isKey = __webpack_require__(/*! ./_isKey */ 1901),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ 8286),
    toString = __webpack_require__(/*! ./toString */ 5060);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 9724:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_copyObject.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 4199),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 8040);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 5892:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_coreJsData.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ 150);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 7528:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_createAssigner.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ 1752),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 5747);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 3208:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_createBaseEach.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 1018);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 6156:
/*!*******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_createBaseFor.js ***!
  \*******************************************************************************/
/***/ (function(module) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 5059:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_defineProperty.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 4184:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_equalArrays.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ 8867),
    arraySome = __webpack_require__(/*! ./_arraySome */ 3443),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ 2814);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 6959:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_equalByTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 553),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 7763),
    eq = __webpack_require__(/*! ./eq */ 3142),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ 4184),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ 1080),
    setToArray = __webpack_require__(/*! ./_setToArray */ 3198);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 5167:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_equalObjects.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 9155);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 9765:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_freeGlobal.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 9155:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getAllKeys.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 9529),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ 117),
    keys = __webpack_require__(/*! ./keys */ 9291);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 314:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getMapData.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ 4626);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 2514:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getMatchData.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 5537),
    keys = __webpack_require__(/*! ./keys */ 9291);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 2733:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getNative.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 3044),
    getValue = __webpack_require__(/*! ./_getValue */ 1609);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 1485:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getRawTag.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ 553);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 117:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getSymbols.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 7257),
    stubArray = __webpack_require__(/*! ./stubArray */ 3809);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 1141:
/*!************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getTag.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ 5182),
    Map = __webpack_require__(/*! ./_Map */ 986),
    Promise = __webpack_require__(/*! ./_Promise */ 8245),
    Set = __webpack_require__(/*! ./_Set */ 5482),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ 5390),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 532),
    toSource = __webpack_require__(/*! ./_toSource */ 4012);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 1609:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_getValue.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 6707:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hasPath.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ 6680),
    isArguments = __webpack_require__(/*! ./isArguments */ 5844),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    isIndex = __webpack_require__(/*! ./_isIndex */ 6788),
    isLength = __webpack_require__(/*! ./isLength */ 8162),
    toKey = __webpack_require__(/*! ./_toKey */ 2886);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 2545:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hashClear.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8429);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 3911:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hashDelete.js ***!
  \****************************************************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 1933:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hashGet.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8429);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 1898:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hashHas.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8429);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 7798:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_hashSet.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 8429);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 6788:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isIndex.js ***!
  \*************************************************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 5747:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isIterateeCall.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ 3142),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 1018),
    isIndex = __webpack_require__(/*! ./_isIndex */ 6788),
    isObject = __webpack_require__(/*! ./isObject */ 7518);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 1901:
/*!***********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isKey.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ 2139),
    isSymbol = __webpack_require__(/*! ./isSymbol */ 4847);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 4626:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isKeyable.js ***!
  \***************************************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 719:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isMasked.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ 5892);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 2559:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isPrototype.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 5537:
/*!************************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_isStrictComparable.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ 7518);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 688:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_listCacheClear.js ***!
  \********************************************************************************/
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 4294:
/*!*********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_listCacheDelete.js ***!
  \*********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 6700);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 9006:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_listCacheGet.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 6700);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 8149:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_listCacheHas.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 6700);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 4870:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_listCacheSet.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 6700);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 6362:
/*!*******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapCacheClear.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ 7836),
    ListCache = __webpack_require__(/*! ./_ListCache */ 738),
    Map = __webpack_require__(/*! ./_Map */ 986);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 3201:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapCacheDelete.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 314);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 902:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapCacheGet.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 314);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 9933:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapCacheHas.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 314);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 4815:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapCacheSet.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ 314);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 1080:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_mapToArray.js ***!
  \****************************************************************************/
/***/ (function(module) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 814:
/*!*****************************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_matchesStrictComparable.js ***!
  \*****************************************************************************************/
/***/ (function(module) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 249:
/*!*******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_memoizeCapped.js ***!
  \*******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ 4778);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 8429:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_nativeCreate.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ 2733);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 5978:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_nativeKeys.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ 370);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1797:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_nodeUtil.js ***!
  \**************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 9765);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 4016:
/*!********************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_objectToString.js ***!
  \********************************************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 370:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_overArg.js ***!
  \*************************************************************************/
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 8159:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_overRest.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ 3440);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 150:
/*!**********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_root.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 9765);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 2560:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_setCacheAdd.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 8528:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_setCacheHas.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 3198:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_setToArray.js ***!
  \****************************************************************************/
/***/ (function(module) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 5445:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_setToString.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ 1989),
    shortOut = __webpack_require__(/*! ./_shortOut */ 3223);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 3223:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_shortOut.js ***!
  \**************************************************************************/
/***/ (function(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 6658:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stackClear.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 738);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 9182:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stackDelete.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 6450:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stackGet.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 2863:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stackHas.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 4641:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stackSet.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ 738),
    Map = __webpack_require__(/*! ./_Map */ 986),
    MapCache = __webpack_require__(/*! ./_MapCache */ 9361);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 8286:
/*!******************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_stringToPath.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 249);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 2886:
/*!***********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_toKey.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ 4847);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 4012:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/_toSource.js ***!
  \**************************************************************************/
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 3830:
/*!***********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/assign.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ 4199),
    copyObject = __webpack_require__(/*! ./_copyObject */ 9724),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ 7528),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 1018),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ 2559),
    keys = __webpack_require__(/*! ./keys */ 9291);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ 4469:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/constant.js ***!
  \*************************************************************************/
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 3142:
/*!*******************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/eq.js ***!
  \*******************************************************************/
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 113:
/*!********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/get.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ 59);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 8191:
/*!**********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/hasIn.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 215),
    hasPath = __webpack_require__(/*! ./_hasPath */ 6707);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 2156:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/identity.js ***!
  \*************************************************************************/
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 5844:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isArguments.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 8504),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 6231);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 2139:
/*!************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isArray.js ***!
  \************************************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 1018:
/*!****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isArrayLike.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ 9322),
    isLength = __webpack_require__(/*! ./isLength */ 8162);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 2033:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isBuffer.js ***!
  \*************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ 150),
    stubFalse = __webpack_require__(/*! ./stubFalse */ 6167);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 9322:
/*!***************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isFunction.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 532),
    isObject = __webpack_require__(/*! ./isObject */ 7518);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 8162:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isLength.js ***!
  \*************************************************************************/
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 7518:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isObject.js ***!
  \*************************************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 6231:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isObjectLike.js ***!
  \*****************************************************************************/
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 4847:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isSymbol.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 532),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 6231);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 525:
/*!*****************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/isTypedArray.js ***!
  \*****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 7643),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ 6648),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 1797);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 9291:
/*!*********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/keys.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 5066),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ 8514),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 1018);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 5410:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/mapValues.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ 8040),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 6446),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 7377);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ 4778:
/*!************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/memoize.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ 9361);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 3482:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/property.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ 8513),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 4556),
    isKey = __webpack_require__(/*! ./_isKey */ 1901),
    toKey = __webpack_require__(/*! ./_toKey */ 2886);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 5227:
/*!*********************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/some.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySome = __webpack_require__(/*! ./_arraySome */ 3443),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 7377),
    baseSome = __webpack_require__(/*! ./_baseSome */ 7100),
    isArray = __webpack_require__(/*! ./isArray */ 2139),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 5747);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ 3809:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/stubArray.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 6167:
/*!**************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/stubFalse.js ***!
  \**************************************************************************/
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 5060:
/*!*************************************************************************!*\
  !*** ../../../node_modules/ngcomponent/node_modules/lodash/toString.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ 1364);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 694:
/*!****************************************************!*\
  !*** ../../../node_modules/react2angular/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var fromPairs = __webpack_require__(/*! lodash.frompairs */ 673);
var ngcomponent_1 = __webpack_require__(/*! ngcomponent */ 1397);
var React = __webpack_require__(/*! react */ 7363);
var react_dom_1 = __webpack_require__(/*! react-dom */ 1533);
/**
 * Wraps a React component in Angular. Returns a new Angular component.
 *
 * Usage:
 *
 *   ```ts
 *   type Props = { foo: number }
 *   class ReactComponent extends React.Component<Props, S> {}
 *   const AngularComponent = react2angular(ReactComponent, ['foo'])
 *   ```
 */
function react2angular(Class, bindingNames, injectNames) {
    if (bindingNames === void 0) { bindingNames = null; }
    if (injectNames === void 0) { injectNames = []; }
    var names = bindingNames
        || (Class.propTypes && Object.keys(Class.propTypes))
        || [];
    return {
        bindings: fromPairs(names.map(function (_) { return [_, '<']; })),
        controller: ['$element'].concat(injectNames, [/** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1($element) {
                    var injectedProps = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        injectedProps[_i - 1] = arguments[_i];
                    }
                    var _this = _super.call(this) || this;
                    _this.$element = $element;
                    _this.isDestroyed = false;
                    _this.injectedProps = {};
                    injectNames.forEach(function (name, i) {
                        _this.injectedProps[name] = injectedProps[i];
                    });
                    return _this;
                }
                Object.defineProperty(class_1, "$$ngIsClass", {
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    if (!this.isDestroyed) {
                        react_dom_1.render(React.createElement(Class, __assign({}, this.props, this.injectedProps)), this.$element[0]);
                    }
                };
                class_1.prototype.componentWillUnmount = function () {
                    this.isDestroyed = true;
                    react_dom_1.unmountComponentAtNode(this.$element[0]);
                };
                return class_1;
            }(ngcomponent_1.default))])
    };
}
exports.react2angular = react2angular;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7363:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = React;

/***/ }),

/***/ 1533:
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = ReactDOM;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************************!*\
  !*** ./angular/app.ts + 21 modules ***!
  \*************************************/

;// CONCATENATED MODULE: external "angular"
var external_angular_namespaceObject = angular;
var external_angular_default = /*#__PURE__*/__webpack_require__.n(external_angular_namespaceObject);
// EXTERNAL MODULE: ../../../node_modules/react2angular/index.js
var react2angular = __webpack_require__(694);
// EXTERNAL MODULE: ../../../node_modules/@wix/yoshi-webpack-utils/node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5708);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(7363);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ../../../node_modules/classnames/index.js
var classnames = __webpack_require__(841);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./react/components/social-icons/icons/facebook.tsx
var Facebook=function Facebook(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{"fill-rule":"evenodd",d:"M33 18.088C33 9.755 26.284 3 18 3 9.716 3 3 9.755 3 18.088c0 7.531 5.485 13.774 12.656 14.906V22.45h-3.808v-4.362h3.808v-3.324c0-3.781 2.24-5.87 5.666-5.87 1.641 0 3.358.295 3.358.295v3.713h-1.892c-1.863 0-2.444 1.163-2.444 2.356v2.83h4.16l-.665 4.362h-3.495v10.544C27.514 31.862 33 25.619 33 18.088"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/instagram.tsx
var Instagram=function Instagram(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M18 5.704c4.005 0 4.48.015 6.063.087 4.065.185 5.963 2.114 6.148 6.149.073 1.581.087 2.056.087 6.061 0 4.006-.015 4.48-.087 6.061-.186 4.032-2.08 5.964-6.148 6.15-1.583.072-2.055.087-6.063.087-4.005 0-4.48-.015-6.061-.088-4.075-.186-5.964-2.123-6.149-6.15-.073-1.581-.087-2.055-.087-6.061 0-4.005.016-4.479.087-6.061.186-4.034 2.08-5.964 6.149-6.149 1.582-.071 2.056-.086 6.061-.086zM18 3c-4.074 0-4.584.017-6.184.09-5.447.25-8.475 3.272-8.725 8.725C3.017 13.416 3 13.926 3 18s.018 4.585.09 6.185c.25 5.448 3.272 8.475 8.725 8.725 1.601.073 2.111.09 6.185.09s4.585-.017 6.185-.09c5.443-.25 8.478-3.273 8.724-8.725.073-1.6.091-2.111.091-6.185s-.017-4.584-.09-6.184c-.245-5.442-3.271-8.475-8.724-8.725C22.585 3.017 22.074 3 18 3zm0 7.297a7.703 7.703 0 100 15.406 7.703 7.703 0 000-15.405zM18 23a5 5 0 110-10 5 5 0 010 10zm8.008-14.806a1.8 1.8 0 10-.002 3.601 1.8 1.8 0 00.002-3.601z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/linkedin.tsx
var LinkedIn=function LinkedIn(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M17.979 3.044c4.253 0 8.507.012 12.76-.009 1.134-.005 2.05.806 2.202 1.803.017.11.027.222.027.333.001 8.561.002 17.122 0 25.683a2.132 2.132 0 01-2.033 2.124c-.075.004-.15.004-.225.004H5.245c-1.065 0-1.871-.573-2.151-1.538a2.305 2.305 0 01-.09-.632C2.999 22.279 3 13.746 3 5.212c0-1.214.915-2.15 2.134-2.165 1.028-.013 2.056-.003 3.085-.003h9.76zm1.003 13.058c0-.514-.013-1.028.005-1.541.009-.26-.08-.333-.336-.33-1.215.011-2.43.004-3.646.005-.372 0-.373 0-.373.366 0 4.55.002 9.102-.006 13.653 0 .287.088.368.367.365 1.262-.012 2.524-.005 3.786-.006.375 0 .375-.002.375-.368 0-2.29-.006-4.579.006-6.868a8.31 8.31 0 01.116-1.419c.174-.968.62-1.75 1.656-2.008.312-.077.647-.092.97-.088 1.068.013 1.736.514 1.97 1.55a8.44 8.44 0 01.187 1.773c.02 2.355.012 4.71.003 7.065-.001.282.086.372.369.37 1.261-.013 2.523-.012 3.785-.001.273.002.37-.066.369-.36-.011-2.728.02-5.457-.022-8.185a13.161 13.161 0 00-.34-2.71c-.365-1.59-1.29-2.75-2.915-3.206-.559-.157-1.153-.195-1.734-.264-.983-.115-1.91.084-2.78.552-.739.397-1.322.964-1.812 1.655zm-11.59 5.316c0 2.288.002 4.577-.005 6.866-.001.232.048.337.305.335 1.308-.01 2.617-.008 3.925-.001.235.001.301-.089.3-.315-.004-4.587-.005-9.173.002-13.76 0-.253-.087-.314-.326-.312-1.289.01-2.579.012-3.868-.002-.278-.003-.34.088-.34.35.01 2.28.006 4.56.006 6.839zm2.256-9.103a2.586 2.586 0 002.607-2.58 2.6 2.6 0 00-2.6-2.621 2.586 2.586 0 00-2.602 2.613 2.578 2.578 0 002.595 2.588z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/pinterest.tsx
var Pinterest=function Pinterest(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M18 3C9.716 3 3 9.715 3 18c0 6.355 3.954 11.782 9.534 13.968-.132-1.187-.25-3.007.052-4.302.273-1.171 1.759-7.456 1.759-7.456s-.449-.899-.449-2.228c0-2.084 1.209-3.642 2.714-3.642 1.279 0 1.898.961 1.898 2.113 0 1.286-.82 3.21-1.243 4.993-.354 1.493.749 2.711 2.221 2.711 2.666 0 4.715-2.81 4.715-6.868 0-3.592-2.58-6.103-6.265-6.103-4.267 0-6.772 3.201-6.772 6.509 0 1.289.496 2.672 1.116 3.422.123.15.14.28.104.432l-.416 1.7c-.067.275-.218.334-.503.201-1.874-.872-3.045-3.611-3.045-5.811 0-4.731 3.438-9.078 9.911-9.078 5.204 0 9.248 3.709 9.248 8.664 0 5.17-3.259 9.33-7.784 9.33-1.52 0-2.949-.789-3.437-1.723l-.935 3.567c-.34 1.303-1.253 2.937-1.865 3.932 1.405.434 2.896.669 4.442.669 8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/soundcloud.tsx
var SoundCloud=function SoundCloud(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M10.5 25.998H9V13.531a6.102 6.102 0 011.5-.875v13.342zm4.5 0h1.5V11.744c-.343.41-.665.847-.931 1.325L15 12.784v13.214zm-3 0h1.5V12.326c-.762-.123-.934-.078-1.5-.016v13.688zm-6 0h1.5V15.15a7.356 7.356 0 00-1.038 2.372L6 17.242v8.756zm-4.5-8.112A4.77 4.77 0 000 21.39a4.77 4.77 0 001.5 3.505v-7.01zm28.319-1.037C29.512 12.465 26.212 9 22.142 9c-1.533 0-2.946.507-4.143 1.355v15.643h13.634c2.41 0 4.366-2.152 4.366-4.8 0-3.45-3.252-5.828-6.181-4.35zM4.5 16.807c-.453-.037-.789-.046-1.5.188v8.792c.669.22.954.213 1.5.213v-9.193z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/twitter.tsx
var Twitter=function Twitter(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M35 8.452c-1.214.53-2.519.886-3.889 1.046a6.681 6.681 0 002.977-3.677 13.716 13.716 0 01-4.3 1.613 6.818 6.818 0 00-4.941-2.1c-4.371 0-7.583 4.005-6.596 8.162A19.34 19.34 0 014.298 6.55c-1.774 2.988-.92 6.896 2.094 8.875a6.837 6.837 0 01-3.065-.832c-.074 3.08 2.174 5.96 5.43 6.602a6.908 6.908 0 01-3.058.113c.86 2.641 3.36 4.562 6.325 4.616C9.178 28.116 5.592 29.095 2 28.679a19.425 19.425 0 0010.379 2.986c12.57 0 19.672-10.423 19.243-19.772A13.648 13.648 0 0035 8.452z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/youtube.tsx
var Youtube=function Youtube(){return/*#__PURE__*/external_React_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},/*#__PURE__*/external_React_default().createElement("path",{d:"M28.153 6.245c-4.805-.327-15.508-.326-20.306 0C2.65 6.6 2.039 9.74 2 18c.039 8.247.645 11.399 5.847 11.755 4.8.326 15.501.327 20.306 0C33.35 29.4 33.961 26.26 34 18c-.039-8.247-.645-11.399-5.847-11.755zM14 23.333V12.667l10.667 5.324L14 23.333z"}));};
;// CONCATENATED MODULE: ./react/components/social-icons/icons/index.ts

;// CONCATENATED MODULE: ./react/components/social-icons/types.ts
var SocialButtonTypes;(function(SocialButtonTypes){SocialButtonTypes["facebook"]="facebook";SocialButtonTypes["instagram"]="instagram";SocialButtonTypes["linkedIn"]="linkedIn";SocialButtonTypes["pinterest"]="pinterest";SocialButtonTypes["soundCloud"]="soundCloud";SocialButtonTypes["twitter"]="twitter";SocialButtonTypes["youtube"]="youtube";})(SocialButtonTypes||(SocialButtonTypes={}));var SocialMediaIcons={facebook:Facebook,instagram:Instagram,linkedIn:LinkedIn,pinterest:Pinterest,soundCloud:SoundCloud,twitter:Twitter,youtube:Youtube};var ICON_SIZES={small:'iconSizeSmall',medium:'iconSizeMedium',large:'iconSizeLarge'};
;// CONCATENATED MODULE: ./react/components/social-icons/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var social_icons_styles = ({"root":"_0UcdX","title":"XYP9z","icon-container":"Cu1VF","iconContainer":"Cu1VF","icon":"aehJA","icon-size-small":"xPNYP","iconSizeSmall":"xPNYP","icon-size-medium":"_0hQMx","iconSizeMedium":"_0hQMx","icon-size-large":"TEOOl","iconSizeLarge":"TEOOl"});
;// CONCATENATED MODULE: ./react/components/social-icons/social-icons-datahooks.ts
var SocialIconsDataHooks;(function(SocialIconsDataHooks){SocialIconsDataHooks["socialIconsTitle"]="social-icons-title";SocialIconsDataHooks["socialIconsUrl"]="social-icons-url-";})(SocialIconsDataHooks||(SocialIconsDataHooks={}));
;// CONCATENATED MODULE: external "_"
var external_namespaceObject = _;
;// CONCATENATED MODULE: ./react/utils/bdi-wrapper.tsx
var placeholderWithFormatters=new RegExp(// eslint-disable-next-line no-template-curly-in-string
'\\${[a-z0-9&_.\\[\\]\\:\\;\\-\\|]{1,256}}','gi');function BdiWrapper(props){var wrappedText=(0,external_namespaceObject.escape)(props.text||'').replace(placeholderWithFormatters,function(match){return'<bdi>'+match+'</bdi>';});return/*#__PURE__*/external_React_default().createElement("span",{dangerouslySetInnerHTML:{__html:wrappedText}});}
;// CONCATENATED MODULE: ./react/components/social-icons/social-icons.tsx
var SocialIconsProps=['label','socialButtons','styles','iconColor'];var SocialIcon=function SocialIcon(_ref){var name=_ref.name,url=_ref.url,styles=_ref.styles,iconColor=_ref.iconColor;var size=styles.size?ICON_SIZES[styles.size]:ICON_SIZES.medium;var Icon=SocialMediaIcons[name];return/*#__PURE__*/external_React_default().createElement("a",{href:url,rel:"noopener noreferrer",target:"_blank","data-hook":""+SocialIconsDataHooks.socialIconsUrl+name,className:classnames_default()('so-global-region-follow-icon',social_icons_styles.icon,social_icons_styles[size]),style:{fill:iconColor}},/*#__PURE__*/external_React_default().createElement(Icon,null));};var SocialIcons=function SocialIcons(_ref2){var label=_ref2.label,socialButtons=_ref2.socialButtons,styles=_ref2.styles,iconColor=_ref2.iconColor;var fontFamilyStyle=styles.fontFamily?{fontFamily:styles.fontFamily}:{};var color=styles.color?{color:styles.color}:{};return/*#__PURE__*/external_React_default().createElement("div",{className:social_icons_styles.root},label&&/*#__PURE__*/external_React_default().createElement("span",{style:extends_default()({},fontFamilyStyle,color),className:classnames_default()('lp-style-h3 so-global-h3',social_icons_styles.title),"data-hook":SocialIconsDataHooks.socialIconsTitle},/*#__PURE__*/external_React_default().createElement(BdiWrapper,{text:label})),/*#__PURE__*/external_React_default().createElement("span",{className:classnames_default()('so-global-footer-icon',social_icons_styles.iconContainer)},socialButtons.map(function(buttonConfig){if(buttonConfig.active){var socialIcon=/*#__PURE__*/external_React_default().createElement(SocialIcon,extends_default()({},buttonConfig,{styles:styles,iconColor:iconColor}));return socialIcon;}return null;})));};
;// CONCATENATED MODULE: ./react/components/social-icons/index.ts

;// CONCATENATED MODULE: ./react/components/subscribe/require-consent/subscribe-consent-data-hooks.ts
var SubscribeConsentDataHooks;(function(SubscribeConsentDataHooks){SubscribeConsentDataHooks["checkbox"]="subscribe-consent-checkbox";SubscribeConsentDataHooks["checkboxLabelText"]="subscribe-consent-label-text";SubscribeConsentDataHooks["container"]="subscribe-consent-container";SubscribeConsentDataHooks["link"]="subscribe-consent-link";})(SubscribeConsentDataHooks||(SubscribeConsentDataHooks={}));
;// CONCATENATED MODULE: ./react/components/subscribe/require-consent/subscribe-consent.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var subscribe_consent = ({"container":"_5p8Ul","label-container":"nRHYs","labelContainer":"nRHYs","text-container":"G1rB-","textContainer":"G1rB-","checkbox-text":"ay1xA","checkboxText":"ay1xA","checkbox":"EaMkb","error":"woAjU"});
;// CONCATENATED MODULE: ./react/components/subscribe/require-consent/require-consent.tsx
var RequireConsentComponent=function RequireConsentComponent(props){var consentCheckboxText=props.consentCheckboxText,consentLinkText=props.consentLinkText,consentLinkUrl=props.consentLinkUrl,isConsentChecked=props.isConsentChecked,isSubmitted=props.isSubmitted,onChange=props.onChange,shouldRequireConsent=props.shouldRequireConsent,shouldShowConsentLink=props.shouldShowConsentLink;var _useState=(0,external_React_.useState)(isConsentChecked),isChecked=_useState[0],setChecked=_useState[1];if(!shouldRequireConsent){return null;}var fontSize='14px';var textStyle={fontSize:fontSize,lineHeight:fontSize};var checkboxChangeHandler=function checkboxChangeHandler(){var newValue=!isChecked;setChecked(newValue);onChange(newValue);};var showCheckboxError=isSubmitted&&!isChecked;return/*#__PURE__*/external_React_default().createElement("div",{className:subscribe_consent.container,"data-hook":SubscribeConsentDataHooks.container},/*#__PURE__*/external_React_default().createElement("label",null,/*#__PURE__*/external_React_default().createElement("div",{className:subscribe_consent.labelContainer},/*#__PURE__*/external_React_default().createElement("input",{checked:isChecked,className:classnames_default()(subscribe_consent.checkbox,showCheckboxError&&subscribe_consent.error),"data-hook":SubscribeConsentDataHooks.checkbox,onChange:checkboxChangeHandler,type:"checkbox"}),/*#__PURE__*/external_React_default().createElement("div",{className:classnames_default()('so-global-p1',subscribe_consent.textContainer),style:textStyle},/*#__PURE__*/external_React_default().createElement("span",{"data-hook":SubscribeConsentDataHooks.checkboxLabelText,className:subscribe_consent.checkboxText},/*#__PURE__*/external_React_default().createElement(BdiWrapper,{text:consentCheckboxText})),shouldShowConsentLink&&/*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment,null,' ',/*#__PURE__*/external_React_default().createElement("a",{className:classnames_default()('so-global-p1',subscribe_consent.checkboxText),"data-hook":SubscribeConsentDataHooks.link,href:consentLinkUrl,rel:"noopener noreferrer",style:extends_default()({},textStyle,{textDecoration:'underline'}),target:"_blank"},/*#__PURE__*/external_React_default().createElement(BdiWrapper,{text:consentLinkText})))))));};RequireConsentComponent.defaultProps={isConsentChecked:false,isSubmitted:false,onChange:function onChange(){},shouldRequireConsent:false,shouldShowConsentLink:false};var RequireConsentProps=['consentCheckboxText','consentLinkText','consentLinkUrl','isConsentChecked','isSubmitted','onChange','shouldRequireConsent','shouldShowConsentLink'];var RequireConsent=RequireConsentComponent;
;// CONCATENATED MODULE: ./react/components/subscribe/require-consent/index.ts

;// CONCATENATED MODULE: ./react/components/subscribe/index.ts

;// CONCATENATED MODULE: ./angular/app.ts
external_angular_default().module('shoutout-regions',['ng']).component('socialIcons',(0,react2angular.react2angular)(SocialIcons,SocialIconsProps)).component('subscribeRequireConsent',(0,react2angular.react2angular)(RequireConsent,RequireConsentProps));
}();
/******/ })()
;
//# sourceMappingURL=react-regions.bundle.js.map