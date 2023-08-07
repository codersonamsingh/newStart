const express = require("express");
const router = express.Router();


//@type POST
//@route / api/v1/accounts/payment/addpayment
//@des create New payment
//@access public
router.post("/",async(req,res) =>{


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