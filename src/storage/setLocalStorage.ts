/**
 * @apiAnalyze
 * Save a key:value pair in localStorage
 * - the value should itself be an object of key:value pairs
 * @since 0.0.13
 * @param key {string} the key of the storage item
 * @param val {object} the value of the storage item
 *
 * @example
 * ```javascript
 * setLocalStorage('localStorageItemName', { a: 1, b: '2' })
 * ```
 */
const setLocalStorage: $utils.TSetLocalStorage = (key, val) => {
  if ('localStorage' in window) {
    try {
      window.localStorage.setItem(key, encodeURI(JSON.stringify(val)))
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
          throw new Error('localStorage limit exceeds!')
        }
      }
      throw e
    }
  } else {
    throw new Error('localStorage API is not supported!')
  }
}

export default setLocalStorage
