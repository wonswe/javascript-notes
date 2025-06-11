function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //   return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  // 전달하는 인자와 호출하는 인자가 동일할 때 함수 참조값만 전달하면 됨.
  .then(fryEgg)
  .then(console.log);
