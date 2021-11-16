// function?
function mul(a, b) {
  return a * b;
}

console.log(mul(3, 5));

// function declaration
function add(a, b) {
  return a + b;
}

console.dir(add);
console.log(add(4, 6));

// function expression
var sub = function (x, y) {
  return x - y; 
};

console.log(sub(10, 5));

// function declaration VS function expression
// function call
console.log(declAdd(4, 6));
// console.log(expAdd(4, 6)); // TypeError

function declAdd(x, y) {
  return x + y;
}

var expAdd = function (x, y) {
  return x + y;
};

// arrow function
const div = (x, y) => x / y;
console.log(div(10, 8));

// IIFE
(function () {
  var x = 8;
  var y = 5;
  return x * y;
}());

var immed = (function () {
  var x = 8;
  var y = 5;
  return x * y;
}());

console.log(immed);

immed = (function (a, b) {
  return a * b;
}(8, 5));

console.log(immed);

// recursive function
function countDown(num) {
  if (num === 0) return ;
  console.log(num);
  countDown(num - 1);
}

countDown(5);

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.log(`1! = ${fact(1)}`);
console.log(`2! = ${fact(2)}`);
console.log(`3! = ${fact(3)}`);
console.log(`4! = ${fact(4)}`);
console.log(`5! = ${fact(5)}`);

// nested function
function outer() {
  var a = 5;

  function inner() {
    var b = 3;
    console.log(a + b);
  }

  inner();
}

outer();

// callback function
function odd(num, cb) {
  for (i = 1; i < num; i++) {
    cb(i);
  }
}

var high = function (i) {
  if (i % 2 !== 0) console.log(i);
};

odd(10, high);