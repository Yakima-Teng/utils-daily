// @flow

/**
 * Alternative method to native Array.prototype.filter
 * @param arr {Array<any>} an array
 * @param test {Function} function used to determine whether element in the array should be kept or removed, will be kept if returns true
 * @returns {Array<any>} a new array
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * const test = item => item % 2 === 0
 * console.log(filter(arr, test)) // [2, 4]
 * ```
 */
function filter (arr: Array<any>, test: Function): Array<any> {
  if (Array.prototype.filter) {
    return arr.filter(test)
  }
  const tempArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    if (test(item, i)) {
      tempArr.push(item)
    }
  }
  return tempArr
}

export default filter
