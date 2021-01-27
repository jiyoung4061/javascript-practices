/* function 객체를 생성하는 방법 */

// M1.
function f1(a, b) {
  return a + b;
}
console.log(typeof f1, f1(10, 20));

// M2. literal
let i = 10;
let f2 = function (a, b) {
  return a + b;
};
console.log(typeof f2, f2(10, 20));

// M3. Function 생성자 함수 사용 => 추천X
let f3 = new Function("a", "b", "return a + b;");
console.log(typeof f3, f3(10, 20));

// M4. Anonymous(익명)함수
// callback 함수 정의시 많이 사용됨.
/* 
    callback 함수란?
    즉시 실행되지 않고
        1. 이벤트가 발생한 경우
        2. 시간이 된 경우 => 아래 예시
        3. 통신하는 상대 시스템(프로그램)에서 응답이 온 경우 => ajax
        ...
    이런 경우에 실행되는 함수 ( 어떤 변화?에 따라 어떻게 작동할 지 )
*/
setTimeout(function () {
  console.log("time out!");
}, 1000);

// 즉시 실행 함수
/*  
    어떤 처리를 위해서 많은 변수들이 사용될 경우 전역에 두지 않고 블록에 두어 사용하고 즉시 버릴 때
    => 메모리를 효율적으로 사용할 수 있고 변수 관리가 용이
*/
let s = (function (a, b) {
  return a + b;
})(10, 20);
console.log(s);

// 가변 변수
var sum = function () {
  let sum = 0;

//   M1. 
//   for(let i = 0 ; i < arguments.length; i++){ // arguments들이 있음!
//     sum += arguments[i];
//   }
  
  Array.prototype.forEach.call(arguments, function (v) {
      sum += v;
  })
  

  return sum;
};
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

console.log("end...");
