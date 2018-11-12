## 이벤트바인딩

자바스크립트 코드는 이벤트에 의해 동작함 

이벤트는 클릭, 키보드 입력과 같이 사용자의 어떤 행위를 의미, 이러한 이벤트를 처리하는 것을 이벤트 핸들링이라함.

이벤트 핸들링하기 위해 

1. 이벤트를 받을 요소를 선택
2. 그 요소가 어떤 이벤트에 반응할지, 요소와 이벤트를 연결해주는 **바인딩**을 해야함
3. 이벤트가 발생했을때 실행할 코드를 작성

### 바인딩

DOM 이벤트 핸들러

> HTML Event Handler처럼 Html과 JavaScript가 혼용되는 문제는 해결되었으나 이벤트 핸들러에 하나의 함수만 바인딩 할 수 있으며 함수에 인수를 전달할 수 없는 단점이 있다

```HTML
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

> **함수가 함수를 둘러싼 렉시컬 환경을 기억하는 것**

```javascript
var color = 'red';
		
function foo() {
    var color = 'blue';
    function bar() {
        //bar는 color를 찾아 출력하는 함수 , bar는 외부환경 참조하여 foo환경을 저장함
        console.log(color);
    }
    return bar;
}

var baz = foo(); //bar를 global의 baz란 이름으로 호출
baz(); //bar는 자신의 스코프에서 color를 찾는다. 없다. 외부환경 참조찾아감 foo를 뒤짐 color을 찾음 값은 blue		
```

bar는 자신이 생성된 렉시컬 스코프에서 벗어나 global에서 baz라는 이름으로 호출되었고, 

스코프 탐색은 현재 실행된 스택과 관련없는 foo를 거쳐간다.

**baz를 bar로 초기화 할때는 이미 bar의 외부렉시컬환경을 foo로 결정한 이후이다.** 

때문에 bar 생성과 직접관련이 없는 global에서 아무리 호출하더라도 foo에서 color를 찾는 것이다. 

이런 bar(또는 baz) 와같은 함수를 클로저라 부른다.



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

