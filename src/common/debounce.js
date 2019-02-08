// @flow

import getType from './getType'

export const FUNC_ERROR_TEXT = 'Expected a function'

function now (): number {
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
function debounce (func: Function, wait: number, options?: {
  maxWait?: number,
  leading?: boolean,
  trailing?: boolean
} = {}): Function {
  let lastArgs
  let lastThis
  let maxWait:? number
  let result
  let timerId
  let lastCallTime:? number
  let lastInvokeTime:? number
  let leading = false
  let maxing = false
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  wait = Number(wait) || 0
  if (getType(options) === 'object') {
    leading = 'leading' in options ? options.leading : false
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(Number(options.maxWait) || 0, wait) : maxWait
    trailing = 'trailing' in options ? options.trailing : trailing
  }

  function invokeFunc (time) {
    let args = lastArgs
    let thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args || [])
    return result
  }

  function leadingEdge (time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait)
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result
  }

  function remainingWait (time) {
    let timeSinceLastCall = time - (lastCallTime || 0)
    let timeSinceLastInvoke = time - (lastInvokeTime || 0)
    let timeWaiting = wait - timeSinceLastCall

    return maxing
      ? Math.min(timeWaiting, maxWait || 0 - timeSinceLastInvoke)
      : timeWaiting
  }

  function shouldInvoke (time) {
    let timeSinceLastCall = time - (lastCallTime || 0)
    let timeSinceLastInvoke = time - (lastInvokeTime || 0)

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && (timeSinceLastInvoke || 0) >= (maxWait || 0)))
  }

  function timerExpired () {
    const time = now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time))
  }

  function trailingEdge (time) {
    timerId = undefined

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel () {
    if (timerId !== undefined) {
      clearTimeout(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush () {
    return timerId === undefined ? result : trailingEdge(now())
  }

  function debounced () {
    const time = now()
    const isInvoking = shouldInvoke(time)

    lastArgs = arguments
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait)
    }
    return result
  }
  debounced.cancel = cancel
  debounced.flush = flush
  return debounced
}

export default debounce