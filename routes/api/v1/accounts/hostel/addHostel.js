const express = require("express");
const Hostel = require("../../../../../Models/Accounts/Hostel");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/hostelValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/hostel/addhostel
//@des crete New hostel
//@access public

router.post("/",validateOnCreate, async(req,res) =>{


})
//@type POST
//@routes/api/v1/accounts/hostel/addhostel/id:
//@des crete Update hostel
//@access public
router.post("/:id",async (req,res) => {
})

//@type Delete
//@route / api/v1/accounts/hostel/addhostel/deleteOne/id:
//@des Delete hostel
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })

    
async function gethostelObj(req,type){

    let newHostel = {}
    if(req.body.amount) {
        newHostel.amount = req.body.amount
    }
    if(req.body.note) {
        newHostel.note = req.body.note
    }
    if(req.body.date) {
        newHostel.date = req.body.date
    }
   

    return newHostel
}
    
module.exports = router;

