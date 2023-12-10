function sum(a, b, fnToCall){
    let result = a+b;
    fnToCall(result)
}

function displayResult(data){
    console.log(`The sum is ${data}`);
}

function displayResultPassive(data){
    console.log(`${data} is the sum`);
}

const ans = sum(1, 2, displayResultPassive)