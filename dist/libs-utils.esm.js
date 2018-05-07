
/**
 * utils-daily v0.0.3
 * (c) 2018 Yakima Teng
 * @license MIT
 */

/**
 * 判断变量是否有值
 * - 空字符串、null、'null'、undefined、'undefined'均视为无值
 * - 数字0算有值
 * @param val 变量
 * @returns {boolean} 是否有值
 */
function hasValue (val) {
  return val !== '' && val !== null && val !== undefined && val !== 'undefined' && val !== 'null' && val !== 'undefined'
}

/**
 * 验证身份证号
 * @param idCardNo {string} 身份证号
 * @returns {boolean} 是否满足校验规则
 */
function validateIdCardNo (idCardNo) {
  function checkDate (ID) {
    var year, month, day, tempDate;
    var length18Or15 = ID.length;
    if (length18Or15 === 18) {
      year = ID.substring(6, 10);
      month = ID.substring(10, 12);
      day = ID.substring(12, 14);
      // with parseInt, 05 will be 5
      tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return !(tempDate.getFullYear() !== parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
    } else if (length18Or15 === 15) {
      year = ID.substring(6, 8);
      month = ID.substring(8, 10);
      day = ID.substring(10, 12);
      // with parseInt, 05 will be 5
      tempDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      // .getYear() is not recommended for use any longer,
      // so here getFullYear() is used although it may seem not simple enough
      return !(('' + tempDate.getFullYear()).substring(2) !== parseInt(year) || tempDate.getMonth() !== parseInt(month) - 1 || tempDate.getDate() !== parseInt(day))
    } else {
      console.log('Unknown error!');
      // return
    }
  }
  var ID = '' + idCardNo;
  if (/^[1-9][0-9]{16}([0-9]|[xX])$/.test(ID)) {
    if (checkDate(ID)) {
      // turn ID to an array
      var arrID = ID.split('');
      // factors for 1st-17st ID digits
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
      // the check code for the 18th digit in the ID number
      var checkCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      // if the 18th digit is the letter X (or x), change it to be the digit 10
      if (arrID[17].toLowerCase() === 'x') {
        arrID[17] = 10;
      }
      // multiply first 17 ID digits by corresponding factor elements, and sum these results
      for (var i = 16; i >= 0; i--) {
        sum += arrID[i] * factor[i];
      }
      // let remainder = sum % 11
      return parseInt(arrID[17]) === checkCode[sum % 11]
    }
    return false
  } else if (/^[1-9][0-9]{14}$/.test(ID)) {
    return checkDate(ID)
  } else {
    return false
  }
}

// this file is generated by gulp task ^_^

var index = {
  hasValue: hasValue,
  validateIdCardNo: validateIdCardNo
}

export default index;
