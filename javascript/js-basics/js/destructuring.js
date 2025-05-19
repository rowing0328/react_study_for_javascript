// 배열 구조화
const arr = [1, 2, 3, 4, 5];

let a = arr[0];
let b = arr[1];
console.log(a, b);

// c, d, e, f 변수에 arr 변수의 첫 번째 값부터 차례로 할당
let [c, d, e, f] = arr;
console.log({c, d, e, f});


// 두 변수의 값을 교환 => swapping
let x = 10;
let y = 20;


// 임시 변수를 사용하하는 방법
let temp = x;
x = y;
y = temp;


// 배열 비구조화를 사용하는 방법
[x, y] = [y, x];

{
    // 배열의 크기 보다 변수의 개수가 많은 경우
    const arr = [1, 2];
    let [x, y, z] = arr;
    console.log({ x, y, z });   // { x: 1, y: 2, z: undefined }
}
{
    // 기본값 설정이 가능
    const arr = [1, 2];
    let [x, y = 20, z = 30] = arr;
    console.log({ x, y, z });   // { x: 1, y: 2, z: 30 }
}
{
    // 배열의 일부분의 값을 변수에 할당할 경우
    const arr = [1, 2, 3];


    // arr 배열의 첫번째와 세번째 값을 각각 a, c 변수에 할당
    const [a, , c] = arr;
    console.log({ a, c });
}
{
    // 배열의 값을 변수에 할당하고 남은 나머지를 새로운 배열로 만드는 경우
    const arr = [1, 2, 3, 4, 5, 6];


    // arr 배열의 첫번째 값을 first 변수에 할당하고,
    // 나머지 값을 rest 이름의 배열에 할당
    const [first, ...rest] = arr;
}
