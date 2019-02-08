// @flow

import toDouble from '../string/toDouble'
import dateToShortString from './dateToShortString'

/**
 * Transform a date object to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param date date object
 * @returns {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(dateToLongString(new Date(2018, 1, 2, 12, 13, 14))) // '2018-02-02 12:13:14'
 * ```
 */
function dateToLongString (date: Date = new Date()): string {
  const hour = toDouble(date.getHours())
  const minute = toDouble(date.getMinutes())
  const second = toDouble(date.getSeconds())
  return dateToShortString(date) + ` ${hour}:${minute}:${second}`
}

export default dateToLongString
