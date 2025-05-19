const source = [1, 4, 8, 16];


// source 배열의 값을 두 배수할 결과 배열을 생성
{
    const twoTimes = [];
    for (let i = 0; i < source.length; i++) {
        twoTimes[i] = source[i] * 2;
    }
    console.log(twoTimes);
}


{
    const twoTimes = source.map(s => s * 2);
    console.log(twoTimes);
}


{
    const twoTimeFunc = s => s * 2;
    const twoTimes = source.map(twoTimeFunc);
    console.log(twoTimes);
}


{
    const twoTimeFunc = function (s) {
        return s * 2;
    };
    const twoTimes = source.map(twoTimeFunc);
    console.log(twoTimes);
}


{
    function twoTimeFunc(s) {
        return s * 2;
    };
    const twoTimes = source.map(twoTimeFunc);
    console.log(twoTimes);
}

// map 함수 연결
{
    const source = [1, 4, 8, 16];


    const plusTwo = v => v + 2;
    const tenTimes = v => v * 10;


    // source 배열의 값을 2 증가한 결과를 10 배수한 배열을 생성
    const result = source.map(plusTwo).map(tenTimes);
    console.log(result);


    // source 배열의 값을 10 배수한 결과에 2를 더한 배열을 생성
    const result2 = source.map(tenTimes).map(plusTwo);
    console.log(result2);
}
