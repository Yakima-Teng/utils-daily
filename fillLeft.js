// @flow

/**
 * fill a string or number to specified length with specified symbol from left on
 * @param val {string|number}
 * @param len {number} target length after filling
 * @param symbol {string} used to fill string/number
 * @returns {string} string after filling
 */
function fillLeft (val: string | number, len: number, symbol: string = '0'): string {
  val = '' + val
  const diffInLength = len - val.length
  if (diffInLength > 0) {
    for (let i = 0; i < diffInLength; i++) {
      val = symbol + val
    }
  }
  return val
}

export default fillLeft
