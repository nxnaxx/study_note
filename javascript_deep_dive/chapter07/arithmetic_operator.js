// binary arithmetic operator
console.log(5 + 2);
console.log(4 - 1);
console.log(8 * 2);
console.log(9 / 5);
console.log(3 % 2);


// unary arithmetic operator
var x = 2;

// 선할당 후증가(postfix increment operator)
postfIn = x++;
console.log(postfIn, x);

// 선증가 후할당(prefix increment operator)
prefIn = ++x;
console.log(prefIn, x);

// 선할당 후감소(postfix decrement operator)
postfDe = x--;
console.log(postfDe, x);

// 선감소 후할당(prefix decrement operator)
prefDe = --x;
console.log(prefDe, x);

// unary plus
// string -> number (O)
var plusA = '5';
console.log(+plusA);

// string -> number (X)
var plusStr = 'blue';
console.log(+plusStr);

// boolean -> number
var plusB = true;
var plusC = false;
console.log(+plusB);
console.log(+plusC);

// unary minus
console.log(-8);

// string -> number (O)
var minusA = '5';
console.log(-minusA);

// string -> number (X)
var minusStr = 'red';
console.log(-minusStr);

// boolean -> number
var minusB = true;
var minusC = false;
console.log(-minusB);
console.log(-minusC);


// implicit coercion
// string connection
strConnect = '2' + 5;

console.log(strConnect);
console.log(typeof strConnect);

// boolean + number
console.log(1 + true);
console.log(1 + false);

// null + number
console.log(1 + null);

// undefined + number
console.log(1 + undefined);