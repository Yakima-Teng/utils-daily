
/**
 * utils-daily v0.0.13
 * (c) 2019 Yakima Teng
 * Source code: https://github.com/Yakima-Teng/utils-daily
 * @license MIT
 */

'use strict';

// 

/**
 * Judge whether a variable is valuable
 * - ''、null、'null'、undefined、'undefined' is regarded as invaluable
 * - number 0 is regarded as valuable
 * @param val variable
 * @returns {boolean} whether a variable is valuable
 *
 * @example
 *
 * ```javascript
 * console.log(hasValue('')) // false
 * console.log(hasValue(null) // false
 * console.log(hasValue('null') // false
 * console.log(hasValue(undefined) // false
 * console.log(hasValue('undefined') // false
 * console.log(hasValue(0) // true
 * console.log(hasValue('none') // true
 * ```
 */
function hasValue (val) {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

// 

/**
 * Get the type of a variable
 * @param val {any} the variable
 * @returns {string} 'array', 'object', 'function', 'null', 'undefined', 'string', 'number', 'boolean', 'date', 'regexp' and etc.
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
function getType (val) {
  return ({}).toString.call(val).slice(8, -1).toLowerCase()
}

// 

var FUNC_ERROR_TEXT = 'Expected a function';

function now () {
  return Date.now ? Date.now() : +new Date()
}

/**
 * It's `lodash.debounce` function.
 *
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
 * ```javascript
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
 * ```
 */
function debounce (func, wait, options) {
  if ( options === void 0 ) options = {};

  var lastArgs;
  var lastThis;
  var maxWait;
  var result;
  var timerId;
  var lastCallTime;
  var lastInvokeTime;
  var leading = false;
  var maxing = false;
  var trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  wait = Number(wait) || 0;
  if (getType(options) === 'object') {
    leading = 'leading' in options ? options.leading : false;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? options.trailing : trailing;
  }

  function invokeFunc (time) {
    var args = lastArgs;
    var thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args || []);
    return result
  }

  function leadingEdge (time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result
  }

  function remainingWait (time) {
    var timeSinceLastCall = time - (lastCallTime || 0);
    var timeSinceLastInvoke = time - (lastInvokeTime || 0);
    var timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? Math.min(timeWaiting, maxWait || 0 - timeSinceLastInvoke)
      : timeWaiting
  }

  function shouldInvoke (time) {
    var timeSinceLastCall = time - (lastCallTime || 0);
    var timeSinceLastInvoke = time - (lastInvokeTime || 0);

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && (timeSinceLastInvoke || 0) >= (maxWait || 0)))
  }

  function timerExpired () {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge (time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined;
    return result
  }

  function cancel () {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush () {
    return timerId === undefined ? result : trailingEdge(now())
  }

  function debounced () {
    var time = now();
    var isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced
}

// 

/**
 * It's `lodash.throttle` function.
 *
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
 * ```javascript
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 * ```
 */
function throttle (func, wait, options) {
  if ( options === void 0 ) options = {};

  var leading = true;
  var trailing = true;

  if (typeof func !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  if (getType(options) === 'object') {
    leading = 'leading' in options ? options.leading : leading;
    trailing = 'trailing' in options ? options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  })
}

/**
 * In some browsers, typeof returns 'function' for HTML <object> elements
 * (i.e., `typeof document.createElement( 'object' ) === 'function'`).
 * We don't want to classify *any* DOM node as a function.
 * @ignore
 * @param obj
 * @returns {boolean}
 */
function isFunction (obj) {
  return typeof obj === 'function' && typeof obj.nodeType !== 'number'
}

var toString = ({}).toString;

var getProto = Object.getPrototypeOf;

var hasOwn = ({}).hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Object);

function isPlainObject (obj) {
  var proto;
  var Ctor;

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }

  proto = getProto(obj);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
}

/**
 * Merge the contents of two or more objects together into the first object.
 * - This is the [jQuery.extend](http://api.jquery.com/jQuery.extend/) method
 * @param [deep] {boolean} Optional; if true, the merge becomes recursive (aka. deep copy). Passing false for this argument is not supported.
 * @param target {Object} The object to extend. It will receive the new properties.
 * @param object1 {Object} An object containing additional properties to merge in.
 * @param [objectN] {Object} Additional objects containing properties to merge in.
 * @returns {Object} the modified target object
 *
 * @example
 * ```javascript
 * const objA = {
 *   a: '1',
 *   b: ['1', '2', '3'],
 *   c: { d: 'e' }
 * }
 * const objB = {
 *   a: 'e'
 * }
 * extend({}, objA, objB, { a: objB }) // => { a: { a: 'e' }, b: ['1', '2', '3'], c: { d: 'e' } }
 * console.log(objA.a === objB) // true
 * const objC = extend(true, {}, { a: objA })
 * console.log(objC.a === objA) // false
 * // objA will be changed
 * extend(objA, { b: null }) // => { a: '1', b: null, c: { d: 'e' } }
 * ```
 */
