const express = require("express");
const Payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")


//@type POST
//@route / api/v1/accounts/payment/addpayment
//@des create New payment
//@access public
router.post("/",validateOnCreate, async(req,res) =>{
    
        let PaymentObj = {}
        if(req.body.amount) {
            paymentobj.amount = req.body.amount
        }
        if(req.body.note) {
            paymentobj.note = req.body.note
        }
        if(req.body.date) {
            paymentobj.date = req.body.date
        }
        if(req.body.amount) {
            paymentobj.amount = req.body.amount

    
    await new Payment(paymentobj)
    .save();

    res.status(201).json({
        message: "Payment Added",
        varient: "success"
    })
}
})

module.exports = router;

