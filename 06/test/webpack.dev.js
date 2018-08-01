const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',

	devServer: {
		contentBase: './dist',
		hot: true
	},

	devtool: 'inline-module-source-map',

	performance: {
		hints: false//js 용량이 250kb 이상인 경우 webpack에서 경고 메시지를 표시 'warning'/ 'error'
	},

	resolve: {//require(‘./myFile’) 과 같은 빈 확장자를 import하게 도와주는 역할
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.scss']
	}
});
