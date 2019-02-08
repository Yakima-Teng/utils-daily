import dateToShortString from '../../../src/date/dateToShortString'

describe('dateToShortString', () => {
  it('should be able to transform date object to short string', () => {
    const date = new Date()
    date.setFullYear(2017)
    date.setMonth(3)
    date.setDate(1)
    date.setHours(0)
    date.setMinutes(59)
    date.setSeconds(59)
    const dateString = dateToShortString(date)
    expect(dateString).toEqual('2017-04-01')
  })
})
