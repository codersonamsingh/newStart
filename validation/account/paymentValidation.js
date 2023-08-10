const validateOnCreate = async(req,res,next) => {

    if(!req.body?.amount){

        res.status(400).json({
            message: "Amount Required",
            varient: "error"
        })
    }

    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}