// [Symbol.iterator](): Iterator{ next(): {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 - 두배값의 순회
const iterator = array.values();

const multiple = {
  [Symbol.iterator]() {},
};

for (const num of multiple) {
  console.log(num); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
}
