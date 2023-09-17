import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber from './_validateNumber'

/**
 * Divide number a by number b
 * @ignore
 * @param a {number} number a
 * @param b {number} number b
 * @return {number} quotient of number a divided by number b
 */
function floatDivide(a: number, b: number): number {
  let numOfDecimalPlacesInA = 0
  let numOfDecimalPlacesInB = 0
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length
  } catch (e) {
    //
  }
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length
  } catch (e) {
    //
  }
  const newA = Number(a.toString().replace('.', ''))
  const newB = Number(b.toString().replace('.', ''))
  return (newA / newB) * 10 ** (numOfDecimalPlacesInB - numOfDecimalPlacesInA)
}

/**
 * @apiAnalyze
 * Calculate quotient of members in an Array
 * @since 0.0.13
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} quotient of these numbers (number of decimal places not larger than 10)
 *
 * @example
 * ```javascript
 * console.log(divide([1, 2])) // '0.5'
 * console.log(divide([1, 2, 3], 2)) // '0.17'
 * ```
 */
const divide: $utils.TDivide = (arr, numOfDecimalPlaces?) => {
  // 如果数据精度过大，则转成取6位小数进行计算
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    if (!validateNumber(item)) {
      arr[i] = Number(item.toFixed(6))
    }
  }

  const result = arr.reduce((preVal, curVal) => floatDivide(preVal, curVal))
  let returnResult: string
  if (hasValue(numOfDecimalPlaces)) {
    returnResult = result.toFixed(numOfDecimalPlaces)
  } else if (/\.[0-9]{10}/.test(`${result}`)) {
    returnResult = result.toFixed(10)
  } else {
    returnResult = `${result}`
  }
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

export default divide
