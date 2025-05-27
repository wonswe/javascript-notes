// Symbol 심볼
// 유일한 키를 생성할 수 있음.

// const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
// map.set(key1, 'Hello');
// console.log(map.get(key2)); // Hello
// // 원시 타입이기 때문에 값이 똑같아서 동일한 키로 간주할 수 있는 것

// console.log(key1 === key2); // true

// BUT symbol을 사용했을 때
const map = new Map();
const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello');

console.log(map.get(key2)); // undefined
console.log(key1 === key2); // false
// 이름은 같지만 심볼일 때는 서로 다른 값이 생성된다.

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심볼 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// 해당 심볼에 대한 문자열을 알고 싶다면 Symbol.keyFor (전역 레지스트리에 보관된 심볼에 한해서만 정보를 가져올 수 있다.)
console.log(Symbol.keyFor(k1));
// 글로벌 레지스트리에 보관되지 않는 심볼은 문자열에 대한 정보를 가져올 수 없음.
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined, 위에 심볼과 전혀 다른 심볼이기에 접근 불가

// 문자열이 같아도 유니크한 키를 만들고 싶을 때 심볼을 이용,
// 문자열에 대해서 동일한 심볼을 만들고 싶을 때 Symbol.for()이용.
