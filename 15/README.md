# SVG Animation

> SVG는 벡터 이미지로 확대를 해도 깨지지 않음
>
> 같은 SVG를 가지고 CSS로 색상변경 사이즈 변경해서 재활용 할 수도 있고, 여러모로 유용함 
>
> SVG를 적용하는 방법은 다양함
>
> 정적 이미지는 img 태그든 css로 background 표현하던 상관없음
>
> 동적이미지는 ilnine(SVG 통째로 HTML 넣음)이 조작이 가장쉽지만 코드가 복잡해짐으로 object로 구현하는게 가장 좋은 방법임



## 공통

> js/css
>
> - SVG 파일내 사용할 path를 g태그로 이용하여 그룹핑 class 지정하여 사용
> - 각각 사용해야할 path들이 가끔 붙어있는 경우도 있음, 일러스트로 분리하거나 디자이너한테 요청 필요..



## javascript

### 1. Use

트윈맥스로 애니메이션 작업 

```javascript
window.onload=function() {
	var object = document.getElementById("iconMic");
	var svgDocument = object.contentDocument;
	var circle = svgDocument.getElementsByClassName("circle");
	var mic = svgDocument.getElementsByClassName("mic");

	TweenMax.to(circle, 2, {
		scale: 0.5,
		transformOrigin:"center",
		yoyo:true,
		repeat:-1,
		ease: Power4.easeIn,
	});
	TweenMax.to(mic, 2, {
		scale: 0.5,
		rotation: "360",
		transformOrigin:"center",
		yoyo:true,
		repeat:-1,
		ease: Power4.easeIn,
	});
};
```

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81" height="81" viewBox="0 0 81 81">
    <defs>
        <path id="gcnlpq59ya" d="M0 80.894L80.768 80.894 80.768 0.126 0 0.126z"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g class="circle">
            <path fill="#FFF" d="M79.63 40.701c0 21.58-17.483 39.059-39.056 39.059C19.004 79.76 1.51 62.28 1.51 40.7 1.51 19.127 19.003 1.64 40.574 1.64 62.147 1.64 79.63 19.127 79.63 40.7"/>
            <path fill="#000" d="M40.389 3.15c-20.6 0-37.365 16.762-37.365 37.362 0 20.602 16.765 37.358 37.365 37.358 20.596 0 37.358-16.756 37.358-37.358 0-20.6-16.762-37.362-37.358-37.362m0 77.744C18.119 80.894 0 62.78 0 40.512 0 18.242 18.12.126 40.389.126c22.265 0 40.382 18.117 40.382 40.386 0 22.268-18.117 40.382-40.382 40.382"/>
        </g>
        <g class="mic">
            <path fill="#686DEE" d="M49.995 37.98c0 5.545-4.385 10.045-9.792 10.045-5.41 0-9.798-4.5-9.798-10.046V27.555c0-5.558 4.388-10.042 9.798-10.042 5.407 0 9.792 4.484 9.792 10.042V37.98z"/>
            <path fill="#000" d="M40.202 19.026c-4.572 0-8.282 3.828-8.282 8.528V37.98c0 4.703 3.71 8.534 8.282 8.534 4.57 0 8.28-3.831 8.28-8.534V27.554c0-4.7-3.71-8.528-8.28-8.528m0 30.512c-6.235 0-11.306-5.186-11.306-11.558V27.554c0-6.369 5.07-11.552 11.306-11.552 6.236 0 11.304 5.183 11.304 11.552V37.98c0 6.372-5.068 11.558-11.304 11.558"/>
        </g>
        <path fill="#000" d="M40.389 56.737c-9.683 0-17.564-7.877-17.564-17.56h3.024c0 8.017 6.52 14.536 14.54 14.536 8.013 0 14.536-6.52 14.536-14.536h3.024c0 9.683-7.878 17.56-17.56 17.56"/>
        <mask id="7o5gy2huyb" fill="#fff">
            <use xlink:href="#gcnlpq59ya"/>
        </mask>
        <path fill="#000" d="M38.877 66.07L41.901 66.07 41.901 55.226 38.877 55.226z" mask="url(#7o5gy2huyb)"/>
        <path fill="#000" d="M33.578 67.582L46.827 67.582 46.827 64.558 33.578 64.558z" mask="url(#7o5gy2huyb)"/>
    </g>
</svg>

