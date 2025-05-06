// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a); // 0

a++; // a = a + 1
console.log(a); // 1
a--; // a = a - 1
console.log(a); // 0

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고 필요한 연산을 함

// a-- 필요한 연산을 하고, 그 뒤 값을 감소시킴
// --a 값을 먼저 감소하고 필요한 연산을 함

a = 0;
let b = a++; // a가 0인 상태에서 b에 할당한 후 a를 증가시킴
console.log(b); // 0
console.log(a); // 1

a = 0;
b = ++a; // a에서 1이 증가한 값을 b에 할당
console.log(b); // 1
console.log(a); // 1

a = 0;
b = a--;
console.log(b); // 0
console.log(a); // -1

a = 0;
b = --a;
console.log(b); // -1
console.log(a); // -1

a = 0;
console.log(a++); // 0 필요한 연산 (출력)을 하고 나서 1이 증가됨
console.log(a); // 1
