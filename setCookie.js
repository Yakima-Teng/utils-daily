// @flow

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
function setCookie (name: string, val: string, expireDays: ?number = 0) {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expireDays)
  window.document.cookie = name + '=' + window.encodeURI(val) + (expireDays ? ';expires=' + expireDate.toUTCString() : '')
}

export default setCookie
