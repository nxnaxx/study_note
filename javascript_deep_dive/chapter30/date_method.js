// new Date()
new Date(); //Mon Nov 22 2021 16:48:20 GMT+0900 (대한민국 표준시)

// new Date(milliseconds)
new Date(0); // Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)

new Date(86400000); // Fri Jan 02 1970 09:00:00 GMT+0900 (대한민국 표준시)

// new Date(dateString)
new Date('February 15, 2010 04:00:00'); // Mon Feb 15 2010 04:00:00 GMT+0900 (대한민국 표준시)

new Date('1999/01/26 04:00:00'); // Mon Feb 15 2010 04:00:00 GMT+0900 (대한민국 표준시)

// new Data(year, month...)
new Date(2021, 11, 25, 10, 00, 00, 00, 0);

// Date.now
Date.now(); // 1637582636286

// Date.parse
Date.parse('Jan 2, 1970 09:00:00'); // 86400000

// Date.UTC
Date.UTC(2021, 10, 22); // 1637539200000

// Date.prototype.getFullYear
new Date('2021/11/22').getFullYear(); // 2021

// Date.prototype.setFullYear
const today = new Date();

today.setFullYear(1999, 11, 5);
today.getFullYear(); // 1999

// Date.prototype.getMonth
new Date('2010/02/15').getMonth(); // 1

// Date.prototype.setMonth
today.setMonth(4);
today.getMonth(); // 5

// Date.prototype.getDate
new Date('2010/02/15').getDate(); // 15

// Date.prototype.setDate
today.setDate(10);
today.getDate(); // 10

// Date.prototype.getDay
new Date('2010/02/15').getDay(); // 1

// Date.prototype.getHours
new Date('2010/02/15/10:00').getHours(); // 10

// Date.prototype.setHours
today.setHours(21);
today.getHours(); // 21

// Date.prototype.getMinutes
new Date('2010/02/15/10:35').getMinutes(); // 35

// Date.prototype.setMinutes
today.setMinutes(25);
today.getMinutes(); // 25

// Date.prototype.getSeconds
new Date('2010/02/15/10:35:18').getSeconds(); // 18

// Date.prototype.setSeconds
const today = new Date();

today.setSeconds(58);
today.getSeconds(); // 58

// Date.prototype.getMilliseconds
new Date('2010/02/15/10:35:18:660').getMilliseconds(); // 660

// Date.prototype.setMilliseconds
const today = new Date();

today.setMilliseconds(178);
today.getMilliseconds(); // 178

// Date.prototype.getTime
new Date('2010/02/15/10:35').getTime(); // 1266197700000

// Date.prototype.setTime
today.setTime(86400000);
console.log(today);

// Date.prototype.getTimezoneOffset
today.getTimezoneOffset() / 60; // -9

// Date.prototype.toDateString
const today = new Date('2021/11/22/18:30');

today.toString(); // Mon Nov 22 2021 18:30:00 GMT+0900 (대한민국 표준시)
today.toDateString(); // Mon Nov 22 2021

// Date.prototype.toTimeString
today.toTimeString(); // 18:30:00 GMT+0900 (대한민국 표준시)

// Date.prototype.toISOString
today.toISOString(); // 2021-11-22T09:30:00.000Z

today.toISOString().slice(0, 10); // 2021-11-22
today.toISOString().slice(0, 10).replace(/-/g, ''); // 20211122

// Date.prototype.toLocaleString
today.toLocaleString('ko-KR'); // 2021. 11. 22. 오후 18:30:00
today.toLocaleString('en-US'); // 11/22/2021, 18:30:00 PM
today.toLocaleString('ja-JP'); // 2021/11/22 18:30:00

// Date.prototype.toLocaleTimeString
today.toLocaleTimeString('ko-KR'); // 오후 18:30:00
today.toLocaleTimeString('en-US'); // 18:30:00 PM
today.toLocaleTimeString('ja-JP'); // 18:30:00