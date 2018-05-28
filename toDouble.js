// @flow

import fillLeft from './fillLeft'

/**
 * Make a number less than 10 to be prefixed with an '0'
 * - the same as `fillLeft(val, 2, '0')`
 * @param num {string|number} a number, or number in string format (number should be integer)
 * @returns {string} string after prefixed with '0' is less than 10
 *
 * @example
 * ```javascript
 * console.log(toDouble('1')) // '01'
 * console.log(toDouble('11')) // '11'
 * ```
 */
function toDouble (num: string | number): string {
  return fillLeft(num, 2, '0')
}

export default toDouble
