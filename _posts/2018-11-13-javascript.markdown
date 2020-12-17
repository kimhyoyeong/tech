---
title:  "javascript 필수 지식"
---



## 이벤트바인딩

자바스크립트 코드는 이벤트에 의해 동작함 

이벤트는 클릭, 키보드 입력과 같이 사용자의 어떤 행위를 의미, 이러한 이벤트를 처리하는 것을 이벤트 핸들링이라함.

이벤트 핸들링하기 위해 

1. 이벤트를 받을 요소를 선택
2. 그 요소가 어떤 이벤트에 반응할지, 요소와 이벤트를 연결해주는 **바인딩**을 해야함
3. 이벤트가 발생했을때 실행할 코드를 작성

### 바인딩

DOM 이벤트 핸들러

> HTML Event Handler처럼 Html과 JavaScript가 혼용되는 문제는 해결되었으나 **이벤트 핸들러에 하나의 함수만 바인딩 할 수 있으며 함수에 인수를 전달할 수 없는 단점**이 있다

```html
<!DOCTYPE html>
<html>
<body>
  <button id='btn'>Click me</button>
  <script>
    var btn=document.getElementById('btn');//이벤트를 받을 요소를 선택
    btn.onclick=function(){//그 요소가 어떤 이벤트에 반응할지, 즉 이벤트와 요소를 연결해주는것을 이벤트 바인딩이라고함.
        alert('dddd');//이벤트가 발생했을시 실행시킬 코드
    }
  </script>
</body>
</html>
```

DOM 이벤트 리스너

> Event Listener는 이벤트를 처리하는 가장 최신의 기법이다. 이벤트 리스너를 이용하여 대상 요소에 이벤트를 바인딩하고 해당 이벤트가 발생했을 때 실행될 콜백 함수를 지정한다.

```html
<!DOCTYPE html>
<html>
<body>
  <label for='username'>User name </label>
  <input type='text' id='username'>
  <script>
    var elem = document.getElementById('username');
    elem.addEventListener('blur', function() {
      alert('blur event occurred!');
    });
  </script>
</body>
</html>
```

------



## 스코프

> 함수레벨 블록레벨의 렉시컬 스코프 규칙을 따름.

### 함수 레벨 스코프

var 키워드로 선언된 변수나, 함수 선언식으로 만들어진 함수는 함수레벨 스코프를 갖는다.
******만약에 var color가 블록레벨 스코프였다면 color는 if문이 끝날때 파괴됨으로 console. 은 에러가 발생할것이다.

```javascript
function foo() {
    if (true) {
        var color = 'blue';
    }
    console.log(color); // blue
}
foo();


```

### 블록레벨 스코프

ES6 let, const 키워드는 블록레벨 스코프 변수를 만들어준다.

**`let color`를 `if`블록 내부에서 선언하였다. 때문에 `if`블록 내부에서 참조할 수 있으며, 그 밖의 영역에서 잘못된 참조로 에러가 발생한다.

```javascript
function foo() {
    if(true) {
        let color = 'blue';
        console.log(color); // blue
    }
    console.log(color); // ReferenceError: color is not defined
}
foo();
```

요즈음 ES6 코드 대부분은 `var`를 사용하지 않는다. `var`는 `let`과 `const`로 모두 대체가 가능하고, `var`자체가 함수 레벨의 스코프를 가지기 때문에 블록 레벨 스코프보다 더 많은 혼란을 야기하기 때문이다.

### 렉시컬 스코프

>   자바스크립트는 각 함수가 작성됐을때의 컨텍스트를 기준으로 스코프를 가짐.

