# 미디어쿼리

## 기본문법

```css
@media only all and (조건문) {실행문}
```

**@media**  : 미디어 쿼리 시작

**only 또는 not** : 미디어 쿼리를 지원하는 브라우저에서만 미디어 쿼리를 해석하게끔 만드는 키워드 (ie8이하 동작X)

**all**  : 미디어 유형 (생략시 all 동작, print, screen, tv...)

**and** : 앞뒤 연산을 모두 만족해야 실행  only, all과 같은 선행 키워드가 생략되면 and 키워드는 사용하면 안됨 and 대신 ' , '는 OR 연산 

**(조건문)** : 조건이 참일때 {실행문} 처리

**{실행문}** : CSS코드 작성영역



## 기본 템플릿

```scss
@charset “utf-8”;

//All Device
//모든 해상도를 위한 공통 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨.

/*Mobile Device*/
//768px 미만 해상도의 모바일 기기를 위한 코드를 작성한다. 모든 해상도에서 이 코드가 실행됨. 미디어 쿼리를 지원하지 않는 모바일 기기를 위해 미디어 쿼리 구문을 사용하지 않는다.

//Tablet & Desktop Device
@media all and (min-width:768px) {
	//사용자 해상도가 768px 이상일 때 이 코드가 실행됨. 테블릿과 데스크톱의 공통 코드를 작성한다.
}

//Tablet Device
@media all and (min-width:768px) and (max-width:1024px) {
	//사용자 해상도가 768px 이상이고 1024px 이하일 때 이 코드가 실행됨. 아이패드 또는 비교적 작은 해상도의 랩탑이나 데스크톱에 대응하는 코드를 작성한다.
}

//Desktop Device
@media all and (min-width:1025px) {
	//사용자 해상도가 1025px 이상일 때 이 코드가 실행됨. 1025px 이상의 랩탑 또는 데스크톱에 대응하는 코드를 작성한다.
}
```



## 조건문 속성

**width / height**

```scss
@media all and (min-width:768px) and (max-width:1024px) {
    //뷰포트 너비가 768px 이상 ‘그리고’ 1024px 이하이면 실행
} 
@media all and (width:768px), (width:1024px) {
    //뷰포트 너비가 768px 이거나 ‘또는’ 1024px 이면 실행
} 
@media not all and (min-width:768px) and (max-width:1024px) {
    //뷰포트 너비가 768px 이상 ‘그리고’ 1024px 이하가 ‘아니면’ 실행
} 
```

**device-width / device-height**

```scss
@media all and (device-width:320px) and (device-height:480px) {
    // 스크린 너비가 320px ‘그리고’ 높이가 480px 이면 실행
} 

@media all and (min-device-width:320px) and (min-device-height:480px) {
     // 스크린 너비가 최소 320px 이상 ‘그리고’ 높이가 최소 480px 이상이면 실행
}
```

**orientation** (가로/세로 모드인지 판단)

```scss
@media all and (orientation:portrait) {
    // 세로 모드. 뷰포트의 높이가 너비에 비해 상대적으로 크면 실행
} 

@media all and (orientation:landscape) {
    // 가로 모드. 뷰포트의 너비가 높이에 비해 상대적으로 크면 실행
} 
```

**aspect-ratio**

```scss
@media all and (aspect-ratio:5/4) {
	// 뷰포트 너비가 5, 높이가 4 비율이면 실행
}

@media all and (min-aspect-ratio:5/4) {
     // 뷰포트 너비가 5/4 비율 이상이면 실행
}

@media all and (max-aspect-ratio:5/4) {
     // 뷰포트 너비가 5/4 비율 이하면 실행
}
```

**device-aspect-ratio**

```scss
@media all and (device-aspect-ratio:5/4) {
	// 스크린 너비가 5, 높이가 4 비율이면 실행
}

@media all and (min-device-aspect-ratio:5/4) {
	// 스크린 너비가 5/4 비율 이상이면 실행
}

@media all and (max-device-aspect-ratio:5/4) {
    // 스크린 너비가 5/4 비율 이하면 실행
}
```



[CSS3 미디어쿼리 이해]: http://naradesign.net/wp/2012/05/30/1823/	"CSS3 미디어쿼리 이해"

