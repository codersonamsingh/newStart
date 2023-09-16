//Read = 1. Get ALL Shopkeeper , 2. get one Shopkeeper by Id, 3. Search Shopkeeper with note or amount

const express = require("express");
const Shopkeeper = require("../../../../../Models/Accounts/Shopkeeper");
const router = express.Router();

//@type Get
//@route /api/v1/account/Shopkeeper/getShopkeeper/getAll
//@des get all  Shopkeeper
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getShopkeeper = await Shopkeeper.find()


     res.json({
        data:getShopkeeper,
        message:"Shopkeeper loaded",
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
//@route /api/v1/account/Shopkeeper/getShopkeeper/getOne/:id
//@des get one Shopkeeper
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getShopkeeper = await Shopkeeper.findById(req.params.id)
    
    
         res.json({
            data:getShopkeeper,
            message:"Shopkeeper loaded",
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
//@route /api/v1/account/Shopkeeper/getShopkeeper/search/:seachQuery
//@des to search Shopkeeper
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getShopkeeper = await Shopkeeper.find({
            $or:[
                {schoolName: new RegExp(searchQuery, "i")},
                {studentName: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getShopkeeper,
            message:"Shopkeeper loaded",
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