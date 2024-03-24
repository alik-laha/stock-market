import express from "express";
const app = express();
import cors from "cors";
import Router from "./Router/Router.js"

app.use(cors());
app.use(express.json());



app.use("/api",Router)
export default app