```



### 2. 브라우저 호환

IE도 가능



------



##  CSS

### 1. Use

SVG 파일내에 CSS로 애니메이션 먹일수도 있음 

> object태그 사용시 SVG 내 <style type="text/css"> 추가해서 먹이면 되고,
>
> 인라인으로 사용시엔 공통 CSS에서 먹이면됨
>
> - SVG내에 외부 스타일시트를 불러오게 할 수 있으나 파일별로 재호출이 되서 성능 이슈 생길 수가있음
>- transform-origion 문제가 있음

```html
<object type="image/svg+xml" data="../images/icon/ico_mic.svg"></object>
```

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81" height="81" viewBox="0 0 81 81">
    <style type="text/css">
        .mic{ animation:rotate 1s infinite; transform-origin:50% 50%}
        .circle{animation:fadeIn 1s infinite;}
        @keyframes fadeIn{
        from{ opacity:0; }
        to{ opacity:1; }
        }
        @keyframes rotate{
        from{ transform:rotate(360deg); }
        to{ transform:rotate(0); }
        }
    </style>
    <defs>
        <path id="gcnlpq59ya" d="M0 80.894L80.768 80.894 80.768 0.126 0 0.126z"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g class="circle">
            <path fill="#FFF" d="M79.63 40.701c0 21.58-17.483 39.059-39.056 39.059C19.004 79.76 1.51 62.28 1.51 40.7 1.51 19.127 19.003 1.64 40.574 1.64 62.147 1.64 79.63 19.127 79.63 40.7"/>
            <path fill="#000" d="M40.389 3.15c-20.6 0-37.365 16.762-37.365 37.362 0 20.602 16.765 37.358 37.365 37.358 20.596 0 37.358-16.756 37.358-37.358 0-20.6-16.762-37.362-37.358-37.362m0 77.744C18.119 80.894 0 62.78 0 40.512 0 18.242 18.12.126 40.389.126c22.265 0 40.382 18.117 40.382 40.386 0 22.268-18.117 40.382-40.382 40.382"/>
        </g>
        <g class="mic">
            <path fill="#686DEE" d="M49.995 37.98c0 5.545-4.385 10.045-9.792 10.045-5.41 0-9.798-4.5-9.798-10.046V27.555c0-5.558 4.388-10.042 9.798-10.042 5.407 0 9.792 4.484 9.792 10.042V37.98z"/>
            <path fill="#000" d="M40.202 19.026c-4.572 0-8.282 3.828-8.282 8.528V37.98c0 4.703 3.71 8.534 8.282 8.534 4.57 0 8.28-3.831 8.28-8.534V27.554c0-4.7-3.71-8.528-8.28-8.528m0 30.512c-6.235 0-11.306-5.186-11.306-11.558V27.554c0-6.369 5.07-11.552 11.306-11.552 6.236 0 11.304 5.183 11.304 11.552V37.98c0 6.372-5.068 11.558-11.304 11.558"/>
        </g>
        <path fill="#000" d="M40.389 56.737c-9.683 0-17.564-7.877-17.564-17.56h3.024c0 8.017 6.52 14.536 14.54 14.536 8.013 0 14.536-6.52 14.536-14.536h3.024c0 9.683-7.878 17.56-17.56 17.56"/>
        <mask id="7o5gy2huyb" fill="#fff">
            <use xlink:href="#gcnlpq59ya"/>
        </mask>
        <path fill="#000" d="M38.877 66.07L41.901 66.07 41.901 55.226 38.877 55.226z" mask="url(#7o5gy2huyb)"/>
        <path fill="#000" d="M33.578 67.582L46.827 67.582 46.827 64.558 33.578 64.558z" mask="url(#7o5gy2huyb)"/>
    </g>
</svg>
```



### 2. 브라우저 호환

IE는 SVG의 CSS 변화를 지원하지 않음!





------





## Adobe Animate

### 1. Install

1. Adobe Animate 설치
2. Animated SVG Exporter 설치(움직이는 SVG 출력 확장프로그램)
   https://exchange.adobe.com/creativecloud.details.7232.animated-svg-exporter.html



### 2. Use

**adobe animate 학습이 필요로함.**

좀 더 세밀한 애니메이션 작업이 가능



### 3. Export

SVG, GIF, PNG, canvas로 파일 출력 가능

- svg 파일로 내보내기 [윈도우 > 확장 > SVG animation > export]

  ```html
  <object type="image/svg+xml" data="icon_motion.svg"></object>
  ```

- animated gif 내보내기 [파일 > 내보내기 > 애니메이션 GIF 내보내기]

