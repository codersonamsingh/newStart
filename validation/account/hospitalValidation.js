const validateOnCreate = async(req,res,next) => {

    if(!req.body?.hospitalName){

       return res.status(400).json({
            message: "hospitalName Required",
            varient: "error"
        })
    }

    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}