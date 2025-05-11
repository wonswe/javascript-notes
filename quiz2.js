// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, monthlyHours) {
    this.name = name;
    this.department = department;
    this.monthlyHours = monthlyHours;
  }
}

class fullTime extends Employee {
  #hourlyPay;
  constructor(name, department, monthlyHours) {
    super(name, department, monthlyHours);
    this.#hourlyPay = 10000;
  }

  get hourlyPay() {
    return this.#hourlyPay;
  }
}

class partTime extends Employee {
  #hourlyPay;
  constructor(name, department, monthlyHours) {
    super(name, department, monthlyHours);
    this.#hourlyPay = 8000;
  }
  get hourlyPay() {
    return this.#hourlyPay;
  }
}

const juwon = new fullTime('김주원', '개발팀', '160');
console.log(
  `${juwon.name}님은 ${juwon.department}에서 풀스택엔지니어로 근무 중이며, 매달 근무 시간은 ${juwon.monthlyHours} 시간 입니다.`
);

console.log(
  `${juwon.name}님의 한달 월급은 ${
    juwon.hourlyPay * juwon.monthlyHours
  } 원 입니다.`
);

const doogie = new partTime('실베스터 에드와도', '건축팀', '100');
console.log(
  `${doogie.name}님은 ${doogie.department}에서 건축가로 근무 중이며, 매달 근무 시간은 ${doogie.monthlyHours} 시간 입니다.`
);

console.log(
  `${doogie.name}님의 한달 월급은 ${
    doogie.hourlyPay * doogie.monthlyHours
  } 원 입니다.`
);
