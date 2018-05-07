/**
 * 判断变量是否有值
 * - 空字符串、null、'null'、undefined、'undefined'均视为无值
 * - 数字0算有值
 * @param val 变量
 * @returns {boolean} 是否有值
 */
function hasValue (val) {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

export default hasValue
