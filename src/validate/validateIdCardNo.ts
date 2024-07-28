/**
 * validate date part in ID card number
 * @ignore
 * @param ID {string} ID card number
 * @return {boolean} whether date part in ID card number is valid
 */
function checkDate(ID: string): boolean {
  let year; let month; let day; let
    tempDate
  const length18Or15 = ID.length
  if (length18Or15 === 18) {
    year = ID.substring(6, 10)
    month = ID.substring(10, 12)
    day = ID.substring(12, 14)
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
    return !(
      tempDate.getFullYear() !== parseInt(year, 10)
      || tempDate.getMonth() !== parseInt(month, 10) - 1
      || tempDate.getDate() !== parseInt(day, 10)
    )
  } if (length18Or15 === 15) {
    year = ID.substring(6, 8)
    month = ID.substring(8, 10)
    day = ID.substring(10, 12)
    // with parseInt, 05 will be 5
    tempDate = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
    // .getYear() is not recommended for use any longer,
    // so here getFullYear() is used, although it may seem not simple enough
    return !(
      (`${tempDate.getFullYear()}`).substring(2) !== `${parseInt(year, 10)}`
      || tempDate.getMonth() !== parseInt(month, 10) - 1
      || tempDate.getDate() !== parseInt(day, 10)
    )
  }
  return false
}

/**
 * @apiAnalyze
 * Validate the accuracy of a ID card number
 * - This function is only available for Chinese
 * @since 0.0.13
 * @param idCardNo {string} ID card number
 * @return {boolean} whether the ID card number is valid
 *
 * @example
 * ```javascript
 * console.log(validateIdCardNo('123456789012345678')) // false
 * ```
 */
const validateIdCardNo: $utils.TValidateIdCardNo = (idCardNo) => {
  const ID = `${idCardNo}`
  if (/^[1-9][0-9]{16}([0-9]|[xX])$/.test(ID)) {
    if (checkDate(ID)) {
      // turn ID to an array
      const arrID: number[] = ID.split('').map((numStr) => {
        if (numStr.toLowerCase() === 'x') {
          return 10
        }
        return parseInt(numStr, 10)
      })
      // factors for 1st-17st ID digits
      const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]
      // the check code for the 18th digit in the ID number
      const checkCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]
      let sum = 0
      // multiply first 17 ID digits by corresponding factor elements, and sum these results
      for (let i = 16; i >= 0; i--) {
        sum += arrID[i] * factor[i]
      }
      // let remainder = sum % 11
      return arrID[17] === checkCode[sum % 11]
    }
    return false
  } if (/^[1-9][0-9]{14}$/.test(ID)) {
    return checkDate(ID)
  }
  return false
}

export default validateIdCardNo
