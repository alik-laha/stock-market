import express from "express"
const router = express.Router()
import {ChartData, Detail, HomeData, Login, Searchdata, SignUp} from "../Controler/Controller.js"
import {verifyToken} from "../config/auth.js";


router.post("/",HomeData)

router.post("/search",verifyToken,Searchdata)

router.post("/detail",Detail)

router.post("/candle",ChartData)

router.post("/signup",SignUp)

router.post("/login",Login)
export default router


