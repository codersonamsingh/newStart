const validateOnCreate = async(req,res,next) => {

    if(!req.body?.documentNumber){

       return res.status(400).json({
            message: "documentNumber",
            varient: "error"
        })
    }

    next();
}

const validateOnUpdate = async(req,res,next) => {

    next();
}

module.exports = {validateOnCreate, validateOnUpdate}