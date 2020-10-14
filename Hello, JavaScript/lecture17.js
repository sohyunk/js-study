function makeCounterFunction(initVal) {
    var count = initVal;
    function Increase() {
        count++;
        console.log(count);
    }
    return Increase;
}

var counter1 = makeCounterFunction(0);
var counter2 = makeCounterFunction(10);

// counter1 함수가 호출되었을 때의 count변수와 
// counter2 함수가 호출되었을 때의 count변수가 다름.
// => clouser 때문

counter1();
counter2();