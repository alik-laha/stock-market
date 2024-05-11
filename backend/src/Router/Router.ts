import express from "express"
const router = express.Router()
import { ChartData, Detail, HomeData, Searchdata } from "../Controler/Controller"


router.post("/", HomeData)

router.post("/search", Searchdata)

router.get("/detail/:id", Detail)

router.post("/candle", ChartData)

export default router


