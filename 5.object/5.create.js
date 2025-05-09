// const apple = {
//   name: 'apple',
//   display: function () {
//     // 객체 안에서 내 자신의 속성에 접근할 때
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     // 객체 안에서 내 자신의 속성에 접근할 때
//     console.log(`${this.name}: 🍊`);
//   },
// };

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.disply = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략가능 - 생성자 함수에서는 this가 자동으로 리턴됨
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name, apple.emoji);
console.log(orange.name, orange.emoji);
