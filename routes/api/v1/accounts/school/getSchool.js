//Read = 1. Get ALL Collage , 2. get one Collage by Id, 3. Search Collage with note or amount

const express = require("express");
const Collage = require("../../../../../Models/Accounts/Collage");
const router = express.Router();

//@type Get
//@route /api/v1/account/Collage/getCollage/getAll
//@des get all  Collage
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getCollage = await Collage.find()


     res.json({
        data:getCollage,
        message:"Collage loaded",
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
//@route /api/v1/account/Collage/getCollage/getOne/:id
//@des get one Collage
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getCollage = await Collage.findById(req.params.id)
    
    
         res.json({
            data:getCollage,
            message:"Collage loaded",
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
//@route /api/v1/account/Collage/getCollage/search/:seachQuery
//@des to search Collage
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getCollage = await Collage.find({
            $or:[
                {collageName: new RegExp(searchQuery, "i")},
                { studentName: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getCollage,
            message:"Collage loaded",
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