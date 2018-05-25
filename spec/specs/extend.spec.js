import extend from '../../extend'

const initUser = JSON.stringify({
  name: 'Yakima Teng',
  age: 28,
  family: {
    wife: 'Baby Yuanbao'
  }
})

const initObj = JSON.stringify({ text: 'test' })

describe('extend', function () {
  it('should support shallow clone', function () {
    const user = JSON.parse(initUser)

    const obj = JSON.parse(initObj)

    expect(extend(user, {
      other: 'other',
      a: {
        b: obj
      }
    })).toEqual({
      name: 'Yakima Teng',
      age: 28,
      family: {
        wife: 'Baby Yuanbao'
      },
      other: 'other',
      a: {
        b: obj
      }
    })

    expect(user.a.b).toEqual(obj)
    expect(user.a.b === obj).toEqual(true)
    expect(extend(user, { a: null }, {  other: 'null'})).toEqual({
      name: 'Yakima Teng',
      age: 28,
      family: {
        wife: 'Baby Yuanbao'
      },
      other: 'null',
      a: null
    })
  })

  it('should support deep clone', function () {
    const user = JSON.parse(initUser)

    const obj = JSON.parse(initObj)

    expect(extend(true, user, {
      other: 'other',
      a: {
        b: obj
      }
    })).toEqual({
      name: 'Yakima Teng',
      age: 28,
      family: {
        wife: 'Baby Yuanbao'
      },
      other: 'other',
      a: {
        b: obj
      }
    })

    expect(user.a.b).toEqual(obj)
    expect(user.a.b === obj).toEqual(false)

    expect(extend(user, { a: null }, {  other: 'null'})).toEqual({
      name: 'Yakima Teng',
      age: 28,
      family: {
        wife: 'Baby Yuanbao'
      },
      other: 'null',
      a: null
    })
  })
})
