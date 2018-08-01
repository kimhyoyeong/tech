const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new OptimizeCSSAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {
				preset: 'default',
				map: {inline: true}
			}
		})
	],

	//√÷¿˚»≠
	optimization: {
		minimize: true
	},

	devtool: 'cheap-module-source-map'

});
