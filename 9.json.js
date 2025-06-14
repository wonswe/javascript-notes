// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse)JSON: object

const juwon = {
  name: 'juwon',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

console.log(juwon);
// { name: 'juwon', age: 20, eat: [Function: eat] }

const json = JSON.stringify(juwon);
console.log(json);
// {"name":"juwon","age":20}

const obj = JSON.parse(json);
console.log(obj);
