const { log } = require('./utils/index')

wx.cloud.init()

const db = wx.cloud.database({
  env: 'prod-eat',
  throwOnNotFound: true,
})

exports.fetchRandomRestaurant = async function () {
  log.debug('[api]: fetchRandomRestaurant start')
  const { errMsg, list } = await db
    .collection('restaurants')
    .aggregate()
    .sample({
      size: 1
    })
    .end()
  log.debug('[api]: fetchRandomRestaurant end', list[0])
  return list[0]
}
