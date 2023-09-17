import dateToLongString from './dateToLongString'

/**
 * @apiAnalyze
 * 将毫秒时间戳转换成形如`YYYY-MM-DD hh:mm:ss`的字符串
 * @since 0.0.13
 * @param ts {number} timestamp
 * @return {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToLongString(+dateA)) // '2018-01-01 12:13:14'
 * ```
 */
const timestampToLongString: $utils.TTimestampToLongString = (ts) => {
  return dateToLongString(new Date(ts))
}

export default timestampToLongString
