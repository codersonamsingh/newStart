const express = require("express");
constHospital = require("../../../../../Models/Accounts/Document");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/documentValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/document/addDocument
//@des crete Newhospital
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        consthospitalObj = await getDocumentObj(req,"create")

     await newHospital(documentObj)
      .save();
      
      res.statusCode(201).json({
        message: "Document Added",
        varient : "success"
      })

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    

}

)
//@type POST
//@routes/api/v1/accounts/document/addDocument/id:
//@des crete Updatehospital
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        consthospitalObj = await getDocumentObj(req,"update")

        consthospital = awaitHospital.findOneAndUpdate(
            {id:req.params.id},
            {$set:hospitalObj},
            {new:true}
        )
        if(!document){
            res.statusCode(500).json({
                message: "document not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Document Updated Successfully",
            varient : "error"
          })
     

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    
})

//@type Delete
//@route / api/v1/accounts/document/adddocument/deleteOne/id:
//@des Deletehospital
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        consthospital = awaitHospital.findIdAndRemove(req.params.id);
        if(!document){
            res.statusCode(500).json({
                message: "document not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Document Deleted Successfully",
            varient : "error"
          })
     

    }
    catch(error){
        console.log(error)
        res.statusCode(500).json({
            message: "Internal Server error",
            varient : "error"
          })
     

    }
    })
    
    
async function getDocumentObj(req,type){

    let newDocument = {}
    if(req.body.hospitalName) {
        hospital.number = req.body.number
    }
    if(req.body.patientName) {
        hospital.patientName = req.body.patientName
    }
    if(req.body.patientAddress) {
        hospital.patientAddress = req.body.patientAddress
    }
     if(req.body.bloodHeart) {
        hospital.bloodHeart = req.body.bloodHeart
    }
     if(req.body.healthCheckUp) {
        hospital.healthCheckUp = req.body.healthCheckUp
    }
     if(req.body.date) {
        hospital.date = req.body.date
    }

    return newDocument
}
    
module.exports = router;