function extend () {
  var arguments$1 = arguments;

  var options;
  var name;
  var src;
  var copy;
  var copyIsArray;
  var clone;
  var target = arguments[ 0 ] || {};
  var i = 1;
  var length = arguments.length;
  var deep = false;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;

    // Skip the boolean and the target
    target = arguments[ i ] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {
    // Only deal with non-null/undefined values
    if ((options = arguments$1[ i ]) != null) {
      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isPlainObject(copy) ||
          (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target
}

// 

/**
 * Copy the values of all enumerable own properties from one or more source objects to a target object
 * @param target {Object} the target object
 * @param sources {Array<Object>} the source object(s)
 * @returns {Object} the target Object
 *
 * @example
 * ```javascript
 * const objA = { a: 1 }
 * assign({}, objA) // { a: 1 }
 * // objA will be changed
 * assign(objA, { b: 2 }) // { a: 1, b: 2 }
 * ```
 */
function assign (target) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return (function () {
    if (typeof Object.assign === 'function') {
      return Object.assign.apply(Object, [ target ].concat( sources ))
    } else {
      return polyfill.apply(void 0, [ target ].concat( sources ))
    }
  })()
}

/**
 * Polyfill for Object.assign, code from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @ignore
 * @param target
 * @param sources
 * @returns {any}
 */
function polyfill (target) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return (function () {
    // TypeError if undefined or null
    if (target === null || target === undefined) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    var to = Object(target);

    for (var i = 0, len = sources.length; i < len; i++) {
      var nextSource = sources[i];

      // Skip over if undefined or null
      if (nextSource !== null && nextSource !== undefined) {
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
    return to
  })()
}

// 

/**
 * Clone target object deeply
 * - The same as `extend(true, {}, obj)`
 * @param obj {Object} the target object
 * @returns {Object} a new object cloned from target object, but is not the target object
 *
 * @example
 * ```javascript
 * const objA = {
 *   a: '1',
 *   b: ['1', '2', '3'],
 *   c: { d: 'e' }
 * }
 * const objB = {
 *   a: 'e'
 * }
 * const objC = deepClone({}, objA, objB, { a: objB }) // { a: { a: 'e' }, b: ['1', '2', '3'], c: { d: 'e' } }
 * console.log(objC.a === objB) // false
 * ```
 */
function deepClone (obj) {
  return extend(true, {}, obj)
}

// 

/**
 * Clone target object shallowly
 * - The same as `extend({}, obj)`
 * @param obj {Object} the target object
 * @returns {Object} a new object cloned from target object, but is not the target object
 *
 * @example
 * ```javascript
 * const objA = {
 *   a: '1',
 *   b: ['1', '2', '3'],
 *   c: { d: 'e' }
 * }
 * const objB = {
 *   a: 'e'
 * }
 * const objC = shallowClone({}, objA, objB, { a: objB }) // { a: { a: 'e' }, b: ['1', '2', '3'], c: { d: 'e' } }
 * console.log(objC.a === objB) // true
 * ```
 */
function shallowClone (obj) {
  return extend({}, obj)
}

// 

/**
 * fill a string or number to specified length with specified symbol from left on
 * @param val {string|number}
 * @param len {number} target length after filling
 * @param symbol {string} used to fill string/number
 * @returns {string} string after filling
 *
 * @example
 * ```javascript
 * console.log(fillLeft('a', 2, '$')) // '$a'
 * console.log(fillLeft('aa', 2, '$')) // 'aa'
 * console.log(fillLeft('aaa', 2, '$')) // 'aaa'
 * console.log(fillLeft('aa', 10, '0') // '00000000aa'
 * ```
 */
function fillLeft (val, len, symbol) {
  if ( symbol === void 0 ) symbol = '0';

  val = '' + val;
  var diffInLength = len - val.length;
  if (diffInLength > 0) {
    for (var i = 0; i < diffInLength; i++) {
      val = symbol + val;
    }
  }
  return val
}

// 

/**
 * Make a number less than 10 to be prefixed with an '0'
 * - the same as `fillLeft(val, 2, '0')`
 * @param num {string|number} a number, or number in string format (number should be integer)
 * @returns {string} string after prefixed with '0' is less than 10
 *
 * @example
 * ```javascript
 * console.log(toDouble('1')) // '01'
 * console.log(toDouble('11')) // '11'
 * ```
 */
function toDouble (num) {
  return fillLeft(num, 2, '0')
}

// 

/**
 * Get date string of calculating specific date with specific difference in year, month, date, hours, minutes and seconds
 * @param dat {Date} date object used as the base for calculation
 * @param yDiff {number} difference in year, negative value is acceptable
 * @param mDiff {number} difference in month, negative value is acceptable
 * @param dDiff {number} difference in date, negative value is acceptable
 * @param [hDiff] {number} difference in hours, negative value is acceptable; optional, but if defined, `miDiff` and `sDiff` should also be defined
 * @param [miDiff] {number} difference in minutes, negative value is acceptable; optional, but if defined, `hDiff` and `sDiff` should also be defined
 * @param [sDiff] {number} difference in seconds, negative value is acceptable; optional, but if defined, `hDiff` and `miDiff` should also be defined
 * @returns {string} date string in format of `yyyy-mm-dd` or `yyyy-mm-dd hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, 2, 0)) // '2018-04-02'
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, -2, 0)) // '2017-12-02'
 * ```
 */
function getRelativeDateString (
  dat,
  yDiff,
  mDiff,
  dDiff,
  hDiff,
  miDiff,
  sDiff
) {
  if ( dat === void 0 ) dat = new Date();
  if ( yDiff === void 0 ) yDiff = 0;
  if ( mDiff === void 0 ) mDiff = 0;
  if ( dDiff === void 0 ) dDiff = 0;
  if ( hDiff === void 0 ) hDiff = 0;
  if ( miDiff === void 0 ) miDiff = 0;
  if ( sDiff === void 0 ) sDiff = 0;

  // clone the dat object first, avoid change of the dat object
  var date = new Date(+dat);
  date.setFullYear(date.getFullYear() + yDiff);
  date.setMonth(date.getMonth() + mDiff);
  date.setDate(date.getDate() + dDiff);
  date.setHours(date.getHours() + hDiff);
  date.setMinutes(date.getMinutes() + miDiff);
  date.setSeconds(date.getSeconds() + sDiff);
  var y = date.getFullYear();
  var m = toDouble(date.getMonth() + 1);
  var d = toDouble(date.getDate());
  if (arguments.length === 4) {
    return (y + "-" + m + "-" + d)
  } else if (arguments.length === 7) {
    var h = toDouble(date.getHours());
    var mi = toDouble(date.getMinutes());
    var s = toDouble(date.getSeconds());
    return (y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s)
  } else {
    throw new Error('length of arguments for function getRelativeDateString should be either 4 or 7')
  }
}

// 

/**
 * Transform a date object to string in format like `YYYY-MM-DD`
 * @param date the date object
 * @returns {string} string in format like `YYYY-MM-DD`
 *
 * @example
 * ```javascript
 * console.log(dateToShortString(new Date(2018, 1, 2))) // '2018-02-02'
 * ```
 */
function dateToShortString (date) {
  if ( date === void 0 ) date = new Date();

  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  return (y + "-" + (toDouble(m)) + "-" + (toDouble(d)))
}

// 

/**
 * Transform a date object to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param date date object
 * @returns {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(dateToLongString(new Date(2018, 1, 2, 12, 13, 14))) // '2018-02-02 12:13:14'
 * ```
 */
function dateToLongString (date) {
  if ( date === void 0 ) date = new Date();

  var hour = toDouble(date.getHours());
  var minute = toDouble(date.getMinutes());
  var second = toDouble(date.getSeconds());
  return dateToShortString(date) + " " + hour + ":" + minute + ":" + second
}

// 
/**
 * Transform string in format like `YYYY-MM-DD hh:mm:ss` to date object
 * @param dateString string in format like `YYYY-MM-DD hh:mm:ss`
 * @returns {Date} date object
 *
 * @example
 * ```javascript
 * console.log(longStringToDate('2018-02-01 12:13:14')) // new Date(2018, 1, 1, 12, 13, 14)
 * ```
 */
function longStringToDate (dateString) {
  if (dateString && dateString.length === 19) {
    // Attention: there is a space between regular expression
    var tempArr = dateString.split(/[- :]/);
    // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(parseInt(tempArr[0], 10), parseInt(tempArr[1], 10) - 1, parseInt(tempArr[2], 10), parseInt(tempArr[3], 10), parseInt(tempArr[4], 10), parseInt(tempArr[5], 10))
  }
  throw new Error('not valid parameter for function longStringToDate')
}

// 

/**
 * Transform string in format like `YYYY-MM-DD` to date object
 * `00:00:00 is used due to hours, minutes and seconds not specified`
 * @param dateString string in format like `YYYY-MM-DD`
 * @returns {Date} date object
 *
 * @example
 * ```javascript
 * console.log(shortStringToDate('2018-02-01')) // new Date(2018, 1, 1, 0, 0, 0)
 * ```
 */
function shortStringToDate (dateString) {
  if (dateString && dateString.length === 10) {
    return longStringToDate(dateString + ' 00:00:00')
  }
  throw new Error('invalid parameter for function shortStringToDate')
}

// 

/**
 * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param ts {number} timestamp
 * @returns {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToLongString(+dateA)) // '2018-01-01 12:13:14'
 * ```
 */
function timestampToLongString (ts) {
  return dateToLongString(new Date(ts))
}

// 

/**
 * Transform timestamp to string in format like `YYYY-MM-DD`
 * @param ts timestamp
 * @returns {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToShortString(+dateA)) // '2018-01-01'
 * ```
 */
function timestampToShortString (ts) {
  return dateToShortString(new Date(ts))
}

// 

/**
 * Transform value to string format
 * @param val {any} any value you want to transfer to string format
 * @returns {string} value in string format
 *
 * @example
 * ```javascript
 * console.log(getString(1)) // '1'
 * console.log(getString(0)) // '0'
 * console.log(getString(null)) // ''
 * console.log(getString(undefined)) // ''
 * ```
 */
function getString (val) {
  return val === 0 ? '0' : (val ? ('' + val) : '')
}

// 

/**
 * Alternative method to native Array.prototype.map
 * @param arr {Array<any>} array
 * @param handler {Function} function used to handler each element in the array
 * @returns {Array<any>} a new array
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * const handler = item => item + 1
 * console.log(map(arr, handler)) // [2, 3, 4, 5]
 * ```
 */
function map (arr, handler) {
  if (Array.prototype.map) {
    return arr.map(handler)
  }
  var tempArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    tempArr.push(handler(arr[i], i));
  }
  return tempArr
}

// 

/**
 * Alternative method to native Array.prototype.filter
 * @param arr {Array<any>} an array
 * @param test {Function} function used to determine whether element in the array should be kept or removed, will be kept if returns true
 * @returns {Array<any>} a new array
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * const test = item => item % 2 === 0
 * console.log(filter(arr, test)) // [2, 4]
 * ```
 */
function filter (arr, test) {
  if (Array.prototype.filter) {
    return arr.filter(test)
  }
  var tempArr = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (test(item, i)) {
      tempArr.push(item);
    }
  }
  return tempArr
}

// 

/**
 * Return the index of the first element pass the test function
 * @param arr {Array<any>} array
 * @param test {Function} function used to test array element
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = ['1', '2', 'c']
 * const test = /^[0-9]$/.test
 * console.log(findIndex(arr, test, 0)) // 0
 * console.log(findIndex(arr, test, 2)) // -1
 * ```
 */
function findIndex (arr, test, fromIndex) {
  var startIdx = 0;
  var len = arr.length;
  if (fromIndex !== void 0) {
    startIdx = fromIndex >= 0 ? fromIndex : (len + fromIndex);
  }
  for (; startIdx < len; startIdx++) {
    if (test(arr[startIdx], startIdx)) { return startIdx }
  }
  return -1
}

// 

/**
 * Return the index of the first element pass the test function
 * @param arr {Array<any>} array
 * @param test {Function} function used to test array element
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = ['1', '2', 'c']
 * const test = /^[0-9]$/.test
 * console.log(findLastIndex(arr, test, 0)) // 1
 * console.log(findLastIndex(arr, test, 2)) // -1
 * ```
 */
function findLastIndex (arr, test, fromIndex) {
  var len = arr.length;
  var startIdx = len - 1;
  if (fromIndex !== void 0) {
    startIdx = fromIndex >= 0 ? fromIndex : (len + fromIndex);
  }
  for (; startIdx >= 0; startIdx--) {
    if (test(arr[startIdx], startIdx)) { return startIdx }
  }
  return -1
}

// 

/**
 * Return the first index of the matched value, -1 if nothing matches
 * - comparison are done after handling with `JSON.stringify`
 * - if `fromIndex` is negative, it's counted from the end
 * @param arr {Array<any>} the array
 * @param value {any}
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = [1, '2', 'c', '2']
 * console.log(indexOf(arr, '2')) // 1
 * console.log(indexOf(arr, '2', 3)) // 3
 * console.log(indexOf(arr, 'c', 3)) // -1
 * ```
 */
function indexOf (arr, value, fromIndex) {
  value = JSON.stringify(value);
  var testFunc = function (elem) { return JSON.stringify(elem) === value; };
  return findIndex(arr, testFunc, fromIndex)
}

// 

/**
 * Return the last index of the matched value, -1 if nothing matches
 * - comparison are done after handling with `JSON.stringify`
 * @param arr {Array<any>} the array
 * @param value {any} the array
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index and from back to front, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = [1, '2', 'c', '2']
 * console.log(lastIndexOf(arr, '2')) // 3
 * console.log(lastIndexOf(arr, '2', 3)) // 3
 * console.log(lastIndexOf(arr, '2', 4)) // -1
 * ```
 */
function lastIndexOf (arr, value, fromIndex) {
  value = JSON.stringify(value);
  var testFunc = function (elem) { return JSON.stringify(elem) === value; };
  return findLastIndex(arr, testFunc, fromIndex)
}

// 

/**
 * Determine if the array contains a given item (using `===` after `JSON.stringify`).
 * @param arr {Array<any>} an array
 * @param item {any} a given item
 * @param fromIndex
 * @returns {boolean}
 *
 * @example
 * ```javascript
 * const arr = [1, '2', 'c', { a: '4' }]
 * console.log(contains(arr, { a: '4' })) // true
 * console.log(contains(arr, { a: '5' })) // false
 * console.log(contains(arr, '1')) // false
 * console.log(contains(arr, '2')) // true
 * ```
 */
function contains (arr, item, fromIndex) {
  return indexOf(arr, item, fromIndex) >= 0
}

// 

/**
 * Transform format of number to normal form instead of scientific notation
 * @param num {string} number in format of scientific notation
 * @returns {string} number in format of normal form
 */
function cancelScientificNotation (num) {
  var numOfDecimalPlaces;
  try {
    numOfDecimalPlaces = num.split('.')[1].split(/[eE]/)[0].length;
  } catch (e) {
    numOfDecimalPlaces = 0;
  }
  var isNumNegative = parseFloat(num) < 0;
  var exponent = Math.log(parseFloat(isNumNegative ? 0 - parseFloat(num) : num)) / Math.log(10);
  var positiveExponent = Math.ceil(exponent > 0 ? exponent : 0 - exponent);
  if (parseFloat(num) > 1) {
    return parseFloat(num).toFixed(numOfDecimalPlaces)
  } else if (parseFloat(num) < 0) {
    return '-' + (0 - parseFloat(num)).toFixed(positiveExponent + numOfDecimalPlaces)
  } else {
    return parseFloat(num).toFixed(positiveExponent + numOfDecimalPlaces)
  }
}

// 

var msgForInvalidNumber = 'Invalid number: scientific notation, and very big/small number are not allowed.';

/**
 * Determine whether the number used in this library is thought as valid
 * @param num {string | number} number used, usually from user input
 * @returns {boolean} whether input number is valid
 */
function validateNumber (num) {
  num = '' + num;
  // scientific notation is not allowed
  if (/[eE]/.test(num)) {
    return false
  }
  // must contain digit
  if (!/[0-9]/.test(num)) {
    return false
  }
  // zero direct after decimal point should not be more than or equal to 5
  if (/\.0{6}/.test(num)) {
    return false
  }
  // length of the number should be less than 17
  return num.length < 17
}

// 

/**
 * Calculate sum of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} sum of these numbers
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * console.log(add(arr)) // '10'
 * console.log(add(arr, 2)) // '10.00'
 * ```
 */
function add (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  if (arr.filter(function (item) { return !validateNumber(item); }).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatAdd(preVal, curVal)
  }, 0);
  var returnResult = hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result);
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Add two number
 * @ignore
 * @param  {number} a        number a
 * @param  {number} b        number b
 * @return {number}    sum of number a and number b
 */
