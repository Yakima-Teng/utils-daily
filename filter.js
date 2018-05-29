// @flow

/**
 * Alternative method to native Array.prototype.filter
 * @param arr {Array<any>} an array
 * @param test {Function} function used to determine whether element in the array should be kept or removed, will be kept if returns true
 * @returns {Array<any>} a new array
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
