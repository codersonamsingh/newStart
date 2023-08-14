//Read = 1. Get ALL payment , 2. get one payment by Id, 3. Search Payment with note or amount

const express =require("express");
const router = express.Router();

//@type Get
//@route /api/v1/account/payment/getAll
//@des get all  payment
//@access public
router.get("/getAll,"(req,res) => {


})

module.exports = router