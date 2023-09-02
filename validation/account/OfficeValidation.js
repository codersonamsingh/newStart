const validateOnCreate = async(req,res,next) => {

    if(!req.body?.OfficeName){

       return res.status(400).json({
            message: "OfficeName Required",
            varient: "error"
        })
    }

    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}