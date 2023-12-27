const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
    {
        username: "jitesh@gmail.com",
        password: "98765",
        name: "Jitesh Pahwa"
    }
];

function userExists(username, password) {
    let doesExist = false;
    ALL_USERS.forEach((user) => {
        if (user.username === username && user.password === password) {
            doesExist = true;
        }
    })
    return doesExist;
}

app.post("/signin", async function (req, res) {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        const users = ALL_USERS.filter((user)=>user.username!==username);
        res.status(200).json({
            all_users: users,
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log("The server is running at port 3000")
})