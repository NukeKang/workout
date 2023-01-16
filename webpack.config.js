const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  // plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
