// @flow

/**
 * Judge whether it's a valid phone number
 * - This function is only available for Chinese cars
 * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param phone {string} phone number
 * @returns {boolean} whether it's a valid phone number
 */
function validatePhone (phone: string): boolean {
  return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone)
}

export default validatePhone
