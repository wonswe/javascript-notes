// 이터레이션 : 반복, 순회
// 프로토콜 : 규격, 약속, 인터페이스

// 순회가 가능한 이터레이션 프로토콜 Iteration Protocol
// for...of spread
// Array String Map Set

// Iterable 프로토콜 (인터페이스)
// 순회가 가능한 객체가 되려면 iterable protocol을 따르면 된다.

// {
//     [Symbol.iterator](): Iterator 프로토콜
//  {
//     next(): 다음값 1, 2, 3, ...
//  }
// }

const array = [1, 2, 3];
for (const item of array) {
  console.log(item); // 배열 안에 있는 아이템들을 순회하며 1, 2, 3 순차적으로 츨력
}

// const obj = { 0: 1, 1: 2 };
// for (const item of obj) {
//   console.log(item);
//   // TypeError: obj is not iterable
// }

for (const item of array.values()) {
  // 1, 2, 3 순차적으로 출력
  console.log(item);
}

for (const item of array.keys()) {
  // 0, 1, 2 키를 순차적으로 출력
  console.log(item);
}

for (const item of array.entries()) {
  console.log(item); // 엔트리 모두 출력
  // [ 0, 1 ]
  // [ 1, 2 ]
  // [ 2, 3 ]
}

// Iterable 하다는건 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;

// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있음

// 순회가 가능하면 for..of, spread 사용할 수 있다.

const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item); // 0, 1 key를 출력
}

const iterator = array.values();

// console.log(iterator.next());
// { value: 1, done: false }
console.log(iterator.next().value);
// 1
console.log(iterator.next().value);
// 2
console.log(iterator.next().value);
// 3
console.log(iterator.next().value);
// undefined
console.log(iterator.next().done);
// true - 반복이 끝났다.

// 반환된 이터레이터를 가지고 next()를 호출하면 계속 그 다음 값이 반환이 됨
// next().value 를 이용해서 접근이 가능하다.

const iteratorW = array.values();
while (true) {
  const item = iteratorW.next();
  if (item.done) break;
  console.log(item.value);
} // 1, 2, 3
