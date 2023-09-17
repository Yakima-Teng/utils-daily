/**
 * @apiAnalyze
 * Get value of sessionStorage item specified the key
 * @since 0.0.13
 * @param key {string} the name of the sessionStorage item
 * @return {object | null} value of sessionStorage item
 *
 * @example
 * ```javascript
 * getSessionStorage('sessionStorageItemName')
 * ```
 */
const getSessionStorage: $utils.TGetSessionStorage = (key) => {
  const rawVal = window.sessionStorage.getItem(key)
  if (rawVal) {
    return JSON.parse(window.decodeURI(rawVal))
  }
  return null
}

export default getSessionStorage
