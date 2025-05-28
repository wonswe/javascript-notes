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

// 조건문 밖에서 사용했을 때

// 첫번째 obj1이 true이기에 두번째 obj2는
// 굳이 평가하지 않고 result 변수에 할당한다.
let result = obj1 && obj2;
console.log(result); // { name: '🐱', owner: 'juwon' }

// 첫번째 obj1이 true이기에 뒤에 것은 확인할 필요가 없으므로
// 굳이 평가하지 않고 obj1을 result 변수에 할당한다.
result = obj1 || obj2; // { nam: '🐶' }
console.log(result);
// || 연산에서 만약 첫번째가 false라면 두번째가 할당될 것

// 활용예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falsey일 때 || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어!');
  }
  animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어!');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
// { nam: '🐶' } owner가 없었기 때문에 뒤에 function이 실행 안됨.
console.log(obj2);
// { name: '🐱', owner: '바뀐주인!' } owner가 있었기 때문에 뒤에 function이 실행 됨.

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
// { nam: '🐶', owner: '새로운주인!' } 주인이 없었기 때문에 (false) 뒤에 function 실행.
console.log(obj2);
// { name: '🐱', owner: '바뀐주인!' } 주인이 있었기 때문이 (true) 뒤에 function 실행 안됨.

// null 또는 undefined인 경우를 확인할 때
