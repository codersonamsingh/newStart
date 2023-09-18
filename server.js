const express = require("express")
const bodyparser = require("body-parser")
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const upload = require("express-fileupload")

//bring all route
const addPayment = require("./routes/api/v1/accounts/payment/addPayment");
const getpayment = require("./routes/api/v1/accounts/payment/getpayment");
const addReceipt = require("./routes/api/v1/accounts/receipt/addReceipt");
const getReceipt = require("./routes/api/v1/accounts/receipt/getReceipt");
const addDocument = require("./routes/api/v1/accounts/document/addDocument");
const getDocument = require("./routes/api/v1/accounts/document/getDocument");
const getHostel = require("./routes/api/v1/accounts/hostel/getHostel");
const addHostel = require("./routes/api/v1/accounts/hostel/addHostel");
const addHospital = require("./routes/api/v1/accounts/hospital/addHospital");
const getHospital = require("./routes/api/v1/accounts/hospital/getHospital");
const addOffice = require("./routes/api/v1/accounts/office/addOffice");
const getOffice = require("./routes/api/v1/accounts/office/getOffice");
const addCollage = require("./routes/api/v1/accounts/Collage/addCollage");
const getCollage = require("./routes/api/v1/accounts/Collage/getCollage");
const addSchool = require("./routes/api/v1/accounts/School/addSchool");
const getSchool = require("./routes/api/v1/accounts/School/getSchool");
const addShopkeeper = require("./routes/api/v1/accounts/Shopkeeper/addShopkeeper");
const getShopkeeper = require("./routes/api/v1/accounts/Shopkeeper/getShopkeeper");

const app = express();
app.use(upload({useTempfiles:true}))



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



//call all route
app.use("/api/v1/accounts/payment/addPayment",addPayment);
app.use("/api/v1/accounts/payment/getpayment",getpayment)
app.use("/api/v1/accounts/receipt/addReceip",addReceipt)
app.use("/api/v1/accounts/receipt/getReceip",getReceipt)
app.use("/api/v1/accounts/document/addDocument",addDocument)
app.use("/api/v1/accounts/document/getDocument",getDocument)
app.use("/api/v1/accounts/hostel/addHostel",addHostel)
app.use("/api/v1/accounts/hostel/getHostel",getHostel)
app.use("/api/v1/accounts/hospital/addHospital",addHospital)
app.use("/api/v1/accounts/hospital/getHospital",getHospital)
app.use("/api/v1/accounts/office/addOffice",addOffice)
app.use("/api/v1/accounts/office/getOffice",getOffice)
app.use("/api/v1/accounts/collage/addCollage",addCollage)
app.use("/api/v1/accounts/collage/getCollage",getCollage)
app.use("/api/api/v1/accounts/School/addSchool",addSchool)
app.use("/api/api/v1/accounts/School/getSchool",getSchool)


//data base connection
const db = require("./setup/myurl").mongoURL;

mongoose
.connect(db, {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("MongoDb connected"))
.catch(Err => console.log(Err))

app.get("/*",function(req,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

//setup server listiening

const port = process.env.PORT ||2050;

app.listen(port, () => {
    console.log(`Server is running at ${port}` )
})