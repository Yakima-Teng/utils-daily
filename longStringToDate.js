/**
 * Transform string in format like `YYYY-MM-DD hh:mm:ss` to date object
 * @param dateString string in format like `YYYY-MM-DD hh:mm:ss`
 * @returns {Date} date object
 */
function longStringToDate (dateString) {
  if (dateString && dateString.length === 19) {
    // Attention: there is a space between regular expression
    let tempArr = dateString.split(/[- :]/)
    // 部分IOS设备中new Date('yyyy-mm-dd hh:mm:ss')不会生成日期对象，如下这般处理适用于所有设备
    return new Date(tempArr[0], tempArr[1] - 1, tempArr[2], tempArr[3], tempArr[4], tempArr[5])
  }
  throw new Error('not valid parameter for function longStringToDate')
}

export default longStringToDate
