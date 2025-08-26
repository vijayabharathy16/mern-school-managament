const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{
//     const authHeader = req.headers.authorization;
//    try {
//     const token = req.header
//    } catch (error) {
    
//    }
//     if(!authHeader || !authHeader.startsWidth('Bearer ')){
//         return res.status(400).json({message:"Unauthorized"})
//     }
//     const token = authHeader.split(" ")[1];
//     try {
//         const decoded = jwt.verify(token,process.env.SECRET_KEY);
//         req.userId = decoded.userId;  
//         next();
//     } catch (error) {
//         res.status(401).json({message:"Token is invalid or expired"})
//     }

try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token){
    return res.status(401).json({message:"No token, authorization denied"});
    }
    const decoded = jwt.verify(token,process.env.SECRET_KEY);
    req.user = decoded;
    next();
} catch (error) {
    return res.status(401).json({message:"Token is not valid"})
}
}



module.exports = auth;