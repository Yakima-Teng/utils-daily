/**
 * @apiAnalyze
 * Remove the sessionStorage item of specified key/name
 * @since 0.0.13
 * @param key {string} the key/name of the sessionStorage item to remove
 *
 * @example
 * ```javascript
 * removeSessionStorage('sessionStorageItemName')
 * ```
 */
const removeSessionStorage: $utils.TRemoveSessionStorage = (key) => {
  window.sessionStorage.removeItem(key)
}

export default removeSessionStorage
