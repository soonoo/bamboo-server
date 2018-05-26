const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './hello.js',
  target: 'node',
  output: {
    path: path.join(process.cwd()),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
    ],
  },
  mode: 'development',
};