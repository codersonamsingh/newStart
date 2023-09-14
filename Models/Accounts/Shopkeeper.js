const mongoose = require("mongoose")
const Schema = mongoose.Schema


const ShopkeeperSchema = new Schema({
   
    shopkeeperName:{
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
    studentDocument:{
        type:String,
        default:""
    },
    noOfTeacher:{
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
module.exports =Shopkeeper = mongoose.model("Shopkeeper",ShopkeeperSchema)