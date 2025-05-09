// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력한다
// 5, 순회하는 숫자의 두배값을 다 출력한다

// My Solution

// const print = (max) => {
//   for (let i = 1; i < max + 1; i++) {
//     console.log(i);
//   }
// };

// const twice = (max) => {
//   for (let i = 1; i < max + 1; i++) {
//     console.log(i * 2);
//   }
// };

// function iterate(max, action) {
//   const result = action(max);
//   console.log(result);
//   return result;
// }

// iterate(5, print);
// iterate(5, twice);

// Teacher's Solution

function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(3, log);
iterate(3, doubleAndLog);

iterate(2, (num) => console.log(num));
iterate(2, (num) => console.log(num * 2));

setTimeout(() => {
  console.log('3초뒤 이 함수가 실행됩니다.');
}, 3000);
