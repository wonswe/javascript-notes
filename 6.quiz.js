class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자!');
  }
}

class Tiger extends Animal {
  hunt() {
    console.log('사냥하자!');
  }
}

const dog1 = new Dog('멍멍', '🐶');
const tiger1 = new Tiger('어흥', '🐯');

dog1.printName(); //멍멍 🐶
tiger1.printName(); // 어흥 🐯
dog1.play(); // 같이 놀자!
tiger1.hunt(); // 사냥하자!

console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
console.log(tiger1 instanceof Tiger); // true
