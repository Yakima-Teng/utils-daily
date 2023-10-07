import doLog from '@/log/doLog'

// 打印错误日志
const printError: $utils.TPrintError = (...args) => {
  return doLog('error', ...args)
}

export default printError
