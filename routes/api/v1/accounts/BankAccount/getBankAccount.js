//Read = 1. Get ALL BankAccount , 2. get one BankAccount by Id, 3. Search BankAccount with note or amount

const express = require("express");
const BankAccount = require("../../../../../Models/Accounts/BankAccount");
const router = express.Router();

//@type Get
//@route /api/v1/account/BankAccount/getBankAccount/getAll
//@des get all  BankAccount
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getBankAccount = await BankAccount.find()


     res.json({
        data:getBankAccount,
        message:"BankAccount loaded",
        varient:"success"
     })

}catch(error){
    console.log(error)

    res.status(500).json({
        message: "Internal Server error",
        varient: "error"
    })
}
})

//@type Get
//@route /api/v1/account/BankAccount/getBankAccount/getOne/:id
//@des get one BankAccount
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getBankAccount = await BankAccount.findById(req.params.id)
    
    
         res.json({
            data:getBankAccount,
            message:"BankAccount loaded",
            varient:"success"
         })
    
    }catch(error){
        console.log(error)
    
        res.status(500).json({
            message: "Internal Server error",
            varient: "error"
        })
    }
    })

//@type Get search
//@route /api/v1/account/BankAccount/getBankAccount/search/:seachQuery
//@des to search BankAccount
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getBankAccount = await BankAccount.find({
            $or:[
                {BankAccountName: new RegExp(searchQuery, "i")},
                {patientName: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getBankAccount,
            message:"BankAccount loaded",
            varient:"success"
         })
    
    }catch(error){
        console.log(error)
    
        res.status(500).json({
            message: "Internal Server error",
            varient: "error"
        })
    }
    })
module.exports = router