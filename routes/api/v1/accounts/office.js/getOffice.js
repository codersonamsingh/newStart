//Read = 1. Get ALL office , 2. get one office by Id, 3. Search Office with note or amount

const express = require("express");
const Office = require("../../../../../Models/Accounts/Office");
const router = express.Router();

//@type Get
//@route /api/v1/accounts/Office/getOffice/getAll
//@des get all  office
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getOffice = await Office.find()


     res.json({
        data:getOffice,
        message:"office loaded",
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
//@route /api/v1/account/office/getOffice/getOne/:id
//@des get one office
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getOffice = await Office.findById(req.params.id)
    
    
         res.json({
            data:getOffice,
            message:"office loaded",
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
//@route /api/v1/account/office/getOffice/search/:seachQuery
//@des to search office
//@access public   
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getOffice = await Office.find({
            $or:[
                
                {officeName: new RegExp(searchQuery, "i")},
                {workerName: new RegExp(searchQuery, "i")},
                {phoneNumber: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getoffice,
            message:"office loaded",
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