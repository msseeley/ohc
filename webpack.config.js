const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  plugins: [
    new LiveReloadPlugin({ appendScriptTag: true })
  ],
  entry: 'browser/start.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
