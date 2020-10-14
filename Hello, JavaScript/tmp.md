Infinity : 자바스크립트에서 표현할 수 있는 수를 넘는 무한대, 숫자를 0으로 나누면 발생
NaN : Not a Number. 숫자가 아님

객체
이름과 이름에 대응되는 값의 집합
var person = { name:"홍길동", age:20, height:180 };

객체 속성 접근 방법
person.name;
person["name"]

person.name="이몽룡"
person["age"]=25;

undefined, null → 값이 없다
undefined : 변수나 속성이 정의되어있지 않을 때
null : 개발자가 의도적으로 비어있는 상태 표현

math객체
Math.pow(a, b);
a의 b승
Math.sqrt(16);
제곱근 구하기
Math.random();
0~1사이의 난수 반환
삼각함수, 자연로그 등 다양한 기본 수학 함수들이 정의.

함수
```
funcion 함수이름(인자1, 인자2) {
    /*
        실행할 코드
    */
    return 결과값;
}
```

String 이어 붙이기
```
var str = "Hello";
str.length;
str["length"];

var str2 = " World";
str.concat(str2);

var str3 = str.concat(str2);
str.concat(str2).concat("!");

"Hello".concat(" World").concat("!");
str+str2;
"Hello" + " World";
"PI is " + 3.14;
```

String 다루기
```
var str="abcdeabcde";

문자열 특정 위치에 있는 한 글자에 접근
str.charAt(0);
str.charAt(9);

범위를 넘어가거나 음수를 쓰면 빈 문자열이 반환
str.charAt(10);
str.charAt(-1);

str[1];
이 경우는 undefined가 반환
str[10];
str[-1];

부분 문자열 구하기
str.substring(2,4);
str.substr(2,4);
str.substring(2);
str.substr(2);
str.substr(-7)

문자 위치 찾기
str.indexOf("bc");
str.lastIndexOf("bc");
존재하지 않는 문자열 입력시 -1 반환
str.lastIndexOf("f");
```

배열
값들의 나열.
var arr = [];
var arr2 = [1,2,3,4,5];
var mixed_arr = [1, true, 3.14, "string", {name:"object"}, [1,2,3]];

arr2.length;
arr2[3];

var arr = [1,2,3,4,5];
arr.pop(); -> [1, 2, 3, 4]
arr.shift(); -> [2, 3, 4]
arr.push(6); -> [2, 3, 4, 6]
arr.unshift(0); -> [0, 2, 3, 4, 6]
arr.reverse(); -> [6, 4, 3, 2, 0]
arr.sort(); -> [0, 2, 3, 4, 6]

var str = "1, 2, 3, 4, 5";
str.split(","); -> ["1", "2", "3", "4", "5"]

조건문
if(true) {
    console.log("이 구문은 항상 실행 됩니다.");
}

if(false) {
    console.log("이 구문은 항상 실행되지 않습니다.");
}

if(false) {
    console.log("1");
} else {
    console.log("2");
}

if(false) {
    console.log("1");
} else if(true) {
    console.log("2");
} else {
    console.log("3");
}

변수의 scope : 객체(변수)는 선언된 함수 안에서만 접근이 가능

this 키워드는 어떤 객체에 바인딩 되었는지 알려준다.
브라우저에서 코드를 실행하고 있기 때문에 전역에 선언한 함수들은 window객체에 바인딩.
객체의 메소드로서 호출할 때는 객체에 바인딩.
메서드를 호출할 때 this의 값은 인스턴스화 된 객체(해당 메서드를 호출한 객체)를 참조.

closure(클로저) : 자바스크립트의 함수와 그 함수가 선언될 때의 environment로 구성.