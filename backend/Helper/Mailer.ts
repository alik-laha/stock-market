import nodemailer from "nodemailer"
import {email} from "../Type/GlobalType.js";


export const sendEmail=async({email,emailType,id}:email)=>{

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
    });

    const Mail={
        from: 'aliklaha@alik.com',
            to: email,
        subject: emailType==="Varify" ? "Varify Your Email" : "Forgot Password",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    }

    const info = await transporter.sendMail(Mail)
}