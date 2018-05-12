// @flow

/**
 * Get value of the cookie item of specified name
 * @param name name of the cookie item
 * @returns {string} value of the cookie item
 */
function getCookie (name: string): string {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return window.decodeURI(document.cookie.substring(start, end))
    }
    return ''
  }
  return ''
}

export default getCookie
