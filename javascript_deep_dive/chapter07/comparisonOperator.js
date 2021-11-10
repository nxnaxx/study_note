// loose equality
console.log(5 == 5);
console.log(5 == '5');

// strict equality
console.log( 5 === 5);
console.log(5 === '5');

// NaN
console.log(NaN === NaN);

console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN(1 + undefined));

// zero
console.log(0 === -0);
console.log(0 == -0)

// object.is method
console.log(Object.is(-0, +0));
console.log(Object.is(NaN, NaN));

// not loose equality & not strict equality
console.log(5 != 8);
console.log(5 != 5);
console.log(5 != '5');

console.log(5 !== 8);
console.log(5 !== 5);
console.log(5 !== '5');

// inequality
console.log(5 > 2);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 <= 5);
