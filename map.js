// @flow

/**
 * Alternative method to native Array.prototype.map
 * @param arr {Array<any>} array
 * @param handler {Function} function used to handler each element in the array
 * @returns {Array<any>} a new array
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3, 4]
 * const handler = item => item + 1
 * console.log(map(arr, handler)) // [2, 3, 4, 5]
 * ```
 */
function map (arr: Array<any>, handler: Function): Array<any> {
  if (Array.prototype.map) {
    return arr.map(handler)
  }
  const tempArr = []
  for (let i = 0, len = arr.length; i < len; i++) {
    tempArr.push(handler(arr[i], i))
  }
  return tempArr
}

export default map
