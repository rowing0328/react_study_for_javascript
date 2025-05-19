// 계산된 속성명
// 변수 또는 연산 결과를 이용해서 객체 속성의 이름(키)을 만드는 방법

// 속성 이름(key)과 값(value)를 전달받아 객체를 반환하는 함수를 정의
function returnObject1(key, value) {
    /*
    let obj = {};
    obj[key] = value;
    return obj;
     */
    return { [key]: value };
}

console.log(returnObject1("name", "John")); // { name: "John" }
console.log(returnObject1("age", 23));      // { age: 23 }


// 속성 이름이 일련번호 형태를 가지는 객체를 반환하는 함수
function returnObject2(key, value, no) {
    /*
    let obj = {};
    obj[key + no] = value;
    return obj;
     */
    return { [key + no}: value };
}

console.log(returnObject2("name", "John", 1)); // { name1: "John" }
console.log(returnObject2("name", "Jane", 2)); // { name2: "Jane" }