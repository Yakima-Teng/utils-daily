/**
 * Judge whether a variable is valuable
 * - ''、null、'null'、undefined、'undefined' is regarded as invaluable
 * - number 0 is regarded as valuable
 * @param val variable
 * @returns {boolean} whether a variable is valuable
 */
function hasValue (val) {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

export default hasValue
