const jwt = require("jsonwebtoken");
const User = require("../models/users");

module.exports=auth=async(req,res,next)=>{
    try {
        console.log("REQ",req);
        const token = req.cookies?.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){ throw new Error("User not found!")}
        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();

    } catch (error) {
        console.log("Auth Error : ",error.message);
        res.status(401).send({error:"Unauthorized token provide!"});
    }
}