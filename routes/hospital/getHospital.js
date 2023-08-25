//Read = 1. Get ALL hospital , 2. get one hospital by Id, 3. Search Receipt with note or amount

const express = require("express");
const Receipt = require("../../../../../Models/Accounts/Receipt");
const router = express.Router();

//@type Get
//@route /api/v1/account/hospital/gethospital/getAll
//@des get all  hospital
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getReceipt = await Receipt.find()


     res.json({
        data:gethospital,
        message:"hospital loaded",
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

//@type Get
//@route /api/v1/account/hospital/gethospital/getOne/:id
//@des get one hospital
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getReceipt = await Receipt.findById(req.params.id)
    
    
         res.json({
            data:gethospital,
            message:"hospital loaded",
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

//@type Get search
//@route /api/v1/account/hospital/gethospital/search/:seachQuery
//@des to search hospital
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getReceipt = await Receipt.find({
            $or:[
                {hospitalNumber: new RegExp(searchQuery, "i")},
                {name: (Number(searchQuery))}
            ]
        })
    
         res.json({
            data:gethospital,
            message:"hospital loaded",
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