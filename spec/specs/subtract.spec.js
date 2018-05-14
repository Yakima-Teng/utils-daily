import subtract from '../../subtract'

describe('subtract', function () {
  it('should calculate out the right result', function () {
    expect(subtract([1, 2])).toEqual('-1')
    expect(subtract([1, 2, 3])).toEqual('-4')
    expect(subtract([0.1, 0.2, 1])).toEqual('-1.1')
    expect(subtract([100, 200])).toEqual('-100')
    expect(subtract([201.2, 200])).toEqual('1.2')
    expect(subtract([1, 0.8])).toEqual('0.2')
  })
})
