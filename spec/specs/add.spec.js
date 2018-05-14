import add from '../../add'

describe('add', function () {
  it('should calculate out the right result', function () {
    expect(add([1, 2])).toEqual('3')
    expect(add([1, 2, 3])).toEqual('6')
    expect(add([0.1, 0.2, 1])).toEqual('1.3')
    expect(add([100, 200])).toEqual('300')
    expect(add([0.1, 0.2])).toEqual('0.3')
    expect(add([0.1, 0.7])).toEqual('0.8')
    expect(add([0.1, 0.71])).toEqual('0.81')
    expect(add([0.1, 0.71], 3)).toEqual('0.810')
  })
})
