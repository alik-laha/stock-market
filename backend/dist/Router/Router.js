import express from "express";
const router = express.Router();
import { HomeData, Searchdata } from "../Controler/Controller.js";
router.post("/search", Searchdata);
router.post("/", HomeData);
export default router;
