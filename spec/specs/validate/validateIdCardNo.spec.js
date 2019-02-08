import validateIdCardNo from '../../../src/validate/validateIdCardNo'

describe('validateIdCardNo', function () {
  it('should recognize 15位身份证号', function () {
    expect(validateIdCardNo('320521720807022')).toEqual(true)
    expect(validateIdCardNo('320521691208064')).toEqual(true)
  })

  it('should recognize 18位身份证号', function () {
    expect(validateIdCardNo('110108199011200183')).toEqual(true)
    expect(validateIdCardNo('110108199011200182')).toEqual(false)

    expect(validateIdCardNo('441826198311281767')).toEqual(true)
    expect(validateIdCardNo('441826198311281766')).toEqual(false)
  })

  it('should 支持尾号为X的正确身份证', function () {
    expect(validateIdCardNo('13232419591008011X')).toEqual(true)
    expect(validateIdCardNo('13232419591008011x')).toEqual(true)
  })
})
