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
const setSessionStorage: $utils.TSetSessionStorage = (key, val) => {
  window.sessionStorage.setItem(key, encodeURI(JSON.stringify(val)))
}

export default setSessionStorage
