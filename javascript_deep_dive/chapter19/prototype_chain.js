// prototype chain
function Hobby(sport) {
  this.sport = sport;
}

Hobby.prototype.intro = function() {
  console.log(`My hobby is ${this.sport}`);
};

const me = new Hobby('futsal');

console.log(me.hasOwnProperty('sport'));

// instanceof operator
const parent = {};

Object.setPrototypeOf(me, parent);

console.log(me instanceof Hobby);
console.log(me instanceof Object);

// 