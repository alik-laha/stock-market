import express from "express";
const router = express.Router();
import { Detail, HomeData, Searchdata } from "../Controler/Controller.js";
router.post("/", HomeData);
router.post("/search", Searchdata);
router.post("/detail", Detail);
export default router;
