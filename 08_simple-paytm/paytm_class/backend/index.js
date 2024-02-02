const express = require("express");
const mainRouter = require("./routes/index");
const app = express();
const cors = require("cors");

require("./db");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/v1", mainRouter);
app.use(
    cors({
        origin: "*",
    })
);

app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`);
})