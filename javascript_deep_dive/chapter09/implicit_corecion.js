// to string type
// number
5 + '' // "5"
-10 + '' // "-10"
NaN + '' // "NaN"

// boolean
true + '' // "true"
false + '' // "false"

// null, undefined
null + '' // "null"
undefined + '' // "undefined"

// object
[5, 10] + '' // "5, 10"
(function(){}) + '' // "function(){}"
Array + '' // "function Array() { [native code] }"


// to number type
// string
+'' // 0
+'10' // 10
+'carrot' // NaN

// boolean
+true // 1
+false // 0

// null, undefined
+null // 0
+undefined // NaN

// object
+{} // NaN
+[] // 0
+[5, 10] // NaN
+(function(){}) // NaN


// to boolean type
// 인수가 Falsy 값이면 false, Truthy 값이면 true 반환
function isFalsy(a) {
  return !!a;
}

console.log(isFalsy(false));
console.log(isFalsy(undefined));
console.log(isFalsy(null));
console.log(isFalsy(0));
console.log(isFalsy(-0));
console.log(isFalsy(NaN));
console.log(isFalsy(''));

console.log(isFalsy('0'));
console.log(isFalsy([]));
console.log(isFalsy({}));
console.log(isFalsy(true));