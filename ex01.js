/*
1. 변수와 데이터 타입
    1-1. 기본타입(primitive type), 유사 객체
        1) undefined
        2) boolean
        3) string
        4) number
    1-2. function
    1-3. 객체(object) : 생성자함수(new)를 사용해 객체 생성

2. javascript 객체를 구분하는 또 다른 방법
    2-1. 내장 객체(Built-in, Native) : 자바스크립트 엔진에 미리 정의되어있는 객체
        Number, Boolean, Date, RegEx, ... 와 같은 생성자 함수
        parseInt(), setTimeout(), setInterval(), ...과 같은 일반 함수
        전역객체(global, window)
    2-2. 호스트 객체 : 호스트가 브라우저인 경우
        ex. document, location, XmlHttpRequest
    2-3. 사용자 객체 : 자바스크립트 코드가 엔진에서 실행되면서 생성되는 런타임 객체
*/

undefVal = undefined;
intVal = 10;
boolVal = true;
strVal = 'hello';
funcVal = function () { };
objVal = {};
arrVal = [1,2,3];

console.log(undefVal + ":" + typeof(undefVal));
console.log(intVal + ":" + typeof(intVal));
console.log(boolVal + ":" + typeof(boolVal));
console.log(strVal + ":" + typeof(strVal));
console.log(funcVal + ":" + typeof(funcVal));
console.log(objVal + ":" + typeof(objVal));
console.log(arrVal + ":" + typeof(arrVal));

console.log("======================================");

intVal2 = new Number(10);
boolVal2 = new Boolean(false);
strVal2 = new String("Hello");
funcVal2 = new Function ("a", "b", "return a+b");
objVal2 = new Object();
arrVal2 = new Array();

console.log(intVal2 + ":" + typeof(intVal2));
console.log(boolVal2 + ":" + typeof(boolVal2));
console.log(strVal2 + ":" + typeof(strVal2));
console.log(funcVal2 + ":" + typeof(funcVal2));
console.log(objVal2 + ":" + typeof(objVal2));
console.log(arrVal2 + ":" + typeof(arrVal2));

// 원시타입과 원시타입을 wrapper 객체는 별 구분없이 연산 가능하다.
console.log(intVal + intVal2);
console.log(strVal + strVal2);

// 원시타입도 함수 호출이 가능하다? => 원시타입에서 메소드를 호출될 때 임시객체가 만들어져서 메소드를 호출한 후 사라진다(유사객체)
console.log(boolVal.valueof());
console.log(new Boolean(b).valueOf());