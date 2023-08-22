const express = require("express");
const Payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/payment/addpayment
//@des crete New payment
//@access public

router.post("/",validateOnCreate, async(req,res) =>{


})
//@type POST
//@routes/api/v1/accounts/payment/addpayment/id:
//@des crete Update payment
//@access public
router.post("/:id",async (req,res) => {
})

//@type Delete
//@route / api/v1/accounts/payment/addpayment/deleteOne/id:
//@des Delete payment
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })

    
async function getpaymentObj(req,type){

    let newPayment = {}
    if(req.body.amount) {
        newPayment.amount = req.body.amount
    }
    if(req.body.note) {
        newPayment.note = req.body.note
    }
    if(req.body.date) {
        newPayment.date = req.body.date
    }
   

    return newPayment
}
    
module.exports = router;

