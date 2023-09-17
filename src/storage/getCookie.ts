/**
 * @apiAnalyze
 * Get value of the cookie item of specified name
 * @since 0.0.13
 * @param name {string} name of the cookie item
 * @return {string} value of the cookie item
 *
 * @example
 * ```javascript
 * getCookie('key')
 * ```
 */
const getCookie: $utils.TGetCookie = (name) => {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(`${name}=`)
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return decodeURI(document.cookie.substring(start, end))
    }
    return ''
  }
  return ''
}

export default getCookie
