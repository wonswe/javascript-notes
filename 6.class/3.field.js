// 접근제어자 - 캡슐화 (필드나 메소드를 클래스 내부에서만 접근이 가능하도록)
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = '과일';
  // type은 class가 만들어지자 마자 '과일'로 초기화 (field)
  // name & emoji는 외부로부터 전달받아 할당 (constructor에 포함)

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// console.log(apple.#name);
// #field는 외부에서 접근에 불가능함
// Private field '#name' must be declared in an enclosing class
console.log(apple);
// Fruit { display: [Function: display] }
// 로그에서도 #필드의 정보가 나오지 않는다
