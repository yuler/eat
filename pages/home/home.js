const Api = require('../../api')
const { log } = require('../../utils')

Page({
  data: {
    restaurant: null,
    aboutPosition: null,
  },

  onShareAppMessage: () => {
    return {
      title: '吃啥好?',
    }
  },

  onShareTimeline: () => {
    return {
      title: '吃啥好?',
    }
  },

  onLoad() {
    const { screenWidth, screenHeight } = wx.getSystemInfoSync()
    const ratio = screenWidth / 375
    const offset = 50 * ratio + 20
    this.setData({ aboutPosition: { x: screenWidth - offset, y: screenHeight - offset }})
  },

  async submit() {
    wx.vibrateShort()
    const restaurant = await Api.fetchRandomRestaurant()
    this.setData({ restaurant })
  },

  moveEnd(event) {
    const { aboutPosition } = this.data
    this.setData({ aboutPosition })
  }
})

log.in(Page)