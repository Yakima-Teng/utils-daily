import {
  describe, expect, test
} from '@jest/globals'
import cloneDeep from '../../src/object/cloneDeep'

describe('尝试深拷贝对象', () => {
  test('深拷贝空对象', () => {
    const rawObj = {}
    const newObj = cloneDeep(rawObj)
    expect(newObj === rawObj).toBe(false)
    expect(newObj).toEqual(rawObj)
  })

  test('深拷贝单层对象', () => {
    const rawObj = { a: 1 }
    const newObj = cloneDeep(rawObj)
    expect(newObj === rawObj).toBe(false)
    expect(newObj).toEqual(rawObj)
  })

  test('深拷贝多层对象', () => {
    const rawObj = { a: { b: { c: 'hello' } } }
    const newObj = cloneDeep(rawObj)
    expect(newObj === rawObj).toBe(false)
    expect(newObj).toEqual(rawObj)
  })
})
