/*
자바스크립트의 객체는 function타입 /  object타입 2가지가 있다.
보통 function타입의 객체를 함수라고 부른다.
따라서 자바스크립 객체라고 불리는 것은 주로 object타입 객체를 가리킨다.
*/

// 생성방법1. new + 생성자 함수를 사용
let o1 = new Object();
o1.name = '둘리';
o1.age = 10;
o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;

// 생성방법2. {} literal 사용
let o2 = {};
o2.name = "둘리";
o2.age = 10;
o2.another = {};
o2.another.name = "마이콜";
o2.another.age = 30;

console.log(o2);

// 생성방법3. (J)ava(S)cript(O)bject(N)otation : 자바스크립트 객체 표기법을 사용하는 방법
let o3 = {
  name: "둘리",
  age: 10,
  another: {
    name: "마이콜",
    age: 30,
  },
};

console.log(o3);

// XmlHttpRequet 호스트(브라우저) 객체를 사용해서 통신에 많이 사용됨.
let response = '{"no": 1, "name": "안대혁", "email": "kickscar@gmail.com"}';
let user = eval("(" + response + ")");
console.log(typeof user);
console.log(user.no);
