const express = require("express");
const Collage = require("../../../../../Models/Accounts/Collage");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/collageValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/collage/addCollage
//@des crete Newcollage
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        constcollageObj = await getCollageObj(req,"create")

     await new Collage(documentObj)
      .save();
      
      res.statusCode(201).json({
        message: "Collage Added",
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
//@routes/api/v1/accounts/document/addCollage/id:
//@des crete Updatecollage
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcollageObj = await getCollageObj(req,"update")

        constcollage = await Collage.findOneAndUpdate(
            {id:req.params.id},
            {$set:collageObj},
            {new:true}
        )
        if(!document){
            res.statusCode(500).json({
                message: "document not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Collage Updated Successfully",
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
//@des Deletecollage
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constcollage = await Collage.findIdAndRemove(req.params.id);
        if(!document){
            res.statusCode(500).json({
                message: "document not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Collage Deleted Successfully",
            varient : "error"
          })
     

    }
    catch(error){
        console.log(error)
        res.statusCode(500).json({
            message: "Internal Server error",
            varient : "error"
          })
     

    }
    })
    
    
async function getCollageObj(req,type){

    let newCollage = {}
    if(req.body.number) {
        collage.number = req.body.number
    }
    if(req.body.name) {
        collage.name = req.body.name
    }
    if(req.body.date) {
        collage.date = req.body.date
    }

    return newCollage
}
    
module.exports = router;

