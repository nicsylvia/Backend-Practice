import express, { Application } from "express";

import dotenv from "dotenv";

import { environmentVariables } from "./Config/environmentVariables";
import { AppConfig } from "./app";

dotenv.config();

const port = environmentVariables.PORT;

const app: Application = express();

AppConfig(app);

app.listen(port, () =>{
    console.log("")
    console.log("Successfully created server on port", port)
})