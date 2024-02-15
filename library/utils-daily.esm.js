/**
 * Name: utils-daily
 * Version: 1.0.5
 * Created: 2024-02-15 20:48:28
 */

/**
 * @apiAnalyze
 * 判断变量是否"有值"
 * - ''、null、'null'、undefined、'undefined'被认为是没有值
 * - 数字0被认为是有值
 * @since 0.0.13
 * @param val {any} variable
 * @return {boolean} whether a variable is valuable
 *
 * @example
 *
 * ```javascript
 * console.log(hasValue('')) // false
 * console.log(hasValue(null)) // false
 * console.log(hasValue('null')) // false
 * console.log(hasValue(undefined)) // false
 * console.log(hasValue('undefined')) // false
 * console.log(hasValue(0)) // true
 * console.log(hasValue('none')) // true
 * ```
 */
const hasValue = (val) => {
    return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined';
};

/**
 * 获取变量的类型
 * @param val {any} 需要判断类型的变量
 * @return {string} 返回类型字符串，如`"array"`、`"object"`、`"function"`、`"null"`、`"undefined"`、`"string"`、`"number"`、`"boolean"`、`"date"`、`"regexp"`等
 *
 * @example
 *
 * ```javascript
 * console.log(getType({}) // 'object'
 * console.log(getType([]) // 'array'
 * console.log(getType(() => {})) // 'function'
 * console.log(getType(null)) // 'null'
 * console.log(getType(undefined)) // 'undefined'
 * console.log(getType('')) // 'string'
 * console.log(getType(123)) // 'number'
 * console.log(getType(true)) // 'boolean'
 * console.log(getType(new Date())) // 'date'
 * console.log(getType(/^[0-9]{3}/)) // 'regexp'
 * console.log(getType('test')) // 'string'
 * ```
 */
const getType = (val) => ({}).toString.call(val).slice(8, -1).toLowerCase();

/**
 * @apiAnalyze
 * 是否是对象
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isObject$7 = (val) => getType(val) === 'object';

/**
 * @apiAnalyze
 * 是否是字符串
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isString$1 = (val) => getType(val) === 'string';

/**
 * @apiAnalyze
 * 是否是数组
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isArray$3 = (val) => Array.isArray(val);

/**
 * @apiAnalyze
 * 是否是函数
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isFunction$4 = (val) => getType(val) === 'function';

/**
 * @apiAnalyze
 * 是否是null
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isNull = (val) => getType(val) === 'null';

/**
 * @apiAnalyze
 * 是否是undefined
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isUndefined$1 = (val) => getType(val) === 'undefined';

/**
 * @apiAnalyze
 * 是否是number
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isNumber$1 = (val) => getType(val) === 'number';

/**
 * @apiAnalyze
 * 是否是boolean
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isBoolean$1 = (val) => getType(val) === 'boolean';

/**
 * @apiAnalyze
 * 是否是日期对象
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isDate$1 = (val) => getType(val) === 'date';

/**
 * @apiAnalyze
 * 是否是正则表达式
 * @since 0.0.13
 * @param val {unknown}
 * @return {boolean}
 */
const isRegExp$1 = (val) => getType(val) === 'regexp';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function isObject$6(value) {
  var type = _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}
var isObject_1 = isObject$6;

var freeGlobal$1 = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();
var _root = root$8;

var root$7 = _root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function now() {
  return root$7.Date.now();
};
var now_1 = now$1;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
var _baseTrim = baseTrim$1;

var root$6 = _root;

/** Built-in value references. */
var _Symbol2 = root$6.Symbol;
var _Symbol$2 = _Symbol2;

var _Symbol$1 = _Symbol$2;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$6.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol$1 ? _Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$5.call(value, symToStringTag$1),
    tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$5.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;

