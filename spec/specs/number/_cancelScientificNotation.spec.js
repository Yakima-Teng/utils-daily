import cancelScientificNotation from '../../../src/number/_cancelScientificNotation'

describe('cancelScientificNotation', function () {
  it('should cancel scientific notation', function () {
    expect(cancelScientificNotation('3e10')).toEqual('30000000000')
    expect(cancelScientificNotation('3.00e10')).toEqual('30000000000.00')
    expect(cancelScientificNotation('3e-10')).toEqual('0.0000000003')
    expect(cancelScientificNotation('3.00e-10')).toEqual('0.000000000300')
    expect(cancelScientificNotation('-3.12e-10')).toEqual('-0.000000000312')
  })

  it('should support capitalized E in scientific notation', function () {
    expect(cancelScientificNotation('3E10')).toEqual('30000000000')
  })
})
