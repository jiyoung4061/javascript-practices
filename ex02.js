/* null & undefined */

var myVar1;
var myVar2=null;

console.log(myVar1+":"+myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));

console.log(myVar1 == myVar2);  // 값비교
console.log(myVar1 === myVar2); // 타입비교

console.log("============================");

// ==: equality, 값의 동치성, 형변환 O
console.log(1=="1");
console.log(true==1);
console.log('abc' == new String('abc'));

console.log(true + 10);
console.log("abc" + new String("abc"));
console.log(1 + "1");
console.log("1" + 1);

console.log("============================");

// ===: indentify, 객체의 동일성, 형변환X
console.log(2==="2");
console.log(true === 1);
console.log('abc'=== new String('abc'));

console.log("============================");

// 추천 방법 : 엄격하게 형변환을 해서 두 타입을 비교한다.
var str = "5";
console.log(parseInt(str) == 5);
