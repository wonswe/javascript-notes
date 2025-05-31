// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때

let item = { price: 1 };
const price = item?.price; // 아이템이 있니? 있으면 접근, 없으면 접근하지 마!
console.log(price); // 1

let obj = { name: 'juwon', mom: { name: 'umma' } };
function printName(obj) {
  //   const momName = obj && obj.mom && obj.mom.name;
  const momName = obj?.mom?.name; // obj 있어? mom 있어 mom.name 있어?
  console.log(momName);
}

printName(obj); // umma
printName(); // undefined
