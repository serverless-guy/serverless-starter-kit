const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry:      slsw.lib.entries,
  mode:       "development",
  externals:  [ nodeExternals() ],
  target:     "node",
  resolve: {
    symlinks:   false,
    extensions: [".json", ".ts"]
  },
  output: {
    libraryTarget:  "commonjs",
    path:           path.join(__dirname, "dist"),
    filename:       "[name].js"
  },
  module: {
    rules: [
      {
        test:     /\.ts(x?)$/,
        include:  path.resolve(__dirname, "src"),
        loader:   "ts-loader",
        options:  {}
      }
    ]
  }
};
