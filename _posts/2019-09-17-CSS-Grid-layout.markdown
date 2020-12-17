---
title:  "CSS Grid layout"
---



대부분의 그리드 시스템은 `float` 혹은 `inline-block` 레이아웃 방식을 사용합니다. 하지만 이 방법들은 모두 실제로 레이아웃을 위해 사용되도록 의도된 방법이 아닙니다. 그 결과로, 꽤 중요한 문제와 한계를 가집니다.

float는 많은 레이아웃 문제를 가지고 있기 때문에 클리어(clear)하는 것이 요구됩니다. 가장 악명높은 문제는 요소를 클리어 했을 때 가끔 페이지 내 상관없는 부분 아래로 강제로 이동되는 것입니다. 

Inline block 레이아웃은 inline-block 사이의 공백 문제를 해결해야 합니다. 더구나 이 문제에 대한 모든 해결방법은 더럽거나 성가십니다.



## CSS Grid vs. Flexbox

흔히 접하는 질문 중 하나는 CSS Grid Layout(이하 ‘CSS Grid’)이 앞서 소개한 Flexbox와 어떤 차이가 있냐 하는 것인데, 기본적으로 Flexbox가 가로 또는 세로 하나의 축(axis)을 기준으로 요소(박스)를 배열하는 개념인 반면, CSS Grid는 가로x세로 2차원 매트리스를 기준으로 그 속에 요소들을 배치한다는 점에서 접근 방식 자체가 다릅니다.



## Grid Layout Example

[예제](https://www.google.co.kr/search?q=css+grid&newwindow=1&hl=ko&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj2wPi65dbkAhWWfd4KHca_BDEQ_AUIFCgD&biw=1920&bih=937)



## **첫번째 그리드 레이아웃**

 CSS 그리드의 두가지 주요 요소는 wrapper(부모 요소)와 items(자식 요소)이다. 

wrapper는 감싸주는 그리드이고 item들은 그리드 내부의 요소들이다.

[테스트페이지](https://codepen.io/kimhyoyeong/pen/WNegRKe?editors=1100)



### 부모 속성

```scss
.wrapper{
    display:grid;//그리드 선언
    
    //1. 행과 열 선언(3개 행에 4개 열)
 	grid-template-rows:100px 50px auto;
    grid-template-columns:100px 100px 100px 100px;
    
    //2. 패턴 반복
    grid-template-columns:repeat(3,1fr);
    
    //3. 셀의 높이 잡기
    grid-auto-rows:20px 80px;
    grid-auto-rows:minmax(50px, auto);//최소 최대 사이즈 지정
    
    //4.셀간 공백
    grid-gap:5px;
    
    //5.그리드 흐름
    grid-auto-flow:column;
    grid-auto-flow:row;
}

```



### 자식 속성

```scss

//1. 각 아이템 위치 사이즈 변경
.item{
    &:nth-child(2){
        //기본 방법
        grid-column-start:2;
        grid-column-end:5;
        
        //간단한 방법
        grid-column: 2 / 5;
        grid-row: 1/3;
        
        //더 간단한 방법
        //grid-area: rowStart/columnStart/rowEnd/columnEnd;
        grid-area: 2/2/3/4;
    }
}
```



### grid-area와 grid-template-areas

각 요소에 이름을 짓고 그리드를 생성하는 데 그 이름을 사용할 수 있습니다. 

이는 정말 강력하며, 좀 더 직관적인 레이아웃이 됩니다.

[테스트페이지](https://codepen.io/kimhyoyeong/pen/bGbxWdr)

```scss
.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr 4fr 1fr;
  grid-template-rows: 50px 100px 100px 30px;
  grid-template-areas:
  "header header header header"
  "leftCol midTop midTop rightCol"
  "leftCol midBottom midBottom rightCol"
  "footer footer footer footer";
  grid-gap: 5px;
 }

.header{
   grid-area: header;
   background-color: LightSeaGreen ;
 }
  
 .leftCol{
   grid-area: leftCol;
   background-color: orange;
 }
  
 .rightCol{
   grid-area: rightCol;
   background-color: lightblue;
 }
  
  .midTop{
   grid-area: midTop;
   background-color: lightgrey;
 }
  
 .midBottom{
   grid-area: midBottom;
   background-color: pink;
 }
  
 .footer{
   grid-area: footer;
   background-color: lightgreen;
 }
```



> [자세한 속성 참고 블로그](https://heropy.blog/2019/08/17/css-grid/)