import serializeParams from '../../../src/url/serializeParams'

describe('to serialize params object to string', () => {
  it('can transform simple object', () => {
    const params = {
      a: 3,
      b: 4
    }
    const result = serializeParams(params)
    expect(result).toEqual('a=3&b=4')
  })
})
