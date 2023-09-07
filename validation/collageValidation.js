const validateOnCreate = async(req,res,next) => {

    if(!req.body?.receiptNumber){

       return res.status(400).json({
            message: "receiptNumber Required",
            varient: "error"
        })
    }
    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}