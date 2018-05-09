import fillLeft from './fillLeft'

/**
 * Make a number less than 10 to be prefixed with an '0'
 * - the same as `fillLeft(m, 2, '0')`
 * @param num {string|number} a number, or number in string format
 * @returns {string} string after prefixed with '0' is less than 10
 */
function toDouble (num) {
  return fillLeft(num, 2, '0')
}

export default toDouble