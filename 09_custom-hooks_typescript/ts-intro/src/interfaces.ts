interface User{
    firstName: string,
    age: number,
    email?: string
}

function isLegal(user: User){
    if(user.age > 18){
        return true;
    }
    return false;
}

console.log(isLegal({
    firstName: "Jitesh",
    age: 20
}))