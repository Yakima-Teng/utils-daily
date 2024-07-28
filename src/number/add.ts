import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber from './_validateNumber'

/**
 * Add two number
 * @ignore
 * @param  {number} a        number a
 * @param  {number} b        number b
 * @return {number}    sum of number a and number b
 */
function floatAdd(a: number, b: number): number {
  let numOfDecimalPlacesInA: number
  let numOfDecimalPlacesInB: number
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
  const m: number = 10 ** Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB)
  return (a * m + b * m) / m
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
 * const arr = [1, 2, 3, 4]
 * console.log(add(arr)) // '10'
 * console.log(add(arr, 2)) // '10.00'
 * ```
 */
const add: $utils.TAdd = (arr, numOfDecimalPlaces) => {
  // 如果数据精度过大，则转成取6位小数进行计算
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i]
    if (!validateNumber(item)) {
      arr[i] = Number(item.toFixed(6))
    }
  }

  const result = arr.reduce((preVal, curVal) => floatAdd(preVal, curVal), 0)
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

export default add
