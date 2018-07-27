## NPM (node package manager)

> `npm`은 자바스크립트 패키지를 쉽게 찾고 다운받아서 웹사이트에 적용시킬 수 있도록 만들어줍니다. 이렇게 하면 해당 웹사이트가 어떤 패키지를 사용하고 있는지 한 눈에 볼 수 있고, 패키지의 버전 관리도 훨씬 쉬워집니다.

```javascript
$ npm init // npm 환경초기화
$ npm init -y// npm환경초기화 + 기본값으로 셋팅
//package.json 파일 생성됨
```

```javascript
$ npm install 
//node_modules 디렉터리에 패키지 설치를 하고 종료
```

> 기본적으로 `NPM`은 `node_module` 아래에 패키지를 설치되며, 앱 / 모듈에 대한 종속성을 설치하려면 먼저 `package.json` 설치 한다음  `dependencies` 섹션에 추가해야합니다.
>
> 이제 다른 사람과 프로젝트를 함께 할 때 `node_modules` 폴더를 주지 않고 `package.json` 파일을 주면 상대방은 `$ npm install` 명령어를 통해 필요한 자바스크립트 패키지를 한번에 다운받을 수 있게 됩니다.

```javascript
$ npm install [module] --save
$ npm install [module] --save-dev
```

> **--save와 --save-dev의 차이점**
>
> 이 경우 개발을 위해 `[module]`를 사용할 수 있지만 일단 앱이 배포되면 더 이상 필요하지 않습니다. 
>
> 모든 코드가 자바 스크립트로 옮겨 졌기 때문입니다. 따라서 게시 된 앱에 포함시키는 것은 의미가 없습니다. 실제로 공간을 차지하고 다운로드 시간을 늘릴 수 있습니다.

<br>

------

<br>

## Webpack 4

> 자바스크립트 모듈 번들러 - 웹에서 사용되는 모든 자원을 하나의 파일로 번들링 해주는 도구입니다. 
>
> - 하나의 파일로 번들할 수 있습니다.
> - `npm` 패키지를 사용할 수 있습니다.
> - `ES6/ES7` 자바스크립트 코드를 작성할 수 있습니다. (Babel을 이용하여)
> - 코드를 압축 또는 최적화할 수 있습니다.
> - `LESS/SCSS`를 `CSS`로 돌릴 수 있습니다.
> - `HMR(Hot Module Replacement)`을 사용할 수 있습니다.

```javascript
$ npm install -g webpack webpack-cli//전역에서 webpack을 사용할 때
$ npm install webpack webpack-cli --save-dev//특정 의존성으로 설치할 때 
//웹팩4부터는 webpack-cli를 같이 설치해야 커맨드라인에 webpack이란 명령어를 사용할 수 있음
```

<br>

------

<br>

### 개발환경 셋팅

```javascript
$ npm init -y//package.json 파일생성
```

`package.json`

