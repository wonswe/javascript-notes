// 엄격 모드 Strict Mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

'use strict';

var x = 1;
// delete x;
// SyntaxError: Delete of an unqualified identifier in strict mode.

function add(x) {
  var a = 2;
  b = a + x; // 키워드 생략 불가능
  console.log(this);
}
// add(1);
// ReferenceError: b is not defined

const array = [1, 2, 3];
for (let num of array) {
  // let이나 const 키워드로 선언을 꼭 해야함
  console.log(num);
}
