// 서로 연관되어 있는 속성과 행동을 묶어둔 것이 객체

const apple = {
  name: 'apple',
  display: function () {
    // 객체 안에서 내 자신의 속성에 접근할 때
    console.log(`${this.name}: 🍎`);
  },
};

apple.display();

// 서로 연관된 정보와 함수들을 묶어서 관리할 수 있다!
