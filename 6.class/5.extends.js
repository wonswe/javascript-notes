// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹기');
//   }
//   sleep() {
//     console.log('자기');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹기');
//   }
//   sleep() {
//     console.log('자기');
//   }
//   play() {
//     console.log('놀기');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹기');
  }
  sleep() {
    console.log('자기');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 상속하고 있는 부모 클래스에 전달
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀기');
  }
  // 오버라이딩 Overriding - 자식 클래스에서 부모 클래스에 있는 함수를 덮어 씌운다
  eat() {
    super.eat();
    // 부모에 있는 함수도 호출 가능! 순서 상관 없이 다른 함수 추가 가능!
    console.log('강아지가 먹는다!');
  }
}
const dog = new Dog('하양이', '주원이');
console.log(dog);
dog.sleep();
dog.eat(); // 강아지가 먹는다!
dog.play();
