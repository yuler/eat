wx.cloud.init()

const db = wx.cloud.database({
  env: 'prod-eat',
  throwOnNotFound: true,
})

exports.fetchRandomRestaurant = async function () {
  const { errMsg, list } = await db
    .collection('restaurants')
    .aggregate()
    .sample({
      size: 1
    })
    .end()
  return list[0]
}
