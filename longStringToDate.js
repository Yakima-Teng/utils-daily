// @flow
/**
 * Transform string in format like `YYYY-MM-DD hh:mm:ss` to date object
 * @param dateString string in format like `YYYY-MM-DD hh:mm:ss`
 * @returns {Date} date object
 *
 * @example
 * ```javascript
 * console.log(longStringToDate('2018-02-01 12:13:14')) // new Date(2018, 1, 1, 12, 13, 14)
 * ```
 */
function longStringToDate (dateString: string): Date {
  if (dateString && dateString.length === 19) {
    // Attention: there is a space between regular expression
    let tempArr = dateString.split(/[- :]/)
    // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(parseInt(tempArr[0], 10), parseInt(tempArr[1], 10) - 1, parseInt(tempArr[2], 10), parseInt(tempArr[3], 10), parseInt(tempArr[4], 10), parseInt(tempArr[5], 10))
  }
  throw new Error('not valid parameter for function longStringToDate')
}

export default longStringToDate
