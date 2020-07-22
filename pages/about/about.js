const repo = 'https://github.com/yuler/eat'

Page({
  copy() {
    wx.setClipboardData({
      data: repo
    })
  }
})