/**
 * @apiAnalyze
 * Judge whether it's a valid phone number
 * - This function is only available for Chinese cars
 * - The regular expression is copied from webpage: http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 *
 * @param phone {string} phone number
 * @return {boolean} whether it's a valid phone number
 * @since 0.0.13
 * @example
 * ```javascript
 * console.log(validatePhone('13333333333')) // true
 * console.log(validatePhone('12333333333')) // false
 * ```
 */
const validatePhone: $utils.TValidatePhone = (phone) => {
  return /^13[0-9]{9}|15[0-9][0-9]{8}|18[0-9][0-9]{8}|147[0-9]{8}|145[0-9]{8}|17[0-9]{9}$/.test(phone)
}

export default validatePhone
