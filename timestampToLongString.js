// @flow

import dateToLongString from './dateToLongString'

/**
 * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param ts {number} timestamp
 * @returns {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToLongString(+dateA)) // '2018-01-01 12:13:14'
 * ```
 */
function timestampToLongString (ts: number): string {
  return dateToLongString(new Date(ts))
}

export default timestampToLongString
