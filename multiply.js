// @flow

import hasValue from './hasValue'

/**
 * Calculate sum of members in an Array
 * @param  {Array<number>} arr an array of numbers
 * @param  {number} numOfDecimalPlaces number of decimal places to leave; determined automatically if not provided
 * @return {string}  sum of these numbers
 */
function multiply (arr: Array<number> = [], numOfDecimalPlaces: number) {
  const result = arr.reduce((preVal, curVal, curIdx, array) => {
    return floatMultiply(preVal, curVal)
  })
  return hasValue(numOfDecimalPlaces) ? result.toFixed(numOfDecimalPlaces) : (/\.[0-9]{10}/.test('' + result) ? result.toFixed(10) : '' + result)
}

/**
 * Multiply two number
 * @ignore
 * @param  {number} a number a
 * @param  {number} b number b
 * @return {number}   product of number a and number b
 */
function floatMultiply (a, b) {
  let m = 0
  let strA = a.toString()
  let strB = b.toString()
  try {
    m += strA.split('.')[1].length
  } catch (e) {}
  try {
    m += strB.split('.')[1].length
  } catch (e) {}
  return Number(strA.replace('.', '')) * Number(strB.replace('.', '')) / Math.pow(10, m)
}

export default multiply
