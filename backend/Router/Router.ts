import express from "express"
const router = express.Router()
import {ChartData, Detail, HomeData, Login, Searchdata, SignUp, VerifyMail} from "../Controler/Controller.js"
import {verifyToken} from "../config/auth.js";


router.post("/",HomeData)

router.post("/search",verifyToken,Searchdata)

router.post("/detail/:id",Detail)

router.post("/candle",ChartData)

router.post("/signup",SignUp)

router.post("/login",Login)

router.get("/verify/user",VerifyMail)

export default router


