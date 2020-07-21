const path = require('path')
const ci = require('miniprogram-ci')
const pkg = require('../package.json')

// @TODO abstract ci.Project function
// @TODO move APP_ID to .env
const APP_ID = 'wxda5fb4f5808e2104'

;(async () => {
  try {
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
    const warning = await ci.packNpm(project, {
      ignores: [],
      reporter: infos => { console.log(infos) }
    })
    console.log(warning)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()
