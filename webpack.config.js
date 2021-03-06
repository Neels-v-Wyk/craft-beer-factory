const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'main.js',
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif|svg)$/i,
       type: 'asset/resource',
     },
    ],
  },
};

devServer = {
  inline: true,
  host: "0.0.0.0",
  port: 5500
}