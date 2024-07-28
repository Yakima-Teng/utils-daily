import {
  describe, expect, test
} from '@jest/globals'
import isUndefined from '../../src/common/isUndefined'

describe('测试类型判断方法', () => {
  test('判断是否为undefined', () => {
    expect(isUndefined(1)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined('null')).toBe(false)
    expect(isUndefined('0')).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined([1, 2, 3])).toBe(false)
    expect(isUndefined(new Array(3))).toBe(false)
    expect(isUndefined(() => {})).toBe(false)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(undefined)).toBe(true)
  })
})
