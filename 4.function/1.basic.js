// 사용예제 1
function add(a, b) {
  console.log('function');
  return a + b;
}

const result = add(1, 2);
console.log(result); // 3

// 사용예제 1
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} 🍀`;
}

let lastName1 = '김';
let firstName1 = '주원';
console.log(fullName(firstName1, lastName1));

let lastName2 = '한';
let firstName2 = '민경';
console.log(fullName(firstName2, lastName2));
