// @flow

/**
 * Clear all localStorage items
 *
 * @example
 * ```javascript
 * clearLocalStorage() // all localStorage items will be removed
 * ```
 */
function clearLocalStorage (): void {
  window.localStorage.clear()
}

export default clearLocalStorage
