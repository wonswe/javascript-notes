console.log(globalThis);
console.log(this);

console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
// 값으로 평가해서 출력 // 2

console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

console.log(parseFloat('12.45')); // 12.45
console.log(parseInt('12.45')); // 12
console.log(parseInt('12')); // 12

// URL (URI, Uniform Resource Identifier 의 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
// https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://드림코딩.com

// frontend - backend 통신할 때 유용하게 사용

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
// %EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com
