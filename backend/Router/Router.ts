import express from "express"
const router = express.Router()
import {ChartData, Detail, HomeData, Login, Searchdata, SignUp} from "../Controler/Controller.js"


router.post("/",HomeData)

router.post("/search",Searchdata)

router.post("/detail",Detail)

router.post("/candle",ChartData)

router.post("/signup",SignUp)

router.post("/login",Login)
export default router


