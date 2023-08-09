const express = require("express");
const Payment = require("../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../validation/account/paymentValidation")


//@type POST
//@route / api/v1/accounts/payment/addpayment
//@des create New payment
//@access public
router.post("/",validateOnCreate, async(req,res) =>{
    if(!req.body?.amount){

        res.status(400).json({
            message: "Amount Required",
            varient: "error"
        })
    }else
    {
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

    }
    await new Payment(paymentobj)
    .save();

    res.status(201).json({
        message: "Payment Added",
        varient: "success"
    })

}
})

module.express = router;

async function getPaymentObj(req,type){


    let newPayment = {}
    if (req.body.amount){
        newPayment.amount = req.body.amount
    }
    if(req.body.note){
        newPayment.amount = req.body.amount
    }
    if(req.body.date){
        newPayment.amount = req.body.amount
    }

    return newPayment

}
module.exports = router;

