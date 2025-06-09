// 주어진 seconds(초)가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

// function runInDelay(callback, seconds) {
//     try {

//     }
// }

function execute() {
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 3000); // 3초 뒤에 실행
  console.log('3');
}

execute(); // 1