function floatAdd (a, b) {
  var numOfDecimalPlacesInA;
  var numOfDecimalPlacesInB;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInA = 0;
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInB = 0;
  }
  var m = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB));
  return (a * m + b * m) / m
}

// 

/**
 * Calculate difference of members in an Array
 * @param arr {Array<string>} an array of numbers in string format
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} difference of these numbers
 *
 * @example
 * ```javascript
 * const arr [3, 1, 2]
 * console.log(subtract(arr)) // '0'
 * console.log(subtract(arr), 2) // '0.00'
 * ```
 */
function subtract (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  if (arr.filter(function (item) { return !validateNumber(item); }).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatSubtract(parseFloat(preVal), parseFloat(curVal))
  });
  var returnResult = hasValue(numOfDecimalPlaces)
    ? parseFloat(result).toFixed(numOfDecimalPlaces)
    : /\.[0-9]{10}/.test(result)
      ? parseFloat(result).toFixed(10)
      : result;
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Subtract number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {string} difference between a and b, in string format with automatical precision
 */
function floatSubtract (a, b) {
  var numOfDecimalPlacesInA;
  var numOfDecimalPlacesInB;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInA = 0;
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {
    numOfDecimalPlacesInB = 0;
  }
  var m = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB));
  // control precision length automatically
  var automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB;
  return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces)
}

