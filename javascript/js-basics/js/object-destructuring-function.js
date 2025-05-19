// person 객체가 가지고 있는 속성값을 출력하는 함수
const person = {
    name: "홍길동",
    age: 23,
    email: "hong@test.com"
};


function print1(obj) {
    // 매개변수로 전달받은 객체를 직접 활용
    console.log(`${obj.name} ${obj.age} ${obj.email}`)
}


function print2(obj) {
    // 매개변수로 전달받은 객체를 객체 비구조화를 통해 지역변수에 할당해서 활용
    const {name, age, email} = obj;
    console.log(`${name} ${age} ${email}`);
}


// 객체 비구조화를 통해 매개변수를 전달받음
function print3({name, age, email}) {
    console.log(`${name} ${age} ${email}`);
}


print1(person);
print2(person);
print3(person);
