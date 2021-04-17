// 参考文章：https://segmentfault.com/a/1190000037554402
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // source-map
  // cheap-source-map
  // cheap-module-source-map
  // eval-source-map
  // inline-source-map
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    } 
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './template.html'), // template file
      filename: 'index.html'
    }),
    // 在每次构建后清除 dist 文件夹中的所有内容
    new CleanWebpackPlugin()
  ]
}