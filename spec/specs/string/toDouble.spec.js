import toDouble from '../../../src/string/toDouble'

describe('toDouble', function () {
  it('should return number string prefixed with 0 when given number less than 10', function () {
    expect(toDouble(0)).toEqual('00')
    expect(toDouble(9)).toEqual('09')
  })

  it('should just stringify number when it\'s larger than 9', function () {
    expect(toDouble(10)).toEqual('10')
    expect(toDouble(100)).toEqual('100')
  })
})
