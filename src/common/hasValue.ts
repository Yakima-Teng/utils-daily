/**
 * @apiAnalyze
 * 判断变量是否"有值"
 * - ''、null、'null'、undefined、'undefined'被认为是没有值
 * - 数字0被认为是有值
 * @since 0.0.13
 * @param val {any} variable
 * @return {boolean} whether a variable is valuable
 *
 * @example
 *
 * ```javascript
 * console.log(hasValue('')) // false
 * console.log(hasValue(null)) // false
 * console.log(hasValue('null')) // false
 * console.log(hasValue(undefined)) // false
 * console.log(hasValue('undefined')) // false
 * console.log(hasValue(0)) // true
 * console.log(hasValue('none')) // true
 * ```
 */
const hasValue: $utils.THasValue = (val) => {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

export default hasValue
