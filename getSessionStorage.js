// @flow

/**
 * Get value of sessionStorage item specified the key
 * @param key {string} the name of the sessionStorage item
 * @returns {object | null} value of sessionStorage item
 */
function getSessionStorage (key: string): Object | null {
  return window.sessionStorage.getItem(key) ? JSON.parse(window.decodeURI(window.sessionStorage.getItem(key))) : null
}

export default getSessionStorage
