// @flow

import toDouble from './toDouble'

/**
 * Get date string of calculating specific date with specific difference in year, month, date, hours, minutes and seconds
 * @param dat {Date} date object used as the base for calculation
 * @param yDiff {number} difference in year, negative value is acceptable
 * @param mDiff {number} difference in month, negative value is acceptable
 * @param dDiff {number} difference in date, negative value is acceptable
 * @param [hDiff] {number} difference in hours, negative value is acceptable; optional, but if defined, `miDiff` and `sDiff` should also be defined
 * @param [miDiff] {number} difference in minutes, negative value is acceptable; optional, but if defined, `hDiff` and `sDiff` should also be defined
 * @param [sDiff] {number} difference in seconds, negative value is acceptable; optional, but if defined, `hDiff` and `miDiff` should also be defined
 * @returns {string} date string in format of `yyyy-mm-dd` or `yyyy-mm-dd hh:mm:ss`
 */
function getRelativeDateString (
  dat: Date = new Date(),
  yDiff: number = 0,
  mDiff: number = 0,
  dDiff: number = 0,
  hDiff: number = 0,
  miDiff: number = 0,
  sDiff: number = 0
):string {
  // clone the dat object first, avoid change of the dat object
  const date = new Date(+dat)
  date.setFullYear(date.getFullYear() + yDiff)
  date.setMonth(date.getMonth() + mDiff)
  date.setDate(date.getDate() + dDiff)
  date.setHours(date.getHours() + hDiff)
  date.setMinutes(date.getMinutes() + miDiff)
  date.setSeconds(date.getSeconds() + sDiff)
  const y: number = date.getFullYear()
  const m: string = toDouble(date.getMonth() + 1)
  const d: string = toDouble(date.getDate())
  if (arguments.length === 4) {
    return `${y}-${m}-${d}`
  } else if (arguments.length === 7) {
    const h: string = toDouble(date.getHours())
    const mi: string = toDouble(date.getMinutes())
    const s: string = toDouble(date.getSeconds())
    return `${y}-${m}-${d} ${h}:${mi}:${s}`
  } else {
    throw new Error('length of arguments for function getRelativeDateString should be either 4 or 7')
  }
}

export default getRelativeDateString
