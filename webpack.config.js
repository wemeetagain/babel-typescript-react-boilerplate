const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Babel + TypeScript + React = ❤️',
      template: 'src/index.html',
    }),
  ],
  devServer: {
    port: 8080, // https://webpack.js.org/configuration/dev-server/#devserverport
    open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
    compress: true, // https://webpack.js.org/configuration/dev-server/#devservercompress
    stats: 'errors-only', // https://webpack.js.org/configuration/dev-server/#devserverstats-
    overlay: true, // https://webpack.js.org/configuration/dev-server/#devserveroverlay
  },
};
