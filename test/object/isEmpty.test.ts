import {
  describe, expect, test
} from '@jest/globals'
import isEmpty from '../../src/object/isEmpty'

describe('判断空数组、对象等是否为空', () => {
  test('空数据应为空', () => {
    expect(isEmpty([])).toBe(true)
  })

  test('非空数据应不为空', () => {
    expect(isEmpty([1, 2, 3])).toBe(false)
  })

  test('非空对象应不为空', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })
})
