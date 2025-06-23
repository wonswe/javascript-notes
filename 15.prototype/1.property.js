const dog = { name: '와우', emoji: '🐶' };
console.log(Object.keys(dog)); // [ 'name', 'emoji' ]

console.log(Object.values(dog)); // [ '와우', '🐶' ]

console.log(Object.entries(dog));
// [ [ 'name', '와우' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // true
console.log(dog.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//   name: { value: '와우', writable: true, enumerable: true, configurable: true },
//   emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);
// { value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // [ 'emoji' ]
// name 키는 이제 enumerable: false이기 때문에 포함이 안됨
delete dog.name; // configurable: false이기 때문에 수정 불가
console.log(dog.name); // 멍멍 - 그대로인 것을 볼 수 있음

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '주원',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); // { firstName: '주원', lastName: '김' }
console.log(student.lastName);
console.log(student.firstName);
