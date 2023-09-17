/**
 * @apiAnalyze
 * Clear all session storage items
 * @since 0.0.13
 * @example
 * ```javascript
 * clearSessionStorage() // all sessionStorage items will be removed
 * ```
 */
const clearSessionStorage: $utils.TClearSessionStorage = () => {
  window.sessionStorage.clear()
}

export default clearSessionStorage
