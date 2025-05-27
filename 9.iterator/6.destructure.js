// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // 🍏
console.log(second); // 🥝
console.log(...others); // 🍓 🍌

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 8

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji(); // 배열의 아이템을 각각 구조분해하여 할당
console.log(title);
console.log(emoji);

const juwon = { name: 'juwon', age: 20, job: 'software engineer' };
// function display(person) {
//   console.log('이름:', person.name);
//   console.log('나이:', person.age);
//   console.log('직업:', person.job);
// }

function display({ name, age, job }) {
  console.log('이름:', name);
  console.log('나이:', age);
  console.log('직업:', job);
}

display(juwon);

const { name, age, job: occupation, pet = '고양이' } = juwon;
console.log(name, age, occupation, pet);
