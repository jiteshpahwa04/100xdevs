function firstEl<T>(arr: T[]): T{
    return arr[0];
}

const value = firstEl<string>(["jitesh", "pahwa"]);
console.log(value.toUpperCase());

const value2 = firstEl<number>([1,2,3,4,5,6]);
console.log(value2.toPrecision(5))

interface GenericUser{
    name: string,
    age: number
}
const value3 = firstEl<GenericUser>([{
    name: "Jitesh",
    age: 20
}])