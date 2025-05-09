// 일급객체 first-class object
// 일반 객체처럼 모든 연산이 가능한 것
// - 함수의 매개변수로 전달
// - 함수의 반환값
// - 할당 명령문
// - 동일 비교 대상

// 일급함수 first-class function
// 함수가 일반 객체처럼 모든 연산이 가능한 것
// - 함수의 매개변수로 전달
// - 함수의 반환값
// - 할당 명령문
// - 동일 비교 대상
// ex. Java, Swift, Kotlin, Python

// 고차함수 higher-order function
// - 인자로 함수를 받거나 (콜백함수)
// - 함수를 반환하는 함수

// 콜백함수
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const remainder = (a, b) => a % b;
const expo = (a, b) => a ** b;

function calculator(a, b, action) {
  let result = action(a, b);
  console.log(result);
  return result;
}

// 전달된 action은 콜백함수이다.
// 전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
// 그래서 함수는 고차함수 내부에서 필요한 순간에 나중에 호출이 됨

calculator(1, 2, add); // 호출하지 않고 함수를 가리키는 주소를 전달
calculator(2, 4, multiply);
calculator(9, 3, divide);
calculator(9, 5, remainder);
calculator(2, 4, expo);
