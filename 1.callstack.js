// 소스코드에서 동적으로 객체를 생성할 때 Memory Heap에 생성이 된다.

// 하나의 싱글 컨텍스트 스택 - 한번에 하나의 일만 처리, 싱글 쓰레드
// 자바스크립트는 기본적으로 동기적으로 진행

function a() {
  for (let i = 0; i < 1000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다');
const result = c();
console.log(result); // 3
