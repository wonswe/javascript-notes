const obj = {
  name: '주원',
  age: 20,
};

// 코딩하는 시점에, 정적으로 접근이 확정될 때
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
  // 코드를 작성하는 시점에 key는 정해져있지 않고
  // 전달되는 문자열에 따라서 그 key의 값을 찾는다
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value) {
  obj[key] = value;
}

addKey(obj, 'job', 'software engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
