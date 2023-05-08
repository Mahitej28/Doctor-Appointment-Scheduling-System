const JWT = require('jsonwebtoken')

module.exports = (req, res, next) => {

    try {

            //get token which is the header section, it follows Bearer naming format

        const token = req.headers['authorization'].split(" ")[1]

        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {

            if(err){
                return res.status(200).send({
                    message: "Auth Failed",
                    success: false
                })
            }
            else{
                req.body.userId = decode.id
                next()
            }
            
        })
        
    } catch (error) {

        console.log(error)   //invalid authentication
        res.status(401).send({
            message:"Auth Failed",
            success: false
        })
        
    }
}