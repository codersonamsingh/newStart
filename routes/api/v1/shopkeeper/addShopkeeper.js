const express = require("express");
constShopkeeper = require("../../../../../Models/Accounts/Shopkeeper");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/ShopkeeperValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/school/addShopkeeper
//@des crete Newschool
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const schoolObj = await getShopkeeperObj(req,"create")
console.log(schoolObj)
     await new Shopkeeper(schoolObj)
      .save();
      
      res.status(201).json({
        message: "Shopkeeper Added",
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
//@routes/api/v1/accounts/school/addShopkeeper/id:
//@des crete Updateschool
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constschoolObj = await getShopkeeperObj(req,"update")

        constschool = awaitShopkeeper.findOneAndUpdate(
            {id:req.params.id},
            {$set:ShopkeeperObj},
            {new:true}
        )
        if(!school){
            res.status(500).json({
                message: "school not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Shopkeeper Updated Successfully",
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
        constschool = awaitShopkeeper.findIdAndRemove(req.params.id);
        if(!school){
            res.status(500).json({
                message: "school not found",
                varient : "error"
              })
        }
        res.status(500).json({
            message: "Shopkeeper Deleted Successfully",
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
async function getShopkeeperObj(req,type){
    let newShopkeeper = {}
    if(req.body.schoolName) {
        newShopkeeper.schoolName = req.body.schoolName
    }
    if(req.body.studentName) {
        newShopkeeper.studentName = req.body.studentName
    }
    if(req.body.noOfStudent) {
        newShopkeeper.noOfStudent = req.body.noOfStudent
    }
     if(req.body.studentDocument) {
        newShopkeeper.studentDocument = req.body.studentDocument
    }
     if(req.body.noOfTeacher) {
        newShopkeeper.noOfTeacher = req.body.noOfTeacher
    }
     if(req.body.phoneNumber) {
        newShopkeeper.phoneNumber = req.body. phoneNumber
    }
    if(req.body.comingDate) {
        newShopkeeper.comingDate = req.body.comingDate
    }

    return newShopkeeper
}
    
module.exports = router;

