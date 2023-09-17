import { describe, expect, test } from '@jest/globals'
import fillLeft from '../../src/string/fillLeft'

describe('将1个数字或字符串用指定的字符从左侧开始填充到指定长度', () => {
  test('将一个字符填充到2个字符长度，左侧会增加一个字符', () => {
    expect(fillLeft('a', 2, '$')).toBe('$a')
  })

  test('将2个字符填充到2个字符长度，应该没有变化', () => {
    expect(fillLeft('aa', 2, '$')).toBe('aa')
  })

  test('将3个字符填充到2个字符长度，应该没有变化（不对超出部分进行截断）', () => {
    expect(fillLeft('aaa', 2, '$')).toBe('aaa')
  })

  test('将2个字符填充到10个字符长度，左侧应新增8个字符', () => {
    expect(fillLeft('aa', 10, '0')).toBe('00000000aa')
  })

  test('将1个数字填充到2个字符长度，左侧应新增1个字符', () => {
    expect(fillLeft(0, 2, '1')).toBe('10')
  })
})
