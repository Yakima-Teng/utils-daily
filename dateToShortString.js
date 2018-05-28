// @flow

import toDouble from './toDouble'

/**
 * Transform a date object to string in format like `YYYY-MM-DD`
 * @param date the date object
 * @returns {string} string in format like `YYYY-MM-DD`
 *
 * @example
 * ```javascript
 * console.log(dateToShortString(new Date(2018, 1, 2))) // '2018-02-02'
 * ```
 */
function dateToShortString (date: Date = new Date()): string {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}-${toDouble(m)}-${toDouble(d)}`
}

export default dateToShortString
