import nodemailer from "nodemailer"
import {email} from "../Type/GlobalType.js";
import { v4 as uuidv4 } from 'uuid';
import userModel from "../model/userModel.js";


export const sendEmail=async({email,id}:email)=>{

    const hash=uuidv4();

    await userModel.findByIdAndUpdate(id,{verifyToken:hash,verifyTokenExpiry:Date.now()+3600000})

    console.log(email)
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure:false,
        auth: {
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
     const Mail={
        from:{
            name:"Alik laha",
            address:process.env.EMAIL_USER!
        },
            to: email,
        subject: "Verify Your Email",
        text: "Hello world?",
        html:"<h1>Verify Your Email</h1>" +
            "",
    }

   return await transport.sendMail(Mail)

}




