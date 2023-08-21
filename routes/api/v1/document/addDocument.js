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

    try{
        const documentObj = await getDocumentObj(req,"create")

     await new Document(documentObj)
      .save();
      
      res.statusCode(201).json({
        message: "Document Added",
        varient : "success"
      })

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    

}

)
//@type POST
//@routes/api/v1/accounts/document/addDocument/id:
//@des crete Update document
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        const documentObj = await getDocumentObj(req,"update")

        const document = await Document.findOneAndUpdate(
            {id:req.params.id},
            {$set: documentObj},
            {new:true}
        )
        if(!document){
            res.statusCode(500).json({
                message: "document not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Document Updated Successfully",
            varient : "error"
          })
     

    } catch(error){
        console.log(error)
        res.statusCode(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    
})

//@type Delete
//@route / api/v1/accounts/document/adddocument/deleteOne/id:
//@des Delete document
//@access public

router.delete("/deleteOne/:id",async(req,res) => {
    })

    
async function getDocumentObj(req,type){

    let newDocument = {}
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

