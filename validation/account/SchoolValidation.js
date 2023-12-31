const validateOnCreate = async(req,res,next) => {

    if(!req.body?.schoolName){

       return res.status(400).json({
            message: "schoolName Required",
            varient: "error"
        })
    }
    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}