import {
  describe, expect, test
} from '@jest/globals'
import dateToLongString from '../../src/date/dateToLongString'

describe('将Date实例对象转换成格式如`YYYY-MM-DD hh:mm:ss`的长字符串', () => {
  test('将日期对象转成对应的日期文本', () => {
    expect(dateToLongString(new Date(2018, 1, 2, 12, 13, 14))).toBe('2018-02-02 12:13:14')
  })
})
