import toDouble from '../string/toDouble'

/**
 * @apiAnalyze
 * 将指定日期对象按`年、月、日`或`年、月、日、时、分、秒`进行偏移（正值向未来偏移，负值向过去偏移），并返回偏移后的日期字符串
 * @since 0.0.13
 * @param dat {Date} date object used as the base for calculation
 * @param yDiff {number} difference in year, negative value is acceptable
 * @param mDiff {number} difference in month, negative value is acceptable
 * @param dDiff {number} difference in date, negative value is acceptable
 * @param hDiff [number] difference in hours, negative value is acceptable; optional, but if defined, `miDiff` and `sDiff` should also be defined
 * @param miDiff [number] difference in minutes, negative value is acceptable; optional, but if defined, `hDiff` and `sDiff` should also be defined
 * @param sDiff [number] difference in seconds, negative value is acceptable; optional, but if defined, `hDiff` and `miDiff` should also be defined
 * @return {string} date string in format of `yyyy-mm-dd` or `yyyy-mm-dd hh:mm:ss`
 *
 * @example
 * ```javascript
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, 2, 0)) // '2018-04-02'
 * console.log(getRelativeDateString(new Date(2018, 1, 2), 0, -2, 0)) // '2017-12-02'
 * ```
 */
const getRelativeDateString: $utils.TGetRelativeDateString = (
  dat,
  yDiff,
  mDiff,
  dDiff,
  hDiff,
  miDiff,
  sDiff
) => {
  // clone the dat object first, avoid change of the dat object
  const date = new Date(+dat)
  date.setFullYear(date.getFullYear() + yDiff)
  date.setMonth(date.getMonth() + mDiff)
  date.setDate(date.getDate() + dDiff)
  date.setHours(date.getHours() + (hDiff || 0))
  date.setMinutes(date.getMinutes() + (miDiff || 0))
  date.setSeconds(date.getSeconds() + (sDiff || 0))
  const y: number = date.getFullYear()
  const m: string = toDouble(date.getMonth() + 1)
  const d: string = toDouble(date.getDate())
  if (typeof sDiff === 'number') {
    const h: string = toDouble(date.getHours())
    const mi: string = toDouble(date.getMinutes())
    const s: string = toDouble(date.getSeconds())
    return `${y}-${m}-${d} ${h}:${mi}:${s}`
  }
  if (typeof dDiff === 'number') {
    return `${y}-${m}-${d}`
  }
  throw new Error('length of arguments for function getRelativeDateString should be either 4 or 7')
}

export default getRelativeDateString
