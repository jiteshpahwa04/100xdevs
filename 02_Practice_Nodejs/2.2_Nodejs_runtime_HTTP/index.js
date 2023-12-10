const express = require("express");
const app = express();

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Create a todo app that lets users store todos on the server
// Create an http server from scratch in C
// Create an http server in rust using actix-web
// Create an http server in golang using gurrila framework
// spring boot java
