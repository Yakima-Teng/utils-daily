import lastIndexOf from '../../../src/array/lastIndexOf'

describe('lastIndexOf', function () {
  it('should do things right', function () {
    const arr = [1, '2', { c: new Date(2018, 2, 2) }, 1, '2', 1]
    expect(lastIndexOf(arr, '2')).toEqual(4)
    expect(lastIndexOf(arr, 1, -1)).toEqual(5)
    expect(lastIndexOf(arr, 1, -2)).toEqual(3)
    expect(lastIndexOf(arr, 1, -3)).toEqual(3)
    expect(lastIndexOf(arr, 1, -4)).toEqual(0)
  })
})
