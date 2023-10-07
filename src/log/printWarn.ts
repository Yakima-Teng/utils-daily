import doLog from '@/log/doLog'

// 打印警告日志
const printWarn: $utils.TPrintWarn = (...args) => {
  return doLog('warn', ...args)
}

export default printWarn
