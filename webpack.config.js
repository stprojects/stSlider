var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {

	entry: {
		app: [
			'./src/js/app.js',
			'./src/sass/style.scss'
		]
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/app.bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				}),
			},
			{
				test: /\.(png|jpg|gif)$/,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
							publicPath: '../',
						}
					},
					'img-loader'
				]
			},
		]
	},

	plugins: [
		new ExtractTextPlugin('css/style.css'),

		// new PurifyCSSPlugin({
		// 	paths: glob.sync(path.join(__dirname, '*.html')),
		// 	minimize: inProduction
		// }),

		new webpack.LoaderOptionsPlugin({
			minimize: inProduction
		})
	]

};

if (inProduction) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}