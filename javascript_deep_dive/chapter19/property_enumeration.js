// in operator
const favorite = {
  color: 'blue',
  fruit: 'lemon'
};

console.log('color' in favorite);
console.log('animal' in favorite);

console.log('toString' in favorite);

// Reflect.has method
console.log(Reflect.has(favorite, 'color'));
console.log(Reflect.has(favorite, 'toString'));

// Object.prototype.hasOwnProperty
console.log(favorite.hasOwnProperty('fruit'));
console.log(favorite.hasOwnProperty('toString'));

// for... in
for (const key in favorite) {
  console.log(`${key}: ${favorite[key]}`);
}

console.log(Object.keys(favorite));
console.log(Object.values(favorite));
console.log(Object.entries(favorite));