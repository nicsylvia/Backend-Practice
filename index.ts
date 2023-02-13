import express, { Application} from "express";

import dotenv from "dotenv";

dotenv.config();

import { environmentVariables } from "./Config/environmentVariables"
import { AppConfig } from "./app";
import { DBconnect } from "./Config/DB";

const port = environmentVariables.PORT;

const app: Application = express();

AppConfig(app);
DBconnect();

app.listen(port, () =>{
    console.log("");
    console.log("Server successfully creted nd listening on port", port)
})