// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍎', '🍊', '🍌', '🍏'];

// 특정 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 0

// 배열 안에 특정한 아이템이 있는지 확인
console.log(fruits.includes('🍎')); // true

// 추가 - 제일 뒤
let length = fruits.push('🫐');
// 배열 자체를 수정 (업데이트), 업데이트 된 배열의 길이를 반환
console.log(fruits); // [ '🍎', '🍊', '🍌', '🍏', '🫐' ]
console.log(length); // 5

// 추가 - 제일 앞
length = fruits.unshift('🍓');
// Inserts new elements at the start of an array, and returns the new length of the array.
console.log(fruits); // [ '🍓', '🍎', '🍊', '🍌', '🍏', '🫐' ]
console.log(length); // 6

// 제거 - 제일 뒤에서 제거 (배열 자체 수정), 제거된 아이템을 반환
let lastItem = fruits.pop();
console.log(fruits); // [ '🍓', '🍎', '🍊', '🍌', '🍏' ]
console.log(lastItem); // 🫐

// 제거 - 제일 앞에서 제거 (배열 자체 수정), 제거된 아이템을 반환
let firstItem = fruits.shift();
console.log(fruits); // [ '🍎', '🍊', '🍌', '🍏' ]
console.log(firstItem); // 🍓

// 중간에 추가 또는 삭제
let splc = fruits.splice(1, 1); // 1번째에서 시작해서 1개 삭제 (오렌지)
console.log(fruits); // [ '🍎', '🍌', '🍏' ]
console.log(splc); // [ '🍊' ] 제거된 아이템이 배열 형태로 반환된다

let splcAddSubtract = fruits.splice(1, 1, '🍊', '🍋');
// 1번째에서 시작해서 1개 (바나나) 삭제, 뒤로 두 개 추가
console.log(fruits); // [ '🍎', '🍊', '🍋', '🍏' ]
console.log(splcAddSubtract); // [ '🍌' ] 제거된 아이템이 배열 형태로 반환된다

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); // 0, 1까지 슬라이스
console.log(newArr); // [ '🍎', '🍊' ] 잘린 새로운 배열 반환
console.log(fruits); // [ '🍎', '🍊', '🍋', '🍏' ] 기존 배열은 그대로

newArr = fruits.slice(1); // [ '🍊', '🍋', '🍏' ]
console.log(newArr); // [ '🍎', '🍊', '🍋', '🍏' ]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ] 한단계까지만 flat해준다
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ] 2단계까지 펴준다

arr = arr.flat(2);
// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0, 0, 0 ]

arr.fill('a', 1);
console.log(arr); // [ 0, 'a', 'a', 'a', 'a', 'a' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a

text = arr.join(' | ');
console.log(text); // 0 | a | a | a | a | a
