// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('June 5, 2025'));
console.log(new Date('2025-12-25T03:24:00'));

console.log(Date.now());
console.log(Date.parse('2025-12-25T03:24:00'));

const now = new Date();
now.setFullYear(2024);
now.setMonth(0); // 0: January
console.log(now.getFullYear());
console.log(now.getDate()); // 0: January
console.log(now.getDay()); // 0 일요일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
// Fri Jan 12 2024 14:53:33 GMT-0500 (Eastern Standard Time)
console.log(now.toDateString());
// Fri Jan 12 2024
console.log(now.toTimeString());
// 14:54:05 GMT-0500 (Eastern Standard Time)
console.log(now.toISOString()); //ISO 8601 형식
console.log(now.toLocaleString('en-US')); // 1/12/2024, 2:55:01 PM
console.log(now.toLocaleString('ko-KR')); // 2024. 1. 12. 오후 2:55:01
