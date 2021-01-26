// URL 다루기
let url = 'http://localhost:8080/mysite3/user?n=오지영';

// 1. escape (x) : URL을 전부 Encoding, deprecated =>추천방법X
let url2 = escape(url);
console.log(url2);

// 2. encodeURI (o)
let url3 = encodeURI(url);
console.log(url3);

// window.location.href=url // url로 redirect됨!

// 3. encodeURIComponent (o) : component만 encoding함
let url4 = encodeURIComponent(url);
console.log(url4);

// 3-1. encodeURIComponent 사용 예
var o = {
    no : 10,
    name : '오지영',
    email : 'jiyoung@naver.com'
}

url = 'http://localhost:8080/mysite3/user';
url += '?';
url += ('no=' + encodeURIComponent(o.no));
url += ('&name=' + encodeURIComponent(o.name));
url += ('&email=' +encodeURIComponent(o.email));

console.log(url);

let toQueryString = function (o) {
  // QueryString ? 요청이 들어간 String
  let qs = [];
  for(property in o){
      qs.push(property + '=' + encodeURIComponent(o[property]));
  }
  return qs.join('&');
} 
url = 'http://localhost:8080/mysite3/user';
url += '?';
url += toQueryString(o);
console.log(url);