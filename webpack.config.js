var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: {
		app: './src/js/app.js',
		vendor: ['jquery', 'underscore'],
		common: ['./src/css/common.css'],
		style: ['./src/css/a.css', './src/css/b.css']
	},
	output: {
		path: './assets',
		filename: 'bundle.js'
	},
	plugins: [
		new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new ExtractTextPlugin('[name].css')
	],
	module: {
		loaders: [
			// 曝露全局变量
			{test: require.resolve('jquery'), loader: 'expose?jQuery'},
			// require引用
			{test: require.resolve('./src/js/common'), loader: 'exports?window.Common'},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			},
		]
	},
	resolve: {
		extensions: ['', '.js', '.css']
	}
};