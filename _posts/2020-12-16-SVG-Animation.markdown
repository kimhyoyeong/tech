---
title:  "SVG Animation"
---



최근에 재플린을 사용하게 되면서 쉽게 SVG 파일을 다운 받을수있게 되었다. 

SVG에 대한 장점을 알아보고 활용방법에 대해 공부해보자.



## SVG 장점

1.  SVG는 벡터이미지로 확대해도 깨지지 않는다.
2.  같은 이미지로 사이즈/색상 변경해서 재이용 쉽다.
3.  기존 처럼 모션에 사용할 이미지의 요소들을 분리할 필요가 없다.



## 구현 종류

SVG를 활용해서 모션을 구현하기 위해 JS/CSS/Adobe Animate를 이용해서 테스트 해보았다.

그 결과를 간단하게 정리하면,



- JS - 트윈맥스를 사용하여 기존처럼 쉽게 모션 구현이 가능하다. 

- CSS - 기존 CSS 애니메이션처럼 구현 가능하다.

  단, IE에선 transform 속성 지원하지 않음

- Adobe Animate - 좀 더 세밀한 모션이 가능하다.

   단, IE에서 SVG 모션은 불가함, IE 구현을 위해 폴리필을 사용하는 방법도 있으나 현재 제공안함

   > 폴리 필은 브라우저에서 누락 된 기능을 지원하여 브라우저가 이해할 수있는 원래 인코딩을 번역하는 특수한 자바 스크립트 코드 

   

|         | JS   | CSS  | Adobe Animate |
| ------- | ---- | ---- | ------------- |
| IE 호환 | 가능 | 불가 | 불가          |
| mobile  | 가능 | 가능 | 가능          |



## JS/CSS 구현 방법

- SVG 코드 내 사용할 요소(ex. path)에 g태그로 감싸고 클래스를 추가한다.

  > 사용할 요소 fill값 색상 변경해보면 특정 가능함

- g 태그를 사용해서 그룹핑 가능하다. 



###  JS

1.  SVG 코드 안에 요소를 사용하기 위해 object 태그를 사용
2.  SVG 코드 안에 사용할 요소들에 클래스 추가
3.  트윈맥스로 모션 구현

```html
<object id="survey_icon_item01" type="image/svg+xml" data="./svg_tweenmax_motion/survey_icon_item01.svg"></object>
```

```html
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <g fill="none" fill-rule="evenodd">
        ...
        <g class="survey_icon_item0101"
           transform="translate(-480 -393) translate(190 228) translate(260) translate(18 61) translate(12 104) translate(4 31) translate(10.07 7.552) translate(22.657 7.717)">
            <circle cx="12.587" cy="12.587" r="12.587" fill="#491BC7"/>
            <text fill="#FFF" font-family="AppleSDGothicNeo-Medium, Apple SD Gothic Neo" font-size="16.783"
                  font-weight="400">
                <tspan x="5.748" y="19.196">￦</tspan>
            </text>
        </g>
        <g class="survey_icon_item0102" fill="#491BC7">
            <path d="M13.968 1.759L3.17 12.093 8.207 15.126 3.401 23.759 16.17 15.31 10.787 11.162z"
                  transform="translate(-480 -393) translate(190 228) translate(260) translate(18 61) translate(12 104) translate(4 31) translate(128.391 10.395) rotate(-15 9.67 12.759)"/>
        </g>
    </g>
</svg>

```

```javascript
window.onload = function () {
	var survey_icon_item01 = document.getElementById("survey_icon_item01").contentDocument;
	var survey_icon_item0101 = survey_icon_item01.getElementsByClassName("survey_icon_item0101");
	var survey_icon_item0102 = survey_icon_item01.getElementsByClassName("survey_icon_item0102");
	TweenMax.to(survey_icon_item0101, 0.5, {
		transformOrigin: "center",
		opacity: 0,
		yoyo: true,
		repeat: -1,
		ease: Power4.easeIn,
	});
	TweenMax.to(survey_icon_item0102, 0.5, {
		transformOrigin: "center",
		opacity: 0,
		yoyo: true,
		repeat: -1,
		ease: Power4.easeIn,
	});
};
```

[JS 예시 페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_tweenmax_motion.html)



### CSS 

1. img, object, background 태그, 속성 사용 가능
2.  SVG 코드 안에 사용할 요소들에 클래스 추가
3.  SVG 코드 안에 CSS로 애니메이션 속성 추가

```html
<img src="./svg_css_motion/survey_icon_item01.svg" alt="">
```

```html
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
    <style type="text/css">
        
        .item01{ animation:motion01 1s infinite; transform-origin:50% 50%}
        
        @keyframes motion01{
            from{ opacity:0; }
            to{ opacity:1; }
        }
        
    </style>
    <g fill="none" fill-rule="evenodd">
       ...
        <g class="item01" fill="#491BC7">
            <path d="M13.968 1.759L3.17 12.093 8.207 15.126 3.401 23.759 16.17 15.31 10.787 11.162z"
                  transform="translate(-480 -393) translate(190 228) translate(260) translate(18 61) translate(12 104) translate(4 31) translate(128.391 10.395) rotate(-15 9.67 12.759)"/>
        </g>

    </g>
</svg>

```

[CSS 예시 페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_css_motion.html)



------



### Adobe Animate 구현 방법

Animate는 프로그램 학습이 필요로 하고 SVG를 활용함에 있어서, 굳이 사용할 만큼 큰효과가 없으므로 간단하게 어떻게 사용되는지만 확인하자.



##### 기본설치

1. Adobe Animate 설치
2. Animated SVG Exporter 설치([움직이는 SVG 출력 확장프로그램](https://exchange.adobe.com/creativecloud.details.7232.animated-svg-exporter.html))



##### SVG 출력방법

1. SVG 파일로 내보내기 [윈도우 > 확장 > SVG animation > export]



#### 그 외 활용방법

- GIF  출력방법
  1. 파일 > 내보내기 > 애니메이션 GIF 내보내기



- PNG 시퀀스 출력 후 움직이는 PNG 파일 만드는 방법
  1. 파일 > 내보내기 > 동영상 내보내기 > 파일형식 PNG 시퀀스
  2. [변환 프로그램](https://ezgif.com/apng-maker)  업로드 움직이는 파일로 작업 

  
  
- canvas로 출력하는 방법

  [참고페이지](https://helpx.adobe.com/kr/animate/using/creating-publishing-html5-canvas-document.html)



[animate 예시 페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_animate_motion.html)