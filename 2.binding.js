// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정되고 변경될 수 없음!
// 하지만 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('나옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

// dog.printName에 cat.printName을 할당했기 때문에
dog.printName = cat.printName;
dog.printName(); // 고양이의 이름을 출력한다옹: 멍멍
cat.printName();

// 동일한 printName을 호출하더라도 호출하는 이에 따라서
// this의 컨텍스트가 동적으로 바뀐다!

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName(); // 여기에서 printName을 호출하는 객체가 없기에
  // undefined 발생
}

printOnMonitor(cat.printName);
// 고양이의 이름을 출력한다옹: undefined
