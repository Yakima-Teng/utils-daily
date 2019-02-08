// @flow

/**
 * Remove the localStorage item of specified key/name
 * @param key {string} the key/name of the localStorage item to remove
 *
 * @example
 * ```javascript
 * removeLocalStorage('localStorageItemName')
 * ```
 */
function removeLocalStorage (key: string): void {
  window.localStorage.removeItem(key)
}

export default removeLocalStorage
