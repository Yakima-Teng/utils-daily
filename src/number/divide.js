// @flow

import hasValue from '../common/hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber, { msgForInvalidNumber } from './_validateNumber'

/**
 * Calculate quotient of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} quotient of these numbers (number of decimal places not larger than 10)
 *
 * @example
 * const arr = [3, 1, 2]
 * console.log(divide([1, 2])) // '0.5'
 * console.log(divide([1, 2, 3], 2)) // '0.17'
 */
function divide (arr: Array<number> = [], numOfDecimalPlaces: number): string {
  if (arr.filter(item => !validateNumber(item)).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  const result = arr.reduce((preVal, curVal, curIdx, array) => {
    return floatDivide(preVal, curVal)
  })
  const returnResult = hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Divide number a by number b
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   quotient of number a divided by number b
 */
function floatDivide (a: number, b: number): number {
  let numOfDecimalPlacesInA = 0
  let numOfDecimalPlacesInB = 0
  try {
    numOfDecimalPlacesInA = a.toString().split('.')[1].length
  } catch (e) {}
  try {
    numOfDecimalPlacesInB = b.toString().split('.')[1].length
  } catch (e) {}
  const newA = Number(a.toString().replace('.', ''))
  const newB = Number(b.toString().replace('.', ''))
  return (newA / newB) * Math.pow(10, numOfDecimalPlacesInB - numOfDecimalPlacesInA)
}

export default divide
