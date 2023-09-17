/**
 * @apiAnalyze
 * Clear all localStorage items
 * @since 0.0.13
 * @example
 * ```javascript
 * clearLocalStorage() // all localStorage items will be removed
 * ```
 */
const clearLocalStorage: $utils.TClearLocalStorage = () => {
  window.localStorage.clear()
}

export default clearLocalStorage
