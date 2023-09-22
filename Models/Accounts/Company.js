const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CompanySchema = new Schema({
   
    companyName:{
        type:String,
        required:true
    },
    IPR:{
        type:String,
        default:""
    },
    incomeTax:{
        type:String,
        default:""
    },
    regulator:{
        type:String,
        default:""
    },
    gst:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:Number,
        default:""
    },
    website:{
        type:String,
        default:""
    },
    sourceOfFunds:{
        type:String,
        default:""
    },
    openingDate:{
        type:Date,
        default:Date.now
    },
});
module.exports =Company = mongoose.model("Company",CompanySchema)