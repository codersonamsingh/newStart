const validateOnCreate = async(req,res,next) => {

    if(!req.body?.BankAccountName){

       return res.status(400).json({
            message: "BankAccountName Required",
            varient: "error"
        })
    }

    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}