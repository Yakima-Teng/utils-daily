// @flow

import dateToLongString from './dateToLongString'

/**
 * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param ts {number} timestamp
 * @returns {string}
 */
function timestampToLongString (ts: number): string {
  return dateToLongString(new Date(ts))
}

export default timestampToLongString
