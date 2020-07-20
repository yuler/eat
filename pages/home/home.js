const Api = require('../../api')

Page({
  data: {
    restaurant: null,
    aboutPosition: null,
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
