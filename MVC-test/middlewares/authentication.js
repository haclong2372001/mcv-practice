const readFile = require("../utils/readFile")
const jwt = require("jsonwebtoken")
const authentication = (req,res,next) => {
    console.log(req.headers)
    const bearerToken = req.headers.authorization

    if(!bearerToken){
        return res.status(401).json({message :"chua dang nhap"})
    }
    const token = bearerToken?.split(" ")[1]
    const verify_token = jwt.verify(token,"01283701824019")

    if (!verify_token){
        return res.status(401).json({message :"Ban Chua dang nhap"})
    }
    const userId = verify_token.userId
    const result = readFile("user.json") 
    const checkUser = result.find(item => item.userId == userId)

    if(checkUser){
        next()
    }
    return res.status(401).json({message :'Ban chua dang nhap'})
}
module.exports = authentication