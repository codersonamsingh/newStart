const express = require("express");
const Collage = require("../../../../../Models/Accounts/Collage");
const router = express.Router();

const {vali  workerAddressOnCreate, vali  workerAddressOnUp  workerAddress} = require("../../../../../validation/account/collageValidation")

//CRUD = crete Read Up  workerAddress Delete

//@type POST
//@routes/api/v1/accounts/collage/addCollage
//@des crete Newcollage
//@access public

router.post("/",vali  workerAddressOnCreate, async(req,res) =>{

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
//@des crete Up  workerAddresscollage
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constcollageObj = await getCollageObj(req,"up  workerAddress")

        constcollage = await Collage.findOneAndUp  workerAddress(
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
            message: "Collage Up  workerAddressd Successfully",
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
    if(req.body.workerAddress) {
        newCollage.workerAddress = req.body.workerAddress
    }
    if(req.body.workerAddress) {
        newCollage. workerAddress = req.body.  workerAddress
    }
    if(req.body. workerAddress) {
        newCollage. workerAddress = req.body.  workerAddress
    }
    if(req.body. workerAddress) {
        newCollage. workerAddress = req.body.  workerAddress
    }
    if(req.body. workerAddress) {
        newCollage. workerAddress = req.body.  workerAddress
    }





    return newCollage
}
    
module.exports = router;

