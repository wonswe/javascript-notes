function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
  return Promise.reject(new Error('can not find 🐓'));
}
getChicken()
  .catch(() => '🐔')
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

async function fetchChicken() {
  const chicken = await getChicken();
  const egg = await fetchEgg();
  const fryEgg = await fryEgg();

  return `${chicken} => ${egg} => ${fryEgg}`;
}

fetchChicken() //
  .then((chicken) => console.log);
