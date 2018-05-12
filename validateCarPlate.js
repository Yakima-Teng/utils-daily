// @flow

/**
 * Validate whether the car plate number is valid
 * - This method is only available in China
 * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param plateNo the car plate number
 * @returns {boolean} whether the car plate number is valid
 */
function validateCarPlate (plateNo: string): boolean {
  /**
   * @ignore
   * 普通汽车
   * 车牌号格式：汉字 + A-Z + 5位A-Z或0-9(  车牌号不存在字母I和O防止和1、0混淆)
   */
  const reNormalVehicle = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$/

  /**
   * @ignore
   * 新能源号码车牌编码规则
   *
   * 新能源汽车号牌号码增加一位，与普通汽车号牌相比，
   * 新能源汽车号牌号码由5位升为6位，号牌号码容量增大、资源更加丰富，
   * 可以满足“少使用字母、多使用数字”的编排需要。
   *
   * 具体编码规则是省份简称（1位汉字）+发牌机关代号（1位字母）+序号（6位）。
   *
   * - 小型新能源汽车号牌的第一位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
   * 第二位可以使用字母或者数字，后四位必须使用数字。
   *
   * - 大型新能源汽车号牌的第六位必须使用字母D、F（D代表纯电动新能源汽车，F代表非纯电动新能源汽车），
   * 前五位必须使用数字。
   *
   * 序号中英文字母I和O不能使用。
   */
  const reNewEngineVehicle = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z][A-Z](([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))/

  return reNormalVehicle.test(plateNo) || reNewEngineVehicle.test(plateNo)
}

export default validateCarPlate
