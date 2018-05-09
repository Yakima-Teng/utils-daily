/**
 * Validate whether the car plate number is valid
 * - The validation method is copied from http://www.cpic.com.cn/market/qcbx/?hit=ShouyeDhCsQcbx
 * @param plateNo the car plate number
 * @returns {boolean} whether the car plate number is valid
 */
function validateCarPlate (plateNo) {
  const per = /^[京津沪渝蒙新藏桂黑吉辽冀晋青鲁豫苏皖浙闽赣湘鄂粤琼甘陕川贵云宁]{1}[A-Z]{1}[A-Za-z0-9]{5,6}$/;
  const per1 = /^[京]{1}[A-Z]{1}[A-Za-z0-9]{5,6}$/;
  const per2 = /[`~!@#$%^&*()_+<>?:"{},.\\\/;'\[\]]/im;
  const fanti = /^[滬遼晉魯蘇閩贛粵瓊陝貴雲甯]{1}/;
  const per3 = /^[京]{1}[A-Z]{1}/;

  if (plateNo.charAt(0) === 'L' && plateNo.charAt(1) === 'S') {
    // 车牌号不能以LS开头
    return false;
  } else if (per2.test(plateNo) || fanti.test(plateNo)) {
    // 车牌号不能包含繁体字、特殊字符
    return false
  }
  if (per3.test(plateNo)) {
    // 如果是京开头的车牌则允许后面多一位车牌号（个性车牌）
    if (!per1.test(plateNo)) {
      return false
    }
  } else if (!per.test(plateNo)) {
    return false
  }
  return true
}

export default validateCarPlate
