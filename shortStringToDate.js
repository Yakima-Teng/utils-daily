// @flow

import longStringToDate from './longStringToDate'

/**
 * Transform string in format like `YYYY-MM-DD` to date object
 * `00:00:00 is used due to hours, minutes and seconds not specified`
 * @param dateString string in format like `YYYY-MM-DD`
 * @returns {Date} date object
 *
 * @example
 * ```javascript
 * console.log(shortStringToDate('2018-02-01')) // new Date(2018, 1, 1, 0, 0, 0)
 * ```
 */
function shortStringToDate (dateString: string): Date {
  if (dateString && dateString.length === 10) {
    return longStringToDate(dateString + ' 00:00:00')
  }
  throw new Error('invalid parameter for function shortStringToDate')
}

export default shortStringToDate
