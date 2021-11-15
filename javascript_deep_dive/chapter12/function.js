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
