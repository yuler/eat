const noop = require('./noop')

const logger = wx.getRealtimeLogManager
  ? wx.getRealtimeLogManager()
  : {
      debug: noop,
      info: noop,
      warn: noop,
      error: noop,
      setFilterMsg: noop,
      addFilterMsg: noop,
      in: noop,
    }

module.exports = logger