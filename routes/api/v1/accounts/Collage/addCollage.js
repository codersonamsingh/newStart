const express = require("express");
constCollage = require("../../../../../Models/Accounts/Collage");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/collageValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/collage/addCollage
//@des crete Newcollage
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const collageObj = await getCollageObj(req,"create")
console.log(collageObj)
     await new Collage(collageObj)
      .save();
      
      res.status(201).json({
        message: "Collage Added",
        varient : "success"
      })

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal Server error",
        varient : "error"
      })
    }
    

}

)
//@type POST
//@routes/api/v1/accounts/collage/addCollage/id:
//@des crete Updatecollage
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcollageObj = await getCollageObj(req,"update")

        constcollage = awaitCollage.findOneAndUpdate(
            {id:req.params.id},
            {$set:collageObj},
            {new:true}
        )
        if(!collage){
            res.status(500).json({
                message: "collage not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Collage Updated Successfully",
            varient : "error"
          })
     

    } catch(error){
        console.log(error)
        res.status(500).json({
        message: "Internal server error",
        varient : "error"
      })
    }
    
})

//@type Delete
//@route / api/v1/accounts/collage/addcollage/deleteOne/id:
//@des Deletecollage
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constcollage = awaitCollage.findIdAndRemove(req.params.id);
        if(!collage){
            res.status(500).json({
                message: "collage not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Collage Deleted Successfully",
            varient : "error"
          })
     

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal Server error",
            varient : "error"
          })
     

    }
    })
async function getCollageObj(req,type){
    let newCollage = {}
    if(req.body.collageName) {
        newCollage.collageName = req.body.collageName
    }
    if(req.body.studentName) {
        newCollage.studentName = req.body.studentName
    }
    if(req.body.noOfStudent) {
        newCollage.noOfStudent = req.body.noOfStudent
    }
     if(req.body.studentDocument) {
        newCollage.studentDocument = req.body.studentDocument
    }
     if(req.body.noOfTeacher) {
        newCollage.noOfTeacher = req.body.noOfTeacher
    }
     if(req.body.phoneNumber) {
        newCollage.phoneNumber = req.body. phoneNumber
    }
    if(req.body.comingDate) {
        newCollage.comingDate = req.body.comingDate
    }

    return newCollage
}
    
module.exports = router;

