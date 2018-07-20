## NPM (node package manager)

> npm은 마치 앱스토어에서 어플리케이션을 다운받아 쓰듯이 자바스크립트 패키지를 쉽게 찾고 다운받아서 웹사이트에 적용시킬 수 있도록 만들어줍니다. 이렇게 하면 해당 웹사이트가 어떤 패키지를 사용하고 있는지 한 눈에 볼 수 있고, 패키지의 버전 관리도 훨씬 쉬워집니다.

```javascript
$ npm init // npm 환경초기화
$ npm init -y// npm환경초기화 + 기본값으로 셋팅
```

package.json 파일 생성됨



```javascript
$ npm install //./node_modules 디렉터리에 패키지 설치를 하고 종료.
```

기본적으로 NPM은 node_module 아래에 패키지를 설치하기만 함. 앱 / 모듈에 대한 종속성을 설치하려면 먼저 package.json 설치 한 다음 package.json 의 dependencies 섹션에 추가해야함.

이제 다른 사람과 프로젝트를 함께 할 때 `node_modules` 폴더를 주지 않고 `package.json` 파일을 주면 상대방은 `$ npm install` 명령어를 통해 필요한 자바스크립트 패키지를 한번에 다운받을 수 있게 됩니다. 



```javascript
$ npm install [module] --save
// 응용 프로그램을 실행하는 데 필요한 패키지를 저장 예)vue
// package.json에 dependencies 목록에 포함되며, 해당목록에 있다는 것은 현재 npm 모듈이 A 모듈이 없이는 사용할수없다는 즉 A모듈없이 동작하지 않음

$ npm install [module] --save-dev
// 개발 목적으로 패키지를 저장하는 데 사용됩니다. 예)css-loader , file-loader
// package.json에 devDependencies 목록에 포함되며, 이건 현재 npm 모듈은 A모듈과 dependency가 없지만 개발 환경에는 연관성이 있다는 뜻임
```

> ```
> $ npm install typescript --save-dev
> ```
>
> **--save와 --save-dev의 차이점**
>
> 이 경우 개발을 위해 Typescript (자바 스크립트로 파싱 할 수있는 코딩 언어)를 사용할 수 있지만 일단 앱이 배포되면 더 이상 필요하지 않습니다. 모든 코드가 자바 스크립트로 옮겨 졌기 때문입니다. 따라서 게시 된 앱에 포함시키는 것은 의미가 없습니다. 실제로 공간을 차지하고 다운로드 시간을 늘릴 수 있습니다.
>
> https://code-examples.net/ko/q/15d4acb



------



## webpack 4 install

> 자바스크립트 모듈 번들러

```javascript
$ npm i -g webpack webpack-cli

$ npm i -D webpack webpack-cli
== $ npm install webpack webpack-cli --save-dev
// ?웹팩4부터는 webpack-cli를 같이 설치해야 커맨드라인에 webpack이란 명령어를 사용할 수 있음
```



------

### [개발환경 셋팅]

### build

```javascript
$ npm init -y//package.json 파일생성
```

```javascript
$ npm install webpack webpack-cli --save-dev//webpack 설치
$ npm install webpack webpack-dev-server webpack-cli --save-dev//dev서버포함
$ npm install webpack-dev-server -D///웹팩 dev서버 설치
```

```javascript
//package.json
{
  "name": "test14",//기본정보
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --watch",
    "prod": "webpack -p",
    "dev": "webpack-dev-server"/*"dev": "webpack-dev-server --hot --inline" inline은 전체 페이지 실시간 로딩 옵션이며, hot은 파일이 수정될 경우 그 부분에 대해 리로드를 해주는 옵션*/
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {/*설치된 로더 플러그인*/
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^1.0.0",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "node-sass": "^4.9.2",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "url-loader": "^1.0.1",
    "webpack": "^4.16.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4"
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
//webpack.config.js
//파일경로와 웹팩 라이브러리 로딩 : output속성에서 사용할 노드 path 라이브러리와 웹팩 플러그인에서 사용할 node_modules의 웹팩 라이브러리를 node_modules의에서 로딩하여 path, webpack에 각각 저장
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',//Production
  //entry속성 : 웹팩으로 빌드할 파일을 src 폴더 밑의 main.js파일로 지정
  entry: {
    main: './src/index.js',
  },
  //output속성 : 웹팩으로 빌드하고난 결과물 파일의 위치와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  //module속성 : 웹팩으로 애플리케이션 파일들을 빌드 할때 html,css 등이 파일을 자바스크립트로 변환해주는 로더를 지정
  module: {
    rules: [
        // {//bundle.js로 합쳐짐
        //     test:/\.(s*)css$/,
        //     use: ['style-loader','css-loader','sass-loader']
        // },
        {//css로 추출 플러그인 사용
            test:/\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader?sourceMap','sass-loader?sourceMap']
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
            limit: 10000,
          },
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './index.html'
    })
  ],
  optimization: {
    minimize: false,
    splitChunks: {},
    concatenateModules: true
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  devtool: 'source-map'
}
```

**[폴더] 설정**

[root] index.html

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
  <h1>test</h1>
</body>
</html>
```

[src] index.js(import 셋팅) / entry.js / hello.js / style.scss / style2.scss

```json
import entry from './entry'
import hello from './hello'
require('./style.scss')
require('./style2.scss')

console.log("빌드되었음");
```

```javascript
//entry.js
console.log("entry");
```

```javascript
//hello.js
console.log("hello");
```

```javascript
$ npm run build //빌드하면(npm run build) ./dist/buldle.js 생성됨
$ npm run prod//배포
$ npm run dev//localhost확인
```

[dist] buldle.js // build되어 나오는 파일





### loader

```javascript
$ npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev//babel
```

```javascript
$ npm install style-loader css-loader sass-loader node-sass --save-dev//css관련 로더
```

```javascript
$ npm install file-loader url-loader --save-dev//img 로더
```

```javascript
$ npm install extract-text-webpack-plugin --save-dev@next//webpack4 @next 설치해야 오류안남
```

```javascript
$ npm install html-webpack-plugin --save-dev//기본적으로, bundle한 css, js파일들은 html파일에 직접 추가해야하는 번거로움이 있습니다. html-webpack-plugin를 사용하면 이 과정을 자동화 할 수 있습니다. Webpack의 성능을 향상 시키고 개발을 편리하게 만들어 주는 것이 플러그인의 역할입니다. 사용 전 설치가 필요합니다.
```



------

[웹팩4(Webpack) 설정하기]: https://www.zerocho.com/category/Webpack/post/58aa916d745ca90018e5301d
[Babel 6와 Webpack 4를 이용한 ES6 환경 구축]: https://poiemaweb.com/es6-babel

[웹팩4로 CSS와 기타 파일 번들링하기]: https://www.zerocho.com/category/Webpack/post/58ac2d6f2e437800181c1657

[webpack 설정 option에 대해서]: https://trustyoo86.github.io/webpack/2018/01/10/webpack-configuration.html

