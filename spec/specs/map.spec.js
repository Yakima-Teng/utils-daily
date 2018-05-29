import map from '../../map'

describe('map', function () {
  it('should work and return new array', function () {
    const arr = [1, 2, 3, 4]
    const handler = item => item + 1
    const newArr = map(arr, handler)
    const expectArr = [2, 3, 4, 5]
    expect(newArr).toEqual(expectArr)
    expect(newArr === expectArr).toEqual(false)
  })
})
