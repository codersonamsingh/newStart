const express = require("express");
constSchool = require("../../../../../Models/Accounts/School");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/collageValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/collage/addSchool
//@des crete Newcollage
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const collageObj = await getSchoolObj(req,"create")
console.log(collageObj)
     await new School(collageObj)
      .save();
      
      res.status(201).json({
        message: "School Added",
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
//@routes/api/v1/accounts/collage/addSchool/id:
//@des crete Updatecollage
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcollageObj = await getSchoolObj(req,"update")

        constcollage = awaitSchool.findOneAndUpdate(
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
            message: "School Updated Successfully",
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
        constcollage = awaitSchool.findIdAndRemove(req.params.id);
        if(!collage){
            res.status(500).json({
                message: "collage not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "School Deleted Successfully",
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
async function getSchoolObj(req,type){
    let newSchool = {}
    if(req.body.collageName) {
        newSchool.collageName = req.body.collageName
    }
    if(req.body.studentName) {
        newSchool.studentName = req.body.studentName
    }
    if(req.body.noOfStudent) {
        newSchool.noOfStudent = req.body.noOfStudent
    }
     if(req.body.studentDocument) {
        newSchool.studentDocument = req.body.studentDocument
    }
     if(req.body.noOfTeacher) {
        newSchool.noOfTeacher = req.body.noOfTeacher
    }
     if(req.body.phoneNumber) {
        newSchool.phoneNumber = req.body. phoneNumber
    }
    if(req.body.comingDate) {
        newSchool.comingDate = req.body.comingDate
    }

    return newSchool
}
    
module.exports = router;

