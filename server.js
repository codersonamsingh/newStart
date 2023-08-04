const express = require("express")
const bodyparser = require("body-parser")
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cookiesession = require("cookie-Session")

const app = express()

app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(bodyparser.json({limit:"50mb"}));
app.use(express.static(path.join(__dirname,"client/build")));

app.use(cookiesession([
    maxAge:24 * 60 * 60 * 1000,
    keys:['asdflkjhg']
]))

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT ||2050;

app.listen(port, () => {
    console.log('server is running at ${port}' )
})