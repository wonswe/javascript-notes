// while (조건) {}
// 조건이 false가 될때까지 {} 코드를 반복실행

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('아직살아있다!');
  if (i === 10) {
    break;
  }
  i++;
}

do {
  // 한번 실행한 뒤 조건을 봄
  console.log('do-while 아직살아있다!');
} while (isActive);
