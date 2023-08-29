const mongoose = require("mongoose")
const Schema = mongoose.Schema


const BankAccountSchema = new Schema({
   
    BankAccountName:{
        type:String,
        required:true
    },
    aadharCard:{
        type:String,
        default:""
    },
   
    panCard:{
        type:String,
        default:""
    },
    customberName:{
        type:String,
        default:""
    },
    phoneNumber:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    Date:{
        type:Date,
        default:Date.now
    },
});
module.exports =BankAccount = mongoose.model("BankAccount",BankAccountSchema)