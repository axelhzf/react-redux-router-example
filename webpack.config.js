module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "demo/assets/",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {test: /\.js/, loader: 'imports?define=>false'},
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }

};