import getString from '../../getString'

describe('getString', function () {
  it('should return string', function () {
    expect(getString(1)).toEqual('1')
    expect(getString('2')).toEqual('2')
    expect(getString(0)).toEqual('0')
    expect(getString(null)).toEqual('')
    expect(getString(undefined)).toEqual('')
    expect(getString('')).toEqual('')
  })
})
