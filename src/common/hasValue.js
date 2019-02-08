// @flow

/**
 * Judge whether a variable is valuable
 * - ''、null、'null'、undefined、'undefined' is regarded as invaluable
 * - number 0 is regarded as valuable
 * @param val variable
 * @returns {boolean} whether a variable is valuable
 *
 * @example
 *
 * ```javascript
 * console.log(hasValue('')) // false
 * console.log(hasValue(null) // false
 * console.log(hasValue('null') // false
 * console.log(hasValue(undefined) // false
 * console.log(hasValue('undefined') // false
 * console.log(hasValue(0) // true
 * console.log(hasValue('none') // true
 * ```
 */
function hasValue (val: any): boolean {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

export default hasValue
