// 논리곱(&&) 연산자
'blue' && 'green' // green
false && 'green' // false
'blue' && false // false

// 논리합(||) 연산자
'blue' || 'green' // blue
false || 'green' // green
'blue' || false // blue

// optional chaining
var element = null;

var value = element?.value;
console.log(value);

var str = '';

var length = str?.length;
console.log(length);

// nullish coalescing
var nullcoa = null ?? 'right';
console.log(nullcoa);

// OR operator
var orOpr = '' || "right";
console.log(orOpr);