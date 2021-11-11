var me = {
  name : 'Kim',
  intro : function() {
    console.log(`My name is ${this.name}`);
  }
};

console.log(typeof me);
console.log(me);

// method
var square = {
  side: 4,

  getArea: function() {
    return this.side * this.side;
  }
};

console.log(square.getArea());