import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber from './_validateNumber'

/**
 * Subtract number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {string} difference between a and b, in string format with automatical precision
 */
function floatSubtract(a: number, b: number): string {
  let numOfDecimalPlacesInA
  let numOfDecimalPlacesInB
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length
  } catch (e) {
    numOfDecimalPlacesInA = 0
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length
  } catch (e) {
    numOfDecimalPlacesInB = 0
  }
  const m = 10 ** Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB)
  // control precision length automatically
  const automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB
  return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces)
}

/**
 * @apiAnalyze
 * Calculate difference of members in an Array
 * @since 0.0.13
 * @param rawArr {Array<string | number>} an array of numbers in string format
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} difference of these numbers
 *
 * @example
 * ```javascript
 * const arr [3, 1, 2]
 * console.log(subtract(arr)) // '0'
 * console.log(subtract(arr), 2) // '0.00'
 * ```
 */
const subtract: $utils.TSubtract = (rawArr, numOfDecimalPlaces) => {
  const arr = rawArr.map(String) as string[]

  // 如果数据精度过大，则转成取6位小数进行计算
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    if (!validateNumber(item)) {
      arr[i] = item.substring(0, 6)
    }
  }

  const result: string = arr.reduce((preVal: string, curVal: string): string => floatSubtract(parseFloat(preVal), parseFloat(curVal)))
  let returnResult: string
  if (hasValue(numOfDecimalPlaces)) {
    returnResult = parseFloat(result).toFixed(numOfDecimalPlaces)
  } else if (/\.[0-9]{10}/.test(result)) {
    returnResult = parseFloat(result).toFixed(10)
  } else {
    returnResult = result
  }
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

export default subtract
