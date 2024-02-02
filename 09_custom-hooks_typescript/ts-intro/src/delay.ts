function delayOutput(fn:()=>void){
    setTimeout(fn, 1000)
}

delayOutput(()=>{
    console.log("Hello is delayed");
});