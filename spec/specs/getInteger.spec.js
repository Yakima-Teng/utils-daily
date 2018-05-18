import getInteger from '../../getInteger'

describe('getInteger', function () {
  it('should return integer when passing valid value', function () {
    expect(getInteger(0)).toEqual(0)
    expect(getInteger('0')).toEqual(0)
    expect(getInteger('')).toEqual(0)
    expect(getInteger(null)).toEqual(0)
    expect(getInteger(undefined)).toEqual(0)
  })

  it('should return 0 when passing invalid value', function () {
    expect(getInteger('null')).toEqual(0)
    expect(getInteger('14343fsdfdsfdsf')).toEqual(0)
    expect(getInteger('invalid value')).toEqual(0)
  })
})
