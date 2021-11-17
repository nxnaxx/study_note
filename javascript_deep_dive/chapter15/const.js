// declaration and initialization & block-level scope
const a;
const b = 1;

// variable hoisting
{
  console.log(x);
  const x = 5;
  console.log(x);
}

console.log(x);

// constant
const IR = 0.3
let savings = 10000;
let totalAmount = savings + (savings * IR);

console.log(totalAmount);

// const and object
const tomNJerry = {
  tom: 'cat',
  jerry: 'rat'
};

tomNJerry.jerry = 'mouse';

console.log(tomNJerry);