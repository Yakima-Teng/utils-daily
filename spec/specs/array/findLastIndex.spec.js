import findLastIndex from '../../../src/array/findLastIndex'

describe('findLastIndex', function () {
  it('should pass', function () {
    expect(findLastIndex([1, 2, 3], x => x > 0)).toEqual(2)
    expect(findLastIndex([1, 2, 3], x => x > 1)).toEqual(2)
    expect(findLastIndex([1, 2, 3], x => x > 2)).toEqual(2)
    expect(findLastIndex([1, 2, 3], x => x > 3)).toEqual(-1)
    expect(findLastIndex([1, 2, 3], x => x < 3)).toEqual(1)
  })
})