var _Symbol = _Symbol$2,
  getRawTag = _getRawTag,
  objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
  undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$5(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;

function isObjectLike$4(value) {
  return value != null && _typeof(value) == 'object';
}
var isObjectLike_1 = isObjectLike$4;

var baseGetTag$4 = _baseGetTag,
  isObjectLike$3 = isObjectLike_1;

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
function isSymbol$1(value) {
  return _typeof(value) == 'symbol' || isObjectLike$3(value) && baseGetTag$4(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;

var baseTrim = _baseTrim,
  isObject$5 = isObject_1,
  isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$5(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$5(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;

var isObject$4 = isObject_1,
  now = now_1,
  toNumber = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$4(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
var debounce$2 = /*@__PURE__*/getDefaultExportFromCjs(debounce_1);

var debounce = debounce_1,
  isObject$3 = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject$3(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}
var throttle_1 = throttle;
var throttle$1 = /*@__PURE__*/getDefaultExportFromCjs(throttle_1);

/**
 * lodash的merge方法太大了（按需导入后会让包体积直接增加8kb左右，我们不需要考虑那么细致，用一个简版的就可以了）
 * @param obj
 */
// 遍历数组，尝试返回一个深拷贝的数组（不考虑Date、RegExp等数据类型）
function recursiveArray(items) {
    return items.map((item) => {
        if (isObject$7(item)) {
            // eslint-disable-next-line no-use-before-define
            return merge$1({}, item);
        }
        if (isArray$3(item)) {
            return recursiveArray(item);
        }
        return item;
    });
}
/**
 * @apiAnalyze
 * 合并对象属性（会修改第一个对象）
 * @since 0.0.13
 * @note lodash的merge方法太大了（按需导入后会让包体积直接增加8kb左右，我们不需要考虑那么细致，用一个简版的就可以了）
 * @param target {object}
 * @param arg {object} 可以传多个对象
 * @return {object} 合并后的对象（也就是第一个对象被扩展后的样子）
 */
const merge$1 = (target, ...arg) => {
    return arg.reduce((prev, curr) => {
        Object.keys(curr).reduce((innerPrev, key) => {
            const prevVal = innerPrev[key];
            const currVal = curr[key];
            // 如果是新旧对象的这个key对应值都是对象，则递归继续进行属性操作
            if (isObject$7(prevVal) && isObject$7(currVal)) {
                innerPrev[key] = merge$1(prevVal, currVal);
            }
            // 如果新对象的这个key对应值是数组，则把旧对象该key的值直接赋值为新对象的数组值（尝试拷贝值，而不是直接地址引用）
            else if (isArray$3(currVal)) {
                innerPrev[key] = recursiveArray(currVal);
            }
            /**
             * 如果新对象的这个key对应值是其他类型，则把就对象该key的值直接赋值为新对象的值
             * 实际业务里，值既不是数组也不是对象的情况下，还是其他诸如Date、RegExp的情况不多，这里不考虑这类对象地址引用关系的问题
             */
            else {
                innerPrev[key] = currVal;
            }
            return innerPrev;
        }, prev);
        return prev;
    }, target);
};

/**
 * lodash的cloneDeep方法太大了，按需引入后大概会增加8kb左右的大小，所以这里用一个简单的实现版本
 */
/**
 * @apiAnalyze
 * 尝试对对象进行深拷贝（数据格式不常规时不保证百分百可靠）
 * @since 0.0.13
 * @note lodash的cloneDeep方法太大了，按需引入后大概会增加8kb左右的大小，所以这里用一个简单的实现版本
 * @param obj {any}
 * @return {any}
 */
const cloneDeep = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const copy = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        copy[key] = cloneDeep(obj[key]);
    });
    return copy;
};

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$2(value) {
  var Ctor = value && value.constructor,
    proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$2;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;

var isPrototype$1 = _isPrototype,
  nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$1(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;

var baseGetTag$3 = _baseGetTag,
  isObject$2 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
  funcTag$1 = '[object Function]',
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
function isFunction$3(value) {
  if (!isObject$2(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;

var root$5 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$5['__core-js_shared__'];
var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}
var _toSource = toSource$2;

var isFunction$2 = isFunction_1,
  isMasked = _isMasked,
  isObject$1 = isObject_1,
  toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}
var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
  getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$5(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var _getNative = getNative$5;

var getNative$4 = _getNative,
  root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$4, 'DataView');
var _DataView = DataView$1;

var getNative$3 = _getNative,
  root$3 = _root;

/* Built-in method references that are verified to be native. */
var Map$2 = getNative$3(root$3, 'Map');
var _Map = Map$2;

var getNative$2 = _getNative,
  root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');
var _Promise = Promise$2;

var getNative$1 = _getNative,
  root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');
var _Set = Set$1;

var getNative = _getNative,
  root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');
var _WeakMap = WeakMap$1;

var DataView = _DataView,
  Map$1 = _Map,
  Promise$1 = _Promise,
  Set = _Set,
  WeakMap = _WeakMap,
  baseGetTag$2 = _baseGetTag,
  toSource = _toSource;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
  objectTag$1 = '[object Object]',
  promiseTag = '[object Promise]',
  setTag$2 = '[object Set]',
  weakMapTag$1 = '[object WeakMap]';
var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
  mapCtorString = toSource(Map$1),
  promiseCtorString = toSource(Promise$1),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$2;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag$1(new Map$1()) != mapTag$2 || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set && getTag$1(new Set()) != setTag$2 || WeakMap && getTag$1(new WeakMap()) != weakMapTag$1) {
  getTag$1 = function getTag(value) {
    var result = baseGetTag$2(value),
      Ctor = result == objectTag$1 ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$1;
        case mapCtorString:
          return mapTag$2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$2;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;

var baseGetTag$1 = _baseGetTag,
  isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$2(value) && baseGetTag$1(value) == argsTag$1;
}
var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
  isObjectLike$1 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

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
var isArguments$1 = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike$1(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments$1;

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
var isArray$2 = Array.isArray;
var isArray_1 = isArray$2;

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
function isLength$2(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$2;

var isFunction$1 = isFunction_1,
  isLength$1 = isLength_1;

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
function isArrayLike$1(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$1;

var isBuffer$2 = {exports: {}};

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
var stubFalse_1 = stubFalse;

isBuffer$2.exports;
(function (module, exports) {
  var root = _root,
    stubFalse = stubFalse_1;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

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
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;

var baseGetTag = _baseGetTag,
  isLength = isLength_1,
  isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  mapTag$1 = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag$1 = '[object Set]',
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
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function (value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;

var _nodeUtil = {exports: {}};

_nodeUtil.exports;
(function (module, exports) {
  var freeGlobal = _freeGlobal;

  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;
      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();
  module.exports = nodeUtil;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;

var baseIsTypedArray = _baseIsTypedArray,
  baseUnary = _baseUnary,
  nodeUtil = _nodeUtilExports;

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
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;

var baseKeys = _baseKeys,
  getTag = _getTag,
  isArguments = isArguments_1,
  isArray$1 = isArray_1,
  isArrayLike = isArrayLike_1,
  isBuffer$1 = isBufferExports,
  isPrototype = _isPrototype,
  isTypedArray$1 = isTypedArray_1;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
  setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray$1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer$1(value) || isTypedArray$1(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$1.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_1 = isEmpty;
var isEmpty$1 = /*@__PURE__*/getDefaultExportFromCjs(isEmpty_1);

/**
 * @apiAnalyze
 * 将一个数字或字符串用指定的字符从左侧开始填充到指定长度
 * @since 0.0.13
 * @param val {string|number}
 * @param len {number} target length after filling
 * @param symbol {string} used to fill string/number
 * @return {string} string after filling
 *
 * @example
 * ```javascript
 * console.log(fillLeft('a', 2, '$')) // '$a'
 * console.log(fillLeft('aa', 2, '$')) // 'aa'
 * console.log(fillLeft('aaa', 2, '$')) // 'aaa'
 * console.log(fillLeft('aa', 10, '0') // '00000000aa'
 * ```
 */
const fillLeft = (val, len, symbol) => {
    val = `${val}`;
    const diffInLength = len - val.length;
    if (diffInLength > 0) {
        for (let i = 0; i < diffInLength; i++) {
            val = symbol + val;
        }
    }
    return val;
};

/**
 * @apiAnalyze
 * 将数字或字符串类型的数字转成字符串，如果数字小于10，则在左侧补0
 * @since 0.0.13
 * @note 等价于`fillLeft(val, 2, '0')`
 * @param num {string|number} a number, or number in string format (number should be integer)
 * @return {string} string after prefixed with '0' is less than 10
 *
 * @example
 * ```javascript
 * console.log(toDouble(0)) // '00'
 * console.log(toDouble('1')) // '01'
 * console.log(toDouble('11')) // '11'
 * console.log(toDouble('')) // '00'
 * ```
 */
const toDouble = (num) => {
    return fillLeft(num, 2, '0');
};

/**
 * @apiAnalyze
 * 将指定日期对象按`年、月、日`或`年、月、日、时、分、秒`进行偏移（正值向未来偏移，负值向过去偏移），并返回偏移后的日期字符串
 * @since 0.0.13
 * @param dat {Date} date object used as the base for calculation
 * @param yDiff {number} difference in year, negative value is acceptable
 * @param mDiff {number} difference in month, negative value is acceptable
 * @param dDiff {number} difference in date, negative value is acceptable
 * @param hDiff [number] difference in hours, negative value is acceptable; optional, but if defined, `miDiff` and `sDiff` should also be defined
 * @param miDiff [number] difference in minutes, negative value is acceptable; optional, but if defined, `hDiff` and `sDiff` should also be defined
 * @param sDiff [number] difference in seconds, negative value is acceptable; optional, but if defined, `hDiff` and `miDiff` should also be defined
 * @return {string} date string in format of `yyyy-mm-dd` or `yyyy-mm-dd hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, 2, 0)) // '2018-04-02'
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, -2, 0)) // '2017-12-02'
 * ```
 */
const getRelativeDateString = (dat, yDiff, mDiff, dDiff, hDiff, miDiff, sDiff) => {
    // clone the dat object first, avoid change of the dat object
    const date = new Date(+dat);
    date.setFullYear(date.getFullYear() + yDiff);
    date.setMonth(date.getMonth() + mDiff);
    date.setDate(date.getDate() + dDiff);
    date.setHours(date.getHours() + (hDiff || 0));
    date.setMinutes(date.getMinutes() + (miDiff || 0));
    date.setSeconds(date.getSeconds() + (sDiff || 0));
    const y = date.getFullYear();
    const m = toDouble(date.getMonth() + 1);
    const d = toDouble(date.getDate());
    if (typeof sDiff === 'number') {
        const h = toDouble(date.getHours());
        const mi = toDouble(date.getMinutes());
        const s = toDouble(date.getSeconds());
        return `${y}-${m}-${d} ${h}:${mi}:${s}`;
    }
    if (typeof dDiff === 'number') {
        return `${y}-${m}-${d}`;
    }
    throw new Error('length of arguments for function getRelativeDateString should be either 4 or 7');
};

/**
 * @apiAnalyze
 * 将Date实例对象转换成格式如`YYYY-MM-DD`的长字符串
 * @since 0.0.13
 * @param date {Date} the date object
 * @return {string} string in format like `YYYY-MM-DD`
 *
 * @example
 * ```javascript
 * console.log(dateToShortString(new Date(2018, 1, 2))) // '2018-02-02'
 * ```
 */
const dateToShortString = (date = new Date()) => {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}-${toDouble(m)}-${toDouble(d)}`;
};

/**
 * @apiAnalyze
 * 将Date实例对象转换成格式如`YYYY-MM-DD hh:mm:ss`的长字符串
 * @since 0.0.13
 * @param date {Date} date object
 * @return {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(dateToLongString(new Date(2018, 1, 2, 12, 13, 14))) // '2018-02-02 12:13:14'
 * ```
 */
const dateToLongString = (date = new Date()) => {
    const hour = toDouble(date.getHours());
    const minute = toDouble(date.getMinutes());
    const second = toDouble(date.getSeconds());
    return `${dateToShortString(date)} ${hour}:${minute}:${second}`;
};

/**
 * @apiAnalyze
 * 将形如`YYYY-MM-DD hh:mm:ss`的日期字符串转换成Date对象实例
 * @since 0.0.13
 * @param dateString {string} string in format like `YYYY-MM-DD hh:mm:ss`
 * @return {Date} date object
 *
 * @example
 * ```javascript
 * console.log(longStringToDate('2018-02-01 12:13:14')) // new Date(2018, 1, 1, 12, 13, 14)
 * ```
 */
const longStringToDate = (dateString) => {
    if (dateString && dateString.length === 19) {
        // Attention: there is a space between regular expression
        const tempArr = dateString.split(/[- :]/);
        // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
        return new Date(parseInt(tempArr[0], 10), parseInt(tempArr[1], 10) - 1, parseInt(tempArr[2], 10), parseInt(tempArr[3], 10), parseInt(tempArr[4], 10), parseInt(tempArr[5], 10));
    }
    throw new Error('not valid parameter for function longStringToDate');
};

/**
 * @apiAnalyze
 * Transform string in format like `YYYY-MM-DD` to date object
 * `00:00:00 is used due to hours, minutes and seconds not specified`
 * @since 0.0.13
 * @param dateString {string} string in format like `YYYY-MM-DD`
 * @return {Date} date object
 *
 * @example
 * ```javascript
 * console.log(shortStringToDate('2018-02-01')) // new Date(2018, 1, 1, 0, 0, 0)
 * ```
 */
const shortStringToDate = (dateString) => {
    if (dateString && dateString.length === 10) {
        return longStringToDate(`${dateString} 00:00:00`);
    }
    throw new Error('invalid parameter for function shortStringToDate');
};

/**
 * @apiAnalyze
 * 将毫秒时间戳转换成形如`YYYY-MM-DD hh:mm:ss`的字符串
 * @since 0.0.13
 * @param ts {number} timestamp
 * @return {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToLongString(+dateA)) // '2018-01-01 12:13:14'
 * ```
 */
const timestampToLongString = (ts) => {
    return dateToLongString(new Date(ts));
};

/**
 * @apiAnalyze
 * 将毫秒时间戳转换成形如`YYYY-MM-DD`的字符串
 * @since 0.0.13
 * @param ts {number} timestamp
 * @return {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToShortString(+dateA)) // '2018-01-01'
 * ```
 */
const timestampToShortString = (ts) => {
    return dateToShortString(new Date(ts));
};

/**
 * @apiAnalyze
 * 将值转成字符串（null和undefined会被转成空字符串）
 * @since 0.0.13
 * @param val {any} 任何想转成字符串格式的值
 * @return {string} 转换后的字符串格式的值
 *
 * @example
 * ```javascript
 * console.log(getString(1)) // '1'
 * console.log(getString(0)) // '0'
 * console.log(getString(null)) // ''
 * console.log(getString(undefined)) // ''
 * console.log(getString('test')) // 'test'
 * ```
 */
const getString = (val) => {
    if (val === 0) {
        return '0';
    }
    return val ? (`${val}`) : '';
};

/**
 * Transform format of number to normal form instead of scientific notation
 * @param num {string} number in format of scientific notation
 * @return {string} number in format of normal form
 */
function cancelScientificNotation(num) {
    let numOfDecimalPlaces;
    try {
        numOfDecimalPlaces = num.split('.')[1].split(/[eE]/)[0].length;
    }
    catch (e) {
        numOfDecimalPlaces = 0;
    }
    const isNumNegative = parseFloat(num) < 0;
    const exponent = Math.log(isNumNegative ? 0 - parseFloat(num) : parseFloat(num)) / Math.log(10);
    const positiveExponent = Math.ceil(exponent > 0 ? exponent : 0 - exponent);
    if (parseFloat(num) > 1) {
        return parseFloat(num).toFixed(numOfDecimalPlaces);
    }
    if (parseFloat(num) < 0) {
        return `-${(0 - parseFloat(num)).toFixed(positiveExponent + numOfDecimalPlaces)}`;
    }
    return parseFloat(num).toFixed(positiveExponent + numOfDecimalPlaces);
}

/**
 * Determine whether the number used in this library is thought as valid
 * @param num {string | number} number used, usually from user input
 * @return {boolean} whether input number is valid
 */
function validateNumber(num) {
    num = `${num}`;
    // scientific notation is not allowed
    if (/[eE]/.test(num)) {
        return false;
    }
    // must contain digit
    if (!/[0-9]/.test(num)) {
        return false;
    }
    // zero direct after decimal point should not be more than or equal to 5
    if (/\.0{6}/.test(num)) {
        return false;
    }
    // length of the number should be less than 17
    return num.length < 17;
}

/**
 * Add two number
 * @ignore
 * @param  {number} a        number a
 * @param  {number} b        number b
 * @return {number}    sum of number a and number b
 */
function floatAdd(a, b) {
    let numOfDecimalPlacesInA;
    let numOfDecimalPlacesInB;
    try {
        numOfDecimalPlacesInA = a.toString().split('.')[1].length;
    }
    catch (e) {
        numOfDecimalPlacesInA = 0;
    }
    try {
        numOfDecimalPlacesInB = b.toString().split('.')[1].length;
    }
    catch (e) {
        numOfDecimalPlacesInB = 0;
    }
    const m = 10 ** Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB);
    return (a * m + b * m) / m;
}
/**
 * @apiAnalyze
 * Calculate sum of members in an Array
 * @since 0.0.13
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} sum of these numbers
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * console.log(add(arr)) // '10'
 * console.log(add(arr, 2)) // '10.00'
 * ```
 */
const add = (arr, numOfDecimalPlaces) => {
    // 如果数据精度过大，则转成取6位小数进行计算
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (!validateNumber(item)) {
            arr[i] = Number(item.toFixed(6));
        }
    }
    const result = arr.reduce((preVal, curVal) => floatAdd(preVal, curVal), 0);
    let returnResult;
    if (hasValue(numOfDecimalPlaces)) {
        returnResult = result.toFixed(numOfDecimalPlaces);
    }
    else if (/\.[0-9]{10}/.test(`${result}`)) {
        returnResult = result.toFixed(10);
    }
    else {
        returnResult = `${result}`;
    }
    if (/e/.test(returnResult)) {
        return cancelScientificNotation(returnResult);
    }
    return returnResult;
};

/**
 * Subtract number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {string} difference between a and b, in string format with automatical precision
 */
function floatSubtract(a, b) {
    let numOfDecimalPlacesInA;
    let numOfDecimalPlacesInB;
    try {
        numOfDecimalPlacesInA = a.toString().split('.')[1].length;
    }
    catch (e) {
        numOfDecimalPlacesInA = 0;
    }
    try {
        numOfDecimalPlacesInB = b.toString().split('.')[1].length;
    }
    catch (e) {
        numOfDecimalPlacesInB = 0;
    }
    const m = 10 ** Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB);
    // control precision length automatically
    const automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB;
    return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces);
}
/**
 * @apiAnalyze
 * Calculate difference of members in an Array
 * @since 0.0.13
 * @param rawArr {Array<string | number>} an array of numbers in string format
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} difference of these numbers
 *
 * @example
 * ```javascript
 * const arr [3, 1, 2]
 * console.log(subtract(arr)) // '0'
 * console.log(subtract(arr), 2) // '0.00'
 * ```
 */
const subtract = (rawArr, numOfDecimalPlaces) => {
    const arr = rawArr.map(String);
    // 如果数据精度过大，则转成取6位小数进行计算
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (!validateNumber(item)) {
            arr[i] = item.substring(0, 6);
        }
    }
    const result = arr.reduce((preVal, curVal) => floatSubtract(parseFloat(preVal), parseFloat(curVal)));
    let returnResult;
    if (hasValue(numOfDecimalPlaces)) {
        returnResult = parseFloat(result).toFixed(numOfDecimalPlaces);
    }
    else if (/\.[0-9]{10}/.test(result)) {
        returnResult = parseFloat(result).toFixed(10);
    }
    else {
        returnResult = result;
    }
    if (/e/.test(returnResult)) {
        return cancelScientificNotation(returnResult);
    }
    return returnResult;
};

/**
 * Multiply two number
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   product of number a and number b
 */
function floatMultiply(a, b) {
    let m = 0;
    const strA = a.toString();
    const strB = b.toString();
    try {
        m += strA.split('.')[1].length;
    }
    catch (e) {
        //
    }
    try {
        m += strB.split('.')[1].length;
    }
    catch (e) {
        //
    }
    // eslint-disable-next-line no-mixed-operators
    return Number(strA.replace('.', '')) * Number(strB.replace('.', '')) / 10 ** m;
}
/**
 * @apiAnalyze
 * Calculate sum of members in an Array
 * @since 0.0.13
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} sum of these numbers
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3]
 * console.log(multiply(arr)) // '6'
 * console.log(multiply(arr, 2)) // '6.00'
 * ```
 */
const multiply = (arr, numOfDecimalPlaces) => {
    // 如果数据精度过大，则转成取6位小数进行计算
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (!validateNumber(item)) {
            arr[i] = Number(item.toFixed(6));
        }
    }
    const result = arr.reduce((preVal, curVal) => floatMultiply(preVal, curVal));
    let returnResult;
    if (hasValue(numOfDecimalPlaces)) {
        returnResult = result.toFixed(numOfDecimalPlaces);
    }
    else if (/\.[0-9]{10}/.test(`${result}`)) {
        returnResult = result.toFixed(10);
    }
    else {
        returnResult = `${result}`;
    }
    if (/e/.test(returnResult)) {
        return cancelScientificNotation(returnResult);
    }
    return returnResult;
};

/**
 * Divide number a by number b
 * @ignore
 * @param a {number} number a
 * @param b {number} number b
 * @return {number} quotient of number a divided by number b
 */
function floatDivide(a, b) {
    let numOfDecimalPlacesInA = 0;
    let numOfDecimalPlacesInB = 0;
    try {
        numOfDecimalPlacesInA = a.toString().split('.')[1].length;
    }
    catch (e) {
        //
    }
    try {
        numOfDecimalPlacesInB = b.toString().split('.')[1].length;
    }
    catch (e) {
        //
    }
    const newA = Number(a.toString().replace('.', ''));
    const newB = Number(b.toString().replace('.', ''));
    return (newA / newB) * 10 ** (numOfDecimalPlacesInB - numOfDecimalPlacesInA);
}
/**
 * @apiAnalyze
 * Calculate quotient of members in an Array
 * @since 0.0.13
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} quotient of these numbers (number of decimal places not larger than 10)
 *
 * @example
 * ```javascript
 * console.log(divide([1, 2])) // '0.5'
 * console.log(divide([1, 2, 3], 2)) // '0.17'
 * ```
 */
const divide = (arr, numOfDecimalPlaces) => {
    // 如果数据精度过大，则转成取6位小数进行计算
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (!validateNumber(item)) {
            arr[i] = Number(item.toFixed(6));
        }
    }
    const result = arr.reduce((preVal, curVal) => floatDivide(preVal, curVal));
    let returnResult;
    if (hasValue(numOfDecimalPlaces)) {
        returnResult = result.toFixed(numOfDecimalPlaces);
    }
    else if (/\.[0-9]{10}/.test(`${result}`)) {
        returnResult = result.toFixed(10);
    }
    else {
        returnResult = `${result}`;
    }
    if (/e/.test(returnResult)) {
        return cancelScientificNotation(returnResult);
    }
    return returnResult;
};

/**
 * @apiAnalyze
 * Transform value to integer (invalue value will be transfered to integer 0)
 * @since 0.0.13
 * @param val {any} any value you want to transfer to integer
 * @return {number} value in format of integer
 *
 * @example
 * ```javascript
 * console.log(getInteger('0')) // 0
 * console.log(getInteger('')) // 0
 * console.log(getInteger(2)) // 2
 * console.log(getInteger(0.12)) // 0
 * ```
 */
const getInteger = (val) => {
    try {
        if (typeof val === 'string') {
            val = Number(val);
        }
        if (isNaN(val)) {
            return 0;
        }
        const result = val ? Math.floor(val) : 0;
        return isNaN(result) ? 0 : result;
    }
    catch (e) {
        return 0;
    }
};

/**
 * @apiAnalyze
 * Return a random integer between min and max (inclusive).
 * @since 0.0.13
 * @param min {number} the minimum number (inclusive)
 * @param max {number} the maximum number (inclusive)
 * @return {number}
 *
 * @example
 * ```javascript
 * console.log(random(0, 0)) // 0
 * console.log(random(0, 1)) // 0 or 1
 * ```
 */
const random = (min, max) => {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * @apiAnalyze
 * 验证车牌号是否符合规则
 *
 * - This method is only available in China
 * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @since 0.0.13
 * @param plateNo {string} the car plate number
 * @return {boolean} whether the car plate number is valid
 *
 * @example
 * ```javascript
 * console.log(validateCarPlate('沪ANC116')) // true
 * console.log(validateCarPlate('呼呼116')) // false
 * ```
 */
const validateCarPlate = (plateNo) => {
    /**
     * @ignore
     * 普通汽车
     * 车牌号格式：汉字 + A-Z + 5位A-Z或0-9(  车牌号不存在字母I和O防止和1、0混淆)
     */
    const reNormalVehicle = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/;
    /**
     * @ignore
     * 新能源号码车牌编码规则
     *
     * 新能源汽车号牌号码增加一位，与普通汽车号牌相比，
     * 新能源汽车号牌号码由5位升为6位，号牌号码容量增大、资源更加丰富，
     * 可以满足“少使用字母、多使用数字”的编排需要。
     *
     * 具体编码规则是省份简称（1位汉字）+发牌机关代号（1位字母）+序号（6位）。
     *
     * - 小型新能源汽车号牌的第一位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
     * 第二位可以使用字母或者数字，后四位必须使用数字。
     *
     * - 大型新能源汽车号牌的第六位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
     * 前五位必须使用数字。
     *
     * 序号中英文字母I和O不能使用。
     */
    const reNewEngineVehicle = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z](([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;
    return reNormalVehicle.test(plateNo) || reNewEngineVehicle.test(plateNo);
};

/**
 * validate date part in ID card number
 * @ignore
 * @param ID {string} ID card number
 * @return {boolean} whether date part in ID card number is valid
 */
function checkDate(ID) {
    let year;
    let month;
    let day;
    let tempDate;
    const length18Or15 = ID.length;
    if (length18Or15 === 18) {
        year = ID.substring(6, 10);
        month = ID.substring(10, 12);
        day = ID.substring(12, 14);
        // with parseInt, 05 will be 5
        tempDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
        return !(tempDate.getFullYear() !== parseInt(year, 10)
            || tempDate.getMonth() !== parseInt(month, 10) - 1
            || tempDate.getDate() !== parseInt(day, 10));
    }
    if (length18Or15 === 15) {
        year = ID.substring(6, 8);
        month = ID.substring(8, 10);
        day = ID.substring(10, 12);
        // with parseInt, 05 will be 5
        tempDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
        // .getYear() is not recommended for use any longer,
        // so here getFullYear() is used, although it may seem not simple enough
        return !((`${tempDate.getFullYear()}`).substring(2) !== `${parseInt(year, 10)}`
            || tempDate.getMonth() !== parseInt(month, 10) - 1
            || tempDate.getDate() !== parseInt(day, 10));
    }
    return false;
}
/**
 * @apiAnalyze
 * Validate the accuracy of a ID card number
 * - This function is only available for Chinese
 * @since 0.0.13
 * @param idCardNo {string} ID card number
 * @return {boolean} whether the ID card number is valid
 *
 * @example
 * ```javascript
 * console.log(validateIdCardNo('123456789012345678')) // false
 * ```
 */
const validateIdCardNo = (idCardNo) => {
    const ID = `${idCardNo}`;
    if (/^[1-9][0-9]{16}([0-9]|[xX])$/.test(ID)) {
        if (checkDate(ID)) {
            // turn ID to an array
            const arrID = ID.split('').map((numStr) => {
                if (numStr.toLowerCase() === 'x') {
                    return 10;
                }
                return parseInt(numStr, 10);
            });
            // factors for 1st-17st ID digits
            const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
            // the check code for the 18th digit in the ID number
            const checkCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            let sum = 0;
            // multiply first 17 ID digits by corresponding factor elements, and sum these results
            for (let i = 16; i >= 0; i--) {
                sum += arrID[i] * factor[i];
            }
            // let remainder = sum % 11
            return arrID[17] === checkCode[sum % 11];
        }
        return false;
    }
    if (/^[1-9][0-9]{14}$/.test(ID)) {
        return checkDate(ID);
    }
    return false;
};

/**
 * @apiAnalyze
 * Judge whether it's a valid phone number
 * - This function is only available for Chinese cars
 * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 *
 * @param phone {string} phone number
 * @return {boolean} whether it's a valid phone number
 * @since 0.0.13
 * @example
 * ```javascript
 * console.log(validatePhone('13333333333')) // true
 * console.log(validatePhone('12333333333')) // false
 * ```
 */
const validatePhone = (phone) => {
    return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone);
};

/**
 * @apiAnalyze
 * 修改指定的url链接，将其中location.search或者location.hash中的参数进行修改，或者追加，得到修改后的url地址
 * @since 0.0.13
 * @param payload {object}
 * @param payload.url {string} 修改前的链接地址
 * @param payload.params {Record<string, string>} 要修改/追加的参数对象
 * @param payload.position {string} 'search' | 'hash'，将参数对象应用于search还是hash中
 * @return {string} 修改后的链接地址
 */
const attachParamsToUrl = (payload) => {
    const { url, params, position } = payload;
    let urlInstance;
    if (url.startsWith('http')) {
        urlInstance = new URL(url);
    }
    else if (url.startsWith('/')) {
        urlInstance = new URL(`${location.origin}${url}`);
    }
    else {
        urlInstance = new URL(url, location.href);
    }
    const { searchParams } = urlInstance;
    if (position === 'search') {
        Object.keys(params).forEach((key) => {
            if (isString$1(key)) {
                const val = String(params[key]);
                if (['', 'undefined', 'null'].includes(val)) {
                    searchParams.delete(key);
                }
                else {
                    searchParams.set(key, val);
                }
            }
        });
    }
    else if (position === 'hash') {
        let str = '';
        Object.keys(params).forEach((key) => {
            str += `${key}=${params[key]}&`;
        });
        str = str.replace(/&$/, '');
        if (urlInstance.hash === '') {
            urlInstance.hash = str ? `#/?${str}` : '';
        }
        else if (urlInstance.hash.includes('?')) {
            urlInstance.hash = str ? `${urlInstance.hash}&${str}` : urlInstance.hash;
            // 对整个#/?后面的部分转对象，处理下避免出现重复的key（以后出现的为准）
            const searchStringInHash = urlInstance.hash.split('?')[1];
            const strBeforeQuestionMark = urlInstance.hash.split('?')[0];
            const arr = searchStringInHash.split('&');
            const searchObj = arr.reduce((prev, curr) => {
                const [key, value] = curr.split('=');
                prev[key] = value;
                return prev;
            }, {});
            let searchString = '';
            Object.keys(searchObj).forEach((key) => {
                searchString += `${key}=${searchObj[key]}&`;
            });
            urlInstance.hash = `${strBeforeQuestionMark}?${searchString}`.replace(/&$/, '');
        }
        else {
            urlInstance.hash = str ? `${urlInstance.hash}?${str}` : urlInstance.hash;
        }
    }
    return urlInstance.href;
};

/**
 * @apiAnalyze
 * Go to specified path with specified query parameters
 * @since 0.0.13
 *
 * @example
 * ```javascript
 * goPage({ url: 'http://www.baidu.com', query: { a: 1, b: 2 } })
 * ```
 */
const goPage = (payload) => {
    const { url, query, hash, config } = payload;
    const tempQuery = {};
    if (query) {
        Object.keys(query).forEach((key) => {
            tempQuery[key] = getString(query[key]);
        });
    }
    const tempHashQuery = {};
    if (hash) {
        Object.keys(hash).forEach((key) => {
            tempHashQuery[key] = getString(hash[key]);
        });
    }
    let newUrl = url;
    if (Object.keys(tempQuery).length > 0) {
        newUrl = attachParamsToUrl({
            url: newUrl,
            params: tempQuery,
            position: 'search'
        });
    }
    if (Object.keys(tempHashQuery).length > 0) {
        newUrl = attachParamsToUrl({
            url: newUrl,
            params: tempHashQuery,
            position: 'hash'
        });
    }
    if (config?.replace) {
        location.replace(newUrl);
    }
    else {
        window.location.href = newUrl;
    }
    return newUrl;
};

/**
 * @apiAnalyze
 * 将对象序列化成字符串
 * @since 0.0.13
 * @param params {object} an object of key:value pairs
 * @return {string} serialized params in string format
 *
 * @example
 * ```javascript
 * serializeParams({ a: 3, b: 4 }) => 'a=3&b=4'
 * ```
 */
const serializeParams = (params) => {
    let str = '';
    Object.keys(params).forEach((p) => {
        if (Object.prototype.hasOwnProperty.call(params, p)) {
            str += `&${p}=${params[p]}`;
        }
    });
    return str.replace(/^&/, '');
};

/**
 * @apiAnalyze
 * 解析url中的查询字符串为一个对象
 * @since 0.0.13
 * @param url {string} the url, usually got from window.location.href
 * @return {string} the value of specified query parameter
 *
 * @example
 * ```javascript
 * parseSearchString('http://www.baidu.com?a=1&b=c') // { a: '1', b: 'c' }
 * ```
 */
const parseSearchString = (url) => {
    let urlInstance;
    if (url.startsWith('http')) {
        urlInstance = new URL(url);
    }
    else if (url.startsWith('/')) {
        urlInstance = new URL(`${location.origin}${url}`);
    }
    else {
        urlInstance = new URL(url, location.href);
    }
    const { searchParams } = urlInstance;
    const returnObj = Object.create(null);
    searchParams.forEach((val, key) => {
        returnObj[key] = val;
    });
    return returnObj;
};

/**
 * 从url上获取参数
 * @param partName {string} 'search' | 'hash'
 * @param keyName {string}
 * @returns {string}
 */
const getParamFromUrlPart = (partName, keyName) => {
    const regExp = new RegExp(`^.*${keyName}=([^&?]*)[^&?]?.*$`);
    const arrMatch = location[partName].match(regExp);
    if (arrMatch !== null && arrMatch.length > 1) {
        const returnVal = arrMatch[1];
        if (returnVal === 'null' || returnVal === 'undefined') {
            return '';
        }
        return returnVal || '';
    }
    return '';
};
/**
 * @apiAnalyze
 * 从url链接中hash部分（即链接中#后面的部分）获取参数的值（注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的）
 * @since 0.0.13
 * @param name {string}
 * @return {string}
 */
const getParamFromUrlHash = (name) => getParamFromUrlPart('hash', name);

/**
 * @apiAnalyze
 * 从url链接的search部分（即链接中?后面的部分）获取参数的值（注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的，不属于search部分）
 * @since 0.0.13
 * @param name {string}
 * @return {string}
 */
const getParamFromUrlQuery = (name) => getParamFromUrlPart('search', name);

/**
 * @apiAnalyze
 * Judge whether the OS of current device is iOS
 * @since 0.0.13
 * @return {boolean} whether the OS of current device is iOS
 *
 * @example
 * ```javascript
 * console.log(isIOS()) // true or false
 * ```
 */
const isIOS = () => {
    return (/iphone/i).test(window.navigator.userAgent.toLowerCase());
};

/**
 * @apiAnalyze
 * Clear all localStorage items
 * @since 0.0.13
 * @example
 * ```javascript
 * clearLocalStorage() // all localStorage items will be removed
 * ```
 */
const clearLocalStorage = () => {
    window.localStorage.clear();
};

/**
 * @apiAnalyze
 * Clear all session storage items
 * @since 0.0.13
 * @example
 * ```javascript
 * clearSessionStorage() // all sessionStorage items will be removed
 * ```
 */
const clearSessionStorage = () => {
    window.sessionStorage.clear();
};

/**
 * @apiAnalyze
 * Get value of the cookie item of specified name
 * @since 0.0.13
 * @param name {string} name of the cookie item
 * @return {string} value of the cookie item
 *
 * @example
 * ```javascript
 * getCookie('key')
 * ```
 */
const getCookie = (name) => {
    if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(`${name}=`);
        if (start !== -1) {
            start = start + name.length + 1;
            let end = document.cookie.indexOf(';', start);
            if (end === -1) {
                end = document.cookie.length;
            }
            return decodeURI(document.cookie.substring(start, end));
        }
        return '';
    }
    return '';
};

/**
 * @apiAnalyze
 * Get the value of localStorage item of specified key/name
 * @since 0.0.13
 * @param key {string} the specified key/name of the storage item
 * @return {object | null} value of localStorage item
 *
 * @example
 * ```javascript
 * getLocalStorage('localStorageItemName')
 * ```
 */
const getLocalStorage = (key) => {
    if ('localStorage' in window) {
        const rawVal = window.localStorage.getItem(key);
        if (rawVal) {
            return JSON.parse(decodeURI(rawVal));
        }
        return null;
    }
    throw new Error('localStorage is not supported!');
};

/**
 * @apiAnalyze
 * Get value of sessionStorage item specified the key
 * @since 0.0.13
 * @param key {string} the name of the sessionStorage item
 * @return {object | null} value of sessionStorage item
 *
 * @example
 * ```javascript
 * getSessionStorage('sessionStorageItemName')
 * ```
 */
const getSessionStorage = (key) => {
    const rawVal = window.sessionStorage.getItem(key);
    if (rawVal) {
        return JSON.parse(window.decodeURI(rawVal));
    }
    return null;
};

/**
 * @apiAnalyze
 * Set cookie
 * @since 0.0.13
 * @param name {string} the key/name of the cookie item
 * @param val {string} the value of the cookit item
 * @param expireDays [number] if set, the cookie item will be outdated after the specified number of days
 *
 * @example
 * ```javascript
 * setCookie('key', 'value')
 * setCookie('key', 'value', 5)
 * ```
 */
const setCookie = (name, val, expireDays) => {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + (expireDays || 0));
    window.document.cookie = `${name}=${window.encodeURI(val)}${expireDays ? `;expires=${expireDate.toUTCString()}` : ''}`;
};

/**
 * @apiAnalyze
 * Save a key:value pair in localStorage
 * - the value should itself be an object of key:value pairs
 * @since 0.0.13
 * @param key {string} the key of the storage item
 * @param val {object} the value of the storage item
 *
 * @example
 * ```javascript
 * setLocalStorage('localStorageItemName', { a: 1, b: '2' })
 * ```
 */
const setLocalStorage = (key, val) => {
    if ('localStorage' in window) {
        try {
            window.localStorage.setItem(key, encodeURI(JSON.stringify(val)));
        }
        catch (e) {
            if (e instanceof Error) {
                if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                    throw new Error('localStorage limit exceeds!');
                }
            }
            throw e;
        }
    }
    else {
        throw new Error('localStorage API is not supported!');
    }
};

/**
 * @apiAnalyze
 * Set a key:value pair in sessionStorage
 * @since 0.0.13
 * @param key {string} the key of the sessionStorage item
 * @param val {object} the value of the sessionStorage item, itself should be an object of key:value pairs
 *
 * @example
 * ```javascript
 * setSessionStorage('sessionStorageItemName', { a: 1, b: '2' })
 * ```
 */
const setSessionStorage = (key, val) => {
    window.sessionStorage.setItem(key, encodeURI(JSON.stringify(val)));
};

/**
 * @apiAnalyze
 * Remove the localStorage item of specified key/name
 * @since 0.0.13
 * @param key {string} the key/name of the localStorage item to remove
 *
 * @example
 * ```javascript
 * removeLocalStorage('localStorageItemName')
 * ```
 */
const removeLocalStorage = (key) => {
    window.localStorage.removeItem(key);
};

/**
 * @apiAnalyze
 * Remove the sessionStorage item of specified key/name
 * @since 0.0.13
 * @param key {string} the key/name of the sessionStorage item to remove
 *
 * @example
 * ```javascript
 * removeSessionStorage('sessionStorageItemName')
 * ```
 */
const removeSessionStorage = (key) => {
    window.sessionStorage.removeItem(key);
};

/**
 * @apiAnalyze
 * 更新本地缓存
 * @since 0.0.13
 * @note 该方法会先尝试获取历史缓存，如果有则用新传入的对象对历史缓存结果进行merge操作，然后存入更新后的结果
 * @param key {string} 缓存key
 * @param val {object} 要更新的键值对
 * @return {undefined}
 */
const updateLocalStorage = (key, val) => {
    const oldVal = getLocalStorage(key);
    if (!oldVal) {
        setLocalStorage(key, val);
        return;
    }
    const newVal = merge$1(oldVal, val);
    setLocalStorage(key, newVal);
};

/**
 * @apiAnalyze
 * 更新本地缓存
 * @since 0.0.13
 * @note 该方法会先尝试获取历史缓存，如果有则用新传入的对象对历史缓存结果进行merge操作，然后存入更新后的结果
 * @param key {string} 缓存key
 * @param val {object} 要更新的键值对
 * @return {undefined}
 */
const updateSessionStorage = (key, val) => {
    const oldVal = getSessionStorage(key);
    if (!oldVal) {
        setSessionStorage(key, val);
        return;
    }
    const newVal = merge$1(oldVal, val);
    setSessionStorage(key, newVal);
};

function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;
var getPrototypeOf = Object.getPrototypeOf;
var kindOf = function (cache) {
  return function (thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
var kindOfTest = function kindOfTest(type) {
  type = type.toLowerCase();
  return function (thing) {
    return kindOf(thing) === type;
  };
};
var typeOfTest = function typeOfTest(type) {
  return function (thing) {
    return _typeof(thing) === type;
  };
};

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
var isArray = Array.isArray;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
var isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
var isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
var isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
var isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
var isObject = function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
};

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
var isBoolean = function isBoolean(thing) {
  return thing === true || thing === false;
};

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
var isPlainObject = function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }
  var prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
var isStream = function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
};

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
var isFormData = function isFormData(thing) {
  var kind;
  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
var trim = function trim(str) {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$allOwnKeys = _ref.allOwnKeys,
    allOwnKeys = _ref$allOwnKeys === void 0 ? false : _ref$allOwnKeys;
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  var i;
  var l;

  // Force an array if not already something iterable
  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    var keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    var len = keys.length;
    var key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  var keys = Object.keys(obj);
  var i = keys.length;
  var _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = function () {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== 'undefined' ? window : global;
}();
var isContextDefined = function isContextDefined(context) {
  return !isUndefined(context) && context !== _global;
};

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */
) {
  var _ref2 = isContextDefined(this) && this || {},
    caseless = _ref2.caseless;
  var result = {};
  var assignValue = function assignValue(val, key) {
    var targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (var i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
var extend = function extend(a, b, thisArg) {
  var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    allOwnKeys = _ref3.allOwnKeys;
  forEach(b, function (val, key) {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {
    allOwnKeys: allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
var stripBOM = function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
var inherits = function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
var toFlatObject = function toFlatObject(sourceObj, destObj, filter, propFilter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
var endsWith = function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
var toArray = function toArray(thing) {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  var i = thing.length;
  if (!isNumber(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
var isTypedArray = function (TypedArray) {
  // eslint-disable-next-line func-names
  return function (thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
var forEachEntry = function forEachEntry(obj, fn) {
  var generator = obj && obj[Symbol.iterator];
  var iterator = generator.call(obj);
  var result;
  while ((result = iterator.next()) && !result.done) {
    var pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
var matchAll = function matchAll(regExp, str) {
  var matches;
  var arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
var isHTMLForm = kindOfTest('HTMLFormElement');
var toCamelCase = function toCamelCase(str) {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};

/* Creating a function that will check if an object has a property. */
var hasOwnProperty = function (_ref4) {
  var hasOwnProperty = _ref4.hasOwnProperty;
  return function (obj, prop) {
    return hasOwnProperty.call(obj, prop);
  };
}(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
var isRegExp = kindOfTest('RegExp');
var reduceDescriptors = function reduceDescriptors(obj, reducer) {
  var descriptors = Object.getOwnPropertyDescriptors(obj);
  var reducedDescriptors = {};
  forEach(descriptors, function (descriptor, name) {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

var freezeMethods = function freezeMethods(obj) {
  reduceDescriptors(obj, function (descriptor, name) {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }
    var value = obj[name];
    if (!isFunction(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = function () {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};
var toObjectSet = function toObjectSet(arrayOrString, delimiter) {
  var obj = {};
  var define = function define(arr) {
    arr.forEach(function (value) {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = function noop() {};
var toFiniteNumber = function toFiniteNumber(value, defaultValue) {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = 'abcdefghijklmnopqrstuvwxyz';
var DIGIT = '0123456789';
var ALPHABET = {
  DIGIT: DIGIT,
  ALPHA: ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = function generateString() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ALPHABET.ALPHA_DIGIT;
  var str = '';
  var length = alphabet.length;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}
var toJSONObject = function toJSONObject(obj) {
  var stack = new Array(10);
  var visit = function visit(source, i) {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!('toJSON' in source)) {
        stack[i] = source;
        var target = isArray(source) ? [] : {};
        forEach(source, function (value, key) {
          var reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = undefined;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest('AsyncFunction');
var isThenable = function isThenable(thing) {
  return thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing["catch"]);
};
var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isBoolean: isBoolean,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isRegExp: isRegExp,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isTypedArray: isTypedArray,
  isFileList: isFileList,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  forEachEntry: forEachEntry,
  matchAll: matchAll,
  isHTMLForm: isHTMLForm,
  hasOwnProperty: hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: reduceDescriptors,
  freezeMethods: freezeMethods,
  toObjectSet: toObjectSet,
  toCamelCase: toCamelCase,
  noop: noop,
  toFiniteNumber: toFiniteNumber,
  findKey: findKey,
  global: _global,
  isContextDefined: isContextDefined,
  ALPHABET: ALPHABET,
  generateString: generateString,
  isSpecCompliantForm: isSpecCompliantForm,
  toJSONObject: toJSONObject,
  isAsyncFn: isAsyncFn,
  isThenable: isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype$1 = AxiosError.prototype;
var descriptors = {};
['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(function (code) {
  descriptors[code] = {
    value: code
  };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {
  value: true
});

// eslint-disable-next-line func-names
AxiosError.from = function (error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype$1);
  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, function (prop) {
    return prop !== 'isAxiosError';
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });
  var metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  var visitor = options.visitor || defaultVisitor;
  var dots = options.dots;
  var indexes = options.indexes;
  var _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  var useBlob = _Blob && utils.isSpecCompliantForm(formData);
  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    var arr = value;
    if (value && !path && _typeof(value) === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  var stack = [];
  var exposedHelpers = Object.assign(predicates, {
    defaultVisitor: defaultVisitor,
    convertValue: convertValue,
    isVisitable: isVisitable
  });
  function build(value, path) {
    if (utils.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils.forEach(value, function each(el, key) {
      var result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  var charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
var prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  var _encode = encoder ? function (value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  var _encode = options && options.encode || encode;
  var serializeFn = options && options.serialize;
  var serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, options).toString(_encode);
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

var InterceptorManager = /*#__PURE__*/function () {
  function InterceptorManager() {
    _classCallCheck(this, InterceptorManager);
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  _createClass(InterceptorManager, [{
    key: "use",
    value: function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    }

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     *
     * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
     */
  }, {
    key: "eject",
    value: function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    }

    /**
     * Clear all interceptors from the stack
     *
     * @returns {void}
     */
  }, {
    key: "clear",
    value: function clear() {
      if (this.handlers) {
        this.handlers = [];
      }
    }

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     *
     * @returns {void}
     */
  }, {
    key: "forEach",
    value: function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    }
  }]);
  return InterceptorManager;
}();
var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
var isStandardBrowserEnv = function () {
  var product;
  if (typeof navigator !== 'undefined' && ((product = navigator.product) === 'ReactNative' || product === 'NativeScript' || product === 'NS')) {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
var isStandardBrowserWebWorkerEnv = function () {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
}();
var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv: isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv: isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function visitor(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(function (match) {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  var obj = {};
  var keys = Object.keys(arr);
  var i;
  var len = keys.length;
  var key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    var name = path[index++];
    var isNumericKey = Number.isFinite(+name);
    var isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }
    var result = buildPath(path, value, target[name], index);
    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    var obj = {};
    utils.forEachEntry(formData, function (name, value) {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http'],
  transformRequest: [function transformRequest(data, headers) {
    var contentType = headers.getContentType() || '';
    var hasJSONContentType = contentType.indexOf('application/json') > -1;
    var isObjectPayload = utils.isObject(data);
    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }
    var isFormData = utils.isFormData(data);
    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    var isFileList;
    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), this.formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var JSONRequested = this.responseType === 'json';
    if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = utils.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = (function (rawHeaders) {
  var parsed = {};
  var key;
  var val;
  var i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
});

var $internals = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  var tokens = Object.create(null);
  var tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  var match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = function isValidHeaderName(str) {
  return /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
};
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils.isString(value)) return;
  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function (w, _char, str) {
    return _char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  var accessorName = utils.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(function (methodName) {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function value(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = /*#__PURE__*/function (_Symbol$iterator, _Symbol$toStringTag) {
  function AxiosHeaders(headers) {
    _classCallCheck(this, AxiosHeaders);
    headers && this.set(headers);
  }
  _createClass(AxiosHeaders, [{
    key: "set",
    value: function set(header, valueOrRewrite, rewrite) {
      var self = this;
      function setHeader(_value, _header, _rewrite) {
        var lHeader = normalizeHeader(_header);
        if (!lHeader) {
          throw new Error('header name must be a non-empty string');
        }
        var key = utils.findKey(self, lHeader);
        if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
          self[key || _header] = normalizeValue(_value);
        }
      }
      var setHeaders = function setHeaders(headers, _rewrite) {
        return utils.forEach(headers, function (_value, _header) {
          return setHeader(_value, _header, _rewrite);
        });
      };
      if (utils.isPlainObject(header) || header instanceof this.constructor) {
        setHeaders(header, valueOrRewrite);
      } else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
        setHeaders(parseHeaders(header), valueOrRewrite);
      } else {
        header != null && setHeader(valueOrRewrite, header, rewrite);
      }
      return this;
    }
  }, {
    key: "get",
    value: function get(header, parser) {
      header = normalizeHeader(header);
      if (header) {
        var key = utils.findKey(this, header);
        if (key) {
          var value = this[key];
          if (!parser) {
            return value;
          }
          if (parser === true) {
            return parseTokens(value);
          }
          if (utils.isFunction(parser)) {
            return parser.call(this, value, key);
          }
          if (utils.isRegExp(parser)) {
            return parser.exec(value);
          }
          throw new TypeError('parser must be boolean|regexp|function');
        }
      }
    }
  }, {
    key: "has",
    value: function has(header, matcher) {
      header = normalizeHeader(header);
      if (header) {
        var key = utils.findKey(this, header);
        return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
      }
      return false;
    }
  }, {
    key: "delete",
    value: function _delete(header, matcher) {
      var self = this;
      var deleted = false;
      function deleteHeader(_header) {
        _header = normalizeHeader(_header);
        if (_header) {
          var key = utils.findKey(self, _header);
          if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
            delete self[key];
            deleted = true;
          }
        }
      }
      if (utils.isArray(header)) {
        header.forEach(deleteHeader);
      } else {
        deleteHeader(header);
      }
      return deleted;
    }
  }, {
    key: "clear",
    value: function clear(matcher) {
      var keys = Object.keys(this);
      var i = keys.length;
      var deleted = false;
      while (i--) {
        var key = keys[i];
        if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
          delete this[key];
          deleted = true;
        }
      }
      return deleted;
    }
  }, {
    key: "normalize",
    value: function normalize(format) {
      var self = this;
      var headers = {};
      utils.forEach(this, function (value, header) {
        var key = utils.findKey(headers, header);
        if (key) {
          self[key] = normalizeValue(value);
          delete self[header];
          return;
        }
        var normalized = format ? formatHeader(header) : String(header).trim();
        if (normalized !== header) {
          delete self[header];
        }
        self[normalized] = normalizeValue(value);
        headers[normalized] = true;
      });
      return this;
    }
  }, {
    key: "concat",
    value: function concat() {
      var _this$constructor;
      for (var _len = arguments.length, targets = new Array(_len), _key = 0; _key < _len; _key++) {
        targets[_key] = arguments[_key];
      }
      return (_this$constructor = this.constructor).concat.apply(_this$constructor, [this].concat(targets));
    }
  }, {
    key: "toJSON",
    value: function toJSON(asStrings) {
      var obj = Object.create(null);
      utils.forEach(this, function (value, header) {
        value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
      });
      return obj;
    }
  }, {
    key: _Symbol$iterator,
    value: function value() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
  }, {
    key: "toString",
    value: function toString() {
      return Object.entries(this.toJSON()).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          header = _ref2[0],
          value = _ref2[1];
        return header + ': ' + value;
      }).join('\n');
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return 'AxiosHeaders';
    }
  }], [{
    key: "from",
    value: function from(thing) {
      return thing instanceof this ? thing : new this(thing);
    }
  }, {
    key: "concat",
    value: function concat(first) {
      var computed = new this(first);
      for (var _len2 = arguments.length, targets = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        targets[_key2 - 1] = arguments[_key2];
      }
      targets.forEach(function (target) {
        return computed.set(target);
      });
      return computed;
    }
  }, {
    key: "accessor",
    value: function accessor(header) {
      var internals = this[$internals] = this[$internals] = {
        accessors: {}
      };
      var accessors = internals.accessors;
      var prototype = this.prototype;
      function defineAccessor(_header) {
        var lHeader = normalizeHeader(_header);
        if (!accessors[lHeader]) {
          buildAccessors(prototype, _header);
          accessors[lHeader] = true;
        }
      }
      utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
      return this;
    }
  }]);
  return AxiosHeaders;
}(Symbol.iterator, Symbol.toStringTag);
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);
utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);
var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  var config = this || defaults$1;
  var context = response || config;
  var headers = AxiosHeaders$1.from(context.headers);
  var data = context.data;
  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}
utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
}

var cookies = platform.isStandardBrowserEnv ?
// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));
      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }
      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }
      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }
      if (secure === true) {
        cookie.push('secure');
      }
      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :
// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;
    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :
// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  var bytes = new Array(samplesCount);
  var timestamps = new Array(samplesCount);
  var head = 0;
  var tail = 0;
  var firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    var now = Date.now();
    var startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    var i = tail;
    var bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    var passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  var bytesNotified = 0;
  var _speedometer = speedometer(50, 250);
  return function (e) {
    var loaded = e.loaded;
    var total = e.lengthComputable ? e.total : undefined;
    var progressBytes = loaded - bytesNotified;
    var rate = _speedometer(progressBytes);
    var inRange = loaded <= total;
    bytesNotified = loaded;
    var data = {
      loaded: loaded,
      total: total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };
    data[isDownloadStream ? 'download' : 'upload'] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }
    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else {
        requestHeaders.setContentType('multipart/form-data;', false); // mobile/desktop app frameworks
      }
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }
    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = AxiosHeaders$1.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      var responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function onCanceled(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }
    var protocol = parseProtocol(fullPath);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};

var knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};
utils.forEach(knownAdapters, function (fn, value) {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {
        value: value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      value: value
    });
  }
});
var adapters = {
  getAdapter: function getAdapter(adapters) {
    adapters = utils.isArray(adapters) ? adapters : [adapters];
    var _adapters = adapters,
      length = _adapters.length;
    var nameOrAdapter;
    var adapter;
    for (var i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if (adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) {
        break;
      }
    }
    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError("Adapter ".concat(nameOrAdapter, " is not supported by the environment"), 'ERR_NOT_SUPPORT');
      }
      throw new Error(utils.hasOwnProp(knownAdapters, nameOrAdapter) ? "Adapter '".concat(nameOrAdapter, "' is not available in the build") : "Unknown adapter '".concat(nameOrAdapter, "'"));
    }
    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  var adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(config, config.transformResponse, response);
    response.headers = AxiosHeaders$1.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

var headersToObject = function headersToObject(thing) {
  return thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({
        caseless: caseless
      }, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }
  var mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: function headers(a, b) {
      return mergeDeepProperties(headersToObject(a), headersToObject(b), true);
    }
  };
  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(config1[prop], config2[prop], prop);
    utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

var VERSION = "1.4.0";

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
  validators$1[type] = function validator(thing) {
    return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
var deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function (value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (_typeof(options) !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions: assertOptions,
  validators: validators$1
};

var validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
var Axios = /*#__PURE__*/function () {
  function Axios(instanceConfig) {
    _classCallCheck(this, Axios);
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  _createClass(Axios, [{
    key: "request",
    value: function request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }
      config = mergeConfig(this.defaults, config);
      var _config = config,
        transitional = _config.transitional,
        paramsSerializer = _config.paramsSerializer,
        headers = _config.headers;
      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators["boolean"]),
          forcedJSONParsing: validators.transitional(validators["boolean"]),
          clarifyTimeoutError: validators.transitional(validators["boolean"])
        }, false);
      }
      if (paramsSerializer != null) {
        if (utils.isFunction(paramsSerializer)) {
          config.paramsSerializer = {
            serialize: paramsSerializer
          };
        } else {
          validator.assertOptions(paramsSerializer, {
            encode: validators["function"],
            serialize: validators["function"]
          }, true);
        }
      }

      // Set config.method
      config.method = (config.method || this.defaults.method || 'get').toLowerCase();
      var contextHeaders;

      // Flatten headers
      contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
      contextHeaders && utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (method) {
        delete headers[method];
      });
      config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      var i = 0;
      var len;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest.bind(this), undefined];
        chain.unshift.apply(chain, requestInterceptorChain);
        chain.push.apply(chain, responseInterceptorChain);
        len = chain.length;
        promise = Promise.resolve(config);
        while (i < len) {
          promise = promise.then(chain[i++], chain[i++]);
        }
        return promise;
      }
      len = requestInterceptorChain.length;
      var newConfig = config;
      i = 0;
      while (i < len) {
        var onFulfilled = requestInterceptorChain[i++];
        var onRejected = requestInterceptorChain[i++];
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected.call(this, error);
          break;
        }
      }
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      i = 0;
      len = responseInterceptorChain.length;
      while (i < len) {
        promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
      }
      return promise;
    }
  }, {
    key: "getUri",
    value: function getUri(config) {
      config = mergeConfig(this.defaults, config);
      var fullPath = buildFullPath(config.baseURL, config.url);
      return buildURL(fullPath, config.params, config.paramsSerializer);
    }
  }]);
  return Axios;
}(); // Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
var CancelToken = /*#__PURE__*/function () {
  function CancelToken(executor) {
    _classCallCheck(this, CancelToken);
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;

    // eslint-disable-next-line func-names
    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = function (onfulfilled) {
      var _resolve;
      // eslint-disable-next-line func-names
      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  _createClass(CancelToken, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    }

    /**
     * Subscribe to the cancel signal
     */
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    }

    /**
     * Unsubscribe from the cancel signal
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    }

    /**
     * Returns an object that contains a new `CancelToken` and a function that, when called,
     * cancels the `CancelToken`.
     */
  }], [{
    key: "source",
    value: function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token,
        cancel: cancel
      };
    }
  }]);
  return CancelToken;
}();
var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
}

var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    value = _ref2[1];
  HttpStatusCode[value] = key;
});
var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios$1(defaultConfig);
  var instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  utils.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders$1;
axios.formToJSON = function (thing) {
  return formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
};
axios.HttpStatusCode = HttpStatusCode$1;
axios["default"] = axios;

// this module should only have a default export
var axios$1 = axios;

// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
axios$1.Axios;
  axios$1.AxiosError;
  axios$1.CanceledError;
  axios$1.isCancel;
  axios$1.CancelToken;
  axios$1.VERSION;
  axios$1.all;
  axios$1.Cancel;
  axios$1.isAxiosError;
  axios$1.spread;
  axios$1.toFormData;
  axios$1.AxiosHeaders;
  axios$1.HttpStatusCode;
  axios$1.formToJSON;
  axios$1.mergeConfig;

/**
 * @apiAnalyze
 * @since 0.0.13
 * @param payload {Record<string, any>} 入参
 * @return {Promise<$utils.IAxiosResponse<T>>}
 *
 * @example
 * ```typescript
 * const addLog = (params: IParamsAddLog) => {
 *   return request<null>({
 *     url: '/fe/logs/addLog',
 *     method: 'post',
 *     data: params,
 *   })
 * }
 * const res = addLog(params)
 * // 返回的res.data.data就是调用request时后面<>中传入的类型
 * console.log(res.data.data) // null
 * ```
 */
const cacheRequests = new Map();
const request = async (payload) => {
    const startTime = Date.now();
    const url = payload.url || '';
    const method = payload.method || 'get';
    const params = payload.params || {};
    const data = payload.data || {};
    const headers = payload.headers || {};
    const { responseType } = payload;
    const timeout = payload.timeout || 30000;
    const cacheTime = payload.cacheTime || 0;
    let cacheKey = '';
    if (cacheTime > 0) {
        if (payload.cacheKey) {
            if (isString$1(payload.cacheKey)) {
                cacheKey = payload.cacheKey;
            }
            else if (isFunction$4(payload.cacheKey)) {
                cacheKey = payload.cacheKey();
            }
        }
        if (!cacheKey) {
            cacheKey = JSON.stringify({
                url, method, params, data
            });
        }
        if (cacheRequests.has(cacheKey)) {
            const { ts, result } = cacheRequests.get(cacheKey);
            // 缓存过期失效
            if (startTime - ts > cacheTime) {
                cacheRequests.delete(cacheKey);
            }
            else {
                return result;
            }
        }
    }
    // @ts-ignore
    const axiosConfig = {
        url,
        method,
        headers,
        params,
        data,
        timeout
    };
    if (responseType) {
        axiosConfig.responseType = responseType;
    }
    if (data instanceof FormData) {
        headers['Content-Type'] = 'multipart/form-data';
    }
    try {
        const returnResult = axios$1(axiosConfig);
        if (cacheTime > 0) {
            cacheRequests.set(cacheKey, {
                ts: startTime,
                result: returnResult
            });
        }
        return returnResult;
    }
    catch (err) {
        if (axios$1.isAxiosError(err)) {
            throw new Error(err.message);
        }
        throw new Error('An unexpected error occurred');
    }
};

// 获取带毫秒的时间文本，用于日志打印
const getLogTime = () => {
    const objDate = new Date();
    const year = objDate.getFullYear();
    const month = toDouble(objDate.getMonth() + 1);
    const day = toDouble(objDate.getDate());
    const hour = toDouble(objDate.getHours());
    const min = toDouble(objDate.getMinutes());
    const seconds = toDouble(objDate.getSeconds());
    const milliseconds = objDate.getMilliseconds();
    return `${year}-${month}-${day} ${hour}:${min}:${seconds}.${milliseconds}`;
};

const getLogColorByLevel = (level) => {
    if (level === 'error') {
        return 'red';
    }
    if (level === 'warn') {
        return 'orange';
    }
    return 'gray';
};

/**
 * @apiAnalyze
 * 打日志的方法（本地开发时如为方便追中调用栈，可以使用console.error代替console.log）
 * @since 0.0.2
 */
const doLog = (() => {
    // eslint-disable-next-line no-console
    const rawLog = console.log;
    return (level, ...args) => {
        const time = getLogTime();
        const color = getLogColorByLevel(level);
        return rawLog(`%c[${time}]`, `color:${color};`, ...args);
    };
})();

// 打印普通日志
const printLog = (...args) => {
    return doLog('log', ...args);
};

// 打印警告日志
const printWarn = (...args) => {
    return doLog('warn', ...args);
};

// 打印错误日志
const printError = (...args) => {
    return doLog('error', ...args);
};

const store = {
    timeLogMap: new Map()
};
const getStore = () => store;

const logTime = (label) => {
    const { timeLogMap } = getStore();
    const startTime = Date.now();
    timeLogMap.set(label, startTime);
};

const logTimeEnd = (label) => {
    const { timeLogMap } = getStore();
    const endTime = Date.now();
    const startTime = timeLogMap.get(label);
    if (!startTime)
        return;
    const duration = endTime - startTime;
    timeLogMap.delete(label);
    if (duration < 100) {
        printLog(`${label}耗时较快：${duration}ms`);
        return;
    }
    printError(`${label}耗时较慢：${(duration / 1000).toFixed(3)}s`);
};

export { add, attachParamsToUrl, clearLocalStorage, clearSessionStorage, cloneDeep, dateToLongString, dateToShortString, debounce$2 as debounce, divide, fillLeft, getCookie, getInteger, getLocalStorage, getParamFromUrlHash, getParamFromUrlQuery, getRelativeDateString, getSessionStorage, getString, goPage, hasValue, isArray$3 as isArray, isBoolean$1 as isBoolean, isDate$1 as isDate, isEmpty$1 as isEmpty, isFunction$4 as isFunction, isIOS, isNull, isNumber$1 as isNumber, isObject$7 as isObject, isRegExp$1 as isRegExp, isString$1 as isString, isUndefined$1 as isUndefined, logTime, logTimeEnd, longStringToDate, merge$1 as merge, multiply, parseSearchString, printError, printLog, printWarn, random, removeLocalStorage, removeSessionStorage, request, serializeParams, setCookie, setLocalStorage, setSessionStorage, shortStringToDate, subtract, throttle$1 as throttle, timestampToLongString, timestampToShortString, toDouble, updateLocalStorage, updateSessionStorage, validateCarPlate, validateIdCardNo, validatePhone };
