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
