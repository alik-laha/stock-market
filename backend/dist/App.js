import express from "express";
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
import Router from "./Router/Router.js";
app.use("/api", Router);
export default app;
