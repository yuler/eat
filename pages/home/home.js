const Api = require('../../api')

Page({
  data: {
    restaurant: null
  },

  async submit() {
    wx.vibrateShort()
    const restaurant = await Api.fetchRandomRestaurant()
    this.setData({ restaurant })
  }
})
