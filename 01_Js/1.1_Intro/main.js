console.log("Hello, world!");

const greet = (firstName, lastName)=>{
    console.log(`Hello, ${firstName} ${lastName}`);
}
greet("Jitesh", "Pahwa")

const greet2 = (firstName, lastName, age)=>{
    if(age<18){
        console.log(`Hello kiddoo, ${firstName} ${lastName}`);
    }else{
        console.log(`Hello sir, ${firstName} ${lastName}`);
    }
}
greet2("Jitesh", "Pahwa", 19)

const printLoop = ()=>{
    let sum = 0;
    for(let i=1;i<=1000;i++){
        sum += i;
    }
    console.log(sum);
}
printLoop()

let nums = [1,3,5,6,2,654,32,53,3452,6343,432,4532,25];
console.log("Printing all odd numbers: ")
for(let i=0;i<nums.length;i++){
    if(nums[i]%2!==0){
        console.log(nums[i]);
    }
}

console.log("Printing all even numbers: ")
for(let i=0;i<nums.length;i++){
    if(nums[i]%2===0){
        console.log(nums[i]);
    }
}

let maxNum = 0;
for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if(element>maxNum){
        maxNum = element;
    }
}
console.log("Biggest Number: ", maxNum);

const people = [
                {firstName: "Jitesh", lastName: "Pahwa", age: 19, gender: "Male"}, 
                {firstName: "Harkirat", lastName: "Singh", age: 25, gender: "Male"},
                {firstName: "Aryama", lastName: "Rawat", age: 20, gender: "Female"}
            ]
for(let i=0;i<people.length;i++){
    if(people[i].gender==="Male"){
        console.log(people[i]["firstName"]);
        // console.log(people[i].firstName);
    }
}

let i=0;
let j=nums.length-1;
while(i<j){
    let x = nums[i];
    nums[i] = nums[j];
    nums[j] = x;
    i++; j--;
}
console.log("Reversed Nums list: ")
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}