var me = {
  name: 'Kim'
};

// dot notation
console.log(me.name);

// bracket notation
console.log(me['name']);

// not exist
console.log(me.birth);

// update property
var myFavorite = {
  sport: 'futsal',
  instrument: 'guitar',
  game: 'The Legend of Zelda'
};

myFavorite.instrument = 'piano';

console.log(myFavorite);

// dynamic property
myFavorite.fruit = 'lemon';

console.log(myFavorite);

// delete property
delete myFavorite.game;

console.log(myFavorite);