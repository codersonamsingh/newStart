const express = require("express");
const Hospital = require("../../../../../Models/Accounts/Hospital");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/hospitalValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/hospital/addhospital
//@des crete New hospital
//@access public

router.post("/",validateOnCreate, async(req,res) =>{


})
//@type POST
//@routes/api/v1/accounts/hospital/addhospital/id:
//@des crete Update hospital
//@access public
router.post("/:id",async (req,res) => {
})

//@type Delete
//@route / api/v1/accounts/hospital/addhospital/deleteOne/id:
//@des Delete hospital
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })
async function gethospitalObj(req,type){

    let newHospital = {}
    if(req.body.hospitalName) {
        newHospital.hospitalName = req.body.amount
    }
    if(req.body.note) {
        newHospital.note = req.body.note
    }
    if(req.body.date) {
        newHospital.date = req.body.date
    }
   

    return newHospital
}
    
module.exports = router;

