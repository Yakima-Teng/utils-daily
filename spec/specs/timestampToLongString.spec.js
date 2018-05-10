import timestampToLongString from '../../timestampToLongString'

describe('timestampToLongString', function () {
  it('should return long date string', function () {
    const longString = '2018-02-28 12:13:14'
    const ts = +new Date(longString)
    expect(timestampToLongString(ts)).toEqual(longString)
  })
})
