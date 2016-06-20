var path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src/client.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
  module: {
    loaders: [{
			test: /\.scss$/,
			loaders: [ 'style', 'css', 'sass' ]
		}, {
			test: /\.(js|jsx)$/i,
			exclude: /(node_modules|bower_components)/,
			loaders: ['react-hot', 'babel']
		}]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    inline: true,
    hot: true,
    proxy: {
      '*': {
        target: 'http://127.0.0.1:' + (process.env.PORT || 3000),
        bypass: function(req, res, proxyOptions) {
          if (req.originalUrl.indexOf('bundle.js') !== -1) {
              console.log('Skipping proxy for bundle js request.');
              return '/bundle.js';
          }
        }
      }
    },
    host: '127.0.0.1'
  }
};
