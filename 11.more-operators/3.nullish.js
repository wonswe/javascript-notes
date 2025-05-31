// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falsy한 경우 설정(할당)
let num = null;

// 0은 falsy한 값으로 간주되어서 기본값이 아래 -1로 설정된다.
console.log(num || '-1'); // -1

console.log((null || undefined) ?? 'foo'); // foo

const nullValue = null;
const emptyText = ''; // falsy
const someNumber = 42;

const valA = nullValue ?? 'default for A';
const valB = emptyText ?? 'default for B';
const valC = someNumber ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
