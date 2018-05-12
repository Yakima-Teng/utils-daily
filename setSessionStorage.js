// @flow

/**
 * Set a key:value pair in sessionStorage
 * @param key the key of the sessionStorage item
 * @param val the value of the sessionStorage item, itself should be an object of key:value pairs
 */
function setSessionStorage (key: string, val: Object): void {
  window.sessionStorage.setItem(key, window.encodeURI(JSON.stringify(val)))
}

export default setSessionStorage
