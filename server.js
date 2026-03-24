 import express from "express";
 import cors from "cors";
 import 'dotenv/config';
 import cookieParser from "cookie-parser";
 import connectDB from "./config/db.js";
import authRouter from "./Routes/UserRoute.js";


 const app=express();
 const port=process.env.PORT||8080;
 connectDB();

 app.use(express.json());
 app.use(cookieParser());
 app.use(cors({
    origin:"https://authentication26.vercel.app",
    credentials:true}));

 app.use("/api/authentication",authRouter);


 app.listen(port,()=>console.log(`Server starts on Port:${port}`));