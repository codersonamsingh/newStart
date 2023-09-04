const mongoose = require("mongoose")
const Schema = mongoose.Schema


const CollageSchema = new Schema({
   
    collageName:{
        type:String,
        required:true
    },
    studentName:{
        type:String,
        default:""
    },
    noOfStudent:{
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
module.exports =Collage = mongoose.model("Collage",CollageSchema)