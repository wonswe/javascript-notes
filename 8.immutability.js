// immutability 불변(성) unchangable
// 모든 오브젝트를 immutable하게 만드는 것이 중요하다

// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 BAD
// 상태 변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 함
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)

function display(num) {
  num = 5; // ❌
  console.log(num);
}

const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Ellie'; // ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  // 오브젝트가 그대로 업데이트 됨
  // 함수 내부에서 외부로부터 전달 받은 인자의 값을 변경하는 것은
  // BAD BAD PRACTICE ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
  console.log(obj);
}

const juwon = { name: 'Juwon' };
// 오브젝트를 가리키고 있는 주소
displayObj(juwon);
console.log(juwon);

function changeName(obj) {
  // 이름부터 변경한다는 느낌을 주도록!
  return { ...obj, name: 'Bob' };
  // 반환할 때는 새로운 오브젝트 만들기!
}
