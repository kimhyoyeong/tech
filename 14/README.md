# WebStorm Settings





## File watcher - SCSS

> File watcher는 우리가 외부에서 설치한 컴파일러들을 통합관리 하도록 도와주는 것
>
> File > Settings > Tools > File Watcher



#### 다운로드 및 설치

1. Node.js  https://nodejs.org/ko/ 

2. Ruby https://rubyinstaller.org/downloads/

3. 명령 프롬프트에 `gem install sass` 입력 설치 ![image-20200407230319279](https://github.com/kimhyoyeong/Task/blob/master/14/image-20200407230319279.png)



#### File Watcher Setting

1. Scope :  프로젝트 마다 아래 설정 반복하지 않게 All Places로 설정
2. Program : 설치한 Ruby를 SCSS 컴파일러로 지정 

![2](https://github.com/kimhyoyeong/Task/blob/master/14/2.gif)



3.  Arguments : 옵션 설정 

   ![image-20200407232043056](https://github.com/kimhyoyeong/Task/blob/master/14/image-20200407232043056.png)

   

   **$FileName$:$FileNameWithoutExtension$.css**

   > 출력되는 파일명

   

   **--no-cache**

   >  구문 분석된 파일을 전혀 캐시하지 않도록함

   

   **--update** 

   > 출력된 css 파일보다 최근에 수정된 scss 파일만 다시 컴파일함 

   

   **--sourcemap=none**

   > SCSS 파일을 CSS 파일로 변환하면 map 파일이 생성되고, 변환된 CSS 파일 제일 밑에 다음과 같은 주석이 생성 
   >
   > ```
   > /*# sourceMappingURL=style.css.map */
   > ```
   >
   > 만약 변환할 때 위 코드가 생성되지 않게 하려면 위 옵션을 붙이면 됨

   

   **--style** 

   >  출력 스타일에 대한 옵션으로 아래와 같은 4가지 스타일을 제공함
   >
   > **:nested**
   >
   > 중첩 스타일은 기본 출력 스타일로 각 속성은 한줄에 작성, 각 규칙의 중첩 정도에 따라 들여쓰기를 함
   >
   > ```css
   > #main {
   >   color: #fff;
   >   background-color: #000; }
   >       #main p {
   >         width: 10em; }
   > 
   > .huge {
   >       font-size: 10em;
   >       font-weight: bold;
   >       text-decoration: underline; }
   > ```
   >
   > 
   >
   > **:expanded**
   >
   > 확장 스타일은 각 속성은 규칙안에서 들여쓰기하여 각 한줄에 작성하고, 규칙은 들여쓰기하지 않습니다.
   >
   > ```css
   > #main {
   >       color: #fff;
   >       background-color: #000;
   > }
   > #main p {
   >   	width: 10em;
   > }
   > 
   > .huge {
   >       font-size: 10em;
   >       font-weight: bold;
   >       text-decoration: underline;
   > }
   > ```
   >
   > 
   >
   > **:compact**
   >
   > 축약 스타일은 중첩,확장 스타일보다 공간을 덜 차지합니다, 규칙과 모든 속성을 다 한줄에 작성
   >
   > ```css
   > #main { color: #fff; background-color: #000; }
   > #main p { width: 10em; }
   > 
   > .huge { font-size: 10em; font-weight: bold; text-decoration: underline; }
   > ```
   >
   > 
   >
   > **:compressed**
   >
   > 압축 스타일은 최소한의 공간을 차지하도록 압축한 형태로, 사람이 읽는 상황을 고려하지 않음
   >
   > ```css
   > #main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
   > ```









## Live Template

코드를 작성하다 보면 결과값을 확인하기 위해서 `console.log('')`를 입력하는 일이 빈번하다. 이러한 반복적인 코드를 예약어로 정의하고 예약어를 통해 코드를 불러오는 기능이 Live Template이다.

1.  File > Settings > Editor > Live Templates 우측에 `+` 클릭, `2. Live template Group` 선택함
2.  템플릿 그룹이름 지정 `OK`
3.  생성한 그룹 내에서 다시 우측에 `+` 클릭, `1. Live template` 선택함
4.  Abbreviation : 예약어 정의 / Description : 설명 / Tempate text : 예약할 코드
5. 하단 Define 클릭 후 사용 할 언어에 체크 `OK`

![5](https://github.com/kimhyoyeong/Task/blob/master/14/5.gif)



![6](https://github.com/kimhyoyeong/Task/blob/master/14/6.gif)



## 복사리스트

작업하면서 우리는 수없이 복사 붙여넣기를 하는데, 

이럴때 불편한 점은 새로 복사할때마다 이전 내용이 사라진다는 점이다.

이런 경우 `ctrl+c` 후에 `ctrl+shift+v`  단축키로 간단하게 해결! 

복사한 리스트들이 출력되고 해당 리스트에서 엔터하면 입력된다.

![3](https://github.com/kimhyoyeong/Task/blob/master/14/3.gif)
=======
