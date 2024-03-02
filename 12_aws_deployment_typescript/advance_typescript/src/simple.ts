interface User{
    name: string,
    age: number
}

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age;
}

const age = sumOfAge({name: "Jitesh", age: 20}, {name: "Aman", age: 21});
console.log(age);