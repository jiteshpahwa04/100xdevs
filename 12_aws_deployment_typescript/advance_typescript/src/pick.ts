interface UserN{
    id: number,
    name: string,
    age: number,
    email: string,
    password: string,
}

type UpdateUserN = Pick<UserN, 'name' | "age" | "email">

// interface UpdateUserN{
//     name: string,
//     age: number,
//     email: string
// }

function updateUser(updateProps: UpdateUserN){
    
}