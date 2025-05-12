// Boolean
const isTrue = true;

// 아래처럼 객체를 사용하면 메모리를 더 소비해서 굳이 x
const isFalse = new Boolean(false);

console.log(isTrue.valueOf()); // true
