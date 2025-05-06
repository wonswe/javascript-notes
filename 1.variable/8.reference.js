// 원시 - Primitive Type
// 메모리 셀 안에 존재 (값 자체)
// Copy by Value - 값이 복사되어 전달됨

let a = 1;
let b = a;
b = 2;
console.log(a); // 1
console.log(b); // 2

// 객체 - Object Type
// 객체가 들어있는 메모리 주소를 보관 (참조값)
// Copy by Reference - 참조값 (메모리 주소, 레퍼런스)가 복사되어 전달됨

let apple = { // 0x1234
    name: '사과',
}

let orange = apple; // 0x1234
orange.name = '오렌지';

console.log(apple); // { name: '오렌지' }
console.log(orange); // { name: '오렌지' }

