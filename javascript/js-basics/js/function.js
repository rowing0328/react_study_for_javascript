// 함수 선언문
// 함수 선언문 형식으로 add 함수를 정의
function add(x, y) {
    return x + y;
}

// 함수 호출(실행)
result = add(100, 20);
console.log(result);


// 함수 표현식
// 변수는 값을 주고 받을 수 있음
let a = 100;
let b = a;
console.log(a); // 100
console.log(b); // 100


// 함수 표현식을 이용하면 함수를 변수처럼 사용할 수 있음
let add = function (x, y) { return x + y; };
//  ~~~   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  |     |
//  |     +-- 익명 함수 표현식
//  +-- 함수 변수


let sum = add;
console.log(add(10, 20)); // 30
console.log(sum(10, 20)); // 30


// 기명 함수 표현식
let sum1 = function add1(x, y) {
    return x + y;
}

let sum2 = sum1;

console.log(sum1(10, 20)); // 30
console.log(sum2(10, 20)); // 30
console.log(add1(10, 20)); // ReferenceError: add1 is not defined


// 기명 함수 표현식의 함수 이름은 외부에서 호출할 수 없음
// 기명 함수 표현식의 함수 이름은 함수 내부에서만 사용이 가능 => 재귀 호출 시 사용
const myFactorial = function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};


console.log(myFactorial(10));


// 화살표 함수
// 익명 함수 표현식을 이용해서 함수를 정의
const add1 = function (x, y) { return x + y; };
console.log(add1(10, 20));  // 30


// 화살표 함수
// 함수 표현식에서 function 키워드를 제거하고, 함수 매개변수와 본문 사이에 =>를 추가
const add2 = (x, y) => { return x + y; };
console.log(add2(10, 20));


// 화살표 함수 본문이 결과를 반환하는 구문으로만 되어 있는 경우, 중괄호와 return 키워드 생략이 가능
const add3 = (x, y) => x + y;
console.log(add3(10, 20));


// 매개변수가 하나인 경우, 매개변수를 감싸고 있는 소괄호도 생략이 가능
// const add4 = function(x) { return x + 4; };
const add4 = x => x + 4;


// 함수가 객체를 반환하는 경우, 반환 객체를 소괄호로 감싸야 함
const add5 = (x, y) => { return { result: x + y }; };
console.log(add5(10, 20));  // {result: 30}


const add6 = (x, y) => ({ result: x + y });
