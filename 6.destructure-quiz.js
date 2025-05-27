const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  // 여기서 styles는 구조분해 할당/참고용이기에 접근 불가
  console.log(color);
}

changeColor(prop); // black
