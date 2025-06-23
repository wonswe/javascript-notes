function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수: 만들어지는 인스턴스마다 함수를 다 가지고 있음.
  // 메모리 낭비일수도?
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2);
// Dog { name: '뭉치', emoji: '🐶', printName: [Function (anonymous)] } Dog { name: '코코', emoji: '🐩', printName: [Function (anonymous)] }

dog1.printName(); // 뭉치 🐶
dog2.printName(); // 코코 🐩

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의하면 (오버라이딩하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 된다)
dog1.printName = function () {
  console.log('안녕!!');
};

dog1.printName(); // 안녕!!

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
// dog1.hello(); error
Dog.hello(); // Hello!

Dog.MAX_AGE = 20;
