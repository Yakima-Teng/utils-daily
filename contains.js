// @flow

import indexOf from './indexOf'

/**
 * Determine if the array contains a given item (using `===` after `JSON.stringify`).
 * @param arr {Array<any>} an array
 * @param item {any} a given item
 * @param fromIndex
 * @returns {boolean}
 *
 * @example
 * ```javascript
 * const arr = [1, '2', 'c', { a: '4' }]
 * console.log(contains(arr, { a: '4' })) // true
 * console.log(contains(arr, { a: '5' })) // false
 * console.log(contains(arr, '1')) // false
 * console.log(contains(arr, '2')) // true
 * ```
 */
function contains (arr: Array<any>, item: any, fromIndex?: number): boolean {
  return indexOf(arr, item, fromIndex) >= 0
}

export default contains
