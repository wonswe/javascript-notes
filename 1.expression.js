// 리터럴 Literal : 코드에서 값을 나타내는 표기법
// 123 '123' true {} []
// `Template Literal${}`
// function() {}
// 123n - bigInt Literal
// ob101 - Binary Literal

// Statement 문: 선언문, 할당문, 조건문, 반복문 (최소 실행 단위)
// Expression 표현식:  값으로 평가 될 수 있는 문

// 1; 숫자 리터럴 표현식
// 1 + 1; 연산자 표현식
// call(); 함수 호출 표현식

// let b; 선언문
// b = 2; 할당문, 할당 표현식인 문

let b; //선언문
b = 2; //표현식, 할당문

let a = (b = 2); // b -> 2가 a에 할당됨
console.log(a);
