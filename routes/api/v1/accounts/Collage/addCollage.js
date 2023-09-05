const express = require("express");
const Collage = require("../../../../../Models/Accounts/Collage");
const router = express.Router();

const {vali workerIdOnCreate, vali workerIdOnUp workerId} = require("../../../../../validation/account/collageValidation")

//CRUD = crete Read Up workerId Delete

//@type POST
//@routes/api/v1/accounts/collage/addCollage
//@des crete Newcollage
//@access public

router.post("/",vali workerIdOnCreate, async(req,res) =>{

    try{
        constcollageObj = await getCollageObj(req,"create")

     await new Collage(collageObj)
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
//@routes/api/v1/accounts/collage/addCollage/id:
//@des crete Up workerIdcollage
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcollageObj = await getCollageObj(req,"up workerId")

        constcollage = await Collage.findOneAndUp workerId(
            {id:req.params.id},
            {$set:collageObj},
            {new:true}
        )
        if(!collage){
            res.statusCode(500).json({
                message: "collage not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Collage Up workerIdd Successfully",
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
//@route / api/v1/accounts/collage/addcollage/deleteOne/id:
//@des Deletecollage
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constcollage = await Collage.findIdAndRemove(req.params.id);
        if(!collage){
            res.statusCode(500).json({
                message: "collage not found",
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
    if(req.body.officeName) {
        newCollage.officeName = req.body.officeName
    }
    if(req.body.workerName) {
        newCollage.workerName = req.body.workerName
    }
    if(req.body.workerId) {
        newCollage.workerId = req.body. workerId
    }
    if(req.body.workerId) {
        newCollage.workerId = req.body. workerId
    }
    if(req.body.workerId) {
        newCollage.workerId = req.body. workerId
    }
    if(req.body.workerId) {
        newCollage.workerId = req.body. workerId
    }
    if(req.body.workerId) {
        newCollage.workerId = req.body. workerId
    }





    return newCollage
}
    
module.exports = router;

