function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다.
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴!
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
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
