const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
    main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'deploy')
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, './deploy'),
      },
      open: true
    },
    module: {
        rules: [
          {
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          { 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ]
      },
    plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
    new CleanWebpackPlugin()
  ],
};