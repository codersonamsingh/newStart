const express = require("express")
const bodyparser = require("body-parser")
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose")

//bring all route
const login = require("./routes/api/auth/login")

const app = express()

//call all route
app.use("api/v1/auth/login",login)


//configure middleware

app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(bodyparser.json({limit:"50mb"}));
app.use(express.static(path.join(__dirname,"client/build")));

//passport setup session
app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:['asdflkjhg']
}))

app.use(passport.initialize());
app.use(passport.session());

//passport strategy
require("./Models/User")
require("./strategies/jsonwtStrategy")(passport)

//data base connection

const db = require("./setup/myurl").mongoURL;

mongoose
.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("MongoDb connected"))
.catch(Err => console.log(Err))









//setup server listiening

const port = process.env.PORT ||2050;

app.listen(port, () => {
    console.log(`Server is running at ${port}` )
})