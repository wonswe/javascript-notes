// 클래스 Class - 객체를 생성할 수 있는 템플릿 (청사진, 틀, 양식)
// 객체지향 프로그래밍 Object-Oriented Programming
// 현업에서는 생성자 함수를 사용하지 않고 클래스를 사용한다.
// 클래스가 Prototype 보다 간편함
// 클래스에서 만들어진 객체: 인스턴스 Instance

// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 (NEW✨)

// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(`${apple.name} ${apple.emoji}`);
console.log(`${orange.name} ${orange.emoji}`);
apple.display();
orange.display();
