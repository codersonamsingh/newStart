const express = require("express");
constOffice = require("../../../../../Models/Accounts/Office");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/hospitalValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/hospital/addOffice
//@des crete Newhospital
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const hospitalObj = await getOfficeObj(req,"create")
console.log(hospitalObj)
     await new Office(hospitalObj)
      .save();
      
      res.status(201).json({
        message: "Office Added",
        varient : "success"
      })

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal Server error",
        varient : "error"
      })
    }
    

}

)
//@type POST
//@routes/api/v1/accounts/hospital/addOffice/id:
//@des crete Updatehospital
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        consthospitalObj = await getOfficeObj(req,"update")

        consthospital = awaitOffice.findOneAndUpdate(
            {id:req.params.id},
            {$set:hospitalObj},
            {new:true}
        )
        if(!hospital){
            res.status(500).json({
                message: "hospital not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Office Updated Successfully",
            varient : "error"
          })
     

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    
})

//@type Delete
//@route / api/v1/accounts/hospital/addhospital/deleteOne/id:
//@des Deletehospital
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        consthospital = awaitOffice.findIdAndRemove(req.params.id);
        if(!hospital){
            res.status(500).json({
                message: "hospital not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Office Deleted Successfully",
            varient : "error"
          })
     

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal Server error",
            varient : "error"
          })
     

    }
    })
    
    
async function getOfficeObj(req,type){
    let newOffice = {}
    if(req.body.hospitalName) {
        newOffice.hospitalName = req.body.hospitalName
    }
    if(req.body.patientName) {
        newOffice.patientName = req.body.patientName
    }
    if(req.body.patientAddress) {
        newOffice.patientAddress = req.body.patientAddress
    }
     if(req.body.bloodHeart) {
        newOffice.bloodHeart = req.body.bloodHeart
    }
     if(req.body.healthCheckUp) {
        newOffice.healthCheckUp = req.body.healthCheckUp
    }
     if(req.body.hospitalFee) {
        newOffice.hospitalFee = req.body. hospitalFee
    }
    if(req.body.comingDate) {
        newOffice.comingDate = req.body.comingDate
    }

    return newOffice
}
    
module.exports = router;

