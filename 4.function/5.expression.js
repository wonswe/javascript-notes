// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 2));

divide = (a, b) => a / b;
console.log(divide(6, 3)); // 2

// 생성자 함수 const object = new Function(); // 객체편에서 다룸

// IIFE: (Immediately-Invoked Function Expressions)
(function run() {
  console.log('🐧');
})(); // Not very common
