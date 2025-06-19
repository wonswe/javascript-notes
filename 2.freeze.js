// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 얼림!)

const juwon = { name: '주원' };
const dog = { name: '펭기', emoji: '🐧', owner: juwon };

Object.freeze(dog);
dog.name = '멍멍';

console.log(dog); // 동결된 객체를 수정할 수 없다.
// { name: '펭기', emoji: '🐧', owner: { name: '주원' } }

dog.age = 4; // 동결된 객체에 추가할 수 없다.
console.log(dog);
// { name: '펭기', emoji: '🐧', owner: { name: '주원' } }

delete dog.name; // 객체의 키를 삭제할 수 없다.
console.log(dog);
// { name: '펭기', emoji: '🐧', owner: { name: '주원' } }

juwon.name = '주원이';
// 특정 객체에서 참조하고 있는 다른 객체는 수정이 가능하다. (얼려지지 않음.)
console.log(dog);
// { name: '펭기', emoji: '🐧', owner: { name: '주원이' } }

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog }; // 이렇게 스프레드 연산자를 사용해도 되고,
// 아래 assign 함수를 사용해도 됨.
Object.assign(cat, dog); // cat 오브젝트에 dog의 모든 프로퍼티를 복사
console.log(cat);
// { name: '펭기', emoji: '🐧', owner: { name: '주원이' } }
Object.seal(cat);
console.log(cat);
cat.name = '나옹'; // 값의 수정은 굿!
console.log(cat);
// { name: '나옹', emoji: '🐧', owner: { name: '주원이' } }
delete cat.emoji; // 삭제는 노!
console.log(cat);
// { name: '나옹', emoji: '🐧', owner: { name: '주원이' } }

// Frozen 되었는지, Sealed 되었는지 아래처럼 확인 가능
console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// 확장 금지 preventExtentions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false

tiger.name = '어흐으응';
console.log(tiger); // { name: '어흐으응' }
delete tiger.name;
console.log(tiger); // {}
tiger.age = 1; // 추가 안됨.
console.log(tiger);
