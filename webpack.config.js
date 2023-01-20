const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: { main: ["./src/index.js"] },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
    publicPath: "/dist",
  },
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    new HtmlWebpackPlugin({
      title: "Work Out Routine",
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    port: 9000,
  },
  mode: "development",
  devtool: "inline-source-map",
};
