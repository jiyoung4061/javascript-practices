/*
    배열(Array)
*/

console.log("========== 1. 생성 : 생성자함수============");
let a1 = new Array();
console.log(typeof(a1));

// 배열 정의시, 크기는 중요하지X = 배열의 크기는 동적으로 늘어난다!
let a2 = new Array(10);
console.log(a2.length);

a2[0] = 0;
a2[1] = 1;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;
console.log(a2.length);

// 배열 요소에 값을 대입하지 않으면 undefined
console.log(a2[2], a2[3]);

console.log("========== 2. 생성 : 리터럴 ===========");
let a3 = [];
console.log(typeof(a3) + " : " + a3.length);

// 다른 타입의 요소를 저장할 수 O
let a4 = [
    function () {
        console.log('hello!');
    },
    20,
    'javascript',
    true,
    {
        email : "kickscar@naver.com",
        name: "안대혁",
    },
    null,
    undefined
]

// ForEach
a4.forEach(function (v, index) {
    console.log(index + " : " + typeof(v) + " : " + v);
})

a4[0]();

console.log("========== 3. Array VS Object============");
a5 = [];
a5[0] = 0;
a5["1"] = 1;
// 객체처럼 사용됨!
a5["name"] = '뭐지?';
console.log(a5[0], a5["0"], a5[1], a5["1"], a5.name, a5.length);

o = {};
o[0] = 0;
o["1"] = 1;
// o.name = "오지영";
o["name"] = "오지영";

console.log(o[0], o["0"], o[1], o["1"], o.length); // 객체는 length가 없다!

// forIn : 객체 property에 접근하기위해 사용
for(property in o){
    console.log(property + " : " + o[property]);
}