const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './client'
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'scripts/bundle.js',
    chunkFilename: 'scripts/[id].[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'),
        to: path.join(__dirname, 'public', 'styles')
      }
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, 'public'),
      prettyPrint: true
    })
  ]
};
