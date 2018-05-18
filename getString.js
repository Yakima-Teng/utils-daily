// @flow

/**
 * Transform value to string format
 * @param val {any} any value you want to transfer to string format
 * @returns {string} value in string format
 */
function getString (val: any): string {
  return val === 0 ? '0' : (val ? ('' + val) : '')
}

export default getString
