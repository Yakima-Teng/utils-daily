import fillLeft from './fillLeft'

/**
 * @apiAnalyze
 * 将数字或字符串类型的数字转成字符串，如果数字小于10，则在左侧补0
 * @since 0.0.13
 * @note 等价于`fillLeft(val, 2, '0')`
 * @param num {string|number} a number, or number in string format (number should be integer)
 * @return {string} string after prefixed with '0' is less than 10
 *
 * @example
 * ```javascript
 * console.log(toDouble(0)) // '00'
 * console.log(toDouble('1')) // '01'
 * console.log(toDouble('11')) // '11'
 * console.log(toDouble('')) // '00'
 * ```
 */
const toDouble: $utils.TToDouble = (num) => {
  return fillLeft(num, 2, '0')
}

export default toDouble
