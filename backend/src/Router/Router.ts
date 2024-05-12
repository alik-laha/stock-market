import express from "express"
const router = express.Router()
import { ChartData, Detail, HomeData, Searchdata, STOCKS_IN_NEWS, TOP_GAINERS, TOP_LOSERS } from "../Controler/Controller"


router.post("/", HomeData)

router.post("/top-gainer", TOP_GAINERS)

router.post("/top-loser", TOP_LOSERS)

router.post("/news", STOCKS_IN_NEWS)

router.post("/search", Searchdata)

router.get("/detail/:id", Detail)

router.post("/candle", ChartData)

export default router


