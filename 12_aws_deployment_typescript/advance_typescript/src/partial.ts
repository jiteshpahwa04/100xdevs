// OPTIONAL //

// Example: 
// interface UserP{
//     id?: number,
//     age?: number,
//     name?: string
// }

interface UserP{
    id: number,
    name: string,
    age: number,
    email: string,
    password: string,
}

type UpdateUserP = Pick<UserN, 'name' | "age" | "email">

type UpdateUserPartialP = Partial<UpdateUserP>

function updateUserP(updateProps: UpdateUserPartialP){
    
}

updateUserP({
    name: "jitesh",
    email: "jitesh@gmail.com"
})