const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'dynamics.bundle.min.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};