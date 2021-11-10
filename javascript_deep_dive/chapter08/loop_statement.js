// for statement
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <=6; j++) {
    if (i + j === 6) {
      console.log(`[${i}, ${j}]`);
    }
  }
}

// while statement
var count = 0;

while (count < 3) {
  console.log(count);
  count++;
}

// infinite loop
var infCount = 0;

while (true) {
  console.log(infCount);
  infCount++;

  if (infCount === 3) break;
}

// do while statement
var dwCount = 0;

do {
  console.log(dwCount);
  dwCount++;
} while (dwCount < 3);

// label statement
label : {
  console.log(2);
  break label;
  console.log(4);
}

console.log('Done!');

// for label statement
outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner [${i}, ${j}]`);
  }
}

console.log('Done!');

// continue statement
var string = 'Quantum mechanics';
var search = 'a';
var count = 0;

for (var i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;
  count++;
}

console.log(count);