

const actionRequest = (req, res, next) =>{
    if ( !["pierre", "feuille", "sciseaux"].includes(req.params.action)){
        return res.status(404).send("Incorrect action")
    }
    return next();
}

module.exports = actionRequest


