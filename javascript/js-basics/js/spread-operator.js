// Math.max(): 매개변수로 전달된 값 중에서 가장 큰 값을 반환
console.log(Math.max(3, 21, 1, 98, 7)); // 98
console.log(Math.max([3, 21, 1, 98, 7])); // NaN


// 숫자로 구성된 배열에서 가장 큰 값을 찾을려면, ...
const numbers = [3, 21, 1, 98, 7];
console.log(Math.max(numbers)); // NaN
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4]))
console.log(Math.max(...numbers));


// 사용 예 1. 배열의 값을 복사
// let a = 10;
// let b = a;
// console.log(a, b);  // 10 10
// a = 20;
// console.log(a, b);  // 20 10


let c = [1, 2, 3];
let d = c;
console.log(c, d);  // [1,2,3] [1,2,3]
c[1] = 20;
console.log(c, d);  // [1,20,3] [1,20,3]


// let x = [1, 2, 3];
// let y = [...x];
// x[1] = 20;
// console.log(x, y); // [1,20,3] [1,2,3]


// 사용 예 3. 객체를 복사하는 과정에서 새로운 속성을 추가하거나 속성의 값을 변경하는 경우
let a = { name: "홍길동", age: 23 };
// b 객체는 a 객체의 값을 복사해서 정의하는데,
// 나이를 230으로 변경하고, 이메일 속성을 추가
let b = { ...a, age: 230, email: "hong@test.com" };


// 사용 예 4. 배열 또는 객체의 값을 결합할 때
// 배열 결합 => 배열 길의 합 만큼의 배열이 나열된 순서대로 만들어짐
// const a = [1, 2, 3, 5];
// const b = [5, 7, 8, 9];
// const ab = [...a, ...b];
// console.log(ab);
// const ba = [...b, ...a];
// console.log(ba);


// 객체 결합 => 키가 중복되는 경우, 순서에 영향을 받음
const x = { name: "홍길동", age: 23 };
const y = { name: "고길동", address: "서울시 도봉구" };
const xy = { ...x, ...y };
console.log(xy);
const yx = { ...y, ...x };
console.log(yx);
