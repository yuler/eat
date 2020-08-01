const logger = require('./logger')
const realtimeLogger = require('./realtimeLogger')

exports.log = {
  debug() {
    logger.debug.apply(logger, arguments)
    realtimeLogger.debug.apply(realtimeLogger, arguments)
  },
  info() {
    logger.info.apply(logger, arguments)
    realtimeLogger.info.apply(realtimeLogger, arguments)
  },
  warn() {
    logger.debug.warn(logger, arguments)
    realtimeLogger.warn.apply(realtimeLogger, arguments)
  },
  error() {
    logger.debug.error(logger, arguments)
    realtimeLogger.error.apply(realtimeLogger, arguments)
  },
  setFilterMsg(msg) { // 从基础库2.7.3开始支持
    if (typeof msg !== 'string') return
    realtimeLogger.setFilterMsg(msg)
  },
  addFilterMsg(msg) { // 从基础库2.8.1开始支持
    if (typeof msg !== 'string') return
    realtimeLogger.addFilterMsg(msg)
  },
  in(page) { // 从基础库2.9.1开始支持
    if (typeof page !== 'object') return
    realtimeLogger.in(page)
  },
}
