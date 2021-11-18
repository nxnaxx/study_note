function Triangle(side) {
  this.side = side;
}

Triangle.prototype.getArea = function() {
  return Math.sqrt(3) / 4 * this.side ** 2;
};

const triangle1 = new Triangle(2);
const triangle2 = new Triangle(4);

console.log(triangle1.getArea());
console.log(triangle2.getArea());