// 

/**
 * Calculate sum of members in an Array
 * @param  {Array<number>} arr an array of numbers
 * @param  {number} numOfDecimalPlaces number of decimal places to leave; determined automatically if not provided
 * @return {string}  sum of these numbers
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3]
 * console.log(multiply(arr)) // '6'
 * console.log(multiply(arr, 2)) // '6.00'
 * ```
 */
function multiply (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  if (arr.filter(function (item) { return !validateNumber(item); }).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatMultiply(preVal, curVal)
  });
  var returnResult = hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result);
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Multiply two number
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   product of number a and number b
 */
function floatMultiply (a, b) {
  var m = 0;
  var strA = a.toString();
  var strB = b.toString();
  try {
    m += strA.split('.')[1].length;
  } catch (e) {}
  try {
    m += strB.split('.')[1].length;
  } catch (e) {}
  return Number(strA.replace('.', '')) * Number(strB.replace('.', '')) / Math.pow(10, m)
}

// 

/**
 * Calculate quotient of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} quotient of these numbers (number of decimal places not larger than 10)
 *
 * @example
 * const arr = [3, 1, 2]
 * console.log(divide([1, 2])) // '0.5'
 * console.log(divide([1, 2, 3], 2)) // '0.17'
 */
function divide (arr, numOfDecimalPlaces) {
  if ( arr === void 0 ) arr = [];

  if (arr.filter(function (item) { return !validateNumber(item); }).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  var result = arr.reduce(function (preVal, curVal, curIdx, array) {
    return floatDivide(preVal, curVal)
  });
  var returnResult = hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result);
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Divide number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   quotient of number a divided by number b
 */
function floatDivide (a, b) {
  var numOfDecimalPlacesInA = 0;
  var numOfDecimalPlacesInB = 0;
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length;
  } catch (e) {}
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length;
  } catch (e) {}
  var newA = Number(a.toString().replace('.', ''));
  var newB = Number(b.toString().replace('.', ''));
  return (newA / newB) * Math.pow(10, numOfDecimalPlacesInB - numOfDecimalPlacesInA)
}

