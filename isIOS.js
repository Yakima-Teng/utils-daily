/**
 * Judge whether the OS of current device is iOS
 * @returns {boolean} whether the OS of current device is iOS
 */
function isIOS () {
  return (/iphone/i).test(window.navigator.userAgent.toLowerCase())
}

export default isIOS
