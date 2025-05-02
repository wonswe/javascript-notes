// 변수, variables: 
// 값을 저장하는 공간
// 자료를 저장할 수 있는 이름이 주어진 기억장소

// let 재할당 가능, 변경 가능
let a = 1;
a = 2;

// const 재할당 불가능, 변경 가능 
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; // 이렇게 하면 안됨
// TypeError: Assignment to constant variable.

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
let apple = {
    name: 'apple',
    color: 'red',
    display: '🍎',
};
// apple = {}; 불가능
// 한번 할당하고 그 뒤로도 재할당이 불필요한 경우에는 const
// let 보다는 const를 사용하는 것이 더 좋다

console.log(apple); 
// { name: 'apple', color: 'red', display: '🍎' }
apple.name = 'orange';
apple.display = '🍏';
console.log(apple); 
// { name: 'orange', color: 'red', display: '🍏' }