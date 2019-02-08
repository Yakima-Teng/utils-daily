import hasValue from '../../../src/common/hasValue'

describe('hasValue', function () {
  it('should return false in case of empty string', function () {
    expect(hasValue('')).toEqual(false)
  })

  it('should return false in case of null or `null`', function () {
    expect(hasValue(null)).toEqual(false)
    expect(hasValue('null')).toEqual(false)
  })

  it('should return false in case of undefined or `undefined`', function () {
    expect(hasValue(undefined)).toEqual(false)
    expect(hasValue('undefined')).toEqual(false)
  })

  it('should return true otherwise', function () {
    expect(hasValue(0)).toEqual(true)
    expect(hasValue('test')).toEqual(true)
    expect(hasValue('false')).toEqual(true)
  })
})
