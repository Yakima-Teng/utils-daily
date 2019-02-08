import fillLeft from '../../../src/string/fillLeft'

describe('fillLeft', () => {
  it('should fill left with `0`', function () {
    const oldStr = '1'
    const newStr = fillLeft(oldStr, 3, '0')
    expect(newStr).toEqual('001')
  })

  it('should fill left with `$`', function () {
    const oldStr = '1'
    const newStr = fillLeft(oldStr, 3, '$')
    expect(newStr).toEqual('$$1')
  })
})
