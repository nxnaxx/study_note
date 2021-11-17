// Allow duplicate declaration
var x = 1;
var y = 2;

var x = 3;

console.log(x);
console.log(y);

// function level scope
var i = 15;

for (var i = 1; i < 10; i += 2) {
  console.log(i);
}

console.log(i);

// variable hoisting
console.log(animal);

animal = 'red panda';

console.log(animal);

var animal;