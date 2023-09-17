import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber from './_validateNumber'

/**
 * Multiply two number
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   product of number a and number b
 */
function floatMultiply(a: number, b: number): number {
  let m = 0
  const strA = a.toString()
  const strB = b.toString()
  try {
    m += strA.split('.')[1].length
  } catch (e) {
    //
  }
  try {
    m += strB.split('.')[1].length
  } catch (e) {
    //
  }
  // eslint-disable-next-line no-mixed-operators
  return Number(strA.replace('.', '')) * Number(strB.replace('.', '')) / 10 ** m
}

/**
 * @apiAnalyze
 * Calculate sum of members in an Array
 * @since 0.0.13
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces [number] number of decimal places to leave; determined automatically if not provided
 * @return {string} sum of these numbers
 *
 * @example
 * ```javascript
 * const arr = [1, 2, 3]
 * console.log(multiply(arr)) // '6'
 * console.log(multiply(arr, 2)) // '6.00'
 * ```
 */
const multiply: $utils.TMultiply = (arr, numOfDecimalPlaces) => {
  // 如果数据精度过大，则转成取6位小数进行计算
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    if (!validateNumber(item)) {
      arr[i] = Number(item.toFixed(6))
    }
  }

  const result = arr.reduce((preVal, curVal) => floatMultiply(preVal, curVal))
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

export default multiply
