const mongoose = require("mongoose")
const Schema = mongoose.Schema


const HospitalSchema = new Schema({
   
   hospitalName:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        default:""
    },
   
    patientAddress:{
        type:String,
        default:""
    },
    bloodHeart:{
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