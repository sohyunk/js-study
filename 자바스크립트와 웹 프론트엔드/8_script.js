var sum = 0;

// 1 ~ 50까지의 합을 구하고
for(var i = 1; i <= 50; i++) {
    sum += i;
}

// 여기에서 1 ~ 5의 값을 출력하고 싶음
// 함수를 만들고 바로 호출
(function() {
    for(var i = 1; i <= 5; i++) {
        console.log(i);
    }
})();

// 51 ~ 100까지의 합을 추가로 계산
for( ; i <= 100; i++) {
    sum += i;
}

console.log(sum);