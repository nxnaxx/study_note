const favorite = new Object();

favorite.sport = 'futsal';
favorite.intro = function () {
  console.log(`My favorite sport is ${this.sport}`);
};

console.log(favorite);
favorite.intro();

// The disadvantage of object literal
const circle1 = {
  radius: 2,
  circumference() {
    return 2 * 3.14 * this.radius;
  }
};

console.log(circle1.circumference());

const circle2 = {
  radius: 6,
  circumference() {
    return 2 * 3.14 * this.radius;
  }
};

console.log(circle2.circumference());

// The advantage of constructor
function Circle(radius) {
  this.radius = radius;
  this.circumference = function() {
    return 2 * 3.14 * this.radius;
  };
}

const circle3 = new Circle(2);
const circle4 = new Circle(6);

console.log(circle3.circumference());
console.log(circle4.circumference());