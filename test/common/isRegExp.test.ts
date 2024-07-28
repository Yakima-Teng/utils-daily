import {
  describe, expect, test
} from '@jest/globals'
import isRegExp from '../../src/common/isRegExp'

describe('测试类型判断方法', () => {
  test('判断是否为正则表达式', () => {
    expect(isRegExp(1)).toBe(false)
    expect(isRegExp(0)).toBe(false)
    expect(isRegExp(NaN)).toBe(false)
    expect(isRegExp({})).toBe(false)
    expect(isRegExp('null')).toBe(false)
    expect(isRegExp('0')).toBe(false)
    expect(isRegExp('')).toBe(false)
    expect(isRegExp([])).toBe(false)
    expect(isRegExp([1, 2, 3])).toBe(false)
    expect(isRegExp(new Array(3))).toBe(false)
    expect(isRegExp(() => {})).toBe(false)
    expect(isRegExp(null)).toBe(false)
    expect(isRegExp(undefined)).toBe(false)
    expect(isRegExp(true)).toBe(false)
    expect(isRegExp(false)).toBe(false)
    expect(isRegExp(/test/)).toBe(true)
    // eslint-disable-next-line prefer-regex-literals
    expect(isRegExp(new RegExp('test'))).toBe(true)
  })
})
