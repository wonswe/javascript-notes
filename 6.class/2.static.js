// Static 정적 Property, Method 메서드
class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 만들어진 인스턴스의 데이터에 접근하기 때문에
  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

console.log(Fruit.MAX_FRUITS);

const banana = Fruit.makeRandomFruit();
console.log(banana);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(`${apple.name} ${apple.emoji}`);
console.log(`${orange.name} ${orange.emoji}`);
apple.display();
orange.display();

Math.pow();
Number.isFinite(1);
