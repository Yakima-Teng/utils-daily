import multiply from '../../multiply'

describe('multiply', function () {
  it('should calculate out the right result', function () {
    expect(multiply([1, 2])).toEqual('2')
    expect(multiply([1, 2, 3])).toEqual('6')
    expect(multiply([0.1, 0.2, 1])).toEqual('0.02')
    expect(multiply([100, 200])).toEqual('20000')
    expect(multiply([100, 2.01])).toEqual('201')
    expect(multiply([0.1, 2232])).toEqual('223.2')
    expect(multiply([6, 0.7])).toEqual('4.2')
  })
})
