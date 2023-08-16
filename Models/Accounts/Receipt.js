const mongoose = require("mongoose")
const Schema = mongoose.Schema


const ReceiptSchema = new Schema({
    amount:{
        type:Number,
        required:true
    },
    note:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default: Date.now
    }
});
module.exports = Receipt = mongoose.model("Receipt",ReceiptSchema)