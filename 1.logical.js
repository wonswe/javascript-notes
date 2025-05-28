// 논리연산자 Logical Operator
// && AND
// || OR
// 단축평가: short-circuit evaluation
const obj1 = { nam: '🐶' };
const obj2 = { name: '🐱', owner: 'juwon' };

if (obj1 && obj2) {
  console.log('둘다 true!'); // 둘다 true!
}

if (obj1 || obj2) {
  console.log('둘다 true!'); // 둘다 true!
}

// 조건문 밖에서 사용했을 때, 첫번째 obj1이 true이기에 두번째 obj2는
// 굳이 평가하지 않고 result 변수에 할당한다.
let result = obj1 && obj2;
console.log(result); // { name: '🐱', owner: 'juwon' }

result = obj1 || obj2;
console.log(result);
