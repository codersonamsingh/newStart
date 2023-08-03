const express = require("express")
const app = express()

app.get("/",(req,res) => {
    console.log("i was here")
    res.send("i got c")
})





app.listen(2050)
console.log("server running at 2050")