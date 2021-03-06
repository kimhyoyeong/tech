# HTML 산출물 자동화 [gulp]



## 환경셋팅

`node.js` 설치

https://nodejs.org/en/ LTS 버전 다운로드

윈도우 명령 프롬프트나, phpstorm 터미널에서 node -v 실행

정상적으로 설치된 경우엔 Node.js 버전이 표시됨



## 서버셋팅[localhost]

<http://localhost/2019/loreal/list/>

code서버와 경로 동기화 필요함

> 설치 셋팅시 include파일을 절대경로로 변경해야하는데, 
>
> $_SERVER["DOCUMENT_ROOT"] 는 웹서버에 설정된 경로를 가져옴 
>
> 최상위 루트가 code까지 되어있지 않으면 local에서 경로가 어긋남

> <https://code.d2.co.kr/ella/webserver.html>
>
> 참고하여 고급설정에 실제경로를 변경 (01->5. 참고)
>
> (폴더명에 대괄호,공백,한글등 안됨)



## 설치셋팅

1. gulp 설치 

   > phpstorm 터미널에 입력 또는, 윈도우 명령 프롬프트에 입력(window->cmd 검색)

   ```
   npm install -g gulp
   ```

2. include 파일 절대경로로 설정

   > include된 파일을 html로 변환시켜주는 모듈이 상대경로를 인식못해서 변경이 필요함 (아래는 예제)

   ```php+HTML
   <? include $_SERVER["DOCUMENT_ROOT"]."/2019/loreal/shilladfshome/layout/head.html"?>
   ```

3. code에 올려져있는 `gulpfile.js`   `package.json` 다운로드

   >  `gulpfile.js`  - gulp 설정 파일
   >
   >  `package.json` - 자동화에 필요한 설치 모듈 패키지

4. PhpStorm에서 `Project` 설치할 폴더 오른쪽 마우스 클릭 후 `Open in terminal` 클릭

   `Terminal` 창에 경로가 변경되는 것을 확인할 수 있음

   > 설치할 폴더는  `gulpfile.js`   `package.json` 상위 폴더 ex) loreal

5. `package.json`에 설정된 패키지들 다운 받기위해 

   `Terminal` 창에 (4.) 설정된 경로옆에  `npm install` 명령어 입력

   ```
	D:\work\code\2019\loreal>npm install
   ```
   
    `node_modules`  폴더 생성됨
   

## build하기

1.  `gulpfile.js` 열고 HTML 산출물 폴더명 설정

   ```javascript
   //--------------------------setting
   var siteName="shilladfshome";//면세점 이름
   var brandName="armani";//브랜드 이름
   //----------------------------
   ```

2. 명령어 입력 `gulp build`

   ```
   D:\work\code\2019\loreal>gulp build
   ```



------



#### * build된 폴더/파일 삭제하기

명령어 입력 `gulp clean`

```
D:\work\code\2019\loreal>gulp clean
```

> Finished안되면 phpstrom 껏다 켜서 다시하기 (해당파일 어딘가에 쓰고있으면 오류남)



------

##### gulpfile.js

```javascript
var gulp = require("gulp");
var path = require('path');
var pump = require("pump");
var del = require("del");
var phpinc = require("php-include-html");
var replace = require('gulp-replace');

//--------------------------setting
var siteName="shilladfshome";//면세점 이름
var brandName="armani";//브랜드 이름
//----------------------------

var siteFilesPc=[
	"./"+siteName+"/**/*",
];
var siteFilesMo=[
	"./"+siteName+"_m"+"/**/*",
];

var buildFiles = [
	"./"+brandName+"/**/*.html",
	"./"+brandName+"/**/*.js",
	"./"+brandName+"/**/*.css",
];

var buildImg = [
	"./"+brandName+"/**/*.{png,gif,jpg}"
];

gulp.task("build", function (cb) {
	pump([
		gulp.src(buildFiles),
		replace('$_SERVER["DOCUMENT_ROOT"]."/2019/loreal','"'+__dirname+'/'),//phpinc 인식할 수 있도록 경로 변환
		phpinc({verbose:true}),//include 파일을 html 변환 후 삽입
		gulp.dest("build/"+brandName+""),
		gulp.src(buildImg),
		gulp.dest("build/"+brandName+""),
		gulp.src(siteFilesPc),
		gulp.dest("build/"+siteName+""),
		gulp.src(siteFilesMo),
		gulp.dest("build/"+siteName+"_m"+"")
	],cb);
});

//build로 생성된 파일 지우기
gulp.task('clean', function() {
	return del(['build/**', '!build']);
});
```

##### package.json

```json
{
 "name": "test",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
 },
 "keywords": [],
 "author": "",
 "license": "ISC",
 "devDependencies": {
  "del": "^5.0.0",
  "gulp": "^4.0.2",
  "gulp-replace": "^1.0.0",
  "gulp-util": "^3.0.8",
  "php-include-html": "^1.4.2",
  "path": "^0.12.7",
  "pump": "^3.0.0"
 },
 "dependencies": {}
}
```

