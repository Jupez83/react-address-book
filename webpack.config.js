module.exports = {
  context: __dirname + "/app",
  entry: "./js/app.js",
  output: {
    path: __dirname + "/app/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        cacheDirectory: true
      }
    }]
  }
};
