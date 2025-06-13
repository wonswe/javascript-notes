function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];

  // ⬆️ 아래와 같은 코드지만 async와 await을 사용
  return getBanana() //
    .then((banana) =>
      getApple() //
        .then((apple) => [banana, apple])
    )
    .then(console.log);
}

fetchFruits() //
  .then((fruits) => console.log); // [ '🍌', '🍎' ]
