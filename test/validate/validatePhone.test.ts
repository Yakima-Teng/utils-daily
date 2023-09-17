import { describe, expect, test } from '@jest/globals'
import validatePhone from '../../src/validate/validatePhone'

describe('验证手机号是否符合规则', () => {
  test('手机号`18324`是错的', () => {
    expect(validatePhone('18324')).toBe(false)
  })

  test('手机号`18458019855`是对的', () => {
    expect(validatePhone('18458019855')).toBe(true)
  })
})
