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
        type:String,
        default:""
    },
    studentName:{
        type:String,
        default:""
    },
    class:{
        type:String,
        default:""
    },
    number:{
        type:Number,
        default:""
    },
    comingDate:{
        type:Date,
        default:Date.now
    },
});
module.exports =Hostel = mongoose.model("Hostel",HostelSchema)