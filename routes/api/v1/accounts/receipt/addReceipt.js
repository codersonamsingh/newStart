const express = require("express");
const Receipt = require("../../../../../Models/Accounts/Receipt");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/receiptValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/receipt/addreceipt
//@des crete New receipt
//@access public

router.post("/",validateOnCreate, async(req,res) =>{


})
//@type POST
//@routes/api/v1/accounts/receipt/addreceipt/id:
//@des crete Update receipt
//@access public
router.post("/:id",async (req,res) => {
})

//@type Delete
//@route / api/v1/accounts/receipt/addreceipt/deleteOne/id:
//@des Delete receipt
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })

    
async function getreceiptObj(req,type){

    let newReceipt = {}
    if(req.body.amount) {
        newReceipt.amount = req.body.amount
    }
    if(req.body.note) {
        newReceipt.note = req.body.note
    }
    if(req.body.date) {
        newReceipt.date = req.body.date
    }
   

    return newReceipt
}
    
module.exports = router;

