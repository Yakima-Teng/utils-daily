import {
  describe, expect, test
} from '@jest/globals'
import add from '../../src/number/add'

describe('进行数字相关操作', () => {
  test('测试加法', () => {
    expect(add([1, 2, 3], 2)).toBe('6.00')
    expect(add([2, 1.0001], 4)).toBe('3.0001')
    expect(add([2, 1.0001])).toBe('3.0001')
    expect(add([2, 1.0001], 3)).toBe('3.000')
    expect(add([2, 1.0009], 3)).toBe('3.001')
  })
})