```javascript
var x = 'global';
 
function foo() {
    var x = 'local' ;
    bar();
}
 
function bar() {
    console.log(x);
}
 
foo();
bar();
```

  중첩 함수에서, 안쪽 함수가 자신의 렉시컬 환경을 뒤져도 변수값을 찾을 수 없을 때는 바깥쪽 함수의 렉시컬 환경을 참조한다. 만약 그래도 없다면 그 바깥의 렉시컬 환경을 참조한다.

 이렇게 바깥쪽 렉시컬 환경이 null이 될때까지 쭉 참조를 이어가는 것이 **스코프 체인**이라는 개념이다. 아래 그림과 같이 체인처럼 엮여서 참조가 이루어지는 것이다.



------

## 호이스팅

자바스크립트 엔진은 코드를 인터프리팅 하기전에 그 코드를 먼저 컴파일한다.

1. var a;
2. a=2;

변수 선언(생성) 단계와 초기화 단계를 나누고, 

선언 단계에서는 그 선언이 소스코드의 어디에 위치하든 해당 스코프의 컴파일단계에서 처리해버리는 것이다. 

때문에 이런 **선언단계가 스코프의 꼭대기로 호이스팅("끌어올림")되는 작업**이라고 볼 수 있는 것이다.

```javascript
function foo() {
    a = 2;
    var a;
    console.log(a);
}
foo();
//2 출력
```

```javascript
function foo() {
    console.log(a);
    var a = 2;
}
foo();
//undefined 출력
```



------



## 클로저

> **이미 생명주기가 끝난 외부함수의 변수를 참조하는 함수를 클로저라고함.**
>
> 지역변수는 함수 호출시 메모리에 할당되고, 함수가 종료되면 메모리에서 해제됨
>
> 따라서 지역변수는 호출할때마다 항상 같은 값으로 초기화됨
>
> 이전에 존재했던 값으로 유지하고 싶어질때 ! 클로저를 사용함.

```javascript
function count() {
    var cnt = 0;
    function addCount() {
        cnt++;
        console.log(cnt)
    }
    return addCount;
}

var increase = count();
increase();
increase();
increase();
increase();
```

1. count() 함수가 호출되면 지역변수 cnt=0 초기화됨 동시에 만들어짐
2. 내부에 addCount()라는 함수도 만들어지고 마지막으로 addCount() 함수를 리턴하고 Count()함수는 종료가 됨
3. 그렇다면 count() 함수가 종료되면 일반 함수처럼 addCount() 함수와 지역변수인 cnt는 사라질까?
   그렇지 않음, count() 함수가 종료되더라도 사라지지 않고 계속해서 값을 유지하게됨.
   이유는 ? count() 함수 내부에서 cnt 변수를 사용하고 있는 상태에서 외부로 리턴되어 클로저 현상이 발생하기때문
4. 이런 이유로 increase() 실행되면 addCount()함수가 실행되어 증가연산자에의해 1증가
   increase() 또 실행하면 이전값을 기억하고있기때문에 2가 됨.
5. 이처럼 **변수가 메모리에서 제거되지않고 계속해서 값을 유지하는 상태를 클로저**라고 부르며 내부에 있는 함수를 클로저함수라고함.





**반복문 클로저**

```javascript
function count() {
    var i;
    for (i = 1; i < 10; i += 1) {
        setTimeout(function timer() {
            console.log(i);//0.1초가 지날동안 이미 i는 10이 되어버림.
        }, i*100);
    }
}
count();
//10 9번 출력됨.

function count() {
    var i;
    for (i = 1; i < 10; i += 1) {
        (function(countingNumber){//새로운 스코프를 추가하여 반복시마다 따로 값을 저장하는 방식
            setTimeout(function timer() {
                console.log(countingNumber);
            }, i*100);
        })(i);

    }
}
count();
```



------



## 콜백함수

> 어떤 특정 함수가 실행을 마친 후에 실행되는 함수를 콜백함수라고 합
>
> 필요한 이유? 비동기 데이터를 처리하기 위함.

```javascript
function first(callback){
    setTimeout(function(){
        console.log(1);
        callback();
    },500)
}

function second(){
    console.log(2);
}

first(function(){
    second();
})
```

