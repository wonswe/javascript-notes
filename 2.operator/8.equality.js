// 동등 비교 관계 연산자 (Eqaulity Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == '2'); // true;
// 타입은 다르지만 숫자와 문자열을 비교할 때 문자열 '2'가 숫자로 자동으로 변환이 됨

console.log(2 === '2'); // false;
// 2 와 '2' 는 값 자체는 같지만 타입이 다르다

console.log(true == 1); // true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: 'js',
};

const obj2 = {
  name: 'js',
};

console.log(obj1 == obj2); // false
// 메모리 어딘가에 보관 된 오브젝트는 고유한 메모리 주소에 할당
// 각 변수에는 다른 메모리 주소가 들어있기 때문에 서로 다르다.

console.log(obj1 === obj2); // false
// 타입은 오브젝트로 같지만 각 메모리 주소가 (값 자체) 다르기 때문에 false

console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true

let obj3 = obj2; // obj2가 가리키고 있는 메모리 주소(참조값)를 복사해서 obj3에 복사

console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
// obj3와 obj2는 동일한 메모리 주소와 값을 가지고 있기 때문
