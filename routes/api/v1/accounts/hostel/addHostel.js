const express = require("express");
const Hostel = require("../../../../../Models/Accounts/Hostel");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/hostelValidation")

//CRUD = crete Read Update Delete

//@type POST
//@routes/api/v1/accounts/hostel/addHostel
//@des crete New hostel
//@access public

router.post("/",validateOnCreate, async(req,res) =>{

    try{
        const hostelObj = await getHostelObj(req,"create")

     await new Hostel(hostelObj)
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
//@routes/api/v1/accounts/hostel/addHostel/id:
//@des crete Update hostel
//@access public
router.post("/:id",async (req,res) => {
    
    try{
        const hostelObj = await getHostelObj(req,"update")

        const hostel = await Hostel.findOneAndUpdate(
            {id:req.params.id},
            {$set: hostelObj},
            {new:true}
        )
        if(!hostel){
            res.statusCode(500).json({
                message: "hostel not found",
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
//@route / api/v1/accounts/hostel/addhostel/deleteOne/id:
//@des Delete hostel
//@access public

router.delete("/deleteOne/:id",async(req,res) => {

    try{
        const hostel = await Hostel.findIdAndRemove(req.params.id);
        if(!hostel){
            res.statusCode(500).json({
                message: "hostel not found",
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
    if(req.body.name) {
         hostel.name = req.body.name
    }
    if(req.body.name) {
         hostel.name = req.body.name
    }
    if(req.body.date) {
         hostel.date = req.body.date
    }

    return newHostel
}
    
module.exports = router;

