import express, { ppliction} from "express";

import dotenv from "dotenv";

dotenv.config();

import { environmentVribles } from "./Config/environmentVribles";
import { ppConfig } from "./pp";
import { DBconnect } from "./Config/DB";

const port = environmentVribles.PORT;

const pp: ppliction = express();

ppConfig(pp);
DBconnect();

pp.listen(port, () =>{
    console.log("");
    console.log("Server successfully creted nd listening on port", port)
})