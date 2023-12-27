const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://jiteshofficial2004:qbzNF6bhSR9qbG84@cluster0.mxxlspl.mongodb.net/userAppNew")

const User = mongoose.model('User', { name: String, email: String, password: String });


function validateUser(req, res, next){
    const UserSchema = zod.object({
        name: zod.string(),
        email: zod.string().email(),
        password: zod.string().min(5), // Assuming a minimum password length of 6 characters
    });
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    let user = {};
    user.name = name;
    user.email = email;
    user.password = password;

    const validation = UserSchema.safeParse(user);

    if(!validation.success){
        res.send(300).json({
            success: false,
            message: "User input not valid",
        })
    }
    next();
}

app.post("/signup", validateUser, async(req, res)=>{
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        
        res.status(200).json({
            success: true,
            message: "User Saved successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred while saving user",
            error: error.message,
        });
    }
})

app.listen(3000, () => {
    console.log("The server is running at port 3000")
})