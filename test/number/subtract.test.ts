import {
  describe, expect, test
} from '@jest/globals'
import subtract from '../../src/number/subtract'

describe('进行数字相关操作', () => {
  test('测试减法', () => {
    expect(subtract([3, 2, 1])).toBe('0')
    expect(subtract([3, 2], 2)).toBe('1.00')
  })
})
