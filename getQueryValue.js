/**
 * Get value of specified query parameter
 * @param key the parameter
 * @returns {string} the value of specified query parameter
 */
function getQueryValue (key) {
  const search = window.location.href.indexOf('?') !== -1 ? window.location.href.replace(/^.*\?/, '') : ''
  if (!search) {
    return ''
  }
  const items = search.split('&') || []
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items[i]
    if (item.split('=')[0] === key) {
      return item.split('=')[1]
    }
  }
  return ''
}

export default getQueryValue
