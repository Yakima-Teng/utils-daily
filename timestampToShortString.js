import dateToShortString from './dateToShortString'

/**
 * Transform timestamp to string in format like `YYYY-MM-DD`
 * @param ts timestamp
 * @returns {string}
 */
function timestampToShortString (ts) {
  return dateToShortString(new Date(ts))
}

export default timestampToShortString
