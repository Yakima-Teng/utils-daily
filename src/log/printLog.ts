import doLog from '@/log/doLog'

// 打印普通日志
const printLog: $utils.TPrintLog = (...args) => {
  return doLog('log', ...args)
}

export default printLog
