//Read = 1. Get ALL School , 2. get one School by Id, 3. Search School with note or amount

const express = require("express");
const School = require("../../../../../Models/Accounts/School");
const router = express.Router();

//@type Get
//@route /api/v1/account/School/getSchool/getAll
//@des get all  School
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getSchool = await School.find()


     res.json({
        data:getSchool,
        message:"School loaded",
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
//@route /api/v1/account/School/getSchool/getOne/:id
//@des get one School
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getSchool = await School.findById(req.params.id)
    
    
         res.json({
            data:getSchool,
            message:"School loaded",
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
//@route /api/v1/account/School/getSchool/search/:seachQuery
//@des to search School
//@access public
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getSchool = await School.find({
            $or:[
                {schoolName: new RegExp(searchQuery, "i")},
                {studentName: new RegExp(searchQuery, "i")},
                
            ]
        })
    
         res.json({
            data:getSchool,
            message:"School loaded",
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