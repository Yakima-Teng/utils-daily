// @flow

import serializeParams from './serializeParams'

/**
 * Go to specified path with specified query parameters
 * @param path {string} the target absolute path to go to
 * @param query {object} the target query parameter in format of object containing key:value pairs
 *
 * @example
 * ```javascript
 * goPage('http://www.baidu.com', { a: 1, b: 2 })
 * ```
 */
function goPage (path: string, query: ?Object): void {
  window.location.href = path + (query ? ('?' + serializeParams(query)) : '')
}

export default goPage
