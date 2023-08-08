const express = require("express");
const Payment = require("../../../../../Models/Accounts/Patyment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")


//@type POST
//@route / api/v1/accounts/payment/addpayment
//@des create New payment
//@access public
router.post("/",async(req,res) =>{
    if(!req.body.amount){

        res.status(400).json({
            message:"Amount Required",
            varient:"error"

        })
    }


    let paymentobj = {}
    if (req.body.amount){
        paymentobj.amount = req.body.amount
    }
    if(req.body.note){
        paymentobj.amount = req.body.amount
    }
    if(req.body.date){
        paymentobj.amount = req.body.amount
    }

    await new Payment(paymentobj)
    .save();

    res.status(201).json({
        message: "Payment Added",
        varient: "success"
    })

})

module.exports = router;