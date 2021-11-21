// strict mode 적용
function foo() {
  'use strict';
  x = 1;
}

foo();

console.log(x);

// 즉시 실행 함수로 감싸는 것이 좋음
(function (){
  var y = 0;
  function foo() {
    'use strict';
    y = 10;
  }
  foo();
}());

// variable, parameter, function delete
(function() {
  'use strict';

  var a = 0;
  delete a;

  function foo(b) {
    delete b;
  }
  delete foo;
}());

// Duplicate parameter name
(function() {
  'use strict';

  function foo(x, x){
    return x + x;
  }

  console.log(foo(2, 4));
}());

// with statement
(function() {
  'use strict';

  with({x: 5}){
    console.log(x);
  }

  console.log(foo(2, 4));
}());

// this
(function() {
  'use strict';

  function foo(){
    console.log(this); // undefined
  }
  foo();
}());

// arguments
(function(x) {
  'use strict';

  x = 3;
  console.log(arguments);
}(2));