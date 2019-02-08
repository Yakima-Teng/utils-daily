import validatePhone from '../../../src/validate/validatePhone'

describe('validatePhone', function () {
  it('should recognize right phone number', function () {
    expect(validatePhone('18458019856')).toEqual(true)
    expect(validatePhone(18458019856)).toEqual(true)
    expect(validatePhone('28458019856')).toEqual(false)
    expect(validatePhone(28458019856)).toEqual(false)
    expect(validatePhone('14658019856')).toEqual(false)
    expect(validatePhone(14658019856)).toEqual(false)
  })
})
