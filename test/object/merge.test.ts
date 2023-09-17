import {
  describe, expect, test
} from '@jest/globals'
import merge from '../../src/object/merge'

describe('合并对象属性', () => {
  test('合并前后，修改的是第一个对象', () => {
    const firstObj = { b: 2 }
    const secondObj = { a: 1 }
    const mergeResult = merge(firstObj, secondObj)
    expect(mergeResult === firstObj).toBe(true)
    expect(mergeResult === secondObj).toBe(false)
    expect(mergeResult).toEqual({ a: 1, b: 2 })
  })

  test('合并2个对象', () => {
    expect(merge({}, {})).toEqual({})
    expect(merge({ a: 1 }, {})).toEqual({ a: 1 })
    expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })
    expect(merge({ a: 1 }, { b: 3, c: { d: 5 } })).toEqual({ a: 1, b: 3, c: { d: 5 } })
  })

  test('合并多个对象', () => {
    expect(merge({}, {}, {})).toEqual({})
    expect(merge({ a: 1 }, {}, {})).toEqual({ a: 1 })
    expect(merge({ a: 1 }, { a: 2 }, { c: 3 })).toEqual({ a: 2, c: 3 })
    expect(merge({ a: 1 }, { b: 3, c: { d: 5 } }, { c: 5 })).toEqual({ a: 1, b: 3, c: 5 })
  })
})
