import serializeParams from './serializeParams'

/**
 * @apiAnalyze
 * Go to specified path with specified query parameters
 * @since 0.0.13
 * @param path {string} the target absolute path to go to
 * @param query {object} the target query parameter in format of object containing key:value pairs
 *
 * @example
 * ```javascript
 * goPage('http://www.baidu.com', { a: 1, b: 2 })
 * ```
 */
const goPage: $utils.TGoPage = (path, query) => {
  window.location.href = path + (query ? (`?${serializeParams(query)}`) : '')
}

export default goPage
