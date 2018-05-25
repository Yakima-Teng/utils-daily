import shallowClone from '../../shallowClone'

describe('shallowClone', function () {
  it('should work', function () {
    const obj = {
      a: '1',
      b: { c: 2 },
      d: new Date()
    }
    expect(shallowClone(obj)).toEqual(obj)
    expect(shallowClone(obj) === obj).toEqual(false)
  })
})
