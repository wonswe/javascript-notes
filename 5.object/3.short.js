const x = 0;
const y = 0;

const coordinate = { x, y }; // { x: x, y: y };
// key 이름과 참조하고 있는 변수의 이름이 동일한 경우에는 위처럼 축약 가능

console.log(coordinate);

function makeObj(name, age) {
  return {
    name,
    age,
    // name: name,
    // age: age,
  };
}