// 

/**
 * Transform value to integer (invalue value will be transfered to integer 0)
 * @param val {any} any value you want to transfer to integer
 * @returns {number} value in format of integer
 *
 * @example
 * ```javascript
 * console.log(getInteger('0')) // 0
 * console.log(getInteger('')) // 0
 * console.log(getInteger(2)) // 2
 * console.log(getInteger(0.12)) // 0
 * ```
 */
function getInteger (val) {
  try {
    if (isNaN(val)) {
      return 0
    }
    var result = val ? (parseInt(val)) : 0;
    return isNaN(result) ? 0 : result
  } catch (e) {
    return 0
  }
}

// 

/**
 * Return a random integer between min and max (inclusive).
 * @param min {number} the minimum number (inclusive)
 * @param max {number} the maximum number (inclusive)
 * @returns {number}
 *
 * @example
 * ```javascript
 * console.log(random(0, 0)) // 0
 * console.log(random(0, 1)) // 0 or 1
 * ```
 */
function random (min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1))
}

// 

/**
 * Validate whether the car plate number is valid
 * - This method is only available in China
 * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param plateNo the car plate number
 * @returns {boolean} whether the car plate number is valid
 *
 * @example
 * ```javascript
 * console.log(validatePlateNo('沪ANC116')) // true
 * console.log(validatePlateNo('呼呼116')) // false
 * ```
 */
