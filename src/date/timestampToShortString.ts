import dateToShortString from './dateToShortString'

/**
 * @apiAnalyze
 * 将毫秒时间戳转换成形如`YYYY-MM-DD`的字符串
 * @since 0.0.13
 * @param ts {number} timestamp
 * @return {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToShortString(+dateA)) // '2018-01-01'
 * ```
 */
const timestampToShortString: $utils.TTimestampToShortString = (ts) => {
  return dateToShortString(new Date(ts))
}

export default timestampToShortString
