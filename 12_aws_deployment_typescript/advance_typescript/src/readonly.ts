const notEditable = 5;
// notEditable = 10;

const editable = [5, 6, 8];
editable[1] = 10;
// editable = [1, 2, 3]; --> not editable

const editableObj = {
    name: "jitesh",
    age: 20
}
editableObj.name = "aman";
// editableObj = { --> not doable
//     name: "aman",
//     age: 21
// }

// READONLY //

type UserR = {
    readonly name: string,
    readonly age: number
}
const user: UserR = {
    name: "Jitesh",
    age: 20,
}
// user.age = 21; --> now not doable

interface Config {
    endpoint: string;
    apiKey: string;
}
const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
