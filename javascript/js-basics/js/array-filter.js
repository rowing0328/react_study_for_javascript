{
    const source = [1, 4, 8, 16];

    // 배열의 요소 중 짝수인 수를 출력
    const even = source.filter(v => v % 2 === 0);
    console.log(even);
}


{
    const source = [1, 4, 8, 16];

    // 배열의 모든 요소 값을 합한 결과를 출력
    const total = source.reduce((a, c) => a + c);
    console.log(total);
}


{
    // 국기 정보를 가져와서 국가와 국기 이미지를 출력하는 프로그램을 작성
    fetchCountriesAndFlags();
}
