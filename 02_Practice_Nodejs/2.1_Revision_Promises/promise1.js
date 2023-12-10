function myOwnSetTimeout(fn, duration){
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("Running callback");
}, 1000);

////////////// PROMISE ////////////////

function promisifiesMySetTimeout(duration){
    let p = new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
    return p;
}

promisifiesMySetTimeout(1000).then(function(){
    console.log("Running promises !!")
})
console.log("Ended");