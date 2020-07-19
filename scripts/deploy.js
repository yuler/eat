const path = require('path')
const ci = require('miniprogram-ci')
const pkg = require('../package.json')

// @TODO move APP_ID to .env
const APP_ID = 'wxda5fb4f5808e2104'

;(async () => {
  const project = new ci.Project({
    appid: APP_ID,
    type: 'miniProgram',
    projectPath: path.resolve(__dirname, '../'),
    privateKeyPath: path.resolve(__dirname, `../private.${APP_ID}.key`),
    ignores: [
      'node_modules/**/*',
      'database/**/*',
      'scripts/**/*',
    ],
  })
  const uploadResult = await ci.upload({
    project,
    version: pkg.version,
    desc: process.env.APP_DESCRIPTION || pkg.description,
    setting: {
      es6: true,
    },
    onProgressUpdate: console.log,
  })
  console.log(uploadResult)
})()
