const express = require("express");
const Document = require("../../../../../Models/Accounts/Document");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/documentValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/document/addDocument
//@des crete New document
//@access public

router.post("/",validateOnCreate, async(req,res) =>{


    
    await new Document(new document)
      .save();
      
      res.statusCode(201).json({
        message: "Document Added",
        varient : "success"
      })
}

)
//@type POST
//@routes/api/v1/accounts/document/addDocument/id:
//@des crete Update document
//@access public
router.post("/:id",async (req,res) => {
    
})

//@type Delete
//@route / api/v1/accounts/document/adddocument/deleteOne/id:
//@des Delete document
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })

    
async function getDocumentObj(req,type){

    let newdocument = {}
    if(req.body.number) {
        new document.number = req.body.number
    }
    if(req.body.name) {
        new document.name = req.body.name
    }
    if(req.body.date) {
        new document.date = req.body.date
    }

    return newDocument
}
    
module.exports = router;

