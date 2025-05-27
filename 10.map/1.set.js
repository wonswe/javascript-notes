// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6); // 이미 있는데 추가하면 무시됨. 중복 안됨.
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍋', price: 5 };
const objs = new Set([obj1, obj2]);

console.log(objs);
// Set(2) { { name: '🍎', price: 8 }, { name: '🍋', price: 5 } }

// quiz
obj1.price = 10; // obj는 shallow copy가 된다
objs.add(obj1);
console.log(objs);
// Set(2) { { name: '🍎', price: 10 }, { name: '🍋', price: 5 } }

// quiz
const obj3 = { name: '🍋', price: 5 };
// 동일한 값의 오브젝트이지만 주소가 다른 새로운 오브젝트이기에 "중복"이 아니기 때문에 세트에 문제 없이 추가 된다.
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
