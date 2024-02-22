var jwt = require("jsonwebtoken");
const JWT_token = 'securekey35*3%^';
 const fetchuser =
 ( req , res,next )=>{
    //get the user from jwt tokken add id to req obj
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please auth using valid token"})
    }
    try{
        const data = jwt.verify(token,JWT_token);
    req.user =data.user;
    next()

    } catch(error){
        res.status(401).send({error:"please auth using valid error"})


    }
    



 }
module.exports = fetchuser;