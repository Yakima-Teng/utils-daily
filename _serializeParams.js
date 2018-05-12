// @flow

/**
 * Serialize params from object to string
 * @example serializeParams({ a: 3, b: 4 }) => 'a=3&b=4'
 * @param params an object of key:value pairs
 * @returns {string} serialized params in string format
 */
function serializeParams (params: Object): string {
  let str = ''
  for (const p in params) {
    if (params.hasOwnProperty(p)) {
      str += '&' + p + '=' + params[p]
    }
  }
  return str.replace(/^&/, '')
}

export default serializeParams
