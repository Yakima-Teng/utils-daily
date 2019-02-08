import validateCarPlate from '../../../src/validate/validateCarPlate'

describe('validateCarPlate', function () {
  it('should 识别常规车牌', function () {
    expect(validateCarPlate('沪ANC116')).toEqual(true)
    expect(validateCarPlate('沪111111')).toEqual(false)
  })

  it('should 不含繁体字', function () {
    expect(validateCarPlate('贵ANC116')).toEqual(true)
    expect(validateCarPlate('貴ANC116')).toEqual(false)
  })

  it('should 不含特殊符号', function () {
    expect(validateCarPlate('沪ANC11&')).toEqual(false)
  })

  it('should recognize 新军车牌（以两位为大写英文字母开头，后面以5位阿拉伯数字组成）', function () {
    expect(validateCarPlate('TS12345')).toEqual(true)
    expect(validateCarPlate('TS123456')).toEqual(false)
  })

  it('should recognize 新能源车', function () {
    // 小型新能源汽车车牌号序号首位必须使用字母D或F
    expect(validateCarPlate('京AD08000')).toEqual(true)
    expect(validateCarPlate('京AF08000')).toEqual(true)
    expect(validateCarPlate('京AW08000')).toEqual(false)

    // 小型新能源汽车车票号序号末4位必须为数字
    expect(validateCarPlate('京AD0800A')).toEqual(false)
    expect(validateCarPlate('京AF080B0')).toEqual(false)

    // 大型新能源汽车车牌号序号末位必须使用字母D或F
    expect(validateCarPlate('沪A12116D')).toEqual(true)
    expect(validateCarPlate('沪A12116F')).toEqual(true)
    expect(validateCarPlate('沪A34116T')).toEqual(false)

    // 大型新能源汽车车牌号序号前五位必须使用数字
    expect(validateCarPlate('沪AA2116D')).toEqual(false)
    expect(validateCarPlate('沪AAA116D')).toEqual(false)
    expect(validateCarPlate('沪AAAA16D')).toEqual(false)
    expect(validateCarPlate('沪A321A6D')).toEqual(false)
    expect(validateCarPlate('沪A4211BD')).toEqual(false)
  })

  it('should 不支持小写字母', function () {
    expect(validateCarPlate('沪aNC116')).toEqual(false)
  })
})
