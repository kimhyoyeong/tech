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

```javascript
$ npm install webpack webpack-cli --save-dev && $ npm install webpack webpack-dev-server webpack-cli --save-dev//webpack4 설치
```

```javascript
//package.json
{
  "name": "test14",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
	"build": "webpack",//빌드
	"dev": "webpack-dev-server --inline --hot"//local에서 실시간 변경 확인
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
	/*설치된 로더 플러그인*/
  }
}
```

```javascript
$ npm install//package.json 설정된 패키지 설치
```

```javascript
//.babelrc(root파일추가)
{
  "presets": ["env"]
}
```

```javascript
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',//production

	entry: [
		// 번들링 포인트(root 모듈의 위치 또는 시작지점), string 또는 배열로 입력
		'webpack-dev-server/client?http://localhost:8080',// 2개의 dev-server 엔트리포인트가 서버와 브라우저에 접속하여 HMR 허용
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],

	output: {
		path: path.resolve(__dirname, 'dist'),
		//publicPath: '/dist/',//설정하면 dist파일 바라봄
		filename: 'bundle.js'
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

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),

		new webpack.HotModuleReplacementPlugin(),

		new ExtractTextPlugin({
			filename: "styles.css"
		}),

		new HtmlWebpackPlugin({
			template: './src/main.html'
		})
	],

	optimization: {
		minimize: true,
		splitChunks: {},
		concatenateModules: true
	},

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.css']
	},

	devServer: {
		//contentBase: path.join(__dirname, 'dist'),
		hot: true
	},

	devtool: 'eval-source-map'
};
```

```json
//index.js
import entry from './entry'
import hello from './hello'
require('./style.scss')
require('./style2.scss')
```

------

[웹팩4(Webpack) 설정하기]: https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d
[webpack 설정 option에 대해서]: https://trustyoo86.github.io/webpack/2018/01/10/webpack-configuration.html

[Webpack의 혼란스런 사항들]: http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/

[--save와 --save-dev의 차이점은 무엇입니까?]: https://code-examples.net/ko/q/15d4acb

