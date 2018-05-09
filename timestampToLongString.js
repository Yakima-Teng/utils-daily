import dateToLongString from './dateToLongString'

/**
 * Transform timestamp to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param ts timestamp
 * @returns {string}
 */
function timestampToLongString (ts) {
  return dateToLongString(new Date(ts))
}

export default timestampToLongString
