// @flow

/**
 * Alternative method to native Array.prototype.map
 * @param arr {Array<any>} array
 * @param handler {Function} function used to handler each item in the array
 * @returns {Array<any>} a new array
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
