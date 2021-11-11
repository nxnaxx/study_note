// to string type
// 1. 문자열 연결 연산자 이용
// number -> string
5 + '2'; // "52"
NaN + ''; // "NaN"

// boolean -> string
true + ''; // "true"
false + ''; // "false"

// 2. string 생성자 함수를 new 연산자 없이 호출
// number -> string
String(5); // "5"

// boolean -> string
String(true); // "true"
String(false); // "false"

// 3. Object.prototype.toString 메서드 사용
// number -> string
(5).toString(); // "5"
(NaN).toString(); // "NaN"

// boolean -> string
(true).toString(); // "true"
(false).toString(); // "false"


// to number type
// 1. + 단항 산술 연산자 / * 산술 연산자 이용
// string -> number
+'2'; // 2
'2' * 1; // 2

// boolean -> number
+true; // 1
false * 1; // 0

// 2. number 생성자 함수를 new 연산자 없이 호출
// string -> number
Number('2'); // 2
Number('18.23'); // 18.23

// boolean -> number
Number(true); // 1
Number(false); // 0

// 3. parseInt.parseFloat 함수 사용 (문자열만 가능)
// string -> number
parseInt('2'); // 2
parseInt('-5'); // -5


// to boolean type
// 1. ! 부정 논리 연산자를 두 번 사용
// string -> boolean
!!'a'; // true
!!''; // false

// number -> boolean
!!1; // true
!!0; // false
!!NaN; // false
!!Infinity; // true

// null, undefined -> boolean
!!null; // false
!!undefined; // false

// object -> boolean
!!{}; // true
!![]; // true

// 2. boolean 생성자 함수를 new 연산자 없이 호출
// string -> boolean
Boolean('a'); // true
Boolean('false'); // true

// number -> boolean
Boolean(1); // true
Boolean(0); // false
Boolean(NaN); // false
Boolean(Infinity); // true

// null, undefined -> boolean
Boolean(null); // false
Boolean(undefined); // false

// object -> boolean
Boolean({}); // true
Boolean([]); // true