// @flow

/**
 * Transform value to string format
 * @param val {any} any value you want to transfer to string format
 * @returns {string} value in string format
 *
 * @example
 * ```javascript
 * console.log(getString(1)) // '1'
 * console.log(getString(0)) // '0'
 * console.log(getString(null)) // ''
 * console.log(getString(undefined)) // ''
 * ```
 */
function getString (val: any): string {
  return val === 0 ? '0' : (val ? ('' + val) : '')
}

export default getString
