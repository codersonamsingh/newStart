const validateOnCreate = async(req,res,next) => {

    if(!req.body?.collageName){

       return res.status(400).json({
            message: " Required",
            varient: "error"
        })
    }
    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}