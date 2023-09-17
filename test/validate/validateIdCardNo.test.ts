import { describe, expect, test } from '@jest/globals'
import validateIdCardNo from '../../src/validate/validateIdCardNo'

describe('验证身份证号是否符合规则', () => {
  test('身份证号`330324199106254371`是错的', () => {
    expect(validateIdCardNo('330324199106254371')).toBe(false)
  })

  test('身份证号`53010219200508011X`是对的', () => {
    expect(validateIdCardNo('53010219200508011X')).toBe(true)
  })
})
