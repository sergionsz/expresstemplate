
module.exports = {
  entry: ['./src/js/app.js'],
  output: {
    filename: './public/js/bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/,
      loader: 'babel-loader' },
    ],
  },
};
