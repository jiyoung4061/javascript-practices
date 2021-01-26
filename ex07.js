let o = {
    name : '둘리',
    age: 10,
    isFemale : false
}

let f = function () {
    console.log("Hello World!");
}

let i = 10;
let n = new Number(10);

f();
console.log(o);

console.log("========객체(object, function) 확장===========");

o.another = {
    name: '마이콜',
    age : 30,
}

console.log(o);

f.another = {
    name: '또치',
    age: 10,
    info: function () {
        console.log(this.name + " : " + this.age);
    }
}

console.log(f.another);
f.another.info();

console.log("===========기본타입(primitive type) 저장 X ==============");
i.another = {};
console.log(i.another);