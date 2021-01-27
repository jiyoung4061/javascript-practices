/* Date */

// 현재시간
let now = new Date();
console.log(now);

// 2021년 1월 01일
let d = new Date(2021, 0/* month -1 */, 1);
console.log(d);

// 2021년 1월 1일 12:30:40
d = new Date(2021, 0, 1, 12, 30, 40);

// 객체 메소드
console.log(
    "년도 1" + (d.getFullYear() + 1900) + "\n" +
    "년도 2" + d.getFullYear() + "\n" +
    "월:" + d.getMonth() + "\n" +
    "일: " + d.getDate() + "\n" +
    "시:" + d.getHours() + "\n" +
    "분:" + d.getMinutes() + "\n" +
    "초:" + d.getSeconds() + "\n" +
    "밀리초:" + d.getMilliseconds() + "\n" 
);

d.setFullYear(2022);
console.log(d);
d.setMonth(11); // 12월!!
console.log(d);