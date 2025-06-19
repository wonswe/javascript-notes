// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌.
// 함수의 선언문은 선언 이전에도 호출이 가능함.

print();
// 함수가 선언되기 전에 호출해도 되는 이유는,
// 자바스크립트 엔진이 코드를 실행하기 전에 함수의 선언을 제일 위로 끌어올리기 때문

function print() {
  console.log('Hello');
}

// console.log(hi);
// ReferenceError: Cannot access 'hi' before initialization
let hi = 'hi';

// 변수 (let, const)와 클래스는 선언만 호이스팅이 되고, 초기화는 안된다.
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생

let func1 = function () {};

// const cat = new Cat();
class Cat {}
// ReferenceError: Cannot access 'Cat' before initialization

let x = 1;
{
  console.log(x);

  //   let x = 2;
  // ReferenceError: Cannot access 'x' before initialization
}
