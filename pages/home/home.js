const Api = require('../../api')

Page({
  data: {
    restaurant: null
  },

  async submit() {
    const restaurant = await Api.fetchRandomRestaurant()
    console.log(restaurant)
    this.setData({ restaurant })
  }
})
