import express, { Application} from "express";

import dotenv from "dotenv";

dotenv.config();

import { environmentVariables } from "./Config/environmentVariables";
import { AppConfig } from "./app";

const port = environmentVariables.PORT;

const app: Application = express();

AppConfig(app);

app.listen(port, () =>{
    console.log("");
    console.log("Server successfully created and listening on port", port)
})