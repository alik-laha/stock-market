import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {Verify} from "../Type/GlobalType.js";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const data: { auth?: string } = req.headers as { auth?: string };
        const localStorage = require('localStorage');
        const token: string = data.auth || '';
        if (!token) {
            return res.status(400).json({msg: "No Token found Please logout and re-Login"})
        } else {
            const decoded:Verify = Object(jwt.verify(token, process.env.SECURITY_KEY!));

            if(Date.now()<=decoded.exp){
               return  next()
            }else{
                localStorage.clear();
                return res.status(400).json({msg: "Your token has been expired"})
            }
            console.log(decoded)
        }
        next();
    }
    catch(err){
        console.log(err)
    }
}

// export function verifyToken(req:Request, res:Response, next) {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ error: 'Access denied No Token is Here' });
//     try {
//         const decoded = jwt.verify(token, process.env.SECURITY_KEY!);
//         req.userId = decoded.userId;
//         next();
//     } catch (error) {
//         res.status(401).json({ error: 'Invalid token' });
//     }
// };

