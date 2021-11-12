// array-like object
var sport = 'FUTSAL';

console.log(sport[3]);
console.log(sport.length);
console.log(sport.toLowerCase());

sport[0] = 'f';

console.log(sport);

// pass by value
var fruit = 'lemon';
var copy = fruit;

console.log(fruit, copy);
console.log(fruit === copy);

fruit = 'cherry';

console.log(fruit, copy);
console.log(fruit === copy);