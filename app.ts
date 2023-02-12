import express, { Request, Response, Application } from "express";
import cors from "cors";
import morgan from "morgan";

export const AppConfig = (app: Application) =>{
    // Configuring middlewares:
    app.use(express.json())
    app.use(cors());
    app.use(morgan("dev"));

    // configuring the routes for my application:
}