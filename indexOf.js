// @flow

import findIndex from './findIndex'

/**
 * Return the first index of the matched value, -1 if nothing matches
 * - comparison are done after handling with `JSON.stringify`
 * - if `fromIndex` is negative, it's counted from the end
 * @param arr {Array<any>} the array
 * @param value {any}
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index, negative value is also supported
 * @returns {number}
 */
function indexOf (arr: Array<any>, value: any, fromIndex?: number): number {
  value = JSON.stringify(value)
  const testFunc = (elem: any): boolean => JSON.stringify(elem) === value
  return findIndex(arr, testFunc, fromIndex)
}

export default indexOf
