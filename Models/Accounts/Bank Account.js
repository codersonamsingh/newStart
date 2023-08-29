const mongoose = require("mongoose")
const Schema = mongoose.Schema


const HospitalSchema = new Schema({
   
    bankName:{
        type:String,
        required:true
    },
    aadharCard:{
        type:String,
        default:""
    },
   
    pinCard:{
        type:String,
        default:""
    },
    customberName:{
        type:String,
        default:""
    },
    healthCheckUp:{
        type:String,
        default:""
    },
    hospitalFee:{
        type:Number,
        default:""
    },
    comingDate:{
        type:Date,
        default:Date.now
    },
});
module.exports =Hospital = mongoose.model("Hospital",HospitalSchema)