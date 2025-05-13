const num1 = 123;
const num2 = new Number(12);
console.log(num1); // 123
console.log(num2); // [Number: 123]
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE);
// 1.7976931348623157e+308 (1.7976931348623157 x 10^308)
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2 (1.02 x 10^2)

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // 1234 (문자열)

// 숫자를 문자열로 변환
console.log(num4.toString()); // 1234.12 (문자열)

// 그 나라 지역 언어에 맞게 출력 예) 아랍어
console.log(num4.toLocaleString('ar-EG')); // ١٬٢٣٤٫١٢

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5)); // 1234.1
console.log(num4.toPrecision(4)); // 1234
console.log(num4.toPrecision(3));
//  1.23e+3 // 전체 자릿수 표기가 안될 때는 지수표기법

console.log(Number.EPSILON);
// 2.220446049250313e-16
// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num); // 0.10000000000000003
// 우리는 10진수로 계산하지만 자바스크립트 내부에서는
// 10진수를 2진수 (0과 1로 나타낼 수 있는) 로 각각 변환해서 계산한다
// 그리고 2진수를 다시 10진수로 반환한다. 이 과정에서 정확하게 부동소수점까지
// 계산 되지 않음. 이런 작은 오차를 나타내는 것이 EPSILON

function isEqual(original, expected) {
  //   return original === expected;
  return Math.abs(original - expected) < Number.EPSILON; // true
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // false (작은 미세한 차이)
