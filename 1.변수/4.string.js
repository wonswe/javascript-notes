// 문자열타입
let string = '안녕하세요';
string = `안녕!`;
// console.log(string);

// 특수 문자 출력하는법
string = '"안녕"';
// console.log(string);

string = '안녕\n주원아!'
// console.log(string);
string = '안녕\n주원아!\t\t내 이름은';
// console.log(string);
string = '안녕 주원아 \\';
// console.log(string);
string = '안녕 주원아 \\\u09AC'; //특수문자 - 이스케이프 표현
// console.log(string);

// 템플리 리터럴 (Template Literal) ``
let id = '주원';
let greetings = "'안녕!, " + id + "🐧\n즐거운 하루 보내요!'";
console.log(greetings);

greetings = `'안녕!, ${id}🐧
즐거운 하루 보내요!'`;
console.log(greetings);