```javascript
{
	"name": "test17",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"build": "webpack --mode production",
		"dev": "webpack-dev-server --mode development --inline --hot"
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
		"css-loader": "^1.0.0",
		"extract-text-webpack-plugin": "^4.0.0-beta.0",
		"file-loader": "^1.1.11",
		"html-loader": "^0.5.5",
		"html-webpack-plugin": "^3.2.0",
		"node-sass": "^4.9.2",
		"raw-loader": "^0.5.1",
		"sass-loader": "^7.0.3",
		"style-loader": "^0.21.0",
		"url-loader": "^1.0.1",
		"webpack": "^4.16.1",
		"webpack-cli": "^3.0.8",
		"webpack-dev-server": "^3.1.4"
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

`webpack.config.js` 파일추가

```javascript
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	//production 배포용일 경우 알아서 최적화가 됨

	entry: {
		index: './src/index.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		//path.resolve([from…], to)전달받은 경로의 절대 경로를 리턴합니다'C:\\from\\to'
		//__dirname 은 항상 현재 파일의 디렉토리

		//publicPath: '/dist',
		// 클라이언트가 빌드된 파일에 접근할 수 있도록 서버가 제공할 path
		// CDN 주소 사용 가능

		filename: '[name].bundle.js'
		// 결과물 파일명
		// app.js -> app.js
		// [name].js -> entry에서 설정한 이름(object key).js
		// [hash].js -> 빌드마다 변경되는 해시.js
		// [chunkhash].js -> 파일 고유의 해시(파일이 달라질 경우 변경됨).js
	},

	module: {
		rules: [
			// {//bundle.js로 합쳐짐
			//     test:/\.(s*)css$/,
			//     use: ['style-loader','css-loader','sass-loader']
			// },

			{//css로 추출 플러그인 사용
				test: /\.(s*)css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader?sourceMap', 'sass-loader?sourceMap'],
				})
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
		//build전에 결과물이 생성되는 파일을 비워줌
		new CleanWebpackPlugin(['dist']),

		//jquery
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),

		// HMR을 전체적으로 사용할수 있도록 설정
		//new webpack.HotModuleReplacementPlugin(),
		//package.json  --hot 추가해도 작동함

		//css추출 플러그인
		new ExtractTextPlugin({
			//filename: "styles.css",

			filename : '[name].css',
			// // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
			// disable : false,
			allChunks : true
		}),

		//공통 모듈로 구성된 파일
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// }),

		//html build
		new HtmlWebpackPlugin({
			title: 'index',
			hash: true,
			filename: 'index.html',
			chunks: ['index'],
			template: path.join(__dirname, 'index.html')
		})

	],


	//최적화
	optimization: {
		minimize: true
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css']
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		//output path를 match하도록 합니다.
		//path.join(path1, path2…) 파라미터로 전달받은 경로를 이어서 하나의 경로로 만듭니다 'path1\\path2'

		hot: true
		//server에 HMR을 사용할수 있도록 설정

		//publicPath: '/dist'
		//publicPath의 ouput 같게 설정
	},

	devtool: 'eval-source-map',

	performance: {
		hints: process.env.NODE_ENV === 'production' ? "warning" : false
	}
};

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

> **ES6** import
>
> ```javascript
> // 모듈 전체를 import
> import module
> import module as myModule
>
> // 모든 속성 import
> import * from module
>
> // 특정 멤버(함수 등)만 import
> import {moduleFunc, moduleFunc2} from module
> ```
>
> **CommonJs** require
>
> ```javascript
> // 모듈 전체를 import
> var module = require('./someModule.js');
>
> // 모든 속성 import
> // (위의 module 객체에 모든 속성이 담아져 온다.)
>
> // 특정 멤버(함수 등)만 import, 위의 module을 이용한다.
> module.moduleFunc
> ```

`src/js/entry.js` 파일추가

```javascript
console.log("entry import된걸 확인할 수 있음");
```

`src/scss/style.css` 파일추가

```scss
$primary-color:#f00;
body{background:$primary-color}
```

★

```javascript
$npm run dev//로컬 확인 가능
```

```javascript
$npm run build//dist 번들파일이 생성된걸 확인할 수 있음
```

<br>

------

<br>

### SCSS hot reload -정리중

[ruby설치] ?
gem install sass
gem install scss

**Tool-File Watchers**

[program]
C:\Ruby25-x64\bin\scss.bat
[argument]
--no-cache
--update
$FileName$:$FileNameWithoutExtension$.css
--style
compact
[output...]
$FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map

------

[웹팩4(Webpack) 설정하기]: https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d
[webpack 설정 option에 대해서]: https://trustyoo86.github.io/webpack/2018/01/10/webpack-configuration.html

[Webpack의 혼란스런 사항들]: http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/

[--save와 --save-dev의 차이점은 무엇입니까?]: https://code-examples.net/ko/q/15d4acb
[Webpack4 주요 변경점]: https://labo.lansi.kr/posts/50

