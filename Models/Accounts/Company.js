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
    tax:{
        type:String,
        default:""
    },
    regulator:{
        type:String,
        default:""
    },
    gstNo:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:Number,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    openingDate:{
        type:Date,
        default:Date.now
    },
});
module.exports =Company = mongoose.model("Company",CompanySchema)