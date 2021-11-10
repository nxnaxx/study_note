// if...else statement
var num = 5;
var kind;

if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}

console.log(kind);

// switch statement
var season = 4;
var seasonName;

switch (season) {
  case 1:
    seasonName = 'Spring';
    break;
  case 2:
    seasonName = 'Summer';
    break;
  case 3:
    seasonName = 'Fall';
    break;
  case 4:
    seasonName = 'Winter';
    break;
  default:
    seasonName = 'Invalid season';
}

console.log(seasonName)