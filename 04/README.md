# 웹페이지 속도 테스트

> Webpagetest <http://www.webpagetest.org/>
>
> 챔프스터디 테스트 http://www.webpagetest.org/result/180609_QX_cdb5e9728c9ce00b406457ff04415436/

웹페이지의 속도는 사용자 경험에 직접적으로 영향을 주기 때문에 그 중요성이 더 커지고 있습니다. 

웹페이지의 속도를 테스트할 수 있는 webpagetest.org를 소개합니다.

webpagetest.org는 웹사이트가 느린이유를 파악하고 최대한 빨리 웹페이지를 개선할 수 있도록 도움을 주는 사이트입니다.

다양한 옵션을 통해 병목현상이 발생한 지점과 처음방문했을때와 재방문까지 테스트를 하여 확인할 수 있어서 웹페이지 성능개선에 큰 도움을 줍니다.

**"webpagetest.org 사이트 사용방법을 자세히 알아봅시다!"**

<br>

##  TEST STEP

<img src="http://image.hackerschina.co.kr/images/banner/2018/step1.png">

1. **Enter your website URL** – 웹사이트 URL 입력
2. **Test Location** – 방문자가 접속할 지역 선택
3. **Select A Browser** – 브라우저 선택
4. **Advanced Settings** – 선택사항이며 테스트 반복수와 비디오 캡처선택을 취소하여 더 빠르게 로딩할 수 있습니다.
5. **Connection** – 방문자의 인터넷 연결 유형은 에뮬레이션 할 수있음, 일반적으로 케이블
6. **Keep Test Private** – webpagetest.org 웹 사이트에 "최근에 테스트 한 웹 사이트"로 표시되지 않도록합니다. 
7. **Click Start Test** - 테스트 시작!!


<br>

## Performance grade

<img src="http://image.hackerschina.co.kr/images/banner/2018/step2.png">

테스트가 끝나면 상단에 성능 결과를 한눈에 확인할 수 있습니다.

각 알파벳 항목이 의미하는 바는 다음과 같습니다.

- **First Byte Time** - 서버가 페이지를 탐색하는 사용자에게 응답하는데 걸리는 시간입니다.
- **Keep-alive Enabled** - 간단히 말해 웹 서버와 브라우저간에 발생하는 통신으로 만일 이 연결이 "Kept Alive(활성상태 유지)"라면, 콘텐츠는 빠르게 로딩됩니다.
- **Compress Transfer** -이미지 또는 동영상을 제외한 모든 데이터를 말합니다. 대부분의 경우, 전송을 위해 압축되며 사이트가 빨리 로딩될 수 있도록 합니다.
- **Compress Images** - 이미지는 대부분의 웹 사이트에서 가장 큰 문제 중 하나이며 압축하여 웹 사이트를 더 작게 만들고 이미지 메타 데이터를 제거하여 속도를 크게 향상시킬 수 있습니다
- **Cache Static Content **-  자주 바뀌지 않는 웹 사이트의 이미지, 자바 스크립트 파일 등 사용자가 사용하는 브라우저에서 저장할 수 있도록 설정하여 웹 사이트 재방문시 로딩시간을 단축할 수 있도록 하는 콘텐츠를 말합니다.
- **Effective use of CDN** - 귀하의 웹 사이트가 CDN (콘텐츠 배포 네트워크)을 사용하는 경우 여기에 반영됩니다.

<br>

## Performance Results 

<img src="http://image.hackerschina.co.kr/images/banner/2018/step3.png">

- **Load Time or Document Complete** - 페이지와 상호 작용하기에 충분히 로드된 지점
  (모든 페이지 리소스가 브라우저에 렌더링(로드)되는데 걸리는 시간입니다. 눈에 보이는 이미지와 같은 리소스 뿐만 아니라, 보이지 않는 타사 분석 스크립트(예: Google 웹로그 분석)와 같은 리소스 또한 포함합니다. 내 사이트를 다수의 다른 사이트 또는 평균 사이트 로딩 시간과 비교할 때 유용하게 사용할 수 있습니다. 사이트는 완전히 로딩되기 전에도 기능을 수행할 수 있습니다. 예를 들어, 로딩되는데 10초가 걸리는 사이트는 5초만에 완전히 상호작용이 가능하고, 남은 로딩 시간은 웹로그 분석 등과 같은 타사 스크립트 로딩에 사용될 수 있습니다.)


