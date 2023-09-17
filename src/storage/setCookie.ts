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
const setCookie: $utils.TSetCookie = (name, val, expireDays) => {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + (expireDays || 0))
  window.document.cookie = `${name}=${window.encodeURI(val)}${expireDays ? `;expires=${expireDate.toUTCString()}` : ''}`
}

export default setCookie
