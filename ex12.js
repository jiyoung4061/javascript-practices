/* 배열 확장 : 리스트 메소드 추가하기 */
Array.prototype.insert = function (index, value) {
    if (value instanceof Array) {
    //   for (let i = 0; i < value.length; i++) {
    //     this.splice(index++, 0, value[i]); // index++ : 후위증가로 splice한 후 ++실행됨!
    //     this.splice(index, 0, value[i]); // 위에 한줄과 같음!
    //     index++;
    //   }
        const _this = this;
        value.forEach(function (v) {
            // 해당 함수를 실행시키는 this => global 따라서 외부에 closer?를 설정해줘야함!(line 9)
            _this.splice(index++, 0, value[i]);
        });
    } else {
      this.splice(index, 0, value);
    }
}

Array.prototype.remove = function (index) {
    this.splice(index, 1);
}

// 리스트로 사용하기
let a = [1,2,4];
a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']);   // 기대 : [1, 2, 'a', 'b', 'c']
console.log(a);                 // 결과 : [1, 2, ['a', 'b', 'c']]



let b = ['a','b','c'];
a.insert(2,b);
console.log(a);