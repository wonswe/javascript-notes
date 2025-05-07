// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식) {코드블럭}
// 실행순서:
// 1. 변수선언문 (변수 초기화)
// 2. 조건식의 값이 참이면 { } 코드 블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될때까지 2번과 2번을 반복

for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i += 2) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한루프 초기화 x 조건 x 증가 x -> 무한반복
// for (;;) {
//     console.log('😅');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // 아래 있는 코드는 무시하고 그 다음 반복으로 넘어 감
    console.log('i가 드디어 10이 되었다!');
    break; // 특정한 조건에 for loop을 종료하고 싶을 때
  }
  console.log(i);
}

// continue 와 break 를 사용해서 반복문 내에서 코드를 제어할 수 있다
