## 개발환경 셋팅

```javascript
$ npm init -y//package.json 파일생성
```

`package.json`

```javascript
{
  "name": "test17",
  "version": "1.0.0",
  "sideEffects": true,
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --config webpack.prod.js",
    "dev": "webpack-dev-server --config webpack.dev.js --hot"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "css-hot-loader": "^1.4.1",
    "css-loader": "^1.0.0",
    "file-loader": "^1.1.11",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.1",
    "node-sass": "^4.9.2",
    "optimize-css-assets-webpack-plugin": "^5.0.0",
    "raw-loader": "^0.5.1",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "webpack": "^4.16.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4",
    "webpack-merge": "^4.1.3"
  },
  "dependencies": {
    "jquery": "^3.3.1"
  }
}
```

```javascript
$ npm install//package.json 설정된 패키지 설치
```

`.babelrc` 파일추가

```javascript
{
  "presets": ["env"]
}
```

`webpack.common.js` 파일추가

```javascript
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
```

`webpack.dev.js` 파일추가

```javascript
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
```

`webpack.prod.js` 파일추가

```javascript
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
					inline: true//inline source maps, use

					// inline: false,//external source maps, use
					// annotation: true
				}
			}
		})
	],

	optimization: {
		minimize: true
	}

	//devtool: 'cheap-module-source-map'

});
```

`index.html` 파일추가

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>index</title>
</head>
<body>
<h1>index</h1>
</body>
</html>
```

`src/index.js ` 파일추가

```javascript
import entry from './js/entry';
import style from './scss/style.scss';


import index from '../index.html';//추가해야지만 HMR 가능
```

`src/js/entry.js` 파일추가

```javascript
console.log("entry import된걸 확인할 수 있음");
```

`src/scss/style.scss` 파일추가

```scss
$primary-color:#f00;
body{background:$primary-color}
```

★

```javascript
$npm run dev//http://localhost:8080 로컬 확인 가능
```

```javascript
$npm run build//dist 번들파일이 생성된걸 확인할 수 있음
```
