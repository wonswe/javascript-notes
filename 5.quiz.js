// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const fruits1 = ['🍌', '🍓', '🍇', '🍓'];

function replaceStrawberry(arr) {
  let newArr1 = arr.slice(0);
  for (let i = 0; i < newArr1.length; i++) {
    if (newArr1.includes('🍓')) {
      newArr1.splice(newArr1.indexOf('🍓'), 1, '🥝');
      console.log(newArr1);
    }
  }
  console.log('fruits1 array remains unchanged -', arr);
  // fruits1 array remains unchanged - [ '🍌', '🍓', '🍇', '🍓' ]
}

replaceStrawberry(fruits1);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const fruits2 = ['🍌', '🥝', '🍇', '🥝'];

function countItemsInArray(arr, item) {
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(item)) {
      count += 1;
    }
  }

  console.log(count);
}

countItemsInArray(fruits2, '🥝');

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function returnArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      newArr[i] = arr1[i];
    }
  }
  console.log(newArr);
}

returnArray(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']);
