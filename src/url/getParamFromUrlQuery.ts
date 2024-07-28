import { getParamFromUrlPart } from '@/url/getParamFromUrlHash'

/**
 * @apiAnalyze
 * 从url链接的search部分（即链接中?后面的部分）获取参数的值（注意：#后面的部分若存在问号，问号及其后面的部分，也是算hash部分的，不属于search部分）
 * @since 0.0.13
 * @param name {string}
 * @return {string}
 */
const getParamFromUrlQuery: $utils.TGetParamFromUrlQuery = (name) => getParamFromUrlPart('search', name)

export default getParamFromUrlQuery
