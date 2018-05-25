import assign from '../../assign'

describe('assign', function () {
  it('should copy the values of all enumerable own properties from one or more source objects to a target object', function () {
    expect(assign({}, {
      a: 1,
      b: { c: 3 }
    })).toEqual({
      a: 1,
      b: { c: 3 }
    })

    expect(assign(
      { a: 1, b: 2, c: 3 },
      { a: '2' },
      { d: 1 }
    )).toEqual({ a: '2', b: 2, c: 3, d: 1 })

    expect(assign(
      { a: 1, b: 2, c: 3 },
      { a: new Date(2017, 1, 2) },
      { d: 1 }
    )).toEqual({ a: new Date(2017, 1, 2), b: 2, c: 3, d: 1 })

    expect(assign(
      { a: 1, b: 2, c: 3 },
      { a: new Date(2017, 1, 2) },
      {
        d: { a: new Date(2017, 1, 2) }
      }
    )).toEqual({
      a: new Date(2017, 1, 2),
      b: 2,
      c: 3,
      d: { a: new Date(2017, 1, 2) }
    })

    expect(assign(
      { a: 1, b: 2, c: 3, d: 1 },
      { a: new Date(2017, 1, 2) },
      {
        d: { a: new Date(2017, 1, 2) }
      }
    )).toEqual({
      a: new Date(2017, 1, 2),
      b: 2,
      c: 3,
      d: { a: new Date(2017, 1, 2) }
    })

    expect(assign(
      { a: 1, b: 2, c: 3, d: 1 },
      { a: new Date(2017, 1, 2) },
      {
        d: { a: new Date(2017, 1, 2) }
      },
      { d: 'd' }
    )).toEqual({
      a: new Date(2017, 1, 2),
      b: 2,
      c: 3,
      d: 'd'
    })
  })
})
