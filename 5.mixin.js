// 오브젝트는 단 하나의 prototype을 가리킬 수 있다. (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶을 때 사용하는 Mixin!

const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play(); // 멍멍 놀아요!
dog.sleep(); // 멍멍 자요!

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
tiger.play(); // 어흥 놀아요!
tiger.sleep(); // 어흥 자요!
