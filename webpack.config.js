const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'lodash': path.resolve(__dirname, 'node_modules/lodash')
    }
  },
  optimization: {
    usedExports: true,
  }
};