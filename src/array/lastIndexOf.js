// @flow

import findLastIndex from './findLastIndex'

/**
 * Return the last index of the matched value, -1 if nothing matches
 * - comparison are done after handling with `JSON.stringify`
 * @param arr {Array<any>} the array
 * @param value {any} the array
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index and from back to front, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = [1, '2', 'c', '2']
 * console.log(lastIndexOf(arr, '2')) // 3
 * console.log(lastIndexOf(arr, '2', 3)) // 3
 * console.log(lastIndexOf(arr, '2', 4)) // -1
 * ```
 */
function lastIndexOf (arr: Array<any>, value: any, fromIndex?: number): number {
  value = JSON.stringify(value)
  const testFunc = (elem: any): boolean => JSON.stringify(elem) === value
  return findLastIndex(arr, testFunc, fromIndex)
}

export default lastIndexOf
