import express, { Application} from "express";

import dotenv from "dotenv";

dotenv.config();

import { environmentVariables } from "./Config/environmentVariables";

const port = environmentVariables.PORT;

const app: Application = express();

app.listen(port, () =>{
    console.log("");
    console.log("Server successfully created and listening on port", port)
})