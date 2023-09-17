import toDouble from '../string/toDouble'
import dateToShortString from './dateToShortString'

/**
 * @apiAnalyze
 * 将Date实例对象转换成格式如`YYYY-MM-DD hh:mm:ss`的长字符串
 * @since 0.0.13
 * @param date {Date} date object
 * @return {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(dateToLongString(new Date(2018, 1, 2, 12, 13, 14))) // '2018-02-02 12:13:14'
 * ```
 */
const dateToLongString: $utils.TDateToLongString = (date = new Date()) => {
  const hour = toDouble(date.getHours())
  const minute = toDouble(date.getMinutes())
  const second = toDouble(date.getSeconds())
  return `${dateToShortString(date)} ${hour}:${minute}:${second}`
}

export default dateToLongString
