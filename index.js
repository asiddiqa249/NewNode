const { log } = require("console");
const express = require("express")
let app = express();
app.use(express.json())
app.get("/user", (req, res) => {
    res.send("hello World");
    res.end();
}).listen(3001, () => {
    console.log("Server is runing")
})