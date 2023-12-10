function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n){
    return n*n*n*n;
}

function sumOfSomething(a, b, callbackFn) {
    let square1 = callbackFn(a);
    let square2 = callbackFn(b);
    return square1 + square2;
}

let ans = sumOfSomething(1, 2, cube);
console.log(ans);