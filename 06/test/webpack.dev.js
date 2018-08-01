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

	resolve: {//node_modules 디렉토리 안에 있는 모든 extensions설정된 파일들을 확장자명 없어도 파일을 인식하게 해준다
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.scss']
	}
});
