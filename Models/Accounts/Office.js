const mongoose = require("mongoose")
const Schema = mongoose.Schema


const OfficeSchema = new Schema({
   
    officeName:{
        type:String,
        required:true
    },
    workerName:{
        type:String,
        default:""
    },
    workerId:{
        type:String,
        default:""
    },
    workerAddress:{
        type:String,
        default:""
    },
    workerEducation:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:Number,
        default:""
    },
    comingDate:{
        type:Date,
        default:Date.now
    },
});
module.exports =Office = mongoose.model("Office",OfficeSchema)