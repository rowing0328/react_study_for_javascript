// 객체
const person = {
    "name": "홍길동",
    'age': 23,
    isMarried: false,
    'favorite colors': ["빨강", "파랑"],
    hello: function () {
        return `안녕, 나는 "${this.name}" 입니다.`;
    }
};


for (let key in person) {
    console.log(`${key} => ${person[key]}`)
}


// person 객체의 각 항목의 키를 배열로 반환해서 출력
console.log(Object.keys(person));


Object.keys(person)
    .forEach(key => console.log(person[key]));
