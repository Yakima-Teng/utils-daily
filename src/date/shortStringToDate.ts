import longStringToDate from './longStringToDate'

/**
 * @apiAnalyze
 * Transform string in format like `YYYY-MM-DD` to date object
 * `00:00:00 is used due to hours, minutes and seconds not specified`
 * @since 0.0.13
 * @param dateString {string} string in format like `YYYY-MM-DD`
 * @return {Date} date object
 *
 * @example
 * ```javascript
 * console.log(shortStringToDate('2018-02-01')) // new Date(2018, 1, 1, 0, 0, 0)
 * ```
 */
const shortStringToDate: $utils.TShortStringToDate = (dateString) => {
  if (dateString && dateString.length === 10) {
    return longStringToDate(`${dateString} 00:00:00`)
  }
  throw new Error('invalid parameter for function shortStringToDate')
}

export default shortStringToDate
