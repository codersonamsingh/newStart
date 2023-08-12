const express = require("express");
const Payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")

router.post("/",validateOnCreate, async(req,res) =>{

try{
    const paymentObj = await getpaymentObj(req,"create")


    await new Payment(paymentObj)
    .save();

    res.status(201).json({
        message: "Payment Added",
        varient: "success"
    })
}catch(error) {
    console.log(error)

    res.status(500).json({
        message: "Internal Server error",
        varient: "error"
    })
}
})

router.post("/:id",async (req,res) => {
    try{
        const paymentObj = await getpaymentObj(req,"update")

        const payment = await Payment.findOneAndUpdate(
            {_id:req.params.id},
            {$set: paymentObj},
            {new:true}
        )

         

    }catch (error) {console.log(error)

        res.status(500).json({
            message: "Internal Server error",
            varient: "error"
        }) 
    }
})
//@type Delete
//@route / api/v1/accounts/payment/addpayment/id:
//@des Delete payment
//@access public

router.delete("/deleteOne/:id",(req,res) => {

    try{

        const payment = await Payment.findByIdAndRemove(req.params.id);
        if(!Payment){
            res.status(500).json({
                message: "payment not found",
                varient: "error"
            })
        }

        res.status(201).json({
            message: "Payment Deleted Successfully",
            varient: "success"
        })

    }
    catch(error){}

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

