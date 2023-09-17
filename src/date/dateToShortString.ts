import toDouble from '../string/toDouble'

/**
 * @apiAnalyze
 * 将Date实例对象转换成格式如`YYYY-MM-DD`的长字符串
 * @since 0.0.13
 * @param date {Date} the date object
 * @return {string} string in format like `YYYY-MM-DD`
 *
 * @example
 * ```javascript
 * console.log(dateToShortString(new Date(2018, 1, 2))) // '2018-02-02'
 * ```
 */
const dateToShortString: $utils.TDateToShortString = (date = new Date()) => {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

export default dateToShortString
