// 접근자 프로퍼티 (Accessor Property)

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // fullName()에 접근할 때, get 할 때 함수를 호출
  // 고정된 값이 아니라, 호출하는 시점에 데이터를 만들어서 리턴
  // 속성에 가까운 것들을 get으로 속성에 접근하듯이 만들 수 있다
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('주원', '김');
console.log(student.firstName); // 속성
// console.log(student.fullName()); // 함수처럼 호출됨
console.log(student.fullName);

// set fullName에 값을 할당하면 set fullName 함수가 호출됨
student.fullName = '김철수'; // set 김철수
