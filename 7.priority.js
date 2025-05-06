let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); // 14 = a + (b * 4)
result = a++ + b * 4;
console.log(result); // 14; a는 계산 후 나중에 증가
console.log(a); // 3

// 우선시 하고 싶은 것들을 (괄호) 안에 넣기
