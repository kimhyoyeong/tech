const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	mode: 'production',

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
			{
				test: /\.html$/,
				loader: "raw-loader"
			}
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),

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

	],

	//√÷¿˚»≠
	optimization: {
		minimize: true
		//minimizer: [new OptimizeCSSAssetsPlugin({})]
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css']
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true
	},
	devtool: 'cheap-module-source-map',
	performance: {
		hints: false
	}
};
