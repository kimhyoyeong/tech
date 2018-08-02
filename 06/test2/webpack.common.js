const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		//publicPath:'',//정적파일을 불러올때 경로 설정 cdn
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'css-hot-loader',
					MiniCssExtractPlugin.loader,
					{loader: 'css-loader', options: {url: false, sourceMap: true}},
					{loader: 'sass-loader', options: {sourceMap: true}}
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
			// {
			// 	test: /\.html$/,
			// 	loader: "raw-loader"
			// },
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {interpolate: true, minimize: true /*removeComments: false, collapseWhitespace: true*/}
					}
				],
			}
		]
	},

	plugins: [
		//jquery
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),

		//cssExtract
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		}),

		//htmlBuild
		new HtmlWebpackPlugin({
			title: 'index',
			hash: true,
			filename: 'index.html',
			chunks: ['index'],
			template: path.join(__dirname, 'index.html')
		})

	]
};
