const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: "production",
  output: {
    filename: 'main.js',
    publicPath: "/craft-beer-restaurant/",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
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