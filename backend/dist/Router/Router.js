import express from "express";
const router = express.Router();
import { Searchdata } from "../Controler/Controller.js";
router.post("/", Searchdata);
export default router;
