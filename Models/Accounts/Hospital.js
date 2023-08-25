const mongoose = require("mongoose")
const Schema = mongoose.Schema


const HospitalSchema = new Schema({
   
   hospitalName:{
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
module.exports =Hospital = mongoose.model("Hospital",HospitalSchema)