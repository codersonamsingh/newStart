const express = require("express");
const Payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")


//@type POST
//@route / api/v1/accounts/payment/addpayment
//@des create New payment
//@access public
router.post("/",validateOnCreate, async(req,res) =>{

const paymentObj = await getPaymentObj(req,"create")



try{

    await new Payment(paymentObj)
    .save();

    res.status(201).json({
        message: "Payment Added",
        varient: "success"
    })


}catch(error) {

}

})

async function getnewPayment(req,type){

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
    if(req.body.amount) {
        newPayment.amount = req.body.amount

    }

    return newPayment
}
    
module.exports = router;

