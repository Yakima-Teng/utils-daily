/**
 * Get the value of localStorage item of specified key/name
 * @param key the specified key/name of the storage item
 * @returns {object | null}
 */
function getLocalStorage (key) {
  if ('localStorage' in window) {
    return window.localStorage.getItem(key) ? JSON.parse(window.decodeURI(window.localStorage.getItem(key))) : null
  } else {
    throw new Error('localStorage is not supported!')
  }
}

export default getLocalStorage
