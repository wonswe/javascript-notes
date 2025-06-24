// 자바스크립트의 함수는 만능이다!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고있는 객체) 생성됨
const dog = {
  name: 'Dog',
  play: function () {
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); // 💩
console.log(obj); // play {}

// ES6 메서드
const cat = {
  name: 'Cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹');
  },
};

cat.play();
// const obj1 = new cat.play();
// TypeError: cat.play is not a constructor
// 메서드를 생성자 함수로 사용할 수 없다 ❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔하다
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 않는다)
 * 3. 함수 자체 arguments
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
