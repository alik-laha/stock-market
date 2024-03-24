// import jwt from "jsonwebtoken"
// import { Request, Response, NextFunction } from 'express';
// const Varify=(req:Request,res:Response,next:NextFunction) :Response=>{
//     let token =req.headers['authorization'];
//     if(token){
//         token = token.split(' ')[1];
//         const decoded=jwt.verify(token,process.env.TOKEN_KEY,(error,sucess)=>{
//             if(error){
//                 return res.status(401).send("invalid token")
//             }else{
//                 return next()
//             }
//         });
//
//         req.user=decoded
//     }
//     else{
//         res.status(403).send("please add token")
//     }
//
// }
// module.exports=Varify;