/**
 * Get value of sessionStorage item specified the key
 * @param key
 * @returns {object | null} value of sessionStorage item
 */
function getSessionStorage (key) {
  return window.sessionStorage.getItem(key) ? JSON.parse(window.decodeURI(window.sessionStorage.getItem(key))) : null
}

export default getSessionStorage
