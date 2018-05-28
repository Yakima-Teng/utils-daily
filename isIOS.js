// @flow

/**
 * Judge whether the OS of current device is iOS
 * @returns {boolean} whether the OS of current device is iOS
 *
 * @example
 * ```javascript
 * console.log(isIOS()) // true or false
 * ```
 */
function isIOS (): boolean {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

export default isIOS