- **First Byte** -  서버에 요청이 들어온 순간부터 최초의 바이트가 브라우저에 수신되는 시간을 말합니다. (즉 서버 측에서 걸리는 시간)


- **Start Render** - 빈페이지가 아닌 콘텐츠가 보이는 시점입니다.


- **Speed Index** - 페이지 속도 지수 얼마나 빨리 콘텐츠가 디스플레이 되는지 전반적인 점수를 계산 낮을수록 좋습니다.(목표는 1000점이하)


- **First Interactive (beta)** -  페이지가 사용 가능한 것으로 간주 될 때까지의 시간을 측정한것입니다.


- **Fully Loaded** - 외부 스크립트 및 응용 프로그램이 모두 로딩된 시점입니다.

<br>

## Waterfall View

<img src="http://image.hackerschina.co.kr/images/banner/2018/step7.jpg">

이 섹션은 내 사이트 각각의 스크립 또는 요소가 로딩되는데 소요되는 시간을 표시합니다.

이 보고서를 사용해 타사 앱, 큰 이미지 또는 무거운 글꼴 등 문제를 발생시키는 요소가 무엇인지 확인할 수 있습니다. 보고서 내 요소를 클릭해 상세 정보를 확인하세요.

<br>

### COLORS

<img src="http://image.hackerschina.co.kr/images/banner/2018/step4.png">

가장 느린 로딩시간을 확인하기 위해 First View Waterfall 결과를 클릭합니다.

- 청록색 DNS  - 브라우저가 웹 사이트를 제공하 위해서 IP 주소를 올바르게 전달할 수 있도록 DNS를 검색해야합니다.
- 주황색 Connect  - 브라우저가 웹사이트를 제공하기 전에 TCP 연결을 햐여하므로 처음 몇 행에만 나타납니다.
- 보라색 SSL  - 보안 웹사이트에서 로드하는 모든 리소스는 그대로 처리해야합니다. SSL 항목에 연결하는 걸리는 시간을 나타냅니다.

다른 색상들은 모두 웹사이트의 콘텐츠 유형을 나타냅니다. 예를 들어 행이 녹색으로 표시되면 로드되는 CSS 파일임을 알 수 있습니다.

<br>

### REDUCING WATERFALL WIDTH

<img src="http://image.hackerschina.co.kr/images/banner/2018/step5.png">

Waterfall 이 넒이가 짧을 수록 적을 수록 웹사이트가 더 빨리 로드됩니다.

**밝은 색상**은 브라우저가 첫번째 바이트가 돌아와 연결될 때까지 웹에서 요청을 보낸 시간입니다. 

**어두운 색상**은 자원을 다운로드하는데 걸리는 시간입니다.

<br>

### RED AND YELLOW HIGHLIGHTS

<img src="http://image.hackerschina.co.kr/images/banner/2018/step6.png">

**빨간색 하이라이트**는 404같은 오류이며 단순히 웹사이트에서 존재하지않는 것을 호출하고 있음을 의미합니다.

**노란색 하이라이트**는 리디렉션 문제의 징후이며, 일반적으로 301, 302 리디렉션으로 표시됩니다. 이는 http:// 에서 리소스를 호출하지만 리소스가 새URL 아마도 https:// 로 이동했음을 의미합니다. 

이 두가지 모두 페이지 성능에 큰 영향을 줄 수 있으므로 가능한 빨리 해결해야합니다.

<br>

###  View all Images

해당 링크를 클릭하면 Waterfall 에 있는 이미지 모두 표시됩니다.

<br>

------

[^웹 페이지 속도 테스트 해석하기]: https://support.wix.com/ko/article/%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%86%8D%EB%8F%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%ED%95%B4%EC%84%9D%ED%95%98%EA%B8%B0
[^How To Use WebPageTest - Part I]: https://www.2dogsdesign.com/how-to-webpagetest/
[^How To Use WebPageTest - Part II]: https://www.2dogsdesign.com/webpagetest-waterfall/

