// @flow

import hasValue from './hasValue'

/**
 * Calculate difference of members in an Array
 * @param arr {Array<number>} an array of numbers
 * @param numOfDecimalPlaces {number} number of decimal places to leave; determined automatically if not provided
 * @returns {string} difference of these numbers
 */
function subtract (arr: Array<number> = [], numOfDecimalPlaces: number): string {
  const result = arr.reduce((preVal, curVal, curIdx, array): string => {
    return floatSubtract(parseFloat(preVal), parseFloat(curVal))
  })
  return hasValue(numOfDecimalPlaces) ? parseFloat(result).toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test(result) ? parseFloat(result).toFixed(10) : result)
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
  // 动态控制精度长度
  let automaticPrecisionForDecimalPlaces = (numOfDecimalPlacesInA >= numOfDecimalPlacesInB) ? numOfDecimalPlacesInA : numOfDecimalPlacesInB
  return ((a * m - b * m) / m).toFixed(automaticPrecisionForDecimalPlaces)
}

export default subtract
