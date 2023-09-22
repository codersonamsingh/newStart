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
module.exports =Shopkeeper = mongoose.model("Shopkeeper",ShopkeeperSchema)