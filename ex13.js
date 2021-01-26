/* String */

// 1. 배열처럼 접근 가능
let str = 'Hello world!';
for(let i = 0 ; i < str.length ; i++) {
    console.log(str[i]);
}

// 2. 문자열 합치기
let str1 = 'hello';
let str2 = 'world';
let str3 = str1 + ' ' +str2;
console.log(str3);

// 3. 캐스팅
let str4 = 5 + "5";
console.log(str4);

let str5 = "boolean:" + true;
console.log(str5);

// 4. 메소드
let str6 = "string1 string2 string3";
console.log(str6.length);

// indexOf
let index = str6.indexOf("string2");
console.log(index);

index = str6.indexOf("string4");
console.log(index); // 찾지 못하면 -1

// substr, substring
let s1 = str6.substr(10); // 10 ~ 끝
console.log(s1);

let s2 = str6.substr(10, 3 /*count*/); // 10, 11, 12
console.log(s2);

let s3 = str6.substring(10, 13 /*last index - 1*/); // 10, 11, 12
console.log(s3);

// split
let a = str6.split(" ");
console.log(a);

let str7 = "abcdef";
a = str7.split(":");
console.log(a);