function validateCarPlate (plateNo) {
  /**
   * @ignore
   * 普通汽车
   * 车牌号格式：汉字 + A-Z + 5位A-Z或0-9(  车牌号不存在字母I和O防止和1、0混淆)
   */
  var reNormalVehicle = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/;

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
  var reNewEngineVehicle = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z](([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/;

  return reNormalVehicle.test(plateNo) || reNewEngineVehicle.test(plateNo)
}

// 

/**
 * Validate the accuracy of a ID card number
 * - This function is only available for Chinese
 * @param idCardNo {string} ID card number
 * @returns {boolean} whether the ID card number is valid
 *
 * @example
 * ```javascript
 * console.log(validateIdCardNo('123456789012345678')) // false
 * ```
 */
function validateIdCardNo (idCardNo) {
  var ID = '' + idCardNo;
  if (/^[1-9][0-9]{16}([0-9]|[xX])$/.test(ID)) {
    if (checkDate(ID)) {
      // turn ID to an array
      var arrID = ID.split('');
      // factors for 1st-17st ID digits
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      // the check code for the 18th digit in the ID number
      var checkCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      // if the 18th digit is the letter X (or x), change it to be the digit 10
      if (arrID[17].toLowerCase() === 'x') {
        arrID[17] = '10';
      }
      arrID = arrID.map(function (item) { return parseInt(item, 10); });
      // multiply first 17 ID digits by corresponding factor elements, and sum these results
      for (var i = 16; i >= 0; i--) {
        sum += arrID[i] * factor[i];
      }
      // let remainder = sum % 11
      return parseInt(arrID[17]) === checkCode[sum % 11]
    }
    return false
  } else if (/^[1-9][0-9]{14}$/.test(ID)) {
    return checkDate(ID)
  } else {
    return false
  }
}

/**
 * validate date part in ID card number
 * @ignore
 * @param ID {string} ID card number
 * @returns {boolean} whether date part in ID card number is valid
 */
function checkDate (ID) {
  var year, month, day, tempDate;
  var length18Or15 = ID.length;
  if (length18Or15 === 18) {
    year = ID.substring(6, 10);
    month = ID.substring(10, 12);
    day = ID.substring(12, 14);
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return !(tempDate.getFullYear() !== parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
  } else if (length18Or15 === 15) {
    year = ID.substring(6, 8);
    month = ID.substring(8, 10);
    day = ID.substring(10, 12);
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    // .getYear() is not recommended for use any longer,
    // so here getFullYear() is used although it may seem not simple enough
    return !(('' + tempDate.getFullYear()).substring(2) !== '' + parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
  } else {
    return false
  }
}

// 

/**
 * Judge whether it's a valid phone number
 * - This function is only available for Chinese cars
 * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param phone {string} phone number
 * @returns {boolean} whether it's a valid phone number
 *
 * @example
 * ```javascript
 * console.log(validatePhone('13333333333')) // true
 * console.log(validatePhone('12333333333')) // false
 * ```
 */
function validatePhone (phone) {
  return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone)
}

// 

/**
 * Serialize params from object to string
 * @param params an object of key:value pairs
 * @returns {string} serialized params in string format
 *
 * @example
 * ```javascript
 * serializeParams({ a: 3, b: 4 }) => 'a=3&b=4'
 * ```
 */
function serializeParams (params) {
  var str = '';
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      str += '&' + p + '=' + params[p];
    }
  }
  return str.replace(/^&/, '')
}

// 

/**
 * Go to specified path with specified query parameters
 * @param path {string} the target absolute path to go to
 * @param query {object} the target query parameter in format of object containing key:value pairs
 *
 * @example
 * ```javascript
 * goPage('http://www.baidu.com', { a: 1, b: 2 })
 * ```
 */
function goPage (path, query) {
  window.location.href = path + (query ? ('?' + serializeParams(query)) : '');
}

// 

/**
 * Get value of specified query parameter in specified url
 * @param {string} url the url, usually got from window.location.href
 * @param key the parameter
 * @returns {string} the value of specified query parameter
 *
 * @example
 * ```javascript
 * getQueryValue('http://www.baidu.com?a=1&b=c', 'b') // 'c'
 * getQueryValue('http://www.baidu.com?a=1&b=c', 'c') // ''
 * ```
 */
function getQueryValue (url, key) {
  var search = url.indexOf('?') !== -1 ? url.replace(/^.*\?/, '') : '';
  if (!search) {
    return ''
  }
  var items = search.split('&') || [];
  for (var i = 0, len = items.length; i < len; i++) {
    var item = items[i];
    if (item.split('=')[0] === key) {
      return item.split('=')[1] || ''
    }
  }
  return ''
}

// 

/**
 * Judge whether the OS of current device is iOS
 * @returns {boolean} whether the OS of current device is iOS
 *
 * @example
 * ```javascript
 * console.log(isIOS()) // true or false
 * ```
 */
function isIOS () {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

// 

/**
 * Clear all localStorage items
 *
 * @example
 * ```javascript
 * clearLocalStorage() // all localStorage items will be removed
 * ```
 */
function clearLocalStorage () {
  window.localStorage.clear();
}

// 

/**
 * Clear all session storage items
 *
 * @example
 * ```javascript
 * clearSessionStorage() // all sessionStorage items will be removed
 * ```
 */
function clearSessionStorage () {
  window.sessionStorage.clear();
}

// 

/**
 * Get value of the cookie item of specified name
 * @param name name of the cookie item
 * @returns {string} value of the cookie item
 *
 * @example
 * ```javascript
 * getCookie('key')
 * ```
 */
function getCookie (name) {
  if (document.cookie.length > 0) {
    var start = document.cookie.indexOf(name + '=');
    if (start !== -1) {
      start = start + name.length + 1;
      var end = document.cookie.indexOf(';', start);
      if (end === -1) {
        end = document.cookie.length;
      }
      return window.decodeURI(document.cookie.substring(start, end))
    }
    return ''
  }
  return ''
}

// 
/**
 * Get the value of localStorage item of specified key/name
 * @param key the specified key/name of the storage item
 * @returns {object | null} value of localStorage item
 *
 * @example
 * ```javascript
 * getLocalStorage('localStorageItemName')
 * ```
 */
function getLocalStorage (key) {
  if ('localStorage' in window) {
    return window.localStorage.getItem(key) ? JSON.parse(window.decodeURI(window.localStorage.getItem(key))) : null
  } else {
    throw new Error('localStorage is not supported!')
  }
}

// 

/**
 * Get value of sessionStorage item specified the key
 * @param key {string} the name of the sessionStorage item
 * @returns {object | null} value of sessionStorage item
 *
 * @example
 * ```javascript
 * getSessionStorage('sessionStorageItemName')
 * ```
 */
function getSessionStorage (key) {
  return window.sessionStorage.getItem(key) ? JSON.parse(window.decodeURI(window.sessionStorage.getItem(key))) : null
}

// 

/**
 * Set cookie
 * @param name the key/name of the cookie item
 * @param val the value of the cookit item
 * @param expireDays [optional] if set, the cookie item will be outdated after the specified number of days
 *
 * @example
 * ```javascript
 * setCookie('key', 'value')
 * setCookie('key', 'value', 5)
 * ```
 */
function setCookie (name, val, expireDays) {
  if ( expireDays === void 0 ) expireDays = 0;

  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + expireDays);
  window.document.cookie = name + '=' + window.encodeURI(val) + (expireDays ? ';expires=' + expireDate.toUTCString() : '');
}

// 

/**
 * Save a key:value pair in localStorage
 * - the value should itself be an object of key:value pairs
 * @param key {string} the key of the storage item
 * @param val {object} the value of the storage item
 *
 * @example
 * ```javascript
 * setLocalStorage('localStorageItemName', { a: 1, b: '2' })
 * ```
 */
function setLocalStorage (key, val) {
  if ('localStorage' in window) {
    try {
      window.localStorage.setItem(key, window.encodeURI(JSON.stringify(val)));
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        throw new Error('localStorage limit exceeds!')
      } else {
        throw e
      }
    }
  } else {
    throw new Error('localStorage API is not supported!')
  }
}

