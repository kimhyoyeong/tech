const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new OptimizeCSSAssetsPlugin({
			cssProcessorOptions: {
				map: {
					//inline: true//inline source maps, use

					inline: false,//external source maps, use
					annotation: true
				}
			}
		})
	],

	optimization: {
		minimize: true
	},

	devtool: 'cheap-module-source-map'

});
