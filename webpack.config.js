const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/build/',
  },
  devServer: {
    publicPath: '/build/',
    hot: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
