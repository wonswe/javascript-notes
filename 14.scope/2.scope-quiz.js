{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  //   console.log(y); // y is not defined
}

const text = 'global';
// 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1';
  // 지역 변수 (로컬 변수), 지역 스코프 (로컬 스코프)
  {
    const text = 'inside block2';
    console.log(text); // inside block1
  }
}

// 변수 참조 시 해당 블럭에 없을 때 그 상위 블럭에 있는지 확인 후,
// 있다면 상위 블럭에 있는 변수를 참조한다.
