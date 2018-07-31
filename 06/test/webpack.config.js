const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',

	entry: {
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { url: false, sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } }
				]
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader',
				options: {
					name: '[hash].[ext]',
					limit: 10000
				}
			},
			{
				test: /\.html$/,
				loader: "raw-loader"
			}
		]
	},

	plugins: [
		//jquery
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),

		//htmlBuild
		new HtmlWebpackPlugin({
			title: 'index',
			hash: true,
			filename: 'index.html',
			chunks: ['index'],
			template: path.join(__dirname, 'index.html')
		})

	],

	//����ȭ
	optimization: {
		minimize: true
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css']
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true
	},
	devtool: 'inline-module-source-map',
	performance: {
		hints: false
	}
};
