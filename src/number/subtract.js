// @flow

import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber, { msgForInvalidNumber } from './_validateNumber'

/**
 * Calculate difference of members in an Array
 * @param arr {Array<string>} an array of numbers in string format
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} difference of these numbers
 *
 * @example
 * ```javascript
 * const arr [3, 1, 2]
 * console.log(subtract(arr)) // '0'
 * console.log(subtract(arr), 2) // '0.00'
 * ```
 */
function subtract (arr: Array<string> = [], numOfDecimalPlaces: number): string {
  if (arr.filter(item => !validateNumber(item)).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  const result: string = arr.reduce((preVal: string, curVal: string, curIdx: number, array: Array<string>): string => {
    return floatSubtract(parseFloat(preVal), parseFloat(curVal))
  })
  const returnResult = hasValue(numOfDecimalPlaces)
    ? parseFloat(result).toFixed(numOfDecimalPlaces)
    : /\.[0-9]{10}/.test(result)
      ? parseFloat(result).toFixed(10)
      : result
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Subtract number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {string} difference between a and b, in string format with automatical precision
 */
function floatSubtract (a: number, b: number): string {
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
  const m = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB))
  // control precision length automatically
  let automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB
  return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces)
}

export default subtract
