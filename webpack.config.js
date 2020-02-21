var path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  devServer:{
    contentBase: path.join(__dirname,"dist"),
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html'
    }),
    new VueLoaderPlugin()
  ]
};
