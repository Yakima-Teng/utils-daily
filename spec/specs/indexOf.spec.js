import indexOf from '../../indexOf'

describe('indexOf', () => {

  const arr = [
    1,
    '1',
    { a: 'test' },
    { d: new Date(2018, 2, 2) },
    1,
    '1'
  ]

  it('should return the index of the matched item if something matches', function () {
    expect(indexOf(arr, { a: 'test' })).toEqual(2)
    expect(indexOf(arr, { d: new Date(2018, 2, 2) })).toEqual(3)
  })

  it('should return the first index of the matched item if something matches', function () {
    expect(indexOf(arr, 1)).toEqual(0)
    expect(indexOf(arr, '1')).toEqual(1)
  })

  it('should return -1 if nothing matches', function () {
    expect(indexOf(arr, 2)).toEqual(-1)
  })

  it('should calculate starting from the given `fromIndex` parameter if passed in', function () {
    expect(indexOf(arr, 1, 4)).toEqual(4)
    expect(indexOf(arr, 1, 5)).toEqual(-1)
    expect(indexOf(arr, 1, -2)).toEqual(4)
    expect(indexOf(arr, 1, -1)).toEqual(-1)
  })
})
