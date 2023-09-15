const express = require("express");
constShopkeeper = require("../../../../../Models/Accounts/Shopkeeper");
const router = express.Router();
const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/ShopkeeperValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/shopkeeper/addShopkeeper
//@des crete Newshopkeeper
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const shopkeeperObj = await getShopkeeperObj(req,"create")
console.log(shopkeeperObj)
     await new Shopkeeper(shopkeeperObj)
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
//@routes/api/v1/accounts/shopkeeper/addShopkeeper/id:
//@des crete Updateshopkeeper
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        constshopkeeperObj = await getShopkeeperObj(req,"update")

        constshopkeeper = awaitShopkeeper.findOneAndUpdate(
            {id:req.params.id},
            {$set:ShopkeeperObj},
            {new:true}
        )
        if(!shopkeeper){
            res.status(500).json({
                message: "shopkeeper not found",
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
//@route / api/v1/accounts//addshopkeeper/deleteOne/id:
//@des Deleteshopkeeper
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        constshopkeeper = awaitShopkeeper.findIdAndRemove(req.params.id);
        if(!shopkeeper){
            res.status(500).json({
                message: "shopkeeper not found",
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
    if(req.body.shopkeeperName) {
        newShopkeeper.shopkeeperName = req.body.shopkeeperName
    }
    if(req.body.materialName) {
        newShopkeeper.materialName = req.body.materialName
    }
    if(req.body.noOfItems) {
        newShopkeeper.noOfItems = req.body.noOfItems
    }
     if(req.body.itemRate) {
        newShopkeeper.itemRate = req.body.itemRate
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

