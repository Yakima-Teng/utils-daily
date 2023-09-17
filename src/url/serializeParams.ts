/**
 * @apiAnalyze
 * 将对象序列化成字符串
 * @since 0.0.13
 * @param params {object} an object of key:value pairs
 * @return {string} serialized params in string format
 *
 * @example
 * ```javascript
 * serializeParams({ a: 3, b: 4 }) => 'a=3&b=4'
 * ```
 */
const serializeParams: $utils.TSerializeParams = (params) => {
  let str = ''
  Object.keys(params).forEach((p) => {
    if (Object.prototype.hasOwnProperty.call(params, p)) {
      str += `&${p}=${params[p]}`
    }
  })
  return str.replace(/^&/, '')
}

export default serializeParams
