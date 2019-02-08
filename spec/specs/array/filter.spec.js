import filter from '../../../src/array/filter'

describe('filter', function () {
  it('should work and return a new array', function () {
    const arr = [1, 2, 3, 4]
    const test = item => item % 2 === 0
    const tempArr = filter(arr, test)
    const expectArr = [2, 4]
    expect(tempArr).toEqual(expectArr)
    expect(tempArr === expectArr).toEqual(false)
  })
})
