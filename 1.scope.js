// scope 스코프 : 변수를 참조(접근)할 수 있는 유효한 범위
// 또는 식별자(변수, 함수, 클래스 이름)가 유효한 범위
// 선언된 위치에 따라 유효 범위가 결정됨

// 이름 충돌 방지, 메모리 절약

// 코드 블럭: { }, if() { }, for() { }, function() { }

// {
// 코드 블럭 안의 변수는 블럭 안에서만 유효
// }

// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다. ❌
{
  const a = 'a';
}

// console.log(a); // ReferenceError: a is not defined

const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다. ❌
function print() {
  const message = 'hello!';
  console.log(message);
}

// console.log(message); // ReferenceError: message is not defined

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다. ❌
function sum(a, b) {
  console.log(a, b);
}
// console.log(a, b);
