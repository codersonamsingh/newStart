const mongoose = require("mongoose")
const Schema = mongoose.Schema


const HostelSchema = new Schema({
   
   hostelNumber:{
        type:String,
        required:true
    },
    hostelName:{
        type:String,
        default:""
    },
    date:{
        type:Date,
        default: Date.now
    }
});
module.exports =Hostel = mongoose.model("Hostel",HostelSchema)