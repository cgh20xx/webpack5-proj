const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Set 'mode' option to 'development' or 'production'
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].[hash].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    // 動態生成html，輸出到dist (因為hash後js、css每次檔名都不同，所以要動態生成就不用手動改檔名。)
    new HtmlWebpackPlugin({
      template: './src/base.html',
    }),
    // 把 css 抽離，輸出到 dist
    new MiniCssExtractPlugin({
      filename: 'bundle.[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      // css 相關 loader 執行順序由右到左 sass-loader > css-loader > MiniCssExtractPlugin
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      // babel 相關的 rules (需手動建立 babel.config.json)
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // 讓 webpack 看懂圖片: https://webpack.docschina.org/guides/asset-modules/
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
