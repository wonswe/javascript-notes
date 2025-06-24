/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this); // { x: 0 }
console.log(globalThis);
// globalThis.setTimeout()
// setTimeout() - globalThis 생략 가능
console.clear();

/**
 * 함수 내부에서의 this
 * 'use strict' (엄격모드) 사용하면 함수 내부에서의 this가 없기 때문에 undefined
 * 느슨한 모드에서는 global 전역에서의 this란 global 객체를 가리킨다
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
