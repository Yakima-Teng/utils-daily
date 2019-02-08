import dateToLongString from '../../../src/date/dateToLongString'

describe('dateToLongString', () => {
  it('should be able to transform date object to long string', function () {
    const date = new Date()
    date.setFullYear(2018)
    date.setMonth(2)
    date.setDate(4)
    date.setHours(13)
    date.setMinutes(30)
    date.setSeconds(59)
    const dateString = dateToLongString(date)
    expect(dateString).toEqual('2018-03-04 13:30:59')
  })
})
