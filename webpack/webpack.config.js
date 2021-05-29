const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common.js')

module.exports = vars => {
  const envConf = require(`./webpack.${vars.env}.js`)
  return merge(commonConf, envConf)
}