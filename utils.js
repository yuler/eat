const logger = wx.getRealtimeLogManager ? wx.getRealtimeLogManager() : null

exports.log = {
  debug() {
    if (!logger) return
    logger.debug.apply(logger, arguments)
  },
  info() {
    if (!logger) return
    logger.info.apply(logger, arguments)
  },
  warn() {
    if (!logger) return
    logger.warn.apply(logger, arguments)
  },
  error() {
    if (!logger) return
    logger.error.apply(logger, arguments)
  },
  setFilterMsg(msg) { // 从基础库2.7.3开始支持
    if (!logger || !logger.setFilterMsg) return
    if (typeof msg !== 'string') return
    logger.setFilterMsg(msg)
  },
  addFilterMsg(msg) { // 从基础库2.8.1开始支持
    if (!logger || !logger.addFilterMsg) return
    if (typeof msg !== 'string') return
    logger.addFilterMsg(msg)
  },
  in(page) { // 从基础库2.9.1开始支持
    if (!logger || !logger.addFilterMsg) return
    if (typeof page !== 'object') return
    logger.in(msg)
  },
}
