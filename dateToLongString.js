import toDouble from './toDouble'
import dateToShortString from './dateToShortString'

/**
 * Transform a date object to string in format like `YYYY-MM-DD hh:mm:ss`
 * @param date date object
 * @returns {string}  string in format like `YYYY-MM-DD hh:mm:ss`
 */
function dateToLongString (date = new Date()) {
  const hour = toDouble(date.getHours())
  const minute = toDouble(date.getMinutes())
  const second = toDouble(date.getSeconds())
  return dateToShortString(date) + ` ${hour}:${minute}:${second}`
}

export default dateToLongString
