import { describe, expect, test } from '@jest/globals'
import validateCarPlate from '../../src/validate/validateCarPlate'

describe('验证车牌号是否符合规则', () => {
  test('车牌号`沪ANC116`是对的', () => {
    expect(validateCarPlate('沪ANC116')).toBe(true)
  })

  test('车牌号`沪ANC16`是错的', () => {
    expect(validateCarPlate('沪ANC16')).toBe(false)
  })

  test('新能源车车牌号`沪AD00806`是对的', () => {
    expect(validateCarPlate('沪AD00806')).toBe(true)
  })
})
