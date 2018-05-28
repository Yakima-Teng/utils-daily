// @flow

/**
 * Save a key:value pair in localStorage
 * - the value should itself be an object of key:value pairs
 * @param key {string} the key of the storage item
 * @param val {object} the value of the storage item
 *
 * @example
 * ```javascript
 * setLocalStorage('localStorageItemName', { a: 1, b: '2' })
 * ```
 */
function setLocalStorage (key: string, val: Object): void {
  if ('localStorage' in window) {
    try {
      window.localStorage.setItem(key, window.encodeURI(JSON.stringify(val)))
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        throw new Error('localStorage limit exceeds!')
      } else {
        throw e
      }
    }
  } else {
    throw new Error('localStorage API is not supported!')
  }
}

export default setLocalStorage
