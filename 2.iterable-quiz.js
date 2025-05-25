// [Symbol.iterator](): Iterator{ next(): {value, done} };
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 - 두배값의 순회

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const iterator = array.values();
// while (true) {
//   const item = iterator.next();
//   if (item.done) break;
//   console.log(item.value * 2);
// }

const multiple = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const num of multiple) {
  console.log(num);
}
