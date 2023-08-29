const express = require("express");
constBankAccount = require("../../../../../Models/Accounts/BankAccount");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/BankAccountValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/BankAccount/addBankAccount
//@des crete NewBankAccount
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const BankAccountObj = await getBankAccountObj(req,"create")
console.log(BankAccountObj)
     await new BankAccount(BankAccountObj)
      .save();
      
      res.status(201).json({
        message: "BankAccount Added",
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
//@routes/api/v1/accounts/BankAccount/addBankAccount/id:
//@des crete UpdateBankAccount
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constBankAccountObj = await getBankAccountObj(req,"update")

        constBankAccount = awaitBankAccount.findOneAndUpdate(
            {id:req.params.id},
            {$set:BankAccountObj},
            {new:true}
        )
        if(!BankAccount){
            res.status(500).json({
                message: "BankAccount not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "BankAccount Updated Successfully",
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
//@route / api/v1/accounts/BankAccount/addBankAccount/deleteOne/id:
//@des DeleteBankAccount
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constBankAccount = awaitBankAccount.findIdAndRemove(req.params.id);
        if(!BankAccount){
            res.status(500).json({
                message: "BankAccount not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "BankAccount Deleted Successfully",
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
    
    
async function getBankAccountObj(req,type){
    let newBankAccount = {}
    if(req.body.BankAccountName) {
        newBankAccount.BankAccountName = req.body.BankAccountName
    }
    if(req.body.aadharCard) {
        newBankAccount.panCard = req.body.patientName
    }
    if(req.body.patientAddress) {
        newBankAccount.patientAddress = req.body.patientAddress
    }
     if(req.body.bloodHeart) {
        newBankAccount.bloodHeart = req.body.bloodHeart
    }
     if(req.body.healthCheckUp) {
        newBankAccount.healthCheckUp = req.body.healthCheckUp
    }
     if(req.body.BankAccountFee) {
        newBankAccount.BankAccountFee = req.body. BankAccountFee
    }
    if(req.body.comingDate) {
        newBankAccount.comingDate = req.body.comingDate
    }

    return newBankAccount
}
    
module.exports = router;

