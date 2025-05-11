// Counter 클래스 만들기
// 0 이상의 값으로 초기화 한 뒤, 하나씩 숫자를 증가할 수 있는 카운터를 만들기
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    // 현재 값을 읽는다
    return this.#value;
  }

  increment = () => {
    // 값을 증가
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
console.log(counter.value); // 1
counter.increment();
console.log(counter.value); // 2
counter.increment();
console.log(counter.value); // 3
