const mongoose = require("mongoose")
const Schema = mongoose.Schema


const ReceiptSchema = new Schema({
   
    receiptNumber:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default: Date.now
    }
});
module.exports = Receipt = mongoose.model("Receipt",ReceiptSchema)