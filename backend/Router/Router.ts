import express from "express"
const router = express.Router()
import {ChartData, Detail, HomeData, Searchdata, SendEmailToMe} from "../Controler/Controller.js"


router.post("/",HomeData)

router.post("/search",Searchdata)

router.post("/detail",Detail)

router.post("/candle",ChartData)

router.get("/email",SendEmailToMe)
export default router


