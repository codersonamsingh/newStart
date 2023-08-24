//Read = 1. Get ALL hostel , 2. get one hostel by Id, 3. Search Hostel with note or amount

const express = require("express");
const Hostel = require("../../../../../Models/Accounts/Hostel");
const router = express.Router();

//@type Get
//@route /api/v1/accounts/hostel/getHostel/getAll
//@des get all  hostel
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getHostel = await Hostel.find()


     res.json({
        data:gethostel,
        message:"hostel loaded",
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
//@route /api/v1/account/hostel/getHostel/getOne/:id
//@des get one hostel
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getHostel = await Hostel.findById(req.params.id)
    
    
         res.json({
            data:getHostel,
            message:"hostel loaded",
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
//@route /api/v1/account/hostel/getHostel/search/:seachQuery
//@des to search hostel
//@access public   
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getHostel = await Hostel.find({
            $or:[
                
                {fatherName: new RegExp(searchQuery, "i")},
                
                {studentName: new RegExp(searchQuery, "i")},
                {number: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:gethostel,
            message:"hostel loaded",
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