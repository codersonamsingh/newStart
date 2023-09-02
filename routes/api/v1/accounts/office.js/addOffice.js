const express = require("express");
constOffice = require("../../../../../Models/Accounts/Office");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/OfficeValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/office/addOffice
//@des crete Newoffice
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const officeObj = await getOfficeObj(req,"create")
console.log(officeObj)
     await new Office(officeObj)
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
//@routes/api/v1/accounts/office/addOffice/id:
//@des crete Updateoffice
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constofficeObj = await getOfficeObj(req,"update")

        constoffice = awaitOffice.findOneAndUpdate(
            {id:req.params.id},
            {$set:officeObj},
            {new:true}
        )
        if(!office){
            res.status(500).json({
                message: "office not found",
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
//@route / api/v1/accounts/office/addoffice/deleteOne/id:
//@des Deleteoffice
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constoffice = awaitOffice.findIdAndRemove(req.params.id);
        if(!office){
            res.status(500).json({
                message: "office not found",
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
    if(req.body.officeName) {
        newOffice.officeName = req.body.officeName
    }
    if(req.body.workerName) {
        newOffice.workerName = req.body.workerName
    }
    if(req.body.workerId) {
        newOffice.workerId = req.body.workerId
    }
     if(req.body.workerAddress) {
        newOffice.workerAddress = req.body.workerAddress
    }
     if(req.body.workerEducation) {
        newOffice.workerEducation = req.body.workerEducation
    }
     if(req.body.phoneNumber) {
        newOffice.phoneNumber = req.body. phoneNumber
    }
    if(req.body.comingDate) {
        newOffice.comingDate = req.body.comingDate
    }

    return newOffice
}
    
module.exports = router;

