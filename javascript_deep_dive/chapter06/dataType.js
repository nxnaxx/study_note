// number type
var integer = 5;
var double = 5.24;
var negative = -20;

// number type은 모두 실수로 처리됨
console.log(1 === 1.0);
console.log(3 / 2);

// number type의 세 가지 특별한 값
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * 'String');

// string type
var str1, str2, str3;
str1 = 'single quote str';
str2 = "double quote str";
str3 = `backtick str`;

console.log(str1);
console.log(str2);
console.log(str3);

str4 = '당근은 "carrot"입니다.';
str5 = "좋아하는 향수는 'Jomalone'이다.";

console.log(str4);
console.log(str5);

// escape sequence
var escapeSeq = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(escapeSeq);

// multi-line string
var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);

// + 연산자
var hobby = "playing futsal"

console.log('My hobby is ' + hobby + '.');

// expression interpolation
console.log(`My hobby is ${hobby}.`);

// boolean type
var bool = true;
console.log(bool);

// undefined
var apple;
console.log(apple);

// symbol type
// symbol값 생성
var key = Symbol('key');

// 객체 생성
var obj = {};

// 충돌 위험이 없는 값을 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]);