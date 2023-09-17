import {
  describe, expect, test
} from '@jest/globals'
import random from '../../src/number/random'

describe('进行数字相关操作', () => {
  test('测试随机数', () => {
    expect(random(0, 0)).toBe(0)
    const randomValue1 = random(0, 1)
    expect(randomValue1).toBeLessThanOrEqual(1)
    expect(randomValue1).toBeGreaterThanOrEqual(0)

    const randomValue2 = random(2, 5)
    expect(randomValue2).toBeLessThanOrEqual(5)
    expect(randomValue2).toBeGreaterThanOrEqual(2)
  })
})
