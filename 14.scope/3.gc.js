// 글로벌 변수는 앱이 종료될 때까지 계속 메모리에 유지됨!
// 이름 충돌이나 메모리 측면에서 좋지 않기 때문에 가급적 필요한 곳에서 선언하는 것이 좋다.

const global = 1;
{
  // 블럭 내부에서만 존재하고, 블럭이 끝나면 자동으로 소멸됨 (GC)

  // 블럭이 끝난 시점에서 바로 청소되지 않고, GC가 주기적으로 메모리를 검사한 후,
  // 해당 메모리를 참조하는 자가 없다면 청소 진행.
  const local = 1;
}

function print() {
  // 함수 내부에서도 블럭 안에서 필요한 경우에는
  // 필요한 곳에서! 블럭 안에서 변수를 선언하고 사용해야 함.
  if (true) {
    let temp = 0;
  }
}
