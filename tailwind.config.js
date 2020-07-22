module.exports = {
  purge: [
    './pages/**/*.wxml',
    './components/**/*.wxml',
  ],
  theme: {
    // remove responsive breakpoints
    screens: {
    },
    width: {
      full: '100%',
      50: '100rpx',
      //@TODO '不能直接使用 4/5'
      '4-5': '80%',
    },
    height: {
      50: '100rpx',
    },
    fontSize: {
      14: '28rpx',
      18: '36rpx',
      20: '40rpx',
    },
    margin: {
      10: '20rpx',
      20: '40rpx',
    },
    spacing: {
      0: '0!important',
      10: '20rpx',
      20: '40rpx',
    },
    gap: {
      10: '20rpx',
    },
    borderRadius: {
      full: '10000rpx',
      default: '8rpx',
    },
  },
  variants: {},
  plugins: [],
}