const express = require("express")
const bodyparser = require("body-parser")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(bodyparser.json({limit:"50mb"}));
app.use(express.static(path.join(__dirname,"client/build")));





app.listen(2050)
console.log("server running at 2050")