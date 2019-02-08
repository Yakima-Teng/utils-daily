// @flow

import dateToShortString from './dateToShortString'

/**
 * Transform timestamp to string in format like `YYYY-MM-DD`
 * @param ts timestamp
 * @returns {string}
 *
 * @example
 * ```javascript
 * const dateA = new Date(2018, 0, 1, 12, 13, 14)
 * console.log(timestampToShortString(+dateA)) // '2018-01-01'
 * ```
 */
function timestampToShortString (ts: number): string {
  return dateToShortString(new Date(ts))
}

export default timestampToShortString
