const express = require("express");
constSchool = require("../../../../../Models/Accounts/School");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/SchoolValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/school/addSchool
//@des crete Newschool
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const schoolObj = await getSchoolObj(req,"create")
console.log(schoolObj)
     await new School(schoolObj)
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
//@routes/api/v1/accounts/school/addSchool/id:
//@des crete Updateschool
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constschoolObj = await getSchoolObj(req,"update")

        constschool = awaitSchool.findOneAndUpdate(
            {id:req.params.id},
            {$set:schoolObj},
            {new:true}
        )
        if(!school){
            res.status(500).json({
                message: "school not found",
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
//@route / api/v1/accounts//addschool/deleteOne/id:
//@des Deleteschool
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constschool = awaitSchool.findIdAndRemove(req.params.id);
        if(!school){
            res.status(500).json({
                message: "school not found",
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
    if(req.body.schoolName) {
        newSchool.schoolName = req.body.schoolName
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

