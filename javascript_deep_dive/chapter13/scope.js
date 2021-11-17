var a = 'grape';

function fruit() {
  var a = 'orange';
  console.log(a);
}

fruit();

console.log(a);

function fruit() {
  var a = 'lemon';
  var a = 'cherry';
  console.log(a);
}

fruit();

function color() {
  // let b = 'blue';
  let b = 'pink';
}

color();

// scope chain
var x = 'bear';
var y = 'piglet';

function winnieThePooh() {
  var z = 'tigger';

  function hero() {
    var x = 'pooh';
  }

  hero();
}

winnieThePooh();

console.log(x);

// function level scope
var one = 1;

if (true) {
  var one = 2;
}

console.log(one);