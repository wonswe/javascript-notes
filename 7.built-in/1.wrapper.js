// Wrapper 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123; // number 원시 타입

// number 원시 타입을 감싸고 있는 Number 객체로 감싸진다.
console.log(number.toString());

console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시 타입
console.log(text);
console.log(text.length); // String 객체
console.log(text.trim());
