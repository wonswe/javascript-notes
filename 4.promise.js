// promise - then, catch, finally

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음!'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

// runInDelay(2)
// .then(필요한 일을 수행) runInDelay가 성공적으로 실행되면
// .catch(에러를 처리) runInDelay가 실패하면
// .finally(최종적으로 무조건 호출) runInDelay가 성공/실 패하든 상관 없이

// promise에서 에러가 발생했는데 catch가 없다면
// UnhandledPromiseRejectionWarning이 발생

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));

// try {
//   runInDelay(() => {
//     console.log('타이머 완료!');
//   }, 2);
// } catch (error) {}
