// @flow

/**
 * Clear all session storage items
 *
 * @example
 * ```javascript
 * clearSessionStorage() // all sessionStorage items will be removed
 * ```
 */
function clearSessionStorage (): void {
  window.sessionStorage.clear()
}

export default clearSessionStorage
