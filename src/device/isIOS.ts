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
const isIOS: $utils.TIsIOS = () => {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

export default isIOS
