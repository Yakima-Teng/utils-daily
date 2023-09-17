/**
 * lodash的merge方法太大了（按需导入后会让包体积直接增加8kb左右，我们不需要考虑那么细致，用一个简版的就可以了）
 * @param obj
 */
import isObject from '@/common/isObject'
import isArray from '@/common/isArray'

// 遍历数组，尝试返回一个深拷贝的数组（不考虑Date、RegExp等数据类型）
function recursiveArray(items: unknown[]): unknown[] {
  return items.map((item) => {
    if (isObject(item)) {
      // eslint-disable-next-line no-use-before-define
      return merge({}, <Record<string, unknown>>item)
    }
    if (isArray(item)) {
      return recursiveArray(item)
    }
    return item
  })
}

/**
 * @apiAnalyze
 * 合并对象属性（会修改第一个对象）
 * @since 0.0.13
 * @note lodash的merge方法太大了（按需导入后会让包体积直接增加8kb左右，我们不需要考虑那么细致，用一个简版的就可以了）
 * @param target {object}
 * @param arg {object} 可以传多个对象
 * @return {object} 合并后的对象（也就是第一个对象被扩展后的样子）
 */
const merge: $utils.TMerge = (target, ...arg) => {
  return arg.reduce((prev, curr) => {
    Object.keys(curr).reduce((innerPrev: Record<string, unknown>, key: keyof typeof curr) => {
      const prevVal = innerPrev[key]
      const currVal = curr[key]
      // 如果是新旧对象的这个key对应值都是对象，则递归继续进行属性操作
      if (isObject(prevVal) && isObject(currVal)) {
        innerPrev[key] = merge(<Record<string, unknown>>prevVal, <Record<string, unknown>>currVal)
      }
      // 如果新对象的这个key对应值是数组，则把旧对象该key的值直接赋值为新对象的数组值（尝试拷贝值，而不是直接地址引用）
      else if (isArray(currVal)) {
        innerPrev[key] = recursiveArray(currVal)
      }
      /**
       * 如果新对象的这个key对应值是其他类型，则把就对象该key的值直接赋值为新对象的值
       * 实际业务里，值既不是数组也不是对象的情况下，还是其他诸如Date、RegExp的情况不多，这里不考虑这类对象地址引用关系的问题
       */
      else {
        innerPrev[key] = currVal
      }
      return innerPrev
    }, prev)
    return prev
  }, target)
}

export default merge
