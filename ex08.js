let MyObject = function (name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bit academy';
MyObject.prototype.course = 'java fullstack';
MyObject.prototype.info = function () {
    console.log(this.name + " : " + this.age + " : "+ this.school + " : " + this.course);
}

// MyObject객체 생성 1
let o1 = new MyObject('둘리', 10);
o1.school = 'multi-campus';
o1.course = ''

// MyObject객체 생성 2
let o2 = new MyObject('마이콜', 30);
console.log(o2.school);
//오버라이딩
o2.info = function () {
    console.log("비밀!");
}

o2.info();