// @flow

/**
 * Return the index of the first element pass the test function
 * @param arr {Array<any>} array
 * @param test {Function} function used to test array element
 * @param [fromIndex] {number} optional, if specified, the search will start at the specified index, negative value is also supported
 * @returns {number}
 *
 * @example
 * ```javascript
 * const arr = ['1', '2', 'c']
 * const test = /^[0-9]$/.test
 * console.log(findIndex(arr, test, 0)) // 0
 * console.log(findIndex(arr, test, 2)) // -1
 * ```
 */
function findIndex (arr: Array<any>, test: (item: any, idx?: number) => boolean, fromIndex?: number): number {
  let startIdx = 0
  const len = arr.length
  if (fromIndex !== void 0) {
    startIdx = fromIndex >= 0 ? fromIndex : (len + fromIndex)
  }
  for (; startIdx < len; startIdx++) {
    if (test(arr[startIdx], startIdx)) return startIdx
  }
  return -1
}

export default findIndex
