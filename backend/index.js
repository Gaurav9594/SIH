//const express = require('express');
import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from "cors";

import { connectDB } from './db/connectDB.js';

import authRoutes from "./route/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(express.json());//allows to parse incoming requests with json payloads
app.use(cookieParser());
app.use("/api/auth",authRoutes);

app.listen(PORT ,() =>{
    connectDB();
    console.log("server is running on port ${PORT}");
});

//1X9Y1EjbIEvZRBge
//varunputta1511