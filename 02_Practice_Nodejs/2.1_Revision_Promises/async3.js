const fs = require("fs")

fs.readFile("a.txt", "utf-8", (err, data)=>{
    data = data + "\nAdded over the data";
    fs.writeFile("a.txt", data, (err, data)=>{
        if(err){
            return console.log(err);
        }
        console.log("Added data");
    })
})