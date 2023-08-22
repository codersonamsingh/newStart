const mongoose = require("mongoose")
const Schema = mongoose.Schema


const HostelSchema = new Schema({
   
   hostelName:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
        default:""
    },
   
    address:{
        type:Date,
        default: Date.now
    },
    studentName:{
        type:Date,
        default:""
    },
});
module.exports =Hostel = mongoose.model("Hostel",HostelSchema)