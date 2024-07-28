/**
 * @apiAnalyze
 * Remove the localStorage item of specified key/name
 * @since 0.0.13
 * @param key {string} the key/name of the localStorage item to remove
 *
 * @example
 * ```javascript
 * removeLocalStorage('localStorageItemName')
 * ```
 */
const removeLocalStorage: $utils.TRemoveLocalStorage = (key) => {
  window.localStorage.removeItem(key)
}

export default removeLocalStorage
