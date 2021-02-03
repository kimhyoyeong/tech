---
title:  "SVG Animation"
---



최근에 제플린을 사용하게 되면서 SVG 파일을 쉽게 다운로드할 수 있게 되었다

SVG를 활용해서 모션을 쉽게 구현할 수 있는 방법에 대해 공부해보자

<br>

## SVG 장점

> [테스트이미지](http://code.d2.co.kr/2020/skt_tplace/tablet/plan/images/svg_icon/icon_logo.svg)

1.  SVG는 벡터이미지로 확대해도 깨지지 않는다
2.  같은 이미지를 사이즈/색상 변경해서 재사용하기 쉽다
3.  기존 처럼 모션에 사용할 이미지의 요소들을 분리할 필요가 없다

<br>

## 구현 방법

SVG를 활용해서 모션을 구현하기 위해 javascript/CSS/Adobe Animate를 이용해서 테스트 해보았다

<br>

### 1. javascript/CSS 활용한 구현 방법

SVG 코드 내 사용할 요소(ex. path)에 g태그로 감싸고 아이디 or 클래스를 추가하여 사용

> 이미 g태그로 감싸져 있다고 해도 transform 속성있으면 다시 감싸야함(기준점이 달라짐)

- 사용할 요소 fill값 색상 변경해보면서 특정
- g 태그를 사용해서 그룹핑

<br>

####  1-1. javascript

트윈맥스를 사용하여 기존처럼 쉽게 모션 구현이 가능하다

<br>

① SVG 코드 안에 요소를 컨트롤하기 위해 object 태그를 사용

> inline으로 작업하면 소스가 더러워지기 떄문에 object 태그방법을 선호

② object 태그에 id값 추가

```html
<object id="svgIcon" type="image/svg+xml" data="images/test.svg"></object>
```

<br>

③ SVG 코드 안에 사용할 요소들에 g 태그로 감싸고 아이디 추가

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 40 40">
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(-406 -806) translate(0 776) translate(48 30) translate(302) translate(56)">
        <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#E8E8E8"/>
        
          <g id="svgIconItem">
              <g transform="translate(4.615 4.615)">
                  <g fill="#4229BC">
                    <path d="M6.923 1.538L15.385 15.385 -1.538 15.385z" transform="translate(10 6.923) rotate(90 6.923 8.462)"/>
                  </g>
              </g>
        </g>
     </g>
  </g>
</svg>
```

<br>

③ 트윈맥스로 기존처럼 모션 구현

```javascript
//javascript
window.onload = function () {
	var svgIcon = document.getElementById("svgIcon").contentDocument;
	var svgIconItem = svgIcon.getElementById("svgIconItem");
	TweenMax.to(svgIconItem, 0.5, {
		transformOrigin: "center",
		opacity: 0,
		yoyo: true,
		repeat: -1,
		ease: Power4.easeIn,
	});
};
```

```javascript
//jquery
window.onload = function () {
	$(function(){
		var svgIcon=$('#svgIcon')[0].contentDocument;
		TweenMax.to($(svgIcon).find('#svgIconItem'), 0.5, {
			transformOrigin: "center",
            opacity: 0,
            yoyo: true,
            repeat: -1,
            ease: Power4.easeIn,
		});
	});
}
```

<br>

[jsfddle테스트](https://jsfiddle.net/hyokim/u1tzres2/)

[javascript 예시페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_tweenmax_motion.html)

<br>

#### 1-2. CSS 

기존 CSS 애니메이션처럼 구현 가능하다

<br>

① img, object 태그 *or* background 속성 사용 가능

```html
<img src="images/test.svg" alt="">
```

<br>

② SVG 코드 안에 사용할 요소들에 g 태그로 감싸고 아이디 추가

③ SVG 코드 바로 안에 style 넣어서 기존 처럼 CSS 애니메이션 구현

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" viewBox="0 0 40 40">
    <style type="text/css">
        #svgIconItem{ animation:motion01 1s infinite; transform-origin:50% 50%}
        @keyframes motion01{
            from{ opacity:0; }
            to{ opacity:1;transform:rotate(180deg) }
        }
    </style>
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(-406 -806) translate(0 776) translate(48 30) translate(302) translate(56)">
        <circle cx="20" cy="20" r="19.5" fill="#FFF" stroke="#E8E8E8"/>
        <g id="svgIconItem">
          <g transform="translate(4.615 4.615)">
            <g fill="#4229BC">
              <path d="M6.923 1.538L15.385 15.385 -1.538 15.385z" transform="translate(10 6.923) rotate(90 6.923 8.462)"/>
            </g>
          </g>
        </g>
      </g>
  </g>
</svg>
```

<br>

[jsfddle테스트](https://jsfiddle.net/hyokim/wzv902rL/)

[CSS 예시페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_css_motion.html)

<br>

***IE 호환**

|      | javascript | css                                  |
| ---- | ---------- | ------------------------------------ |
| IE   | 가능       | 불가능(transform 속성 지원하지 않음) |

<br>

### 2. Adobe Animate을 활용한 구현 방법

해당 프로그램을 사용하면 좀 더 세밀한 애니메이션 구현이 가능하다 

<br>

#### 2-1. Animated SVG Exporter

> IE 불가능함 / 구현을 위해 폴리필을 사용하는 방법도 있으나 현재 제공안함

① [Animated SVG Exporter(움직이는 SVG 출력 확장프로그램)](https://exchange.adobe.com/creativecloud.details.7232.animated-svg-exporter.html) 설치

② SVG 파일로 내보내기 [윈도우 > 확장 > SVG animation > export]

<br>

#### 2-2. GIF  출력방법

① 파일 > 내보내기 > 애니메이션 GIF 내보내기

<br>

#### 2-3. PNG 출력방법

> PNG 시퀀스 출력 후 움직이는 PNG 파일 만듬

① 파일 > 내보내기 > 동영상 내보내기 > 파일형식 PNG 시퀀스

② [Animated PNG Maker](https://ezgif.com/apng-maker) 활용하여 움직이는 PNG 파일로 작업 

<br>

[animate 예시페이지](https://kimhyoyeong.github.io/tech/assets/html/svg_animate_motion.html)

<br>

***IE 호환**

|      | Animated SVG Exporter | GIF  | PNG  |
| ---- | --------------------- | ---- | ---- |
| IE   | 불가능                | 가능 | 가능 |

