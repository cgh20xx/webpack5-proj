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
    new HtmlWebpackPlugin({
      template: './base.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[name].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
