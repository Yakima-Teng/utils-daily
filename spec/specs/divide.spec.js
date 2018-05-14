import divide from '../../divide'

describe('divide', function () {
  it('should calculate out the right result', function () {
    expect(divide([1, 2])).toEqual('0.5')
    expect(divide([1, 2, 3], 2)).toEqual('0.17')
    expect(divide([0.1, 0.2, 1])).toEqual('0.5')
    expect(divide([100, 200])).toEqual('0.5')
    expect(divide([100, 200, 0.2])).toEqual('2.5')
    expect(divide([-100, 5])).toEqual('-20')
    expect(divide([1.2, 0.2])).toEqual('6')
  })

  it('should return at most ten decimal places', function () {
    expect(divide([1, 2, 3])).toEqual('0.1666666667')
  })
})
