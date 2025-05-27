// Generator - Iteration Protocol을 준수

// const multiple = {
//     [Symbol.iterator]() {
//       const max = 10;
//       let num = 0;
//       return {
//         next() {
//           return { value: num++ * 2, done: num > max };
//         },
//       };
//     },
//   };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // return을 하는 순간 generator가 끝난다
multiple.throw('Error!'); // 에러를 던질 수도 있다

next = multiple.next();
console.log(next.value, next.done);
