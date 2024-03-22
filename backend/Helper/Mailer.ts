import nodemailer from "nodemailer"
import {email} from "../Type/GlobalType.js";


export const sendEmail=async({email,emailType,id}:email)=>{
    console.log(email)
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "8c76404aa3baf2",
            pass: "b176ee2df5d40a"
        }
    });
    const Mail={
        from: 'aliklaha0@gmail.com',
            to: email,
        subject: emailType==="Varify" ? "Varify Your Email" : "Forgot Password",
        text: "Hello world?",
        html: "<h1>Hello world?</h1>",
    }

   await transport.sendMail(Mail)

}




