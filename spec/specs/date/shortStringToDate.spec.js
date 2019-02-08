import shortStringToDate from '../../../src/date/shortStringToDate'

describe('shortStringToDate', function () {
  it('should use 00:00:00 by default', function () {
    const shortString = '2018-04-15'
    const date = shortStringToDate(shortString)
    expect(+new Date(shortString + ' 00:00:00')).toEqual(+date)
  })
})
