/**
 * lodash的cloneDeep方法太大了，按需引入后大概会增加8kb左右的大小，所以这里用一个简单的实现版本
 */
/**
 * @apiAnalyze
 * 尝试对对象进行深拷贝（数据格式不常规时不保证百分百可靠）
 * @since 0.0.13
 * @note lodash的cloneDeep方法太大了，按需引入后大概会增加8kb左右的大小，所以这里用一个简单的实现版本
 * @param obj {any}
 * @return {any}
 */
const cloneDeep: $utils.TCloneDeep = (obj) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const copy: any[] | Record<string, any> = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    copy[key] = cloneDeep(obj[key])
  })

  return copy
}

export default cloneDeep
