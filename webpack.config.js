const path = require('path')
module.exports = [{
  entry: './app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    path: path.resolve(__dirname, 'js'),
    filename: 'style-bundle.js'
  },
  watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '../css/bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader'},
        {
          loader: 'sass-loader',
          options: {
            importer: function(url, prev) {
              if(url.indexOf('@material') === 0) {
                var filePath = url.split('@material')[1];
                var nodeModulePath = `./node_modules/@material/${filePath}`;
                return { file: require('path').resolve(nodeModulePath) };
              }
              return { file: url };
            }
          }
        },
      ]
    }]
  },
}];
module.exports.push({
  entry: "./app.js",
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: "./bundle.js"
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
});
