const validateOnCreate = async(req,res,next) => {

    if(!req.body?.officeName){

       return res.status(400).json({
            message: "officeName Required",
            varient: "error"
        })
    }
    next();
}
const validateOnUpdate = async(req,res,next) => {

    next();
}
module.exports = {validateOnCreate, validateOnUpdate}