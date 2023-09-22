const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CompanySchema = new Schema({
   
    companyName:{
        type:String,
        required:true
    },
    materialName:{
        type:String,
        default:""
    },
    noOfItems:{
        type:String,
        default:""
    },
    itemRate:{
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