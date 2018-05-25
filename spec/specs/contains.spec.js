import contains from '../../contains'

describe('contains', function () {
  it('should return true when values of object contains the target item', function () {
    const obj = {
      a: 1,
      b: {
        test: { h: 'dd' }
      },
      m: new Date()
    }
    expect(contains(obj, '1', 0)).toEqual(false)
    expect(contains(obj, '1')).toEqual(false)
    expect(contains(obj, 'a', 0)).toEqual(false)
    expect(contains(obj, 'a')).toEqual(false)
    expect(contains(obj, 'b')).toEqual(false)
    expect(contains(obj, 'test')).toEqual(false)
    expect(contains(obj, 'h')).toEqual(false)
  })

  it('should return true when elements of array contains the target item', function () {
    const arr = [1, '2', 'c', new Date()]
    expect(contains(arr, 1)).toEqual(true)
    expect(contains(arr, 1, 0)).toEqual(true)
    expect(contains(arr, 1, 2)).toEqual(false)
    expect(contains(arr, '1')).toEqual(false)
    expect(contains(arr, '2', 1)).toEqual(true)
    expect(contains(arr, '2', 2)).toEqual(false)
  })
})
