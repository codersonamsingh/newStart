//Read = 1. Get ALL document , 2. get one document by Id, 3. Search Document with note or amount

const express = require("express");
const Document = require("../../../../../Models/Accounts/Document");
const router = express.Router();

//@type Get
//@route /api/v1/account/document/getdocument/getAll
//@des get all  document
//@access public
router.get("/getAll", async(req,res) => {

try{ 
    
    const getDocument = await Document.find()


     res.json({
        data:getdocument,
        message:"document loaded",
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
//@route /api/v1/account/document/getdocument/getOne/:id
//@des get one document
//@access public
router.get("/getOne/:id", async(req,res) => {

    try{ 
        
        const getDocument = await Document.findById(req.params.id)
    
    
         res.json({
            data:getdocument,
            message:"document loaded",
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
//@route /api/v1/account/document/getdocument/search/:seachQuery
//@des to search document
//@access public   
router.get("/search/:searchQuery", async(req,res) => {

    try{ 
        
        const searchQuery = req.params.searchQuery

        const getDocument = await Document.find({
            $or:[
                {documentNumber: new RegExp(searchQuery, "i")},
                {name: (Number(searchQuery))}
            ]
        })
    
         res.json({
            data:getdocument,
            message:"document loaded",
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