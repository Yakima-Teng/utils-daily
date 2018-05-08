/**
 * Set cookie
 * @param name the key/name of the cookie item
 * @param val the value of the cookit item
 * @param expireDays [optional] if set, the cookie item will be outdated after the specified number of days
 */
function setCookie (name, val, expireDays) {
  const expireDate = new Date()
  expireDate.setDate(expireDate.getDate() + expireDays)
  window.document.cookie = name + '=' + window.encodeURI(val) + (expireDays ? ';expires=' + expireDate.toGMTString() : '')
}

export default setCookie
