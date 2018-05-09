/**
 * Remove the localStorage item of specified key/name
 * @param key the key/name of the localStorage item to remove
 */
function removeLocalStorage (key) {
  window.localStorage.removeItem(key)
}

export default removeLocalStorage
