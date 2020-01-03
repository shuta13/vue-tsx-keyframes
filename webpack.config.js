const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, "src"),
  entry: "./index.ts",
  resolve: {
    extensions: [".ts"],
    modules: [ path.join(__dirname, "src"), "node_modules" ]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }
    ]
  },
  output: {
    library: "vue-tsx-keyframes",
    libraryTarget: "umd",
    path: path.join(__dirname, "lib"),
    filename: "index.js"
  },
};