// 

/**
 * Set a key:value pair in sessionStorage
 * @param key the key of the sessionStorage item
 * @param val the value of the sessionStorage item, itself should be an object of key:value pairs
 *
 * @example
 * ```javascript
 * setSessionStorage('sessionStorageItemName', { a: 1, b: '2' })
 * ```
 */
function setSessionStorage (key, val) {
  window.sessionStorage.setItem(key, window.encodeURI(JSON.stringify(val)));
}

// 

/**
 * Remove the localStorage item of specified key/name
 * @param key {string} the key/name of the localStorage item to remove
 *
 * @example
 * ```javascript
 * removeLocalStorage('localStorageItemName')
 * ```
 */
function removeLocalStorage (key) {
  window.localStorage.removeItem(key);
}

// 

/**
 * Remove the sessionStorage item of specified key/name
 * @param key {string} the key/name of the sessionStorage item to remove
 *
 * @example
 * ```javascript
 * removeSessionStorage('sessionStorageItemName')
 * ```
 */
function removeSessionStorage (key) {
  window.sessionStorage.removeItem(key);
}

// 

/**
 * Return Wechat redirect Url where Wechat will pass code query parameter to us
 * @param appId {string} appId for the Wechat account
 * @param targetUrl {string} entire url including the preceding `http` or `https`
 * @returns {string}
 *
 * @example
 * ```javascript
 * console.log(getWechatRedirectUrl('test', 'http://www.baidu.com?a=b')) // 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=test&redirect_uri=http%3A%2F%2Fwww.baidu.com%3Fa%3Db&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
 * ```
 */
