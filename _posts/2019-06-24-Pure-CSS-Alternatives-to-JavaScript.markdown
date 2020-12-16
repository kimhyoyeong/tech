---
layout: post
title:  "Pure CSS Alternatives to JavaScript"
date:   2019-06-24 10:58:17 +0900
categories: jekyll update
---



# Pure CSS Alternatives to JavaScript



## position: sticky

대부분 사이트에서 흔하게 사용하는 기능 중 하나인 ,

요소 위치에 도달했을 때 따라다니도록 하는 기능이있습니다.

위 기능을 구현하려면 자바스크립트로 스크롤할때마다 해당 엘리먼트의 offset 좌표와 스크롤위치를 비교합니다. 

어려운 것은 아니지만 굉장히 거추장스러운 작업인데요.

이 것을 스크립트를 사용하지않고 순수  CSS로만으로 구현할수 있습니다.



### 사용예제

<https://code.d2.co.kr/2019/lescape/home/mo/ko/html/99_etc/test01.html>

TEST -  <https://codepen.io/anon/pen/pXPOdG>

```css
.sub-tab{
    position:sticky;
    position:-webkit-sticky;/*safari대응*/
    top:100px;
    z-index:99;
    background:#fff
}
```

*부모에 overflow:hidden 있으면 작동하지 않음



### 지원브라우저

현재 position:sticky 속성은 PC 경우 IE를 제외한 최신 브라우저에 잘 동작합니다. 

모바일의 경우 안드로이드 4.x 이하 버전에서 지원하지 않습니다. 

최근 안드로이드 버전 점유율을 확인해볼때  4.x 이하 버전은 계속해서 줄어들고 있기때문에 모바일에서 해당 속성사용해도 무방할것같습니다.







## display:flex

**"푸터가 왜 중간에 있죠? 하단에 붙여주세요."**

컨텐츠 내용이 짧을때 푸터가 중간에 위치하는 경우, 오류 같다며 수정 요청 받은 경험이 있을 것입니다.

이것을 스크립트를 사용하지 않고 CSS만으로 해결할 수 있습니다.

 

### 사용예제

01 - https://code.d2.co.kr/2019/lescape/home/mo/ko/html/99_etc/test02.html

```css
.root{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;

    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;

    height:100%;
}
main{
    -webkit-box-flex:1;
    -ms-flex-positive:1;
    flex-grow:1;
    display:inline-block;/*IE10대응*/
}
```

#### 지원브라우저

IE 10 미만을 제외한 최신 브라우저에 잘 동작합니다.

실질적으로 모바일에서만 사용할 수 있을 것 같습니다.



02 - <https://codepen.io/anon/pen/JQNazb?&editable=true>

```css
html,body{
    min-height:100%;
}
html {
	position:relative;
}
footer {
    position:absolute;
    width:100%;
    bottom:0;
}
```

#### 지원브라우저

IE 9 미만을 제외한 최신 브라우저에 잘 동작합니다.







## :target

간단한 탭메뉴, 아코디언메뉴, 레이어 팝업 등 스크립트 사용하지 않고 :target 선택자를 이용해서

CSS만으로도 구현이 가능합니다.



### 사용예제

:target은 주소에서 가르키는 대상입니다.

a href="#popup"팝업열기를 클릭하면 id="popup"에 포커싱됩니다.

이때  id="popup" 요소에게 :target 선택자가 활성화 됩니다.

간단한 사용방법은 아래처럼 사용됩니다. 

https://code.d2.co.kr/2019/lescape/home/mo/ko/html/99_etc/test03.html

```html
<a href="#popup">팝업열기</a>
<div id="popup" class="pop-layer">
    팝업
</div>
```

```css
.pop-layer{
    display:block;
    opacity:0;
    visibility:hidden;
    transition:.5s;
}
.pop-layer:not(:target){/*해당요소에 :target 선택자가 비활성화*/
    opacity:0;
    visibility:hidden;
}
.pop-layer:target{/*해당요소에 :target 선택자가 활성화*/
    opacity:1;
    visibility:visible;
}
```

그외 예제 - <https://bitsofco.de/the-target-trick/



### 지원브라우저

IE 9 미만 제외 모든 브라우저에서 잘 동작합니다.

