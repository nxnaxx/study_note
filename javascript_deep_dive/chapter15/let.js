// Not allow duplicate declaration
let subject = 'Quantum physics';

let subject = 'Electromagnetics';

// block-level scope
let i = 5;

function foo() {
  let i = 10;

  for (let i = 3; i > 1; i--) {
    console.log(i);
  }

  console.log(i);
}
foo();
console.log(i);

// variable hoisting
console.log(color);

let color;
console.log(color);

color = 'black';
console.log(color);

let dog = 'Maltese';

{
  console.log(dog);
  let dog = 'Shih Tzu';
}