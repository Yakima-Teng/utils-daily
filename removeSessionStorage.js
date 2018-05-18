// @flow

/**
 * Remove the sessionStorage item of specified key/name
 * @param key {string} the key/name of the sessionStorage item to remove
 */
function removeSessionStorage (key: string): void {
  window.sessionStorage.removeItem(key)
}

export default removeSessionStorage
