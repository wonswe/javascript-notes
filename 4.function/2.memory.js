function add(a, b) {
  console.log(a);
  console.log(b);
  // add라는 변수에 함수의 메모리 주소가 저장됨 ex. 0x11
  return a + b;
}

const sum = add;
// sum에는 add 함수를 가리키고 있는 메모리 주소가 그대로 할당됨
// ex. 0x11
// console.log(sum(1, 2));
console.log(add(1, 2));