function getWechatRedirectUrl (appId, targetUrl) {
  if (/(^http)|(^https)/.test(targetUrl)) {
    var encodedUrl = encodeURIComponent(targetUrl);
    return ("https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appId + "&redirect_uri=" + encodedUrl + "&response_type=code&scope=snsapi_base&state=1#wechat_redirect")
  } else {
    throw new Error('parameter targetUrl for function generateWechatRedirectUrl should be preceding with `http` or `https`')
  }
}

// this file is generated by gulp task ^_^

var index = {
  /**
   * Common
   */
  hasValue: hasValue,
  getType: getType,
  debounce: debounce,
  throttle: throttle,

  /**
   * Object
   */
  extend: extend,
  assign: assign,
  deepClone: deepClone,
  shallowClone: shallowClone,

  /**
   * Date
   */
  getRelativeDateString: getRelativeDateString,
  dateToLongString: dateToLongString,
  dateToShortString: dateToShortString,
  longStringToDate: longStringToDate,
  shortStringToDate: shortStringToDate,
  timestampToLongString: timestampToLongString,
  timestampToShortString: timestampToShortString,

  /**
   * String
   */
  fillLeft: fillLeft,
  toDouble: toDouble,
  getString: getString,

  /**
   * Array
   */
  map: map,
  filter: filter,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  indexOf: indexOf,
  lastIndexOf: lastIndexOf,
  contains: contains,

  /**
   * Number
   */
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  getInteger: getInteger,
  random: random,

  /**
   * Validate
   */
  validateCarPlate: validateCarPlate,
  validateIdCardNo: validateIdCardNo,
  validatePhone: validatePhone,

  /**
   * Url
   */
  goPage: goPage,
  serializeParams: serializeParams,
  getQueryValue: getQueryValue,

  /**
   * Device
   */
  isIOS: isIOS,

  /**
   * Storage
   */
  clearLocalStorage: clearLocalStorage,
  clearSessionStorage: clearSessionStorage,
  getCookie: getCookie,
  getLocalStorage: getLocalStorage,
  getSessionStorage: getSessionStorage,
  setCookie: setCookie,
  setLocalStorage: setLocalStorage,
  setSessionStorage: setSessionStorage,
  removeLocalStorage: removeLocalStorage,
  removeSessionStorage: removeSessionStorage,

  /**
   * Wechat
   */
  getWechatRedirectUrl: getWechatRedirectUrl
}

module.exports = index;
