const express = require("express");
const Hostel = require("../../../../../Models/Accounts/Hostel");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/newHostelValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/newHostel/addHostel
//@des crete New newHostel
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const newHostelObj = await getHostelObj(req,"create")

     await new Hostel(newHostelObj)
      .save();
      
      res.statusCode(201).json({
        message: "Hostel Added",
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
//@routes/api/v1/accounts/newHostel/addHostel/id:
//@des crete Update newHostel
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        const newHostelObj = await getHostelObj(req,"update")

        const newHostel = await Hostel.findOneAndUpdate(
            {id:req.params.id},
            {$set: newHostelObj},
            {new:true}
        )
        if(!newHostel){
            res.statusCode(500).json({
                message: "newHostel not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Hostel Updated Successfully",
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
//@route / api/v1/accounts/newHostel/addnewHostel/deleteOne/id:
//@des Delete newHostel
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        const newHostel = await Hostel.findIdAndRemove(req.params.id);
        if(!newHostel){
            res.statusCode(500).json({
                message: "newHostel not found",
                varient : "error"
              })
        }
        res.statusCode(500).json({
            message: "Hostel Deleted Successfully",
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
    
    
async function getHostelObj(req,type){

    let newHostel = {}
    if(req.body. newHostelName) {
        newHostel.hostelName = req.body.hostelName
    }
    if(req.body.fatherName) {
         newHostel.fatherName = req.body.fatherName
    }
    if(req.body.address) {
         newHostel.address = req.body.address
    }

    if(req.body.studentName) {
        newHostel.date = req.body.date
   }
 if(req.body.studentName) {
        newHostel.date = req.body.date
   }

    return newHostel
}
    
module.exports = router;

