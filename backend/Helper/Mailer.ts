import nodemailer from "nodemailer"
import {email} from "../Type/GlobalType.js";


export const sendEmail=async({email,emailType,id}:email)=>{
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
        subject: emailType==="Varify" ? "Varify Your Email" : "Forgot Password",
        text: "Hello world?",
        html: "<h1>Hello world?</h1>",
    }

   await transport.sendMail(Mail)

}




