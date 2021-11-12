var favorite = {
  sport: 'futsal'
};

console.log(favorite);

favorite.sport = 'soccer';
favorite.music = 'POP';

console.log(favorite);

// pass by reference
var babyAnimal = {
  dog: 'puppy',
  sheep: 'lamb'
};

var copy = babyAnimal;

console.log(copy);

// strict equality comparison
var obj1 = {
  color: 'blue'
};

var obj2 = {
  color: 'blue'
};

console.log(obj1 === obj2);
console.log(obj1.color === obj2.color);