// @flow

import hasValue from './hasValue'
import cancelScientificNotation from './_cancelScientificNotation'
import validateNumber, { msgForInvalidNumber } from './_validateNumber'

/**
 * Calculate sum of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} sum of these numbers
 */
function add (arr: Array<number> = [], numOfDecimalPlaces: number) {
  if (arr.filter(item => !validateNumber(item)).length > 0) {
    throw new Error(msgForInvalidNumber)
  }
  const result = arr.reduce((preVal, curVal, curIdx, array) => {
    return floatAdd(preVal, curVal)
  }, 0)
  const returnResult = hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
  if (/e/.test(returnResult)) {
    return cancelScientificNotation(returnResult)
  }
  return returnResult
}

/**
 * Add two number
 * @ignore
 * @param  {number} a        number a
 * @param  {number} b        number b
 * @return {number}    sum of number a and number b
 */
function floatAdd (a: number, b: number) {
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
  const m: number = Math.pow(10, Math.max(numOfDecimalPlacesInA, numOfDecimalPlacesInB))
  return (a * m + b * m) / m
}

export default add