- png 시퀀스들을 파일로 내보내서 변환 프로그램[https://ezgif.com/apng-maker] 사용 움직이는 파일로 작업 

- canvas 출력도 가능



### 4. SVG 애니메이션 브라우저 호환

IE 안됨 폴리필 사용해서 가능하도록 함

> 폴리 필은 브라우저에서 누락 된 기능을 지원하여 브라우저가 이해할 수있는 원래 인코딩을 번역하는 특수한 자바 스크립트 코드 
>
> **"smil-in-javascript사용"** object로 작업시엔 SVG안에 script 호출해야함 svg별로 재호출이 되어 성능에 문제 생길듯
>
> inline으로 넣으면 문제 해결되나, 코드가 더러워짐

```svg
<svg id="무제-1" image-rendering="optimizeSpeed" baseProfile="basic" version="1.1" x="0px" y="0px" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
    
   	<!--smil-polyfill-->
    <script xlink:href="http://www.tbyrne.org/staging/smil-polyfill/web-animations.js"/>
	<script xlink:href="http://www.tbyrne.org/staging/smil-polyfill/smil-in-javascript.js"/>
	<!--//smil-polyfill-->
	
    <g id=".__EC.__9E.__A5.__EB.__A9.__B4-1" overflow="visible"><g id="ico_mic_motion.svg" transform="translate(11.4 16.45)"><animateTransform attributeName="transform" additive="replace" type="translate" repeatCount="indefinite" dur="0.333s" keyTimes="0;.4;.901;1" values="11.4,16.45;48.75,40.45;11.4,16.45;11.4,16.45"/><path fill="#FFF" stroke="none" d="M43.3 43.3Q50.55 36.05 50.55 25.75 50.55 15.5 43.3 8.2 36.05 .95 25.75 .95 15.5 .95 8.2 8.2 .95 15.5 .95 25.75 .95 36.05 8.2 43.3 15.5 50.55 25.75 50.55 36.05 50.55 43.3 43.3Z"/><path fill="#000" stroke="none" d="M51.3 25.7Q51.3 15.1 43.8 7.55 36.3 .05 25.7 .05 15.1 .05 7.55 7.55 .05 15.1 .05 25.7 .05 36.3 7.55 43.8 15.1 51.3 25.7 51.3 36.3 51.3 43.8 43.8 51.3 36.3 51.3 25.7M49.4 25.7Q49.4 35.5 42.45 42.45 35.5 49.4 25.7 49.4 15.9 49.4 8.9 42.45 1.95 35.5 1.95 25.7 1.95 15.9 8.9 8.9 15.9 1.95 25.7 1.95 35.5 1.95 42.45 8.9 49.4 15.9 49.4 25.7Z"/><path fill="#686DEE" stroke="none" d="M31.8 24L31.8 17.4Q31.8 14.75 29.95 12.85 28.15 11 25.55 11 22.95 11 21.15 12.85 19.35 14.75 19.35 17.4L19.35 24Q19.35 26.65 21.15 28.55 22.95 30.4 25.55 30.4 28.15 30.4 29.95 28.55 31.8 26.65 31.8 24Z"/><path fill="#000" stroke="none" d="M25.55 10.05Q22.6 10.05 20.5 12.2 18.4 14.35 18.4 17.4L18.4 24Q18.4 27.05 20.5 29.2 22.6 31.35 25.55 31.35 28.5 31.35 30.65 29.2 32.75 27.05 32.75 24L32.75 17.4Q32.75 14.35 30.65 12.2 28.5 10.05 25.55 10.05M20.3 24L20.3 17.4Q20.3 15.15 21.85 13.6 23.35 12 25.55 12 27.75 12 29.25 13.6 30.8 15.15 30.8 17.4L30.8 24Q30.8 26.25 29.25 27.85 27.7 29.45 25.55 29.45 23.4 29.45 21.85 27.85 20.3 26.25 20.3 24Z"/><path fill="#000" stroke="none" d="M14.5 24.85Q14.5 29.45 17.8 32.75 21.1 36 25.7 36 30.3 36 33.55 32.75 36.85 29.45 36.85 24.85L34.9 24.85Q34.9 28.65 32.2 31.35 29.5 34.05 25.7 34.05 21.9 34.05 19.15 31.35 16.45 28.65 16.45 24.85L14.5 24.85Z"/><path fill="#000" stroke="none" d="M24.7 41.9L26.65 41.9 26.65 35 24.7 35 24.7 41.9Z"/><path fill="#000" stroke="none" d="M21.35 42.85L29.75 42.85 29.75 40.95 21.35 40.95 21.35 42.85Z"/></g></g></svg>
```



## 정리

되도록이면 javascript 트윈맥스로 구현 (내년 8월까지 IE를 못버리니까.)



