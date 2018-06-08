var webpack = require('webpack');
var path = require('path');

const config = {
  mode: 'production',
  entry: './src/main',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "dist")
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  }
};
module.exports = config;