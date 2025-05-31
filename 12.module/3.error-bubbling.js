// Bubbling up, Propagating 🧼

function a() {
  // 에러를 일으키는 함수
  throw new Error('error!');
}

function b() {
  // 에러를 캐치하는 함수
  try {
    a();
  } catch (error) {
    // 여기서 캐치해서 처리를 할 수도 있고
    console.log('생각해보니 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error; // 이렇게 다시 에러를 던질 수 있다. 그러면 c()가 b()를 호출해서 b의 에러를 캐치한다.
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Caught!');
}
console.log('Done!');
