// @flow

import indexOf from './indexOf'

/**
 * Determine if the array contains a given item (using `===` after `JSON.stringify`).
 * @param arr {Array<any>} an array
 * @param item {any} a given item
 * @param fromIndex
 * @returns {boolean}
 */
function contains (arr: Array<any>, item: any, fromIndex?: number): boolean {
  return indexOf(arr, item, fromIndex) >= 0
}

export default contains
