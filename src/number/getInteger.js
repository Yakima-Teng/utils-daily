// @flow

/**
 * Transform value to integer (invalue value will be transfered to integer 0)
 * @param val {any} any value you want to transfer to integer
 * @returns {number} value in format of integer
 *
 * @example
 * ```javascript
 * console.log(getInteger('0')) // 0
 * console.log(getInteger('')) // 0
 * console.log(getInteger(2)) // 2
 * console.log(getInteger(0.12)) // 0
 * ```
 */
function getInteger (val: string | number): number {
  try {
    if (isNaN(val)) {
      return 0
    }
    const result = val ? (parseInt(val)) : 0
    return isNaN(result) ? 0 : result
  } catch (e) {
    return 0
  }
}

export default getInteger
