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

console.log(`apple's name is ${apple.name}`);
