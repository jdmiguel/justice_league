const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MODE_ENV = process.env.MODE;

module.exports = {
  devtool: 'source-map',

  mode: 'development',

  name: 'webpack_config',

  context: path.resolve(__dirname, 'src'),

  entry: {
    vendor: [
      './vendor/gsap/TweenMax.min.js',
      './vendor/gsap/TweenLite.js',
      './vendor/gsap/utils/SplitText.min.js',
      './vendor/gsap/plugins/DrawSVGPlugin.js'
    ],
    app: './index.js'
  },

  devServer: {
    compress: true,
    port: 9000,
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'dc_universe',
      template: '../assets/template-app.ejs',
      filename: 'index.html',
      hash: true
    }),

    new MiniCssExtractPlugin({
      filename: '[name]-styles.css'
    }),

    new webpack.DefinePlugin({
      MODE: JSON.stringify(MODE_ENV)
    })
  ]
};
