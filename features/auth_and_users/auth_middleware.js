const env = require("dotenv").configure ; 
const jwt = require("jsonwebtoken")


const jwt_auth =(req,res,next) =>{

    const header = req.headers.authorization ;
    if (!header ){
        return res.status(402).send("No token");
    }
    const token =header.split(" ")[1];
    const user =
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN
    );
    req.user =user ; 
    next ();

}
module.exports = {jwt_auth}