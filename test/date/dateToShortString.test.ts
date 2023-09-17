import {
  describe, expect, test
} from '@jest/globals'
import dateToShortString from '../../src/date/dateToShortString'

describe('将Date实例对象转换成格式如`YYYY-MM-DD hh:mm:ss`的长字符串', () => {
  test('将日期对象转成对应的日期文本', () => {
    expect(dateToShortString(new Date(2018, 1, 2, 12, 13, 14))).toBe('2018-02-02')
  })
})
