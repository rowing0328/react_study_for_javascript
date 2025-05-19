// 배열
let values = ["빨강", true, 20];


// 모든 배열 요소를 출력하는 방법
console.log("방법1. ------------");
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);


console.log("방법2. ------------");
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}


console.log("방법3. ------------");
for (let idx in values) {
    console.log(values[idx]);
}


console.log("방법4. ------------");
for (let value of values) {
    console.log(value);
}


console.log("방법5-1. ------------");

// 함수 선언문으로 함수를 정의
function printArrayItem(item) {
    console.log(item);
}
values.forEach(printArrayItem);


console.log("방법5-2. ------------");
// 함수 표현식으로 함수를 정의
const printArrayItem2 = function (item) {
    console.log(item);
};
values.forEach(printArrayItem2);


console.log("방법5-3. ------------");
// 함수 표현식을 forEach 함수에 직접 전달
values.forEach(function (item) {
    console.log(item);
});


console.log("방법5-4. ------------");
// 화살표 함수로 정의
values.forEach((item) => {
    console.log(item);
});


console.log("방법5-5. ------------");
// 화살표 함수의 단축형으로 정의
values.forEach(item => console.log(item));


console.log("방법5-6. ------------");
// 배열의 값과 인덱스를 받아서 처리
values.forEach((item, index) => console.log(index, item));
values.forEach((v, i) => console.log(i, v));
