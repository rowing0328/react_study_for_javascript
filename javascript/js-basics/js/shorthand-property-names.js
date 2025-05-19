/*
단축 속성명은 JavaScript에서 객체를 생성할 때 속성 이름과 속성 값으로 사용할 변수의 이름이 동일한 경우,
속성 이름을 생략하고 변수 이름만 사용할 수 있게 해주는 기능입니다.

예를 들어, `let name = "John";` 일 때,
`const person1 = { name: name };` 대신 `const person2 = { name };` 으로 작성할 수 있습니다.

함수 속성에서도 `getName: function getName() { ... }` 대신 `getName() { ... }` 으로 줄여 쓸 수 있습니다.
이 기능을 사용하면 코드를 더 간결하게 만들 수 있습니다.
 */

let name = "John";
const person1 = {
    name: name,                             // ⇐ 객체 속성의 이름과 속성의 값을 가지고 있는 변수의 이름이 동일
    getName: function getName() {	// ⇐ 객체 속성의 이름과 속성의 값인 함수의 이름이 동일
        return this.name;
    }
};
console.log(person1);

const person2 = {
    name,				                    // ⇐ 객체 속성의 이름을 생략할 수 있음
    getName() {			            // ⇐ function 키워드와 객체 속성의 이름을 생략할 수 있음음
        return this.name;
    }
};
console.log(person2);


// 사용 예1
// 매개 변수를 객체로 변환하는 함수를 정의하는 경우
function returnObj1(age, name) {
    return { age: age, name: name };
}
console.log(returnObj1(23, "홍길동"));


function returnObj2(age, name) {
    return { age, name };
}
console.log(returnObj2(23, "홍길동"));


// 사용 예2
// 로그를 출력할 때
const email = "hong@test.com";
const address = "서울시 독산동";


// 변수의 값을 로그로 출력하는 방법
console.log("email", email);
console.log("address", address);


console.log(`email: ${email}, address: ${address}`);


console.log({ email, address });
