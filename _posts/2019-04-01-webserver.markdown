---
layout: post
title:  "윈도우10) 웹서버 IIS 만들기"
date:   2019-04-01 10:58:17 +0900
categories: jekyll update
---



# 윈도우10) 웹서버 IIS 만들기



## 01. 웹서버 IIS 만들기

1. 제어판에서 프로그램제거를 클릭 후, 
   프로그램 및 기능에서 왼쪽 상단에 **windows 기능 켜기/끄기**를 클릭한다.

   ![이미지1](https://code.d2.co.kr/2019/ella/images/img_server01.gif)

2. Windows 기능에서 항목들 중 **인터넷 정보 서비스** 체크박스를 체크한다.
   (그러면 아래와 같이 World Wide Web 서비스와 웹 관리 도구 체크박스도 자동으로 체크 된다.)
   확인을 클릭하면 윈도우에서 설정값에 따른 윈도우 자체 셋팅을 시작한다.

   ![](https://code.d2.co.kr/2019/ella/images/img_server02.gif)

3. 완료 후, **컴퓨터 관리**를 검색한 후 들어간다.

   ![](https://code.d2.co.kr/2019/ella/images/img_server04.gif)

   왼쪽 트리구조로 되어있는 메뉴에, 

   **서비스 및 응용 프로그램**을 클릭 ▶ 하위 메뉴 **IIS(인터넷 정보 서비스)**클릭

4. **연결**이라는 트리구조 되어있는 메뉴에,

   **사이트** 클릭 ▶ 하위메뉴 **Default Web Site**  클릭

   IIS를 설정 할 수 있는 옵션들이 나타난다.

   오른쪽 **작업**이라는 메뉴의 **웹 사이트 관리**를 통해서 서버를 시작 중지 시킬 수 있다.

5. **시작** 버튼을 클릭후 **웹사이트 찾아보기에서 \*.80(http) 찾아보기**를 클릭! (주소창에 localhost 쳐도 접속됨)

   !! 연결시킬 폴더 경로는 **고급설정**에서 **실제경로**를 수정



## 02. PHP 설치 및 사용

1. 제어판에서 프로그램제거를 클릭 후, 
   프로그램 및 기능에서 왼쪽 상단에 **windows 기능 켜기/끄기**를 클릭한다.

2. Windows 기능에서 항목들 중, 

   인터넷 정보 서비스 ▶  World Wide Web 서비스 ▶ 응용 프로그램 개발 기능 ▶ **CGI** 

   하위 메뉴를 따라서 CGI를 체크한 후 확인!!

3. PHP 다운로드 및 설치 (운영체제 확인 후)
   <https://windows.php.net/download#php-7.3>

    ▶ VC15 x64 Non Thread Safe (2019-Mar-07 01:55:08)

   압축파일을 C:\php 폴더에 푼다.

4. **php.ini** 파일 수정

   | 원본                   | 수정                    | 의미                                             |
   | :--------------------- | ----------------------- | ------------------------------------------------ |
   | ;extension_dir = "ext" | extension_dir = ".\ext" | PHP extension 파일이 어디에 있는지 알려주는 변수 |
   | ;log_errors            | log_errors = On         | 에러 발생시 로그를 기록                          |
   | ...                    |                         |                                                  |

5. IIS에 PHP를 처리하도록 설정하기 (웹서버 만들던 순서 그대로 따라감)

   **컴퓨터 관리**에서 **서비스 및 응용 프로그램**을 클릭 ▶ 하위 메뉴 **IIS(인터넷 정보 서비스)**클릭 ▶ **연결**에서 **사이트** 클릭 ▶ 하위메뉴 **Default Web Site**  클릭 
   ▶ 옵션 중 **처리기 매핑** 클릭

6. 오른쪽 **작업**메뉴의 

   1) **모듈 매핑 추가** 클릭 아래와 같이 추가

   2) 요청 제한 클릭 후, 매핑 파일 또는 폴더 체크!

   3) 확인

     ![](https://code.d2.co.kr/2019/ella/images/img_server05.gif)

7. 테스트 파일 생성 후,

    주소창에 localhost 클릭 후 생성된 페이지 열어보면 오류가 안나는걸 알수 있음

   ```HTML
   <!DOCTYPE html>
   <html lang="ko">
       <head>
           <title>php 테스트</title>
       </head>
       <body>
           <?php echo "php run" ?>
       </body>
   </html>
   
   ```

   

------



[IIS Web Server에 PHP  설치 및 사용]: https://flexsdk.tistory.com/23
[윈도우10 웹서버 IIS만들기]: https://doyeworld.tistory.com/1

