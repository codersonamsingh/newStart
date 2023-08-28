const express = require("express");
constHospital = require("../../../../../Models/Accounts/Hospital");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/hospitalValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/hospital/addHospital
//@des crete Newhospital
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const hospitalObj = await getHospitalObj(req,"create")
console.log(hospitalObj)
     await new Hospital(hospitalObj)
      .save();
      
      res.status(201).json({
        message: "Hospital Added",
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
//@routes/api/v1/accounts/hospital/addHospital/id:
//@des crete Updatehospital
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        consthospitalObj = await getHospitalObj(req,"update")

        consthospital = awaitHospital.findOneAndUpdate(
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
            message: "Hospital Updated Successfully",
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
        consthospital = awaitHospital.findIdAndRemove(req.params.id);
        if(!hospital){
            res.status(500).json({
                message: "hospital not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Hospital Deleted Successfully",
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
    
    
async function getHospitalObj(req,type){
    let newHospital = {}
    if(req.body.hospitalName) {
        newHospital.hospitalName = req.body.hospitalName
    }
    if(req.body.patientName) {
        .patientName = req.body.patientName
    }
    if(req.body.patientAddress) {
        Hospital.patientAddress = req.body.patientAddress
    }
     if(req.body.bloodHeart) {
        newHospital.bloodHeart = req.body.bloodHeart
    }
     if(req.body.healthCheckUp) {
        newHospital.healthCheckUp = req.body.healthCheckUp
    }
     if(req.body.hospitalFee) {
        newHospital.hospitalFee = req.body. hospitalFee
    }
    if(req.body.comingDate) {
        newHospital.comingDate = req.body.comingDate
    }

    return newHospital
}
    
module.exports = router;

