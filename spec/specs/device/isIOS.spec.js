import isIOS from '../../../src/device/isIOS'

describe('isIOS', function () {
  it('should pass', function () {
    console.log(isIOS)
    expect(true).toEqual(true)
  })
})
