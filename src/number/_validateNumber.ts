export const msgForInvalidNumber: string = 'Invalid number: scientific notation, and very big/small number are not allowed.'

/**
 * Determine whether the number used in this library is thought as valid
 * @param num {string | number} number used, usually from user input
 * @return {boolean} whether input number is valid
 */
function validateNumber(num: string | number): boolean {
  num = `${num}`
  // scientific notation is not allowed
  if (/[eE]/.test(num)) {
    return false
  }
  // must contain digit
  if (!/[0-9]/.test(num)) {
    return false
  }
  // zero direct after decimal point should not be more than or equal to 5
  if (/\.0{6}/.test(num)) {
    return false
  }
  // length of the number should be less than 17
  return num.length < 17
}

export default validateNumber
