// 객체 비구조화를 할 때는 객체의 속성명(key)이 중요
const obj1 = { name: "홍길동", age: 23 };
const obj2 = { name: "고길동", age: 43, grade: "A" };


// obj1의 age와 name 속성의 값을 age와 name 변수에 할당
{
    const age = obj1.age;
    const name = obj1.name;
}
{
    const { age, name } = obj1;
}
{
    // 일치하는 키가 없는 경우
    const { newAge, newName } = obj1;
    console.log({ newAge, newName });
    // { newAge: undefined, newName: undefined }
}
{
    // 객체 비구조화를 통해 가져온 값을 새로운 변수 이름으로 사용할 경우
    // 별칭을 부여
    const { age: newAge, name: newName } = obj1;
    console.log({ newAge, newName });
    // { newAge: 23, newName: '홍길동' }
}
{
    // 객체에 존재하지 않는 요소를 변수에 할당할 때 적용할 기본값 설정도 가능
    const { age: newAge, email = "default" } = obj1;
    console.log({ newAge, email });
    // { newAge: 23, email: 'default' }
}
{
    // 객체 비구조화 시 객체의 일부 속성을 변수에 할당하고, 나머지를 새로운 객체로 저장
    // obj2의 age 속성의 값을 newAge 변수에 할당하고, 나머지를 rest 이름의 객체에 할당
    const { age, ...rest } = obj2;
    console.log({ age, rest });
    // { age: 43, rest: { name: '고길동', grade: 'A' } }
}
