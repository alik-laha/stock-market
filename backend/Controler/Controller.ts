import { Request, Response } from 'express';
import { sendEmail} from "../Helper/Mailer.js";
import bcrypt from "bcryptjs"
import userModel from "../model/userModel.js";
import {login, signup} from "../Type/GlobalType.js";
import jwt from "jsonwebtoken"

export const Searchdata=(req:Request,res:Response)=> {
    try {
        const {searchData}=req.body
        if (searchData) {
            const encodedInput = encodeURIComponent(searchData);
            fetch(`https://groww.in/v1/api/search/v1/entity?app=false&page=0&q=${encodedInput}&se`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({data: data})
                }).catch((err)=>{
                    return res.status(400).json({msg:"No data found"})
            })
        }
    }
    catch (err){
        console.log(err)
        return res.status(400).json({message:"Error Occured",err:err})
    }
}


export const HomeData=(req:Request,res:Response)=> {
    const {page,size,type}=req.body
    try {
        if(!type) {
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=TOP_GAINERS%2CTOP_LOSERS%2CSTOCKS_IN_NEWS%2CMOST_VALUABLE&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({data: data})
                }).catch((err) => {
                return res.status(400).json({msg: "No data found"})
            })
        }
        else{
            let search
            if(type==="gain"){
                search="TOP_GAINERS"
            }
            else if(type==="loser"){
                search="TOP_LOSERS"
            }
            else if(type==="news"){
                search="STOCKS_IN_NEWS"
            }
            else if(type==="value"){
                search="MOST_VALUABLE"
            }
            fetch(`https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=${search}&page=${page}&size=${size}`)
                .then((res) => res.json())
                .then((data) => {
                    return res.status(200).json({data: data})
                }).catch((err) => {
                return res.status(400).json({msg: "No data found"})
            })
        }
    } catch (err) {
        return res.status(400).json({msg: "no data found"})
    }
}

export const Detail=(req:Request,res:Response)=>{
    try{
        const{searchId}=req.body
        fetch(`https://groww.in/v1/api/stocks_data/v1/company/search_id/${searchId}?page=0&size=50`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({data: data})
            }).catch((err) => {
            return res.status(400).json({msg: "No data found"})
        })
    }catch(err){
        return res.status(200).json({msg:"Internal server Error"})
    }
}

export const ChartData=(req:Request,res:Response)=>{
    try{
        const{time,gap,CompanyName}=req.body
        let interval
        if(time==="weekly"){
          interval="intervalInMinutes"
        }
        else if(time==="1y"){
            interval="intervalInDays"
        }
        else if(time==="daily"){
            interval="intervalInMinutes"
        }
        else if(time==="5y"){
            interval="intervalInDays"
        }
        else if(time==="3y"){
            interval="intervalInDays"
        }
        else if(time==="all"){
            interval="noOfCandles"
        }
        fetch(`https://groww.in/v1/api/charting_service/v2/chart/exchange/NSE/segment/CASH/${CompanyName}/${time}?${interval}=${gap}&minimal=true`)
            .then((res) => res.json())
            .then((data) => {
                return res.status(200).json({data: data})
            }).catch((err) => {
            return res.status(400).json({msg: "No data found"})
        })
    }catch(err){
        console.log(err)
    }
}


//User signup
export const SignUp= async (req:Request,res:Response)=>{
try{
    const {name,email,phoneNo,password}:signup = req.body

   const old=await userModel.findOne({email})

    if(old){
        return res.status(400).json({msg:"User Already Exist in this email address"})
    }
    else {
        const numSaltRounds = 10;
        const hash=await bcrypt.hash(password, numSaltRounds);
        const User=await userModel.create({
            name:name,
            phoneNo:phoneNo,
            email:email,
            password:hash
        })
        const EmailSend= await sendEmail({email:email,id:User._id.toString()})
        const token = jwt.sign({
            id: User._id,
            email:User.email
        }, process.env.SECURITY_KEY!, {expiresIn: process.env.EXPIRE_TIME});

            res.cookie("token",token,{httpOnly:true,secure:true})
            res.cookie("verify",EmailSend,{httpOnly:true,secure:true})

        return res.status(200).json({msg:"you are signed in please Verify your email"})
    }


}catch(err){
    return res.status(400).json({msg:"err while signing up",err})
}
}


//User login
export const Login=async (req:Request,res:Response)=>{
    try{

        const{email,password}:login=req.body

        const User=await userModel.findOne({email})

        if(!User){
            return res.status(400).json({msg:"This email is not Registered create a account"})
        }
        else{
            const pass= await bcrypt.compare(password,User.password)

           if(pass){
               const token = jwt.sign({
                   id: User._id,
                   email:User.email
               }, process.env.SECURITY_KEY!, {expiresIn: process.env.EXPIRE_TIME});

               userModel.findByIdAndUpdate(User._id,{verifyTokenExpiry:Date.now()+360000})

               return res.status(200).cookie("token",token,{httpOnly:true}).json({msg:"You are logged in"})
           }
           else{

               return res.status(400).json({msg:"Please Check The Password"})
           }
        }

    }catch(err){
        console.log(err)
    }
}


//Mail verify
export const VerifyMail=async(req:Request,res:Response)=>{
    try {
        const verify: Record<string, any> = req.cookies.verify
        if (verify) {
            const User: any = await userModel.findOne({verifyToken: verify})

            if (!User) {
                return res.status(500).json({msg: "verification is failed"})
            } else {
                if (User.verifyTokenExpiry >= Date.now()) {
                    User.isVerified = true
                    User.verifyToken = ""
                    User.verifyTokenExpiry=""
                    await User.save()
                    res.clearCookie("verify");
                    return res.status(200).json({msg: "verification is confirm"})
                } else {
                    return res.status(500).json({msg: "verification is not possible plz login again"})
                }

            }
        }
        else{
            return res.status(200).json({msg: "you are already verified"})
        }
    }
    catch (err){
        console.log(err)
    }

}

