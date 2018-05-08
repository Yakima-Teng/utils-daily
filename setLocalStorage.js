/**
 * Save a key:value pair in localStorage
 * @param key the key of the storage item
 * @param val the value of the storage item
 */
function setLocalStorage (key, val) {
  if ('localStorage' in window) {
    try {
      window.localStorage.setItem(key, window.encodeURI(JSON.stringify(val)))
    } catch (e) {
      if (e.name === 'QUOTA_EXCEEDED_ERR' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
        throw new Error('localStorage limit exceeds!')
      } else {
        throw e
      }
    }
  } else {
    throw new Error('localStorage API is not supported!')
  }
}

export default setLocalStorage
