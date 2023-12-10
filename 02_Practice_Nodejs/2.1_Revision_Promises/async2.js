function onDone(){
    console.log("This is ondone :)");
}

setTimeout(() => {
    onDone();
}, 10000);

console.log("After the set timeout");