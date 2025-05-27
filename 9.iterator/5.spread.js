// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// ECMAScript 2018에 추가 되었다.

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(nums[0], nums[1], nums[2])); // 6
console.log(add(...nums)); // 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 3, 4, 5, 6, 2, 1); // [ 3, 4, 5, 6, 2, 1 ]

//  Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2); // concat을 이용해서 합친다.
console.log(arr); // [ '🍏', '🥝', '🍓', '🍌' ]
arr = [...fruits1, '🐧', ...fruits2];
console.log(arr); // [ '🍏', '🥝', '🐧', '🍓', '🍌' ]

// Object
const juwon = { name: 'juwon', age: 20, home: { address: 'home' } };
// home obj gets shallow copied
const updated = {
  ...juwon,
  job: 'software engineer',
};

console.log(juwon); // { name: 'juwon', age: 20, home: { address: 'home' } }
console.log(updated);
// {
//     name: 'juwon',
//     age: 20,
//     home: { address: 'home' },
//     job: 'software engineer'
//   }
