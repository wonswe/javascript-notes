// 객체 Object - 복합 데이터 {key: value}
// value에는 원시값, 객체값이 들어갈 수 있다.

// 서로 연관있는 속성과 행동을 묶어 준다
// - 순수 데이터 객체
// - 상태와 행동 객체 => 밀접하게 관련 있는 상태와 행동을 객체로 묶어야지!

let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

// 객체는 heap이라는 메모리 공간에 존재
// apple이라는 변수 자체는 실제 객체가 만들어진 메모리 주소를 가리킨다

// console.log(`apple's name is ${apple.name}`);

// Object Literal { key: value }
// new Ojbect()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let orange = {
  name: 'orange',
  'hello-bye': '✋',
  0: 1,
  ['hello-bye1']: '✋',
};

// 가능하면 camelCase를 이용해서 helloBye 의 형식으로 만드는게 좋다

// 속성, 데이터에 접근하기 위해서는
console.log(orange.name); // 마침표 표기법 dot notation

console.log(orange['hello-bye1']);
// 대괄호 표기법 bracket notation

// 모든 오브젝트의 키는 이렇게 접근 가능
orange['name'];

// 속성 추가
orange.emoji = '🍊';
console.log(orange.emoji);
console.log(orange['emoji']);
console.log(orange);

// 속성 삭제
delete orange.emoji;
console.log(orange);
