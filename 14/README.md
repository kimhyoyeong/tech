# WebStorm Settings





## File watcher - SCSS

> File watcher는 우리가 외부에서 설치한 컴파일러들을 통합관리 하도록 도와주는 것
>
> File > Settings > Tools > File Watcher



#### 다운로드 및 설치

1. Node.js  https://nodejs.org/ko/ 

2. Ruby https://rubyinstaller.org/downloads/

3. 명령 프롬프트에 `gem install sass` 입력 설치 ![image-20200407230319279](C:\Users\win10\AppData\Roaming\Typora\typora-user-images\image-20200407230319279.png)



#### File Watcher Setting

1. Scope :  프로젝트 마다 아래 설정 반복하지 않게 All Places로 설정
2. Program : 설치한 Ruby를 SCSS 컴파일러로 지정 

![2](C:\Users\win10\Desktop\2.gif)



3.  Arguments : 옵션 설정 

   ![image-20200407232043056](C:\Users\win10\AppData\Roaming\Typora\typora-user-images\image-20200407232043056.png)

   

   **$FileName$:$FileNameWithoutExtension$.css**

   > 출력되는 파일명

   

   **--no-cache**

   >  구문 분석된 파일을 전혀 캐시하지 않도록함

   

   **--update** 

   > 출력된 css 파일보다 최근에 수정된 scss 파일만 다시 컴파일함 

   

   **--sourcemap=none**

   > SCSS 파일을 CSS 파일로 변환하면 map 파일이 생성되고, 변환된 CSS 파일 제일 밑에 다음과 같은 주석이 생성됩니다. 
   >
   > ```
   > /*# sourceMappingURL=style.css.map */
   > ```
   >
   > 만약 변환할 때 위 코드가 생성되지 않게 하려면 위 옵션을 붙이면 됩니다.

   

   **--style** 

   >  출력 스타일에 대한 옵션으로 아래와 같은 4가지 스타일을 제공함
   >
   > **:nested**
   >
   > 중첩 스타일은 기본 출력 스타일로 각 속성은 한줄에 작성, 각 규칙의 중첩 정도에 따라 들여쓰기를 합니다.
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
   > 축약 스타일은 중첩,확장 스타일보다 공간을 덜 차지합니다, 규칙과 모든 속성을 다 한줄에 작성합니다.
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
   > 압축 스타일은 최소한의 공간을 차지하도록 압축한 형태로, 사람이 읽는 상황을 고려하지 않습니다. 
   >
   > ```css
   > #main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
   > ```