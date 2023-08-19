const mongoose = require("mongoose")
const Schema = mongoose.Schema


constDocumentSchema = new Schema({
   
   documentNumber:{
        type:String,
        required:true
    },
    documentName:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default: Date.now
    }
});
module.exports =Document = mongoose.model("Document",DocumentSchema)