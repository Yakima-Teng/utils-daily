/**
 * @apiAnalyze
 * 将值转成字符串（null和undefined会被转成空字符串）
 * @since 0.0.13
 * @param val {any} 任何想转成字符串格式的值
 * @return {string} 转换后的字符串格式的值
 *
 * @example
 * ```javascript
 * console.log(getString(1)) // '1'
 * console.log(getString(0)) // '0'
 * console.log(getString(null)) // ''
 * console.log(getString(undefined)) // ''
 * console.log(getString('test')) // 'test'
 * ```
 */
const getString: $utils.TGetString = (val) => {
  if (val === 0) {
    return '0'
  }
  return val ? (`${val}`) : ''
}

export default getString
