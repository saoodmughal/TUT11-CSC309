require("dotenv").config
import express from "express";
import routes from "./routes.js";

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));
app.use(express.json());

export default app;