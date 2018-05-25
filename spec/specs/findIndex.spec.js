import findIndex from '../../findIndex'

describe('findIndex', function () {
  it('should pass', function () {
    expect(findIndex([1, 2, 3], x => x > 0)).toEqual(0)
    expect(findIndex([1, 2, 3], x => x > 1)).toEqual(1)
    expect(findIndex([1, 2, 3], x => x > 2)).toEqual(2)
    expect(findIndex([1, 2, 3], x => x > 3)).toEqual(-1)
  })
})
