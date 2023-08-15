//Read = 1. Get ALL payment , 2. get one payment by Id, 3. Search Payment with note or amount

const express = require("express");
const payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

//@type Get
//@route /api/v1/account/payment/getAll
//@des get all  payment
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getpayment = await payment.find()


     res.json({
        data:getpayment,
        message:"payment loaded",
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