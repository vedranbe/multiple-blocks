const defaultConfig = require('@wordpress/scripts/config/webpack.config')

module.exports = {
  ...defaultConfig,
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  externals: {
    ...defaultConfig.externals
  }
}
