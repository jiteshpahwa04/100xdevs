const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json());

let counter = 1;

function saveTodo(todo){
    fs.appendFile("todos.txt", todo, ()=>{
        console.log("Saved to the file.");
    })
}

function getAllTodos(){
    let data = fs.readFileSync("todos.txt", "utf-8");
    return data;
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/sendMeTodo', (req, res)=>{
    const {todo} = req.body;
    let Todo = counter + ". " + todo + '\n';
    saveTodo(Todo);
    counter++;
    res.send({success: true, message: "Recieved the todo"});
})

app.get('/getAllTodo', (req, res)=>{
    const data = getAllTodos().split('\n');
    data.pop();
    res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})