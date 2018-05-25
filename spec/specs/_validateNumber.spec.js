import validateNumber from '../../_validateNumber'

describe('validateNumber', function () {
  it('should validate number', function () {
    expect(validateNumber('test')).toEqual(false)
    expect(validateNumber('2e10')).toEqual(false)
    expect(validateNumber(0.0000005)).toEqual(false)
    expect(validateNumber('12345678901234567')).toEqual(false)
    expect(validateNumber('1234567890123456')).toEqual(true)
  })
})
