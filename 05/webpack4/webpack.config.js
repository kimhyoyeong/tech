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
              use: ['css-loader','sass-loader']
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
  }
}
