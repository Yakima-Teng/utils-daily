// @flow

/**
 * Get value of specified query parameter in specified url
 * @param {string} url the url, usually got from window.location.href
 * @param key the parameter
 * @returns {string} the value of specified query parameter
 *
 * @example
 * ```javascript
 * getQueryValue('http://www.baidu.com?a=1&b=c', 'b') // 'c'
 * getQueryValue('http://www.baidu.com?a=1&b=c', 'c') // ''
 * ```
 */
function getQueryValue (url: string, key: string): string {
  const search = url.indexOf('?') !== -1 ? url.replace(/^.*\?/, '') : ''
  if (!search) {
    return ''
  }
  const items = search.split('&') || []
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items[i]
    if (item.split('=')[0] === key) {
      return item.split('=')[1] || ''
    }
  }
  return ''
}

export default getQueryValue
