import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

export const AppConfig = ( app: Application )=>{
    // Configuring Middlewares for my application:
    app.use(express.json());
    app.use(cors());
    app.use(morgan("dev"));

    // Routes for my application:
}